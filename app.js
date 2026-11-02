(() => {
  "use strict";

  const STORAGE_KEY = "wortschatz-progress-v1";
  const DAILY_NEW_LIMIT = 15;
  const MINUTE = 60 * 1000;
  const DAY = 24 * 60 * MINUTE;
  const $ = (selector) => document.querySelector(selector);
  const todayKey = () => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  };
  const dayDifference = (a, b) => Math.round((Date.parse(`${b}T12:00:00`) - Date.parse(`${a}T12:00:00`)) / DAY);
  const defaultState = () => ({ cards: {}, stats: { date: todayKey(), newSeenToday: 0, reviewedToday: 0, knownToday: 0, streak: 0, lastStudyDate: "" } });

  let progress = loadProgress();
  let session = null;
  let selectedCategory = "Tutte";
  let deferredInstallPrompt = null;

  function loadProgress() {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (stored && stored.cards && stored.stats) return stored;
    } catch (_) { /* A fresh local profile is created if storage is unavailable or unreadable. */ }
    return defaultState();
  }

  function saveProgress() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); }
    catch (_) { setDailyNote("La memoria del browser è piena: libera spazio per salvare i progressi."); }
  }

  function cardState(id) {
    if (!progress.cards[id]) {
      progress.cards[id] = { seen: false, repetitions: 0, interval: 0, ease: 2.5, dueAt: 0, lastReviewed: 0, lapses: 0 };
    }
    return progress.cards[id];
  }

  function resetDailyStatsIfNeeded() {
    if (progress.stats.date !== todayKey()) {
      progress.stats.date = todayKey();
      progress.stats.newSeenToday = 0;
      progress.stats.reviewedToday = 0;
      progress.stats.knownToday = 0;
    }
  }

  function dueCards() {
    const now = Date.now();
    return VOCABULARY.filter((word) => {
      const state = cardState(word.id);
      return state.seen && state.dueAt <= now;
    }).sort((a, b) => cardState(a.id).dueAt - cardState(b.id).dueAt);
  }

  function unseenCards() {
    return VOCABULARY.filter((word) => !cardState(word.id).seen);
  }

  function availableTodayCount() {
    resetDailyStatsIfNeeded();
    return dueCards().length + Math.min(Math.max(0, DAILY_NEW_LIMIT - progress.stats.newSeenToday), unseenCards().length);
  }

  function updateDashboard() {
    resetDailyStatsIfNeeded();
    const due = dueCards().length;
    const learned = VOCABULARY.reduce((sum, word) => sum + (cardState(word.id).repetitions > 0 ? 1 : 0), 0);
    $("#due-count").textContent = String(availableTodayCount());
    $("#learned-count").textContent = String(learned);
    $("#total-count").textContent = String(VOCABULARY.length);
    $("#streak-label").textContent = `${progress.stats.streak} ${progress.stats.streak === 1 ? "giorno" : "giorni"} di fila`;
    const dueLabel = due ? `${due} ${due === 1 ? "ripasso" : "ripassi"} in attesa` : "Nessun ripasso in attesa";
    setDailyNote(dueLabel);
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
      selected = words;
    } else {
      const due = dueCards();
      const newCount = Math.max(0, DAILY_NEW_LIMIT - progress.stats.newSeenToday);
      const fresh = shuffle(unseenCards()).slice(0, newCount);
      selected = [...due, ...fresh];
    }
    session = { queue: selected.map((word) => ({ id: word.id, retry: false })), position: 0, revealed: false, retried: new Set() };
    updateDashboard();
    renderCurrentCard();
  }

  function renderCurrentCard() {
    const item = session?.queue[session.position];
    const word = item && VOCABULARY.find((entry) => entry.id === item.id);
    const hasCard = Boolean(word);
    $("#empty-state").hidden = hasCard;
    $("#card-meta").hidden = !hasCard;
    $("#flashcard").hidden = !hasCard;
    $("#answer-prompt").hidden = true;
    if (!hasCard) {
      const nextDue = VOCABULARY.map((entry) => cardState(entry.id).dueAt).filter((at) => at > Date.now()).sort((a, b) => a - b)[0];
      $("#empty-message").textContent = nextDue
        ? "Hai finito le parole previste per oggi. Quelle che hai ripassato torneranno nei prossimi giorni."
        : "Hai completato il ripasso di oggi. Le nuove parole ti aspettano domani.";
      return;
    }
    session.revealed = false;
    $("#card-category").textContent = word.category.toUpperCase();
    $("#card-counter").textContent = `${session.position + 1} / ${session.queue.length}`;
    $("#card-italian").textContent = word.it;
    $("#card-german").textContent = word.de;
    $("#card-extra").textContent = word.plural ? `Plurale: ${word.plural}` : "";
    $("#card-extra").hidden = !word.plural;
    $("#card-face").hidden = false;
    $("#card-back").hidden = true;
    $("#flashcard").setAttribute("aria-label", `Mostra la traduzione di: ${word.it}`);
    $("#card-back").setAttribute("aria-label", `Traduzione: ${word.de}`);
    $("#flashcard").focus({ preventScroll: true });
  }

  function revealCard() {
    if (!session || session.revealed || !session.queue[session.position]) return;
    session.revealed = true;
    $("#card-face").hidden = true;
    $("#card-back").hidden = false;
    $("#answer-prompt").hidden = false;
    $("#flashcard").setAttribute("aria-label", "Traduzione mostrata");
    $("#yes-button").focus({ preventScroll: true });
  }

  function recordAnswer(remembered) {
    const item = session?.queue[session.position];
    if (!item || !session.revealed) return;
    const now = Date.now();
    const state = cardState(item.id);
    if (!state.seen) {
      state.seen = true;
      progress.stats.newSeenToday += 1;
    }
    state.lastReviewed = now;
    progress.stats.reviewedToday += 1;
    const today = todayKey();
    if (progress.stats.lastStudyDate !== today) {
      progress.stats.streak = progress.stats.lastStudyDate && dayDifference(progress.stats.lastStudyDate, today) === 1 ? progress.stats.streak + 1 : 1;
      progress.stats.lastStudyDate = today;
    }
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
      if (!item.retry && !session.retried.has(item.id)) {
        session.retried.add(item.id);
        session.queue.push({ id: item.id, retry: true });
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
      const learned = cardState(word.id).repetitions > 0;
      return `<button class="vocab-row" type="button" data-word-id="${word.id}" aria-label="Ripassa ${escapeHtml(word.it)}: ${escapeHtml(word.de)}"><span class="vocab-it">${escapeHtml(word.it)}</span><span class="vocab-de">${escapeHtml(word.de)}</span><span class="vocab-status${learned ? " learned" : ""}" aria-hidden="true"></span></button>`;
    }).join("");
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
  }

  function practiceAll() { beginSession(shuffle(VOCABULARY)); }

  $("#flashcard").addEventListener("click", revealCard);
  $("#no-button").addEventListener("click", () => recordAnswer(false));
  $("#yes-button").addEventListener("click", () => recordAnswer(true));
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
  $("#vocab-list").addEventListener("click", (event) => {
    const row = event.target.closest("[data-word-id]");
    if (!row) return;
    const word = VOCABULARY.find((entry) => entry.id === row.dataset.wordId);
    if (word) { showReview(); beginSession([word]); }
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
