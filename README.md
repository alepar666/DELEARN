# Ripasso B1

Una PWA italiana per imparare e ripassare il vocabolario tedesco. L'app funziona senza account e salva le risposte nel browser del dispositivo. L'interfaccia usa un tema scuro con i colori della bandiera tedesca.

## Licenza

Il software e i contenuti originali di Ripasso B1 sono concessi gratuitamente per usi non commerciali secondo la [PolyForm Noncommercial License 1.0.0](LICENSE). Per qualsiasi uso commerciale è necessaria un'autorizzazione separata del titolare dei diritti. I materiali di terzi, se presenti, restano soggetti ai rispettivi diritti. La provenienza è indicata in [NOTICE](NOTICE).

## Pubblicazione su GitHub Pages

Questa è una PWA statica: non richiede compilazione né dipendenze.

1. Carica questi file nella cartella principale del repository GitHub `de.learn` e fai il push del branch che userai per pubblicare (per esempio `main` o `master`).
2. Nel repository, apri **Settings → Pages**.
3. In **Build and deployment**, scegli **Deploy from a branch**, poi lo stesso branch e la cartella `/(root)`, quindi salva.
4. Quando la pubblicazione è pronta, apri l'indirizzo indicato nella stessa pagina **Pages**. Per un repository di progetto avrà in genere la forma `https://<nome-utente>.github.io/de.learn/`.
5. Su iPhone, apri quell'indirizzo in Safari, premi **Condividi → Aggiungi alla schermata Home** e avvia l'app dalla nuova icona.

La PWA deve essere aperta almeno una volta online per scaricare i file necessari all'uso offline. Il service worker funziona solo da un sito HTTPS o da un server locale, non aprendo `index.html` direttamente come file.

Per provarla sul computer, puoi servirla con un server web locale, per esempio l'estensione Live Server di Visual Studio Code.

## Importare una lezione B1

Lo script `scripts/import-lesson.sh` raccoglie ricorsivamente i PDF di una cartella, estrae il testo incorporato e usa l'OCR di macOS sulle pagine che contengono poco testo leggibile. Richiede macOS con Swift; se Node.js è disponibile, esegue anche il confronto automatico con il vocabolario.

```sh
./scripts/import-lesson.sh "/Users/youruser/Documents/corsotedesco/lezioneN"
```

Il testo completo viene salvato in un file temporaneo e il percorso viene mostrato al termine. Per scegliere un file di destinazione, aggiungilo come secondo argomento:

```sh
./scripts/import-lesson.sh "/percorso/della/lezione" "/percorso/testo-estratto.txt"
```

Lo script estrae il testo ma non modifica `vocab.js`: le nuove parole e le domande grammaticali vanno aggiunte al codice dopo il confronto con le schede già presenti.

Se Node.js non è disponibile durante l'estrazione, puoi generare il rapporto in seguito:

```sh
node scripts/review-lesson.js "/percorso/testo-estratto.txt"
```

Il rapporto segnala le schede lessicali già riconosciute nel testo e le coppie tedesco-italiano scritte con `=` o `->`, indicando le corrispondenze letterali nel mazzo. Non aggiunge schede: varianti, forme flesse, refusi OCR e significato vanno ancora rivisti prima di aggiornare il codice.

PDFKit può mostrare un avviso `CoreGraphics PDF has logged an error` anche quando l'estrazione prosegue correttamente. Se il riepilogo termina con zero errori di apertura e OCR e il file di testo viene creato, l'avviso non ha interrotto l'importazione.

Quando aggiungi una lezione, puoi indicarmi la sua cartella: estrarrò i testi con questo script, confronterò le parole con `vocab.js`, aggiungerò quelle nuove in fondo alle categorie, aggiornerò `VOCABULARY_UPDATED_AT` e `VOCABULARY_UPDATED_LESSON` in `vocab.js` e rinnoverò la cache della PWA.

## Ripetizione

La logica è una variante binaria ispirata a SM-2: dopo una risposta corretta la prossima ripetizione è tra 1 giorno, poi 3 giorni e in seguito l'intervallo cresce in base al fattore facilità della parola. Una risposta errata abbassa quel fattore, riporta la parola a intervallo zero e la programma dopo 10 minuti; nell'esercizio corrente ricompare una sola volta, in fondo alla coda. Le schede nuove e i ripassi dovuti si alternano, così un arretrato di ripassi non nasconde le schede mai viste. Non c'è un limite giornaliero: tutte le parole nuove e i ripassi dovuti sono disponibili in ogni sessione.

Le parole, i participi passati, gli intervalli e i progressi sono definiti in `vocab.js` e salvati localmente con `localStorage`. Per i verbi, il ripasso del significato e quello del participio hanno intervalli e progressi separati.

Le schede di grammatica sono integrate nel mazzo e nei filtri di "Grammatica". Includono riconoscimento dei casi, forme degli articoli, declinazione debole, mista e forte, comparativi, superlativi e participi passati usati come aggettivi, con una spiegazione sul retro. Le domande riprendono gli schemi e gli esempi delle lezioni B1. "Sfoglia vocabolario" è una consultazione in sola lettura e non avvia un esercizio.
