#!/usr/bin/env node

/*
 * Confronta il testo estratto di una lezione con il vocabolario esistente.
 * Produce un rapporto per PDF, con corrispondenze e candidati lessicali.
 * Non modifica vocab.js, le schede o i progressi.
 */
const fs = require("node:fs");
const path = require("node:path");

const reviewStarted = process.hrtime.bigint();
const inputPath = process.argv[2];
if (!inputPath || process.argv.length !== 3) {
  console.error("Uso: node scripts/review-lesson.js FILE_TESTO_ESTRATTO.txt");
  process.exit(64);
}

if (!fs.existsSync(inputPath) || !fs.statSync(inputPath).isFile()) {
  console.error(`File non trovato: ${inputPath}`);
  process.exit(66);
}

global.window = {};
require(path.resolve(__dirname, "../vocab.js"));

const source = fs.readFileSync(inputPath, "utf8");
const vocabulary = window.VOCABULARY.filter((word) => word.category !== "Grammatica");

function normalize(value) {
  return String(value ?? "")
    .normalize("NFC")
    .toLocaleLowerCase("de-DE")
    .replace(/ß/g, "ss")
    .replace(/\+/g, " ")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function withoutArticle(value) {
  return normalize(value).replace(/^(?:(?:der|die|das|ein|eine|einen|einem|einer|eines)\s+)/, "");
}

function phrases(value) {
  return String(value ?? "")
    .split(/[;/]/)
    .map((part) => part.trim())
    .filter(Boolean);
}

function germanKey(value) {
  return normalize(String(value ?? "").replace(/\s*\+\s*(?:akk(?:usativ)?|dat(?:iv)?|gen(?:itiv)?|nom(?:inativ)?|acc(?:usative)?)\.?\s*$/i, ""));
}

function germanForms(word) {
  const forms = [word.de, word.plural, word.participle, word.participlePrompt];
  return [...new Set(forms.flatMap(phrases).flatMap((form) => {
    return [germanKey(form), withoutArticle(form)].filter(Boolean);
  }))];
}

function italianForms(word) {
  return [...new Set(phrases(word.it).map(normalize).filter(Boolean))];
}

const commonWords = new Set(["und", "oder", "aber", "nicht", "il", "lo", "la", "i", "gli", "le", "di", "a", "da", "in", "per", "con", "e"]);

function parseSourceRows(text) {
  let pdf = path.basename(inputPath);
  let page = 0;
  return text.split(/\r?\n/u).map((line, index) => {
    const pdfHeader = line.match(/^===== PDF: (.+) =====$/u);
    if (pdfHeader) {
      pdf = pdfHeader[1];
      page = 0;
    }
    const pageHeader = line.match(/^--- PAGINA (\d+) ---$/u);
    if (pageHeader) page = Number(pageHeader[1]);
    return { line, lineNumber: index + 1, pdf, page };
  });
}

function pairCandidates(line, row) {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith("=====") || trimmed.startsWith("---")) return [];

  const equals = trimmed.match(/^(.{1,100}?)\s*=\s*(.{1,140})$/u);
  if (equals) {
    const [left, right] = [equals[1], equals[2].split(/\s*[-–—]?\s*>\s*/u)[0]];
    if (!/[.!?;]/u.test(left) && !/[.!?;]/u.test(right)) {
      return [{ ...row, german: left.trim(), italian: right.trim() }];
    }
  }

  const arrow = trimmed.match(/^(.{1,100}?)\s*[-–—]?\s*>\s*(.{1,140})$/u);
  if (arrow && !/[.!?:;]/u.test(arrow[1]) && !/[.!?;]/u.test(arrow[2]) && !/^\p{Lu}[\p{Ll}]+\s+\p{Ll}/u.test(arrow[2].trim()) && !/^(?:der|die|das|ein|eine|den|dem|des)\s+/iu.test(arrow[2].trim())) {
    return [{ ...row, german: arrow[1].trim(), italian: arrow[2].trim() }];
  }

  const colon = trimmed.match(/^([^:]{2,100}):\s*(.{2,140})$/u);
  if (colon && /(?:^|\s)(?:il|lo|la|i|gli|le|l['’])/iu.test(colon[2])) {
    return [{ ...row, german: colon[1].trim(), italian: colon[2].trim() }];
  }
  return [];
}

const sourceRows = parseSourceRows(source);
const germanIndex = new Map();
const italianIndex = new Map();
const exactMatchIndex = new Map();
const knownGermanTokens = new Set();

function addMatchForm(form, word, language) {
  if (!form || form.length < 3 || commonWords.has(form)) return;
  const matches = exactMatchIndex.get(form) ?? [];
  matches.push({ word, language });
  exactMatchIndex.set(form, matches);
}

for (const word of vocabulary) {
  for (const form of germanForms(word)) {
    const matches = germanIndex.get(form) ?? [];
    matches.push(word);
    germanIndex.set(form, matches);
    addMatchForm(form, word, "DE");
    normalize(form).split(" ").forEach((token) => knownGermanTokens.add(token));
  }
  for (const form of italianForms(word)) {
    const matches = italianIndex.get(form) ?? [];
    matches.push(word);
    italianIndex.set(form, matches);
    addMatchForm(form, word, "IT");
  }
}

let maxMatchLength = 1;
for (const form of exactMatchIndex.keys()) maxMatchLength = Math.max(maxMatchLength, form.split(" ").length);

const germanMarkers = new Set([
  "aber", "ab", "als", "am", "an", "auf", "aus", "bei", "bin", "bis", "dass", "dem", "den", "der", "des",
  "die", "dies", "diese", "dieser", "dieses", "du", "durch", "ein", "eine", "einen", "einem", "einer", "es",
  "für", "hat", "haben", "heute", "ich", "im", "in", "ist", "kein", "keine", "mit", "nach", "nicht", "noch",
  "oder", "sein", "sich", "sie", "sind", "über", "um", "und", "von", "vor", "war", "wäre", "was", "welch",
  "welche", "welcher", "welches", "wer", "wie", "wir", "wird", "zu", "zum", "zur"
]);

const germanStopwords = new Set([
  ...germanMarkers, "alle", "als", "dann", "dass", "denn", "doch", "dort", "er", "erst", "folgende", "ganz", "heute",
  "hier", "immer", "jeder", "jede", "jedes", "jetzt", "man", "manche", "manchmal", "mehr", "mehrere", "morgen",
  "nach", "nur", "oft", "schon", "sehr", "so", "solche", "sondern", "trotz", "viel", "viele", "welche", "welcher",
  "dabei", "dann", "daran", "darauf", "darüber", "davon", "dazu", "doch", "eher", "etwa", "etwas", "fast", "gar",
  "gibt", "habe", "hatte", "kann", "können", "muss", "müssen", "musste", "mussten", "noch", "seine", "seinen", "seiner",
  "soll", "sollen", "sollte", "sollten", "wieder", "wird", "wurde", "wurden", "würde", "würden"
]);

function tokenIsKnown(token) {
  const normalized = normalize(token);
  if (knownGermanTokens.has(normalized)) return true;
  for (const ending of ["ern", "en", "er", "es", "em", "est", "sten", "ste", "e", "n", "s"]) {
    if (normalized.length > ending.length + 3 && knownGermanTokens.has(normalized.slice(0, -ending.length))) return true;
  }
  return false;
}

function isLikelyGermanLine(line) {
  const tokens = normalize(line).split(" ");
  const markers = tokens.filter((token) => germanMarkers.has(token)).length;
  return markers >= 2 || (markers >= 1 && /[äöüß]/iu.test(line));
}

const existingByPdf = new Map();
const candidateByPdf = new Map();
const pairs = sourceRows.flatMap((row) => pairCandidates(row.line, row));

function recordExisting(pdf, word, language) {
  const group = existingByPdf.get(pdf) ?? new Map();
  const hit = group.get(word.id) ?? { word, languages: new Set() };
  hit.languages.add(language);
  group.set(word.id, hit);
  existingByPdf.set(pdf, group);
}

function recordCandidate(pdf, token, row) {
  const key = normalize(token);
  if (!key || germanStopwords.has(key) || tokenIsKnown(key)) return;
  const group = candidateByPdf.get(pdf) ?? new Map();
  const hit = group.get(key) ?? { token, count: 0, examples: [] };
  hit.count += 1;
  const example = { page: row.page, lineNumber: row.lineNumber, line: row.line.trim().replace(/\s+/gu, " ") };
  if (hit.examples.length < 2 && !hit.examples.some((item) => item.line === example.line)) hit.examples.push(example);
  group.set(key, hit);
  candidateByPdf.set(pdf, group);
}

function recordPhraseCandidates(pdf, phrase, row) {
  for (const match of phrase.matchAll(/[\p{L}\p{M}-]{4,}/gu)) recordCandidate(pdf, match[0], row);
}

for (const row of sourceRows) {
  const line = row.line.trim();
  if (!line || line.startsWith("=====") || line.startsWith("---")) continue;

  const lineTokens = normalize(line).split(" ");
  for (let start = 0; start < lineTokens.length; start++) {
    let phrase = "";
    for (let end = start; end < Math.min(lineTokens.length, start + maxMatchLength); end++) {
      phrase = phrase ? `${phrase} ${lineTokens[end]}` : lineTokens[end];
      for (const hit of exactMatchIndex.get(phrase) ?? []) recordExisting(row.pdf, hit.word, hit.language);
    }
  }

  const rowPairs = pairCandidates(line, row);
  if (rowPairs.length) {
    for (const pair of rowPairs) recordPhraseCandidates(row.pdf, pair.german, row);
    continue;
  }

  if (!isLikelyGermanLine(line)) continue;
  for (const match of line.matchAll(/\p{Lu}[\p{L}\p{M}-]{2,}/gu)) {
    const token = match[0];
    const normalized = normalize(token);
    if (germanStopwords.has(normalized)) continue;
    recordCandidate(row.pdf, token, row);
  }
  for (const match of line.matchAll(/\(([^()]+)\)/gu)) {
    const headword = match[1].split(/[·,;/]/u)[0].trim();
    if (/^[\p{Ll}][\p{L}\p{M}-]{3,}$/u.test(headword)) recordCandidate(row.pdf, headword, row);
  }
}

const reportLines = [
  `Confronto: ${path.basename(inputPath)}`,
  `Schede lessicali nel mazzo: ${vocabulary.length}`,
  ""
];

reportLines.push("Termini già presenti, raggruppati per PDF:");
if (existingByPdf.size === 0) reportLines.push("  Nessuna corrispondenza letterale trovata.");
for (const [pdf, hits] of existingByPdf) {
  reportLines.push(`  ${pdf} (${hits.size})`);
  const sorted = [...hits.values()].sort((a, b) => a.word.category.localeCompare(b.word.category) || a.word.de.localeCompare(b.word.de));
  for (const { word, languages } of sorted) {
    reportLines.push(`    [${[...languages].join("+")}] [${word.id}] ${word.de} — ${word.it}`);
  }
}

reportLines.push("");
reportLines.push("Coppie bilingui da controllare:");
if (pairs.length === 0) reportLines.push("  Nessuna coppia riconosciuta automaticamente.");
for (const pair of pairs) {
  const germanMatches = germanIndex.get(germanKey(pair.german)) ?? germanIndex.get(withoutArticle(pair.german)) ?? [];
  const italianMatches = italianIndex.get(normalize(pair.italian)) ?? [];
  const status = germanMatches.length || italianMatches.length ? "possibile scheda già presente" : "nessuna corrispondenza esatta";
  reportLines.push(`  ${pair.pdf}, pagina ${pair.page}, riga ${pair.lineNumber}: ${pair.german} = ${pair.italian} (${status})`);
}

reportLines.push("");
reportLines.push("Parole tedesche candidate non trovate nel vocabolario (da verificare):");
if (candidateByPdf.size === 0) reportLines.push("  Nessun candidato rilevato automaticamente.");
for (const [pdf, candidates] of candidateByPdf) {
  reportLines.push(`  ${pdf}`);
  for (const candidate of [...candidates.values()].sort((a, b) => a.token.localeCompare(b.token, "de"))) {
    reportLines.push(`    ${candidate.token} (${candidate.count})`);
    for (const example of candidate.examples) {
      reportLines.push(`      pag. ${example.page || "?"}, riga ${example.lineNumber}: ${example.line}`);
    }
  }
}

reportLines.push("");
reportLines.push("I candidati possono includere flessioni, nomi propri o refusi OCR: vanno controllati prima di importarli.");
reportLines.push("Il rapporto non aggiunge schede e non modifica i progressi.");
reportLines.push(`Tempo confronto: ${(Number(process.hrtime.bigint() - reviewStarted) / 1e6).toFixed(1)} ms`);

const report = `${reportLines.join("\n")}\n`;
const reportPath = inputPath.replace(/\.txt$/iu, ".review.txt");
fs.writeFileSync(reportPath, report, "utf8");
process.stdout.write(report);
process.stdout.write(`Rapporto salvato: ${reportPath}\n`);
