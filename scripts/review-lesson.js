#!/usr/bin/env node

/*
 * Confronta il testo estratto di una lezione con il vocabolario esistente.
 * Legge vocab.js, ma non modifica alcun file dell'app o dato di apprendimento.
 */
const fs = require("node:fs");
const path = require("node:path");

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
const normalizedSource = ` ${normalize(source)} `;
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

function sourceContains(needle) {
  if (!needle) return false;
  // Evita corrispondenze poco utili con articoli e parole funzionali frequenti.
  if (["und", "oder", "aber", "nicht", "il", "lo", "la", "i", "gli", "le", "di", "a", "da", "in", "per", "con", "e"].includes(needle)) return false;
  return normalizedSource.includes(` ${needle} `);
}

const germanIndex = new Map();
const italianIndex = new Map();
const entriesFound = new Map();

function recordHit(word, language) {
  const hit = entriesFound.get(word.id) ?? { word, languages: new Set() };
  hit.languages.add(language);
  entriesFound.set(word.id, hit);
}

for (const word of vocabulary) {
  for (const form of germanForms(word)) {
    const matches = germanIndex.get(form) ?? [];
    matches.push(word);
    germanIndex.set(form, matches);
    if (sourceContains(form)) recordHit(word, "DE");
  }
  for (const form of italianForms(word)) {
    const matches = italianIndex.get(form) ?? [];
    matches.push(word);
    italianIndex.set(form, matches);
    if (sourceContains(form)) recordHit(word, "IT");
  }
}

function pairCandidates(line, lineNumber) {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith("=====") || trimmed.startsWith("---")) return [];

  // Le righe con "=" sono il formato più comune nelle liste bilingui.
  const equals = trimmed.match(/^(.{1,100}?)\s*=\s*(.{1,140})$/u);
  if (equals) {
    const [left, right] = [equals[1], equals[2].split(/\s*[-–—]?\s*>\s*/u)[0]];
    if (!/[.!?;]/u.test(left) && !/[.!?;]/u.test(right)) return [{ lineNumber, german: left.trim(), italian: right.trim() }];
  }

  // Supporta anche coppie scritte come "tedesco -> italiano".
  const arrow = trimmed.match(/^(.{1,100}?)\s*[-–—]?\s*>\s*(.{1,140})$/u);
  if (arrow && !/[.!?:;]/u.test(arrow[1]) && !/[.!?;]/u.test(arrow[2]) && !/^\p{Lu}[\p{Ll}]+\s+\p{Ll}/u.test(arrow[2].trim())) {
    return [{ lineNumber, german: arrow[1].trim(), italian: arrow[2].trim() }];
  }
  return [];
}

const pairs = source.split(/\r?\n/u).flatMap((line, index) => pairCandidates(line, index + 1));
const reportLines = [];
reportLines.push(`Confronto: ${path.basename(inputPath)}`);
reportLines.push(`Schede lessicali nel mazzo: ${vocabulary.length}`);
reportLines.push("");
reportLines.push(`Schede già presenti rilevate nel testo (${entriesFound.size})`);
if (entriesFound.size === 0) reportLines.push("  Nessuna corrispondenza letterale trovata.");
for (const { word, languages } of [...entriesFound.values()].sort((a, b) => a.word.category.localeCompare(b.word.category) || a.word.de.localeCompare(b.word.de))) {
  reportLines.push(`  [${[...languages].join("+")}] [${word.id}] ${word.category}: ${word.de} — ${word.it}`);
}

reportLines.push("");
reportLines.push(`Coppie bilingui da controllare (${pairs.length})`);
if (pairs.length === 0) reportLines.push("  Nessuna coppia riconosciuta automaticamente.");
for (const { lineNumber, german, italian } of pairs) {
  const germanMatches = germanIndex.get(germanKey(german)) ?? germanIndex.get(withoutArticle(german)) ?? [];
  const italianMatches = italianIndex.get(normalize(italian)) ?? [];
  const describe = (matches) => matches.length
    ? [...new Map(matches.map((word) => [word.id, word])).values()].map((word) => `${word.id} (${word.de} — ${word.it})`).join(", ")
    : "nessuna corrispondenza letterale";
  reportLines.push(`  riga ${lineNumber}: ${german} = ${italian}`);
  reportLines.push(`    Tedesco: ${describe(germanMatches)}`);
  reportLines.push(`    Italiano: ${describe(italianMatches)}`);
}

reportLines.push("");
reportLines.push("Il confronto è letterale: controlla a mano varianti, flessioni, refusi OCR e significati contestuali.");
reportLines.push("Questo rapporto non aggiunge schede e non modifica i progressi.");
process.stdout.write(`${reportLines.join("\n")}\n`);
