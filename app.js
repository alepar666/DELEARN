(() => {
  "use strict";

  const STORAGE_KEY = "wortschatz-progress-v1";
  const MINUTE = 60 * 1000;
  const DAY = 24 * 60 * MINUTE;
  const $ = (selector) => document.querySelector(selector);
  const todayKey = () => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  };
  const defaultState = () => ({ cards: {}, stats: { date: todayKey(), reviewedToday: 0, knownToday: 0 } });

  let progress = loadProgress();
  let session = null;
  let selectedCategory = "Tutte";
  let deferredInstallPrompt = null;
  let feedbackAudioContext = null;

  function loadProgress() {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (stored && stored.cards && stored.stats) {
        delete stored.stats.streak;
        delete stored.stats.lastStudyDate;
        delete stored.stats.newSeenToday;
        return stored;
      }
    } catch (_) { /* A fresh local profile is created if storage is unavailable or unreadable. */ }
    return defaultState();
  }

  function saveProgress() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); }
    catch (_) { setDailyNote("La memoria del browser è piena: libera spazio per salvare i progressi."); }
  }

  function cardState(id, aspect = "meaning") {
    const key = aspect === "participle" ? `${id}::participle` : id;
    if (!progress.cards[key]) {
      progress.cards[key] = { seen: false, repetitions: 0, interval: 0, ease: 2.5, dueAt: 0, lastReviewed: 0, lapses: 0 };
    }
    return progress.cards[key];
  }

  function studyUnits(words = VOCABULARY) {
    return words.flatMap((word) => [
      { id: word.id, aspect: "meaning" },
      ...(word.participle ? [{ id: word.id, aspect: "participle" }] : [])
    ]);
  }

  function isWordLearned(word) {
    return cardState(word.id).repetitions > 0
      && (!word.participle || cardState(word.id, "participle").repetitions > 0);
  }

  function resetDailyStatsIfNeeded() {
    if (progress.stats.date !== todayKey()) {
      progress.stats.date = todayKey();
      progress.stats.reviewedToday = 0;
      progress.stats.knownToday = 0;
    }
  }

  function dueCards() {
    const now = Date.now();
    return studyUnits().filter((unit) => {
      const state = cardState(unit.id, unit.aspect);
      return state.seen && state.dueAt <= now;
    }).sort((a, b) => cardState(a.id, a.aspect).dueAt - cardState(b.id, b.aspect).dueAt);
  }

  function unseenCards() {
    return studyUnits().filter((unit) => !cardState(unit.id, unit.aspect).seen);
  }

  function interleaveNewAndDue(fresh, due) {
    const queue = [];
    const freshCards = shuffle(fresh);
    let freshIndex = 0;
    let dueIndex = 0;

    while (freshIndex < freshCards.length || dueIndex < due.length) {
      if (freshIndex < freshCards.length) queue.push(freshCards[freshIndex++]);
      if (dueIndex < due.length) queue.push(due[dueIndex++]);
    }
    return queue;
  }

  function availableCount() {
    const now = Date.now();
    return VOCABULARY.filter((word) => {
      const meaning = cardState(word.id);
      const participle = word.participle && cardState(word.id, "participle");
      return !meaning.seen || meaning.dueAt <= now || Boolean(participle && (!participle.seen || participle.dueAt <= now));
    }).length;
  }

  function updateDashboard() {
    resetDailyStatsIfNeeded();
    const learned = VOCABULARY.reduce((sum, word) => sum + (isWordLearned(word) ? 1 : 0), 0);
    $("#due-count").textContent = String(availableCount());
    $("#learned-count").textContent = String(learned);
    $("#total-count").textContent = String(VOCABULARY.length);
    setDailyNote(vocabularyUpdatedLabel);
  }

  function setDailyNote(message) { $("#daily-note-text").textContent = message; }

  function shuffle(items) {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function beginSession(words = null) {
    resetDailyStatsIfNeeded();
    let selected;
    if (words) {
      selected = studyUnits(words);
    } else {
      const due = dueCards();
      selected = interleaveNewAndDue(unseenCards(), due);
    }
    session = { queue: selected.map((unit) => ({ id: unit.id, aspect: unit.aspect, retry: false })), position: 0, revealed: false, retried: new Set() };
    updateDashboard();
    renderCurrentCard();
  }

  function renderCurrentCard() {
    const item = session?.queue[session.position];
    const word = item && VOCABULARY.find((entry) => entry.id === item.id);
    const hasCard = Boolean(word);
    const isParticiple = item?.aspect === "participle";
    $("#empty-state").hidden = hasCard;
    $("#card-meta").hidden = !hasCard;
    $("#flashcard").hidden = !hasCard;
    $("#answer-prompt").hidden = true;
    if (!hasCard) {
      const nextDue = studyUnits().map((unit) => cardState(unit.id, unit.aspect).dueAt)
        .filter((at) => at > Date.now()).sort((a, b) => a - b)[0];
      $("#empty-title").textContent = nextDue
        ? "Nessuna scheda disponibile adesso."
        : "Tutte le schede completate.";
      $("#empty-message").textContent = nextDue
        ? "Hai esaurito le schede disponibili adesso. I ripassi torneranno quando saranno dovuti."
        : "Hai completato tutte le schede disponibili. Puoi ripassarle comunque o sfogliare il vocabolario.";
      return;
    }
    session.revealed = false;
    const isGrammar = Boolean(word.grammarQuestion);
    $("#card-category").textContent = word.category.toUpperCase();
    $("#card-counter").textContent = `${session.position + 1} / ${session.queue.length}`;
    $("#card-front-direction").textContent = isParticiple
      ? "QUAL È IL PARTICIPIO PASSATO DI?"
      : isGrammar ? word.grammarInstruction : "COME SI DICE IN TEDESCO?";
    $("#card-question-word").textContent = isParticiple ? word.participlePrompt : isGrammar ? word.grammarPrompt : word.it;
    $("#card-question-word").classList.toggle("grammar-question", isGrammar);
    $("#card-hint").textContent = isParticiple
      ? "Pensa alla forma, poi tocca la scheda"
      : "Pensa alla risposta, poi tocca la scheda";
    $("#card-back-direction").textContent = isParticiple
      ? "PARTICIPIO PASSATO"
      : isGrammar ? "RISPOSTA" : "IN TEDESCO";
    $("#card-german").textContent = isParticiple ? word.participle : isGrammar ? word.grammarAnswer : word.de;
    $("#card-extra").textContent = isGrammar
      ? word.grammarExplanation
      : !isParticiple && word.plural ? `Plurale: ${word.plural}` : "";
    $("#card-extra").hidden = !$("#card-extra").textContent;
    $("#card-face").hidden = false;
    $("#card-back").hidden = true;
    $("#flashcard").setAttribute("aria-label", isParticiple
      ? `Mostra il participio passato di ${word.participlePrompt}`
      : isGrammar ? `Rispondi alla domanda di grammatica: ${word.grammarPrompt}` : `Mostra la traduzione di: ${word.it}`);
    $("#card-back").setAttribute("aria-label", isParticiple
      ? `Participio passato: ${word.participle}`
      : isGrammar ? `Risposta: ${word.grammarAnswer}` : `Traduzione: ${word.de}`);
    $("#flashcard").focus({ preventScroll: true });
  }

  function revealCard() {
    if (!session || session.revealed || !session.queue[session.position]) return;
    session.revealed = true;
    $("#card-face").hidden = true;
    $("#card-back").hidden = false;
    $("#answer-prompt").hidden = false;
    const item = session.queue[session.position];
    const word = VOCABULARY.find((entry) => entry.id === item.id);
    $("#flashcard").setAttribute("aria-label", word?.grammarQuestion ? "Risposta grammaticale mostrata" : "Traduzione mostrata");
    $("#yes-button").focus({ preventScroll: true });
  }

  function recordAnswer(remembered) {
    const item = session?.queue[session.position];
    if (!item || !session.revealed) return;
    const now = Date.now();
    const state = cardState(item.id, item.aspect);
    if (!state.seen) {
      state.seen = true;
    }
    state.lastReviewed = now;
    progress.stats.reviewedToday += 1;
    if (remembered) {
      state.interval = state.repetitions === 0 ? 1 : state.repetitions === 1 ? 3 : Math.max(1, Math.round(state.interval * state.ease));
      state.repetitions += 1;
      state.ease = Math.min(3, state.ease + 0.1);
      state.dueAt = now + state.interval * DAY;
      progress.stats.knownToday += 1;
    } else {
      state.repetitions = 0;
      state.interval = 0;
      state.ease = Math.max(1.3, state.ease - 0.2);
      state.lapses += 1;
      state.dueAt = now + 10 * MINUTE;
      const retryKey = `${item.id}:${item.aspect}`;
      if (!item.retry && !session.retried.has(retryKey)) {
        session.retried.add(retryKey);
        session.queue.push({ id: item.id, aspect: item.aspect, retry: true });
      }
    }
    session.position += 1;
    saveProgress();
    updateDashboard();
    renderCurrentCard();
  }

  function showVocabulary() {
    $("#review-view").hidden = true;
    $("#vocabulary-view").hidden = false;
    $("#search-input").value = "";
    selectedCategory = "Tutte";
    renderFilters();
    renderVocabulary();
    window.scrollTo(0, 0);
    $("#search-input").focus({ preventScroll: true });
  }

  function showReview() {
    $("#vocabulary-view").hidden = true;
    $("#review-view").hidden = false;
    window.scrollTo(0, 0);
    updateDashboard();
  }

  function renderFilters() {
    const categories = ["Tutte", ...new Set(VOCABULARY.map((word) => word.category))];
    $("#category-filters").innerHTML = categories.map((category) =>
      `<button class="filter-chip${category === selectedCategory ? " selected" : ""}" type="button" data-category="${escapeHtml(category)}">${escapeHtml(category)}</button>`
    ).join("");
  }

  function renderVocabulary() {
    const query = $("#search-input").value.trim().toLocaleLowerCase("it");
    const matches = VOCABULARY.filter((word) => (selectedCategory === "Tutte" || word.category === selectedCategory)
      && (!query || `${word.it} ${word.de} ${word.plural} ${word.category}`.toLocaleLowerCase("it").includes(query)));
    $("#vocab-result-count").textContent = `${matches.length} ${matches.length === 1 ? "parola" : "parole"}`;
    if (!matches.length) {
      $("#vocab-list").innerHTML = '<div class="no-results">Non ho trovato parole con questa ricerca.</div>';
      return;
    }
    $("#vocab-list").innerHTML = matches.map((word) => {
      const learned = isWordLearned(word);
      const answer = word.grammarQuestion ? word.grammarAnswer : word.de;
      return `<div class="vocab-row${word.grammarQuestion ? " grammar-vocab-row" : ""}"><span class="vocab-it">${escapeHtml(word.it)}</span><span class="vocab-de">${escapeHtml(answer)}</span><span class="vocab-status${learned ? " learned" : ""}" aria-hidden="true"></span></div>`;
    }).join("");
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
  }

  function practiceAll() { beginSession(shuffle(VOCABULARY)); }

  function playAnswerSound(correct) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;

    try {
      if (!feedbackAudioContext) feedbackAudioContext = new AudioContextClass();
      const context = feedbackAudioContext;
      const playNotes = () => {
        if (context.state !== "running") return;
        const notes = correct ? [659.25, 880] : [330, 246.94];
        notes.forEach((frequency, index) => {
          const start = context.currentTime + index * 0.11;
          const oscillator = context.createOscillator();
          const volume = context.createGain();
          oscillator.type = "sine";
          oscillator.frequency.setValueAtTime(frequency, start);
          volume.gain.setValueAtTime(0.0001, start);
          volume.gain.exponentialRampToValueAtTime(0.14, start + 0.012);
          volume.gain.exponentialRampToValueAtTime(0.0001, start + 0.12);
          oscillator.connect(volume);
          volume.connect(context.destination);
          oscillator.start(start);
          oscillator.stop(start + 0.13);
        });
      };

      if (context.state === "suspended") context.resume().then(playNotes).catch(() => {});
      else playNotes();
    } catch (_) { /* Audio feedback is optional; answering must always work. */ }
  }

  const [year, month, day] = VOCABULARY_UPDATED_AT.split("-").map(Number);
  const vocabDate = new Date(year, month - 1, day, 12);
  const formattedVocabDate = new Intl.DateTimeFormat("it-IT", {
    day: "numeric", month: "long", year: "numeric"
  }).format(vocabDate);
  const vocabularyUpdatedLabel = `Vocabolario aggiornato il ${formattedVocabDate} · Lektion ${VOCABULARY_UPDATED_LESSON}`;

  $("#flashcard").addEventListener("click", revealCard);
  $("#no-button").addEventListener("click", () => {
    playAnswerSound(false);
    recordAnswer(false);
  });
  $("#yes-button").addEventListener("click", () => {
    playAnswerSound(true);
    recordAnswer(true);
  });
  $("#practice-all-button").addEventListener("click", practiceAll);
  $("#browse-link").addEventListener("click", showVocabulary);
  $("#back-to-review").addEventListener("click", showReview);
  $("#search-input").addEventListener("input", renderVocabulary);
  $("#category-filters").addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    selectedCategory = button.dataset.category;
    renderFilters();
    renderVocabulary();
  });
  const isIos = /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  const isStandalone = window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
  if (isIos && !isStandalone) {
    $("#install-button").hidden = false;
    $("#install-button").textContent = "Come installarla";
    $("#install-button").addEventListener("click", () => setDailyNote("Su iPhone: apri Condividi in Safari, poi scegli “Aggiungi alla schermata Home”."));
  } else {
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      deferredInstallPrompt = event;
      $("#install-button").hidden = false;
    });
    $("#install-button").addEventListener("click", async () => {
      if (!deferredInstallPrompt) return;
      deferredInstallPrompt.prompt();
      await deferredInstallPrompt.userChoice;
      deferredInstallPrompt = null;
      $("#install-button").hidden = true;
    });
  }

  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));
  }
  updateDashboard();
  beginSession();
})();
