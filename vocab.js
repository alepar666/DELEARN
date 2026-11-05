/* Seed vocabulary: Italian, German, German plural (when useful). */
window.VOCABULARY_UPDATED_AT = "2026-11-05";
window.VOCABULARY_UPDATED_LESSON = 17;
window.VOCABULARY = [];
const addWords = (category, rows) => {
  for (const [it, de, plural = ""] of rows) {
    window.VOCABULARY.push({ id: `w${String(window.VOCABULARY.length + 1).padStart(3, "0")}`, it, de, plural, category });
  }
};

addWords("Essenziali", [
  ["ciao", "Hallo"], ["buongiorno", "Guten Morgen"], ["buonasera", "Guten Abend"], ["buonanotte", "Gute Nacht"],
  ["arrivederci", "Auf Wiedersehen"], ["per favore", "bitte"], ["grazie", "danke"], ["prego", "gern geschehen"],
  ["scusa", "Entschuldigung"], ["sì", "ja"], ["no", "nein"], ["come stai?", "Wie geht es dir?"]
]);
addWords("Casa", [
  ["la casa", "das Haus", "die Häuser"], ["l'appartamento", "die Wohnung", "die Wohnungen"], ["la stanza", "das Zimmer", "die Zimmer"],
  ["la cucina", "die Küche", "die Küchen"], ["il bagno", "das Badezimmer", "die Badezimmer"], ["la camera da letto", "das Schlafzimmer", "die Schlafzimmer"],
  ["la porta", "die Tür", "die Türen"], ["la finestra", "das Fenster", "die Fenster"], ["il tavolo", "der Tisch", "die Tische"],
  ["la sedia", "der Stuhl", "die Stühle"], ["il letto", "das Bett", "die Betten"], ["la chiave", "der Schlüssel", "die Schlüssel"],
  ["la luce", "das Licht", "die Lichter"], ["il frigorifero", "der Kühlschrank", "die Kühlschränke"], ["il divano", "das Sofa", "die Sofas"]
]);
addWords("Cibo", [
  ["il pane", "das Brot", "die Brote"], ["l'acqua", "das Wasser"], ["il caffè", "der Kaffee", "die Kaffees"], ["il tè", "der Tee", "die Tees"],
  ["il latte", "die Milch"], ["la mela", "der Apfel", "die Äpfel"], ["la banana", "die Banane", "die Bananen"], ["l'arancia", "die Orange", "die Orangen"],
  ["la verdura", "das Gemüse"], ["la patata", "die Kartoffel", "die Kartoffeln"], ["il pomodoro", "die Tomate", "die Tomaten"], ["il formaggio", "der Käse"],
  ["la carne", "das Fleisch"], ["il pesce", "der Fisch", "die Fische"], ["il riso", "der Reis"], ["l'uovo", "das Ei", "die Eier"],
  ["la colazione", "das Frühstück", "die Frühstücke"], ["il pranzo", "das Mittagessen", "die Mittagessen"], ["la cena", "das Abendessen", "die Abendessen"],
  ["il conto, per favore", "Die Rechnung, bitte"]
]);
addWords("Persone", [
  ["la persona", "die Person", "die Personen"], ["l'uomo", "der Mann", "die Männer"], ["la donna", "die Frau", "die Frauen"],
  ["il bambino", "das Kind", "die Kinder"], ["la famiglia", "die Familie", "die Familien"], ["il padre", "der Vater", "die Väter"],
  ["la madre", "die Mutter", "die Mütter"], ["il fratello", "der Bruder", "die Brüder"], ["la sorella", "die Schwester", "die Schwestern"],
  ["l'amico", "der Freund", "die Freunde"], ["l'amica", "die Freundin", "die Freundinnen"], ["il vicino", "der Nachbar", "die Nachbarn"],
  ["il nome", "der Name", "die Namen"], ["il lavoro", "der Beruf", "die Berufe"]
]);
addWords("Viaggi", [
  ["la macchina", "das Auto", "die Autos"], ["il treno", "der Zug", "die Züge"], ["l'autobus", "der Bus", "die Busse"],
  ["la bicicletta", "das Fahrrad", "die Fahrräder"], ["l'aereo", "das Flugzeug", "die Flugzeuge"], ["la stazione", "der Bahnhof", "die Bahnhöfe"],
  ["l'aeroporto", "der Flughafen", "die Flughäfen"], ["il biglietto", "die Fahrkarte", "die Fahrkarten"], ["il viaggio", "die Reise", "die Reisen"],
  ["la valigia", "der Koffer", "die Koffer"], ["la mappa", "die Karte", "die Karten"], ["il passaporto", "der Reisepass", "die Reisepässe"],
  ["a destra", "nach rechts"], ["a sinistra", "nach links"], ["dritto", "geradeaus"]
]);
addWords("Città", [
  ["la città", "die Stadt", "die Städte"], ["la strada", "die Straße", "die Straßen"], ["la piazza", "der Platz", "die Plätze"],
  ["il negozio", "das Geschäft", "die Geschäfte"], ["il supermercato", "der Supermarkt", "die Supermärkte"], ["il ristorante", "das Restaurant", "die Restaurants"],
  ["l'albergo", "das Hotel", "die Hotels"], ["il museo", "das Museum", "die Museen"], ["la farmacia", "die Apotheke", "die Apotheken"],
  ["la banca", "die Bank", "die Banken"], ["il parco", "der Park", "die Parks"], ["la chiesa", "die Kirche", "die Kirchen"],
  ["il ponte", "die Brücke", "die Brücken"], ["il bagno pubblico", "die öffentliche Toilette", "die öffentlichen Toiletten"]
]);
addWords("Verbi", [
  ["essere", "sein"], ["avere", "haben"], ["fare", "machen"], ["andare", "gehen"], ["venire", "kommen"], ["vedere", "sehen"],
  ["parlare", "sprechen"], ["capire", "verstehen"], ["sapere", "wissen"], ["conoscere", "kennen"], ["mangiare", "essen"], ["bere", "trinken"],
  ["dormire", "schlafen"], ["leggere", "lesen"], ["scrivere", "schreiben"], ["ascoltare", "zuhören"], ["comprare", "kaufen"], ["pagare", "bezahlen"],
  ["lavorare", "arbeiten"], ["abitare", "wohnen"], ["imparare", "lernen"], ["aiutare", "helfen"], ["cercare", "suchen"], ["trovare", "finden"],
  ["prendere", "nehmen"], ["dare", "geben"], ["aspettare", "warten"], ["viaggiare", "reisen"], ["piacere", "gefallen"], ["volere", "wollen"]
]);
addWords("Aggettivi", [
  ["grande", "groß"], ["piccolo", "klein"], ["buono", "gut"], ["cattivo", "schlecht"], ["bello", "schön"], ["brutto", "hässlich"],
  ["nuovo", "neu"], ["vecchio", "alt"], ["giovane", "jung"], ["facile", "einfach"], ["difficile", "schwierig"], ["veloce", "schnell"],
  ["lento", "langsam"], ["caldo", "warm"], ["freddo", "kalt"], ["caro", "teuer"], ["economico", "billig"], ["aperto", "offen"],
  ["chiuso", "geschlossen"], ["stanco", "müde"], ["felice", "glücklich"], ["triste", "traurig"], ["importante", "wichtig"], ["pronto", "fertig"]
]);
addWords("Tempo e natura", [
  ["il giorno", "der Tag", "die Tage"], ["la settimana", "die Woche", "die Wochen"], ["il mese", "der Monat", "die Monate"], ["l'anno", "das Jahr", "die Jahre"],
  ["oggi", "heute"], ["domani", "morgen"], ["ieri", "gestern"], ["la mattina", "der Morgen", "die Morgen"], ["la sera", "der Abend", "die Abende"],
  ["il tempo (meteo)", "das Wetter"], ["la pioggia", "der Regen"], ["il sole", "die Sonne", "die Sonnen"], ["la neve", "der Schnee"],
  ["il vento", "der Wind", "die Winde"], ["l'albero", "der Baum", "die Bäume"], ["il fiore", "die Blume", "die Blumen"], ["il mare", "das Meer", "die Meere"]
]);
addWords("Lavoro", [
  ["l'ufficio", "das Büro", "die Büros"], ["il collega", "der Kollege", "die Kollegen"], ["la riunione", "die Besprechung", "die Besprechungen"],
  ["il computer", "der Computer", "die Computer"], ["il telefono", "das Telefon", "die Telefone"], ["il messaggio", "die Nachricht", "die Nachrichten"],
  ["l'appuntamento", "der Termin", "die Termine"], ["la domanda", "die Frage", "die Fragen"], ["la risposta", "die Antwort", "die Antworten"],
  ["il documento", "das Dokument", "die Dokumente"], ["la pausa", "die Pause", "die Pausen"], ["lo stipendio", "das Gehalt", "die Gehälter"],
  ["il capo", "der Chef", "die Chefs"], ["il cliente", "der Kunde", "die Kunden"]
]);
addWords("Corpo e salute", [
  ["il corpo", "der Körper", "die Körper"], ["la testa", "der Kopf", "die Köpfe"], ["l'occhio", "das Auge", "die Augen"],
  ["l'orecchio", "das Ohr", "die Ohren"], ["la bocca", "der Mund", "die Münder"], ["la mano", "die Hand", "die Hände"],
  ["il piede", "der Fuß", "die Füße"], ["il cuore", "das Herz", "die Herzen"], ["il medico", "der Arzt", "die Ärzte"],
  ["la dottoressa", "die Ärztin", "die Ärztinnen"], ["la medicina", "das Medikament", "die Medikamente"], ["il dolore", "der Schmerz", "die Schmerzen"],
  ["la salute", "die Gesundheit"], ["sono stanco", "Ich bin müde"], ["ho bisogno di aiuto", "Ich brauche Hilfe"]
]);
addWords("Tempo libero", [
  ["la musica", "die Musik"], ["il libro", "das Buch", "die Bücher"], ["il film", "der Film", "die Filme"], ["lo sport", "der Sport"],
  ["il gioco", "das Spiel", "die Spiele"], ["la passeggiata", "der Spaziergang", "die Spaziergänge"], ["la fotografia", "das Foto", "die Fotos"],
  ["la vacanza", "der Urlaub", "die Urlaube"], ["la festa", "die Party", "die Partys"], ["ballare", "tanzen"], ["cantare", "singen"],
  ["cucinare", "kochen"], ["nuotare", "schwimmen"], ["mi piace", "Das gefällt mir"], ["non mi piace", "Das gefällt mir nicht"]
]);
addWords("Numeri e colori", [
  ["uno", "eins"], ["due", "zwei"], ["tre", "drei"], ["quattro", "vier"], ["cinque", "fünf"], ["sei", "sechs"],
  ["sette", "sieben"], ["otto", "acht"], ["nove", "neun"], ["dieci", "zehn"], ["rosso", "rot"], ["blu", "blau"],
  ["verde", "grün"], ["giallo", "gelb"], ["nero", "schwarz"], ["bianco", "weiß"], ["grigio", "grau"]
]);
addWords("Abbigliamento", [
  ["i vestiti", "die Kleidung"], ["la maglietta", "das T-Shirt", "die T-Shirts"], ["i pantaloni", "die Hose", "die Hosen"],
  ["la giacca", "die Jacke", "die Jacken"], ["il cappotto", "der Mantel", "die Mäntel"], ["la scarpa", "der Schuh", "die Schuhe"],
  ["il vestito", "das Kleid", "die Kleider"], ["la gonna", "der Rock", "die Röcke"], ["il cappello", "der Hut", "die Hüte"],
  ["la borsa", "die Tasche", "die Taschen"], ["il calzino", "die Socke", "die Socken"], ["la camicia", "das Hemd", "die Hemden"]
]);
addWords("Parole utili", [
  ["perché", "warum"], ["perché (risposta)", "weil"], ["dove", "wo"], ["quando", "wann"], ["quanto", "wie viel"], ["chi", "wer"],
  ["che cosa", "was"], ["qui", "hier"], ["lì", "dort"], ["sempre", "immer"], ["spesso", "oft"], ["a volte", "manchmal"],
  ["mai", "nie"], ["molto", "sehr"], ["un po'", "ein bisschen"], ["insieme", "zusammen"], ["forse", "vielleicht"], ["subito", "sofort"]
]);

// Verbi ricavati dal materiale del corso B1. Queste nuove righe restano in fondo
// al mazzo per mantenere stabili gli ID e i progressi già salvati.
addWords("Verbi", [
  ["partire (treno, autobus)", "abfahren"], ["decollare", "abfliegen"], ["consegnare", "abgeben"], ["dipendere da", "abhängen von + Dat."],
  ["prelevare", "abheben"], ["leggere da un display", "ablesen"], ["togliersi; diminuire", "abnehmen"], ["sconsigliare", "abraten"],
  ["chiudere a chiave; concludere", "abschließen"], ["sottrarre; togliere", "abziehen"], ["offrire", "anbieten"], ["iniziare", "anfangen"],
  ["riguardare", "angehen"], ["indossare", "anhaben"], ["arrivare", "ankommen"], ["lasciare acceso", "anlassen"],
  ["accettare", "annehmen"], ["telefonare a", "anrufen"], ["collegare", "anschließen"], ["guardare", "ansehen"],
  ["rivolgersi a; affrontare", "ansprechen"], ["essere in coda", "anstehen"], ["vestirsi; indossare", "sich anziehen"],
  ["farsi notare", "auffallen"], ["arrendersi; rinunciare", "aufgeben"], ["appendere", "aufhängen"], ["fermare; trattenere", "aufhalten"],
  ["ricaricare", "aufladen"], ["aprire (un libro)", "aufschlagen"], ["annotare", "aufschreiben"], ["alzarsi", "aufstehen"],
  ["esibirsi; verificarsi", "auftreten"], ["crescere", "aufwachsen"], ["inventarsi", "sich ausdenken"], ["spendere", "ausgeben"],
  ["uscire", "ausgehen"], ["compensare", "ausgleichen"], ["sopportare", "aushalten"], ["orientarsi; conoscere bene", "sich auskennen"],
  ["scaricare", "ausladen"], ["prendere in prestito; prestare", "ausleihen"], ["dormire fino a tardi", "ausschlafen"],
  ["avere un certo aspetto", "aussehen"], ["pronunciare", "aussprechen"], ["scendere (da un mezzo)", "aussteigen"],
  ["estinguersi", "aussterben"], ["traslocare; spogliarsi", "ausziehen"], ["cuocere al forno", "backen"], ["considerare", "bedenken"],
  ["recarsi", "sich begeben"], ["cominciare", "beginnen"], ["tenere; conservare", "behalten"], ["ricevere", "bekommen"],
  ["comportarsi", "sich benehmen"], ["consigliare", "beraten"], ["descrivere", "beschreiben"], ["possedere", "besitzen"],
  ["superare (un esame); consistere", "bestehen"], ["ammontare a", "betragen"], ["gestire; praticare", "betreiben"],
  ["ingannare; truffare", "betrügen"], ["dimostrare", "beweisen"], ["candidarsi", "sich bewerben um + Akk."],
  ["riferirsi a", "sich beziehen auf + Akk."], ["offrire", "bieten"], ["legare", "binden"], ["chiedere", "bitten"], ["restare", "bleiben"],
  ["rompere", "brechen"], ["bruciare", "brennen"], ["portare", "bringen"], ["toccare a (essere il proprio turno)", "drankommen"],
  ["andare in disordine; confondersi", "durcheinandergehen"]
]);
addWords("Verbi", [
  ["apportare; contribuire", "einbringen"], ["venire in mente", "einfallen"], ["inserire (dati)", "eingeben"],
  ["arrivare (posta); affrontare un tema", "eingehen"], ["rispettare; attenersi a", "einhalten"], ["invitare", "einladen"],
  ["assumere (una medicina); incassare", "einnehmen"], ["addormentarsi", "einschlafen"], ["intraprendere; colpire", "einschlagen"],
  ["salire (su un mezzo)", "einsteigen"], ["inserire; registrare", "eintragen"], ["imbucare; inserire", "einwerfen"],
  ["trasferirsi", "einziehen"], ["ricevere; accogliere", "empfangen"], ["consigliare", "empfehlen"],
  ["camminare lungo", "entlanggehen"], ["estrarre; dedurre", "entnehmen"], ["decidere", "sich entscheiden für + Akk."],
  ["corrispondere a", "entsprechen"], ["nascere; sorgere", "entstehen"], ["progettare", "entwerfen"],
  ["venire a sapere; sperimentare", "erfahren"], ["inventare", "erfinden"], ["ricevere", "erhalten"],
  ["riconoscere", "erkennen"], ["indovinare", "erraten"], ["apparire; essere pubblicato", "erscheinen"],
  ["uccidere sparando", "erschießen"], ["dedurre; ricavare", "erschließen"], ["spaventarsi; spaventare", "erschrecken"],
  ["spostarsi in un veicolo", "fahren"], ["cadere", "fallen"], ["guardare la televisione", "fernsehen"],
  ["volare", "fliegen"], ["fuggire", "fliehen"], ["mangiare (detto di animali)", "fressen"],
  ["riuscire", "gelingen"], ["valere; essere valido", "gelten"], ["godersi", "genießen"], ["finire; capitare in", "geraten"],
  ["accadere", "geschehen"], ["vincere", "gewinnen"], ["versare; innaffiare", "gießen"], ["afferrare", "greifen"],
  ["accreditare", "gutschreiben"], ["tenere; fermarsi", "halten"], ["pendere; essere appeso", "hängen"], ["sollevare", "heben"],
  ["tornare a casa", "heimkommen"], ["chiamarsi; significare", "heißen"], ["avvicinarsi", "herankommen"],
  ["scoprire", "herausfinden"], ["tirare fuori", "herausnehmen"], ["entrare", "hereinkommen"], ["scaricare (un file)", "herunterladen"],
  ["venire qui", "hierherkommen"], ["salire", "hinaufgehen"], ["entrare", "hineingehen"], ["andare in auto verso", "hinfahren"],
  ["andare lì", "hingehen"], ["guardare attentamente", "hinsehen"], ["lasciare dietro di sé", "hinterlassen"],
  ["caricare online", "hochladen"], ["tirare su", "hochziehen"]
]);
addWords("Verbi", [
  ["cavarsela", "klarkommen"], ["suonare; sembrare", "klingen"], ["caricare; invitare", "laden"],
  ["lasciare; far fare", "lassen"], ["correre; camminare", "laufen"], ["dispiacere", "leidtun"],
  ["prestare; prendere in prestito", "leihen"], ["trovarsi; essere sdraiato", "liegen"], ["partire (con un veicolo)", "losfahren"],
  ["mettersi in cammino; cominciare", "losgehen"], ["mentire", "lügen"], ["mungere", "melken"], ["misurare", "messen"],
  ["portare con sé", "mitbringen"], ["dare una mano", "mithelfen"], ["leggere insieme; seguire la lettura", "mitlesen"],
  ["portare con sé", "mitnehmen"], ["cantare insieme", "mitsingen"], ["piacere", "mögen"], ["riflettere", "nachdenken"],
  ["cedere", "nachgeben"], ["nominare; chiamare", "nennen"], ["consigliare; indovinare", "raten"], ["uscire", "rausgehen"],
  ["cavalcare", "reiten"], ["correre", "rennen"], ["odorare; sentire un odore", "riechen"], ["chiamare", "rufen"],
  ["brillare; sembrare", "scheinen"], ["andare storto", "schiefgehen"], ["sparare; tirare", "schießen"],
  ["colpire; battere", "schlagen"], ["chiudere", "schließen"], ["sciogliersi; fondere", "schmelzen"], ["tagliare", "schneiden"],
  ["tacere", "schweigen"], ["stare seduto", "sitzen"], ["saltare", "springen"], ["svolgersi; avere luogo", "stattfinden"],
  ["pungere", "stechen"], ["stare in piedi; trovarsi", "stehen"], ["rubare", "stehlen"], ["salire", "steigen"],
  ["morire", "sterben"], ["puzzare", "stinken"], ["litigare", "streiten"]
]);
addWords("Verbi", [
  ["portare; indossare", "tragen"], ["incontrare", "treffen"], ["fare", "tun"], ["assumere; prendere in carico", "übernehmen"],
  ["non notare; trascurare", "übersehen"], ["fare un bonifico", "überweisen"], ["superare", "überwinden"],
  ["guardarsi intorno", "sich umsehen"], ["cambiare mezzo", "umsteigen"], ["traslocare", "umziehen"],
  ["conversare", "sich unterhalten"], ["intraprendere; organizzare", "unternehmen"], ["firmare", "unterschreiben"],
  ["sottolineare", "unterstreichen"], ["collegare; bendare", "verbinden"], ["trascorrere", "verbringen"],
  ["passare (del tempo)", "vergehen"], ["dimenticare", "vergessen"], ["confrontare", "vergleichen"], ["seppellire", "vergraben"],
  ["comportarsi", "sich verhalten"], ["perdersi (a piedi)", "sich verlaufen"], ["perdere", "verlieren"], ["evitare", "vermeiden"],
  ["interrogare; udire", "vernehmen"], ["rivelare; tradire", "verraten"], ["spostare; rimandare", "verschieben"],
  ["dormire troppo; perdere la sveglia", "verschlafen"], ["prescrivere", "verschreiben"], ["sparire", "verschwinden"],
  ["promettere", "versprechen"], ["perdonare", "verzeihen"], ["volare oltre", "vorbeifliegen"], ["passare accanto", "vorbeigehen"],
  ["passare a trovare", "vorbeikommen"], ["procedere", "vorgehen"], ["capitare; sembrare", "vorkommen"],
  ["leggere ad alta voce", "vorlesen"], ["proporre", "vorschlagen"], ["cantare per qualcuno", "vorsingen"],
  ["esporre; recitare", "vortragen"], ["crescere", "wachsen"], ["lavare", "waschen"], ["partire; allontanarsi in veicolo", "wegfahren"],
  ["andarsene", "weggehen"], ["omettere", "weglassen"], ["buttare via", "wegwerfen"], ["trasferirsi altrove", "wegziehen"],
  ["fare male", "wehtun"], ["passare a qualcuno", "weitergeben"], ["aiutare; essere d'aiuto", "weiterhelfen"],
  ["continuare a leggere", "weiterlesen"], ["continuare a scrivere", "weiterschreiben"], ["fare pubblicità; reclutare", "werben"],
  ["diventare", "werden"], ["lanciare", "werfen"], ["contraddire", "widersprechen"], ["riavere", "wiederbekommen"],
  ["ritrovare", "wiederfinden"], ["strappare", "zerreißen"], ["tirare; spostarsi", "ziehen"],
  ["chiudersi; dirigersi verso", "zugehen"], ["aumentare; ingrassare", "zunehmen"], ["ricevere indietro", "zurückerhalten"],
  ["tornare indietro; diminuire", "zurückgehen"], ["tornare", "zurückkommen"], ["richiamare", "zurückrufen"],
  ["restare insieme", "zusammenbleiben"], ["crollare", "zusammenbrechen"], ["incontrarsi", "zusammentreffen"],
  ["andare a vivere insieme", "zusammenziehen"], ["rivolgersi a", "sich jemandem zuwenden"], ["costringere", "zwingen"]
]);
addWords("Verbi", [
  ["mancare a qualcuno", "vermissen + Akk."], ["ricordarsi di", "sich erinnern an + Akk."], ["bastare", "reichen"],
  ["sfruttare", "ausnutzen"], ["passeggiare", "spazieren gehen"], ["pianificare", "planen"], ["congratularsi con", "gratulieren zu + Dat."],
  ["rallegrarsi per; non vedere l'ora", "sich freuen über; auf + Akk."], ["visitare (una persona o un luogo)", "besuchen"],
  ["regalare", "schenken"], ["completare un esercizio", "ergänzen"],
  ["correggere", "korrigieren"], ["aggiungere", "hinzufügen"], ["collaborare", "zusammenarbeiten"],
  ["dividersi i compiti", "die Aufgaben aufteilen"], ["migrare", "migrieren"], ["emigrare", "auswandern"], ["immigrare", "einwandern"],
  ["integrarsi", "sich integrieren"], ["adattarsi a", "sich anpassen an + Akk."], ["abituarsi a", "sich gewöhnen an + Akk."],
  ["sentirsi a proprio agio", "sich wohlfühlen"], ["sentirsi estraneo", "sich fremd fühlen"], ["esprimersi", "sich ausdrücken"],
  ["sentirsi", "sich fühlen"], ["accettare", "akzeptieren"], ["visitare (un luogo turistico)", "besichtigen"],
  ["raccogliere esperienze", "Erfahrungen sammeln"], ["preparare", "vorbereiten"], ["ferirsi", "sich verletzen"],
  ["aprire; inaugurare", "eröffnen"], ["interessarsi a", "sich interessieren für + Akk."], ["protestare", "protestieren"],
  ["manifestare", "demonstrieren"], ["investire in", "investieren in + Akk."], ["realizzare; attuare", "umsetzen"],
  ["riguardare; interessare", "betreffen"], ["discutere", "besprechen"], ["prendere sul serio", "ernst nehmen"],
  ["ringraziare", "danken + Dat."], ["mostrare", "zeigen"], ["spiegare", "erklären"], ["ridere", "lachen"],
  ["vestirsi; truccarsi", "sich schminken"], ["cambiare; trasformare", "verändern"], ["sostenere; appoggiare", "unterstützen"],
  ["preoccuparsi di", "sich kümmern um + Akk."], ["occuparsi di; prendersi cura di", "sorgen für + Akk."], ["essere soddisfatto di", "zufrieden sein mit + Dat."]
]);

addWords("Scuola e formazione", [
  ["la lezione", "die Lektion", "die Lektionen"], ["l'ora (di lezione)", "die Stunde", "die Stunden"],
  ["il corso di lingua", "der Sprachkurs", "die Sprachkurse"], ["l'esercizio", "die Übung", "die Übungen"],
  ["la formazione professionale", "die Ausbildung", "die Ausbildungen"], ["l'esame", "die Prüfung", "die Prüfungen"],
  ["la prova finale", "die Abschlussprüfung", "die Abschlussprüfungen"], ["la materia scolastica", "das Fach", "die Fächer"],
  ["la metodologia", "die Methodik"], ["la scuola", "die Schule", "die Schulen"], ["la scuola di danza", "die Tanzschule", "die Tanzschulen"],
  ["l'insegnante", "der Lehrer", "die Lehrer"], ["l'insegnante (f.)", "die Lehrerin", "die Lehrerinnen"],
  ["l'alunno", "der Schüler", "die Schüler"], ["l'alunna", "die Schülerin", "die Schülerinnen"],
  ["l'istruttore", "der Ausbilder", "die Ausbilder"], ["la disciplina", "die Disziplin", "die Disziplinen"],
  ["la band scolastica", "die Schulband", "die Schulbands"], ["il provino / casting", "das Casting", "die Castings"],
  ["il colloquio", "das Interview", "die Interviews"], ["il compito a casa", "die Hausaufgabe", "die Hausaufgaben"],
  ["il risultato", "das Ergebnis", "die Ergebnisse"], ["l'indirizzo", "die Adresse", "die Adressen"],
  ["la parola chiave", "das Stichwort", "die Stichwörter"], ["il programma / piano", "der Zeitplan", "die Zeitpläne"],
  ["il professore", "der Professor", "die Professoren"], ["la professoressa", "die Professorin", "die Professorinnen"],
  ["il titolo / diploma", "der Abschluss", "die Abschlüsse"], ["l'adolescente", "der Jugendliche", "die Jugendlichen"],
  ["l'adolescente (f.)", "die Jugendliche", "die Jugendlichen"], ["la lezione di musica", "der Musikunterricht"],
  ["il liceo", "das Gymnasium", "die Gymnasien"]
]);

addWords("Lavoro", [
  ["la collega", "die Kollegin", "die Kolleginnen"], ["il ballerino", "der Tänzer", "die Tänzer"],
  ["la ballerina", "die Tänzerin", "die Tänzerinnen"], ["il dipendente", "der Angestellte", "die Angestellten"],
  ["la dipendente", "die Angestellte", "die Angestellten"], ["il commercialista", "der Steuerberater", "die Steuerberater"],
  ["l'ufficiale", "der Offizier", "die Offiziere"], ["il meccanico", "der Mechaniker", "die Mechaniker"],
  ["l'italiano", "der Italiener", "die Italiener"], ["l'ingegnere", "der Ingenieur", "die Ingenieure"],
  ["il fanatico", "der Fanatiker", "die Fanatiker"], ["l'azionista", "der Aktionär", "die Aktionäre"],
  ["il notaio", "der Notar", "die Notare"], ["il poliziotto", "der Polizist", "die Polizisten"],
  ["il pilota", "der Pilot", "die Piloten"], ["l'astronauta", "der Astronaut", "die Astronauten"],
  ["l'architetto", "der Architekt", "die Architekten"], ["il fabbricante", "der Fabrikant", "die Fabrikanten"],
  ["il liceale", "der Gymnasiast", "die Gymnasiasten"], ["il soldato", "der Soldat", "die Soldaten"],
  ["il filosofo", "der Philosoph", "die Philosophen"], ["l'atleta", "der Athlet", "die Athleten"],
  ["l'agronomo", "der Agronom", "die Agronomen"], ["il biologo", "der Biologe", "die Biologen"],
  ["il postino", "der Postbote", "die Postboten"], ["il traduttore", "der Dolmetscher", "die Dolmetscher"],
  ["la traduttrice", "die Dolmetscherin", "die Dolmetscherinnen"], ["la tariffa / tassa", "die Gebühr", "die Gebühren"],
  ["il servizio", "der Service", "die Services"]
]);

addWords("Società e identità", [
  ["il mondo", "die Welt", "die Welten"], ["la generazione", "die Generation", "die Generationen"],
  ["il conflitto generazionale", "der Generationenkonflikt", "die Generationenkonflikte"], ["la sicurezza", "die Sicherheit", "die Sicherheiten"],
  ["la carriera", "die Karriere", "die Karrieren"], ["il futuro", "die Zukunft"], ["il compito", "die Aufgabe", "die Aufgaben"],
  ["il problema", "das Problem", "die Probleme"], ["la soluzione", "die Lösung", "die Lösungen"],
  ["la manifestazione", "die Demonstration", "die Demonstrationen"], ["la protesta", "der Protest", "die Proteste"],
  ["le condizioni di vita", "die Lebensumstände"], ["la libertà di opinione", "die Meinungsfreiheit"],
  ["il diritto fondamentale", "das Grundrecht", "die Grundrechte"], ["la società", "die Gesellschaft", "die Gesellschaften"],
  ["la collaborazione", "die Zusammenarbeit"], ["la capacità", "die Fähigkeit", "die Fähigkeiten"],
  ["l'eccezione", "die Ausnahme", "die Ausnahmen"], ["la gaffe", "das Fettnäpfchen", "die Fettnäpfchen"],
  ["la tolleranza", "die Toleranz"], ["la sincerità", "die Ehrlichkeit"], ["l'amicizia", "die Freundschaft", "die Freundschaften"],
  ["la pazienza", "die Geduld"], ["la vicinanza", "die Nähe"], ["l'invito", "die Einladung", "die Einladungen"],
  ["il prezzo", "der Preis", "die Preise"], ["la maratona", "der Marathon", "die Marathons"],
  ["la squadra", "die Mannschaft", "die Mannschaften"], ["il pianeta", "der Planet", "die Planeten"],
  ["la libertà", "die Freiheit", "die Freiheiten"], ["l'istruzione", "die Bildung"], ["il luogo", "der Ort", "die Orte"],
  ["il sentimento", "das Gefühl", "die Gefühle"], ["la patria / casa d'origine", "die Heimat"],
  ["il senso di sicurezza e protezione", "die Geborgenheit"], ["l'appartenenza", "die Zugehörigkeit"],
  ["la provenienza", "die Herkunft"], ["la radice", "die Wurzel", "die Wurzeln"], ["l'identità", "die Identität", "die Identitäten"],
  ["la mancanza di patria", "die Heimatlosigkeit"], ["il nuovo inizio", "der Neubeginn", "die Neubeginne"],
  ["l'integrazione", "die Integration", "die Integrationen"], ["la fuga", "die Flucht", "die Fluchten"],
  ["la fuga di cervelli", "der Brain-Drain"], ["la nostalgia", "die Nostalgie", "die Nostalgien"],
  ["la familiarità", "die Vertrautheit"], ["il ricordo", "die Erinnerung", "die Erinnerungen"],
  ["l'emozione", "die Emotion", "die Emotionen"], ["la città natale", "die Heimatstadt", "die Heimatstädte"],
  ["la patria scelta", "die Wahlheimat", "die Wahlheimaten"], ["il senso di appartenenza a un luogo", "das Heimatgefühl", "die Heimatgefühle"],
  ["la nostalgia di viaggiare", "das Fernweh"], ["la nostalgia di casa", "das Heimweh"],
  ["il cittadino del mondo", "der Weltbürger", "die Weltbürger"], ["la cittadina del mondo", "die Weltbürgerin", "die Weltbürgerinnen"],
  ["l'esperienza", "die Erfahrung", "die Erfahrungen"], ["la stabilità", "die Stabilität"], ["il fattore", "der Faktor", "die Faktoren"],
  ["la conoscenza", "die Kenntnis", "die Kenntnisse"], ["la passione", "die Leidenschaft", "die Leidenschaften"],
  ["l'estero", "das Ausland"], ["il sinonimo", "das Synonym", "die Synonyme"], ["il sacrificio", "das Opfer", "die Opfer"],
  ["la disoccupazione", "die Arbeitslosigkeit"], ["il riposo pensionistico", "der Ruhestand"], ["la pensione", "die Rente", "die Renten"]
]);

addWords("Società e identità", [
  ["la sorpresa", "die Überraschung", "die Überraschungen"], ["la Coppa del mondo di calcio", "die Fußball-Weltmeisterschaft", "die Fußball-Weltmeisterschaften"],
  ["il paese d'origine", "das Herkunftsland", "die Herkunftsländer"], ["la conoscenza linguistica", "die Sprachkenntnis", "die Sprachkenntnisse"],
  ["la seconda patria", "die zweite Heimat"], ["il campionato mondiale", "die Weltmeisterschaft", "die Weltmeisterschaften"]
]);

addWords("Luoghi e geografia", [
  ["il paese; la campagna", "das Land", "die Länder"], ["la regione / zona", "die Gegend", "die Gegenden"],
  ["l'ambiente circostante", "die Umgebung", "die Umgebungen"], ["il quartiere", "die Nachbarschaft", "die Nachbarschaften"],
  ["il villaggio", "das Dorf", "die Dörfer"], ["il paesaggio", "die Landschaft", "die Landschaften"],
  ["il luogo preferito", "der Lieblingsort", "die Lieblingsorte"], ["il deserto", "die Wüste", "die Wüsten"],
  ["la montagna", "der Berg", "die Berge"], ["il nord", "der Norden"], ["il sud", "der Süden"],
  ["l'ovest", "der Westen"], ["l'est", "der Osten"], ["la Danimarca", "Dänemark"], ["la Puglia", "Apulien"],
  ["la Lombardia", "die Lombardei"], ["l'Abruzzo", "die Abruzzen"], ["l'Irlanda", "Irland"], ["l'Islanda", "Island"],
  ["la Norvegia", "Norwegen"], ["la Sardegna", "Sardinien"]
]);

addWords("Tempo e natura", [
  ["il lunedì", "der Montag", "die Montage"], ["l'estate", "der Sommer", "die Sommer"], ["la rosa", "die Rose", "die Rosen"],
  ["l'abete", "die Tanne", "die Tannen"], ["la bergamotta", "die Bergamotte", "die Bergamotten"],
  ["il profumo di bergamotto", "der Bergamottenduft"], ["il vichingo", "der Wikinger", "die Wikinger"],
  ["il profumo", "der Duft", "die Düfte"]
]);

addWords("Casa", [
  ["il tappeto", "der Teppich", "die Teppiche"], ["l'edificio", "das Gebäude", "die Gebäude"],
  ["il bicchiere; il vetro", "das Glas", "die Gläser"], ["la botte", "das Fass", "die Fässer"],
  ["la misura", "das Maß", "die Maße"], ["l'anello", "der Ring", "die Ringe"], ["la vita", "das Leben"]
]);

addWords("Viaggi", [
  ["la stazione centrale", "der Hauptbahnhof", "die Hauptbahnhöfe"], ["la metropolitana", "die U-Bahn", "die U-Bahnen"],
  ["la fermata dell'autobus", "die Bushaltestelle", "die Bushaltestellen"], ["la gita / escursione", "der Ausflug", "die Ausflüge"],
  ["il trasloco", "der Umzug", "die Umzüge"], ["il taxi", "das Taxi", "die Taxis"], ["il traffico", "der Verkehr"],
  ["il paese natale", "der Heimatort", "die Heimatorte"]
]);

addWords("Cibo", [
  ["la torta", "der Kuchen", "die Kuchen"], ["la pizza", "die Pizza", "die Pizzen"], ["l'insalata", "der Salat", "die Salate"],
  ["le patatine fritte", "die Pommes"], ["il panino", "das Brötchen", "die Brötchen"], ["il biscotto", "der Keks", "die Kekse"],
  ["la cotoletta", "das Schnitzel", "die Schnitzel"], ["il cibo; il pasto", "das Essen"], ["il pasto", "die Mahlzeit", "die Mahlzeiten"],
  ["la bevanda", "das Getränk", "die Getränke"], ["l'appetito", "der Appetit"], ["la marmellata", "die Marmelade", "die Marmeladen"],
  ["la maionese", "die Mayonnaise"], ["il liquore", "der Likör", "die Liköre"], ["l'alcol", "der Alkohol"],
  ["lo spumante", "der Sekt", "die Sekte"], ["il superalcolico", "der Schnaps", "die Schnäpse"], ["il vino", "der Wein", "die Weine"],
  ["la 'nduja", "die Nduja"]
]);

addWords("Città", [
  ["il caffè (locale)", "das Café", "die Cafés"], ["il garage", "die Garage", "die Garagen"], ["la toilette", "die Toilette", "die Toiletten"],
  ["la cittadella", "die Zitadelle", "die Zitadellen"], ["la cabina", "die Kabine", "die Kabinen"], ["la biblioteca", "die Bücherei", "die Büchereien"],
  ["l'aula magna", "die Aula", "die Aulen"], ["l'università", "die Universität", "die Universitäten"],
  ["l'accademia", "die Akademie", "die Akademien"], ["lo stadio", "das Stadion", "die Stadien"],
  ["il palcoscenico / la scenografia", "die Kulisse", "die Kulissen"]
]);

addWords("Abbigliamento", [
  ["il guardaroba / armadio", "der Schrank", "die Schränke"], ["il tatuaggio", "das Tattoo", "die Tattoos"],
  ["la riga / striscia", "der Streifen", "die Streifen"], ["il laccio della scarpa", "der Schnürsenkel", "die Schnürsenkel"],
  ["il mokassino", "der Mokassin", "die Mokassins"], ["l'outfit", "das Outfit", "die Outfits"], ["il look", "der Look", "die Looks"],
  ["l'accessorio", "das Accessoire", "die Accessoires"], ["il trucco", "das Make-up"], ["il vestito informale (colloquiale)", "die Klamotte", "die Klamotten"]
]);

addWords("Corpo e salute", [
  ["il viso", "das Gesicht", "die Gesichter"], ["il capello", "das Haar", "die Haare"], ["la ciglia", "die Wimper", "die Wimpern"],
  ["il braccio", "der Arm", "die Arme"], ["la caratteristica / qualità", "die Eigenschaft", "die Eigenschaften"],
  ["la determinazione", "die Entschlossenheit"],
  ["il sogno terribile", "der Albtraum", "die Albträume"], ["l'acaro della polvere", "die Hausstaubmilbe", "die Hausstaubmilben"],
  ["la muffa", "der Schimmel"], ["la polvere", "der Staub"]
]);

addWords("Persone", [
  ["il figlio", "der Sohn", "die Söhne"], ["la figlia", "die Tochter", "die Töchter"],
  ["il cugino", "der Cousin", "die Cousins"], ["la cugina", "die Cousine", "die Cousinen"],
  ["il parente", "der Verwandte", "die Verwandten"], ["la persona malata", "der Kranke", "die Kranken"],
  ["lo sconosciuto", "der Fremde", "die Fremden"], ["il cieco", "der Blinde", "die Blinden"],
  ["il tedesco", "der Deutsche", "die Deutschen"], ["il conoscente", "der Bekannte", "die Bekannten"],
  ["l'adulto", "der Erwachsene", "die Erwachsenen"], ["la persona senza casa", "der Obdachlose", "die Obdachlosen"],
  ["il detenuto", "der Gefangene", "die Gefangenen"], ["il ragazzo", "der Junge", "die Jungen"],
  ["la ragazza", "das Mädchen", "die Mädchen"], ["il re", "der König", "die Könige"],
  ["il gemello", "der Zwilling", "die Zwillinge"], ["la bionda", "die Blondine", "die Blondinen"],
  ["la studentessa universitaria", "die Studentin", "die Studentinnen"], ["lo studente universitario", "der Student", "die Studenten"]
]);

addWords("Tempo e natura", [
  ["il fine settimana", "das Wochenende", "die Wochenenden"], ["il sabato mattina", "der Samstagmorgen", "die Samstagmorgen"],
  ["il compleanno", "der Geburtstag", "die Geburtstage"], ["il regalo", "das Geschenk", "die Geschenke"],
  ["il biglietto di auguri", "die Geburtstagskarte", "die Geburtstagskarten"], ["il periodo scolastico", "die Schulzeit", "die Schulzeiten"],
  ["il momento", "der Moment", "die Momente"], ["il pomeriggio", "der Nachmittag", "die Nachmittage"],
  ["le vacanze", "die Ferien"], ["l'acquisto settimanale della spesa", "der Wocheneinkauf", "die Wocheneinkäufe"]
]);

addWords("Città", [
  ["il centro commerciale", "das Einkaufszentrum", "die Einkaufszentren"], ["il grande magazzino", "das Kaufhaus", "die Kaufhäuser"],
  ["il cameriere", "der Kellner", "die Kellner"], ["il negozio di alimentari", "der Lebensmittelladen", "die Lebensmittelläden"],
  ["la sala musica", "der Musikraum", "die Musikräume"]
]);

addWords("Casa", [
  ["la fotocamera", "die Kamera", "die Kameras"], ["il cellulare", "das Handy", "die Handys"],
  ["il giornale", "die Zeitung", "die Zeitungen"], ["la lettera", "der Brief", "die Briefe"],
  ["la scrivania", "der Schreibtisch", "die Schreibtische"], ["la cantina", "der Keller", "die Keller"],
  ["l'ombrello", "der Schirm", "die Schirme"], ["l'ingresso", "der Eingang", "die Eingänge"]
]);

addWords("Casa", [
  ["il salotto", "das Wohnzimmer", "die Wohnzimmer"], ["la lampada tascabile", "die Taschenlampe", "die Taschenlampen"],
  ["il rumore", "das Geräusch", "die Geräusche"]
]);

addWords("Scuola e formazione", [
  ["l'istruzione / lezione", "der Unterricht"], ["la lavagna", "die Tafel", "die Tafeln"], ["la matita", "der Bleistift", "die Bleistifte"],
  ["il quaderno", "das Heft", "die Hefte"]
]);

addWords("Lavoro", [
  ["il lavoro", "die Arbeit", "die Arbeiten"], ["l'orario", "die Arbeitszeit", "die Arbeitszeiten"],
  ["il commerciante", "der Händler", "die Händler"],
  ["il datore di lavoro", "der Arbeitgeber", "die Arbeitgeber"], ["il lavoro da casa", "das Homeoffice"]
]);

addWords("Parole utili", [
  ["l'occasione / opportunità", "die Gelegenheit", "die Gelegenheiten"], ["la differenza", "der Unterschied", "die Unterschiede"],
  ["la sciocchezza", "der Unsinn"], ["il significato", "die Bedeutung", "die Bedeutungen"],
  ["l'hobby", "das Hobby", "die Hobbys"], ["la relazione", "die Beziehung", "die Beziehungen"],
  ["il valore fondamentale", "der Grundwert", "die Grundwerte"], ["l'idea", "die Idee", "die Ideen"],
  ["l'ora", "die Uhrzeit", "die Uhrzeiten"], ["la data", "das Datum", "die Daten"], ["la pianificazione", "die Planung", "die Planungen"],
  ["sì e no", "jein"], ["sebbene", "obwohl"], ["tuttavia; ciononostante", "trotzdem"], ["nonostante; malgrado", "trotz + Gen."],
  ["non appena", "sobald"], ["persino", "sogar"], ["affinché; in modo che", "damit"], ["abbastanza; parecchio", "ziemlich"],
  ["al giorno d'oggi", "heutzutage"], ["in qualche modo", "irgendwie"], ["prima o poi; in un momento imprecisato", "irgendwann"],
  ["da qualche parte", "irgendwo"], ["reciprocamente", "gegenseitig"], ["soprattutto", "vor allem"], ["per niente; affatto", "überhaupt"],
  ["all'improvviso", "plötzlich"], ["infine", "schließlich"], ["perciò", "deshalb"], ["in seguito; dopo", "danach"],
  ["all'inizio", "zuerst"], ["a proposito", "übrigens"], ["in contrasto con", "im Gegensatz zu"], ["comunque; in ogni caso", "auf jeden Fall"],
  ["andare a casa", "nach Hause gehen"], ["di buon appetito", "Guten Appetit!"], ["non ne ho idea", "Ich habe keine Ahnung."],
  ["di cosa si tratta?", "Worum geht es?"], ["che ...! / che tipo di ...!", "Was für ein ...!"],
  ["fare una gaffe", "ins Fettnäpfchen treten"], ["non è scontato", "Das ist nicht selbstverständlich."],
  ["non è da tutti", "Das ist nicht jedermanns Sache."], ["la lingua", "die Sprache", "die Sprachen"],
  ["da lontano", "aus der Ferne"], ["sentirsi a casa", "sich zu Hause fühlen"],
  ["avere nostalgia di viaggiare", "Fernweh haben"], ["avere nostalgia di casa", "Heimweh haben"],
  ["avere molto da fare", "viel zu tun haben"], ["essere in pensione", "im Ruhestand sein"],
  ["all'estero", "im Ausland"], ["lasciarsi (coppia)", "Schluss machen"], ["fare sacrifici", "Opfer bringen"],
  ["essere abituato a", "gewöhnt sein an + Akk."], ["sentirsi legato a", "sich verbunden fühlen mit + Dat."]
]);

addWords("Aggettivi", [
  ["caotico", "chaotisch"], ["stressante", "stressig"], ["interessante", "interessant"], ["maleducato", "unhöflich"],
  ["timido", "schüchtern"], ["sportivo", "sportlich"], ["attivo", "aktiv"], ["allegro", "fröhlich"], ["di buon umore", "gut gelaunt"],
  ["positivo", "positiv"], ["appariscente", "auffällig"], ["carino; grazioso", "hübsch"], ["ovale", "oval"], ["biondo", "blond"],
  ["liscio", "glatt"], ["lungo", "lang"], ["corto", "kurz"], ["marrone", "braun"], ["alla moda", "modisch"],
  ["fuori moda", "altmodisch"], ["a quadri", "kariert"], ["adatto; appropriato", "passend"], ["elegante", "elegant"],
  ["stravagante", "extravagant"], ["invidioso di", "neidisch auf + Akk."], ["truccato pesantemente", "stark geschminkt"],
  ["forte", "stark"], ["severo", "streng"], ["paziente", "geduldig"], ["tollerante", "tolerant"], ["ottimista", "optimistisch"],
  ["soddisfatto", "zufrieden"], ["indispensabile", "unverzichtbar"], ["precario", "prekär"], ["depresso", "depressiv"],
  ["senza patria; senza casa", "heimatlos"], ["mentale", "mental"], ["disponibile ad aiutare", "hilfsbereit"],
  ["sensibile alle condizioni meteorologiche", "wetterfühlig"], ["numeroso", "zahlreich"], ["senza parole", "sprachlos"],
  ["emozionato; agitato", "aufgeregt"], ["sincero", "ehrlich"], ["portato; dotato", "begabt"],
  ["indipendente", "unabhängig"], ["dipendente da", "abhängig von + Dat."], ["significativo", "bedeutend"],
  ["importante; significativo", "bedeutsam"], ["femminile", "weiblich"], ["maschile", "männlich"], ["complicato", "kompliziert"],
  ["benestante", "wohlhabend"], ["incantevole", "bezaubernd"], ["aitante; di bell'aspetto", "rassig"],
  ["molto scuro", "tiefdunkel"], ["ferito", "verletzt"], ["giusto; corretto", "richtig"], ["ottimo; fantastico", "toll"],
  ["arrabbiato; irritato", "verärgert"], ["dolce", "süß"], ["buio", "dunkel"], ["gustoso", "lecker"], ["attento; prudente", "vorsichtig"]
]);

addWords("Aggettivi", [
  ["malato", "krank"], ["estraneo; sconosciuto", "fremd"], ["cieco", "blind"], ["imparentato", "verwandt"],
  ["tedesco", "deutsch"], ["conosciuto", "bekannt"], ["adulto", "erwachsen"], ["senza casa", "obdachlos"],
  ["assunto; impiegato", "angestellt"]
]);

addWords("Concetti e termini", [
  ["la bestia", "das Biest", "die Biester"]
]);

addWords("Concetti e termini", [
  ["la nazione", "die Nation", "die Nationen"], ["il Rinascimento", "die Renaissance"], ["la quarantena", "die Quarantäne", "die Quarantänen"],
  ["l'arroganza", "die Arroganz"], ["la tendenza", "die Tendenz", "die Tendenzen"], ["l'alternativa", "die Alternative", "die Alternativen"],
  ["la nevrosi", "die Neurose", "die Neurosen"], ["l'analisi", "die Analyse", "die Analysen"], ["la cultura", "die Kultur", "die Kulturen"],
  ["la brochure", "die Broschüre", "die Broschüren"], ["la riunione di lavoro", "das Meeting", "die Meetings"],
  ["il know-how", "das Know-how"], ["lo stadio (fase)", "das Stadium", "die Stadien"], ["il clima", "das Klima", "die Klimate"],
  ["il tema", "das Thema", "die Themen"], ["il sistema", "das System", "die Systeme"], ["l'argomento / l'argomentazione", "das Argument", "die Argumente"],
  ["il carburante", "das Benzin"], ["la nicotina", "das Nikotin"], ["il livello", "das Niveau", "die Niveaus"],
  ["il balletto", "das Ballett", "die Ballette"], ["il gas", "das Gas", "die Gase"], ["l'oro", "das Gold"], ["il ferro", "das Eisen"],
  ["l'aspirina", "das Aspirin"], ["un terzo", "das Drittel", "die Drittel"], ["un quarto", "das Viertel", "die Viertel"],
  ["la materia", "die Materie", "die Materien"], ["la bellezza", "die Schönheit", "die Schönheiten"],
  ["l'unità / l'accordo", "die Einigkeit"], ["il motore", "der Motor", "die Motoren"], ["il socialismo", "der Sozialismus"],
  ["la scimmia", "der Affe", "die Affen"], ["qualcosa di bello", "etwas Schönes"], ["niente di particolare", "nichts Besonderes"],
  ["qualcosa di elegante", "etwas Elegantes"], ["tutto il meglio", "Alles Gute!"], ["la cosa giusta", "das Richtige"]
]);

addWords("Tempo e natura", [
  ["agosto", "der August"], ["la direzione cardinale", "die Himmelsrichtung", "die Himmelsrichtungen"]
]);

addWords("Verbi", [
  ["mostrare (regionale)", "herzeigen"], ["andare bene; abbinarsi", "passen"], ["trattarsi di", "es geht um + Akk."],
  ["concentrarsi su", "sich konzentrieren auf + Akk."], ["starnutire", "niesen"], ["proliferare; moltiplicarsi", "sich vermehren"],
  ["piovere", "regnen"], ["nevicare", "schneien"], ["finire", "enden"], ["durare", "dauern"], ["succedere", "passieren"],
  ["mettere in posizione orizzontale", "legen"], ["mettere in posizione verticale", "stellen"], ["sedersi", "sich setzen"],
  ["incontrarsi", "sich treffen"], ["lavarsi", "sich waschen"], ["giocare; suonare uno strumento", "spielen"], ["ascoltare; sentire", "hören"],
  ["sposarsi", "heiraten"], ["svegliare", "wecken"], ["riordinare", "aufräumen"], ["ripetere", "wiederholen"],
  ["proporsi; pianificare per sé", "sich etwas vornehmen"], ["formare; addestrare", "ausbilden"]
]);

addWords("Verbi", [
  ["pensare", "denken"], ["partecipare a", "teilnehmen an + Dat."]
]);

addWords("Verbi", [
  ["raccontare", "erzählen"], ["inviare; spedire", "senden"], ["distruggere", "zerstören"], ["parlare; discutere", "reden"],
  ["fare un errore di digitazione", "sich vertippen"], ["riflettere; considerare", "überlegen"], ["girare; voltare", "wenden"]
]);

addWords("Viaggi", [
  ["il lago di Starnberg", "der Starnberger See"], ["la distanza; la lontananza", "die Ferne"]
]);

addWords("Lavoro", [
  ["il lavoro / impiego", "der Job", "die Jobs"], ["l'azienda", "die Firma", "die Firmen"]
]);

addWords("Persone", [
  ["i genitori", "die Eltern"], ["il marito", "der Ehemann", "die Ehemänner"], ["la moglie", "die Ehefrau", "die Ehefrauen"],
  ["la zia", "die Tante", "die Tanten"], ["il testimone", "der Zeuge", "die Zeugen"]
]);

addWords("Tempo libero", [
  ["la palla", "der Ball", "die Bälle"], ["la bambola", "die Puppe", "die Puppen"],
  ["la caramella / il dolcetto", "die Süßigkeit", "die Süßigkeiten"], ["la torta al cioccolato", "der Schokoladenkuchen", "die Schokoladenkuchen"],
  ["la festa / celebrazione", "die Feier", "die Feiern"], ["il tempo libero / il divertimento", "der Spaß"],
  ["il sogno", "der Traum", "die Träume"], ["la possibilità / occasione", "die Chance", "die Chancen"],
  ["lo sguardo", "der Blick", "die Blicke"], ["la classe", "die Klasse", "die Klassen"],
  ["il sogno professionale", "der Traumberuf", "die Traumberufe"], ["la discussione", "die Diskussion", "die Diskussionen"]
]);

addWords("Casa", [
  ["il televisore", "der Fernseher", "die Fernseher"], ["il contatto", "der Kontakt", "die Kontakte"],
  ["il momento / l'occasione", "der Augenblick", "die Augenblicke"], ["il giardino", "der Garten", "die Gärten"],
  ["il muro / la parete", "die Wand", "die Wände"], ["il dipinto / l'immagine", "das Bild", "die Bilder"]
]);

addWords("Lavoro", [
  ["la segretaria", "die Sekretärin", "die Sekretärinnen"], ["l'autore", "der Autor", "die Autoren"],
  ["il funzionario pubblico", "der Beamte", "die Beamten"]
]);

addWords("Città", [
  ["il cinema", "das Kino", "die Kinos"], ["il tram", "die Straßenbahn", "die Straßenbahnen"],
  ["la deviazione stradale", "die Umleitung", "die Umleitungen"]
]);

addWords("Abbigliamento", [
  ["i jeans", "die Jeans"], ["il maglione", "der Pullover", "die Pullover"], ["la scarpa sportiva", "der Sportschuh", "die Sportschuhe"],
  ["gli occhiali da sole", "die Sonnenbrille", "die Sonnenbrillen"]
]);

addWords("Lavoro", [
  ["la nota; l'osservazione", "die Bemerkung", "die Bemerkungen"], ["la citazione / dichiarazione", "die Aussage", "die Aussagen"]
]);

addWords("Grammatica", [
  ["il caso grammaticale", "der Fall", "die Fälle"], ["il nominativo", "der Nominativ"], ["l'accusativo", "der Akkusativ"],
  ["il dativo", "der Dativ"], ["il genitivo", "der Genitiv"], ["la declinazione", "die Deklination", "die Deklinationen"],
  ["la desinenza", "die Endung", "die Endungen"], ["l'articolo", "der Artikel", "die Artikel"],
  ["il pronome", "das Pronomen", "die Pronomen"], ["il pronome personale", "das Personalpronomen", "die Personalpronomen"],
  ["il pronome possessivo", "das Possessivpronomen", "die Possessivpronomen"], ["il pronome riflessivo", "das Reflexivpronomen", "die Reflexivpronomen"],
  ["l'aggettivo", "das Adjektiv", "die Adjektive"], ["il sostantivo", "das Substantiv", "die Substantive"],
  ["la preposizione", "die Präposition", "die Präpositionen"], ["la congiunzione", "die Konjunktion", "die Konjunktionen"],
  ["la proposizione principale", "der Hauptsatz", "die Hauptsätze"], ["la proposizione subordinata", "der Nebensatz", "die Nebensätze"],
  ["il verbo separabile", "das trennbare Verb", "die trennbaren Verben"], ["il verbo inseparabile", "das untrennbare Verb", "die untrennbaren Verben"],
  ["il prefisso", "das Präfix", "die Präfixe"], ["il complemento oggetto", "das Akkusativobjekt", "die Akkusativobjekte"],
  ["il complemento di termine", "das Dativobjekt", "die Dativobjekte"], ["il soggetto", "das Subjekt", "die Subjekte"],
  ["il predicato", "das Prädikat", "die Prädikate"], ["la forma verbale / il tempo verbale", "die Zeitform", "die Zeitformen"],
  ["il presente", "das Präsens"], ["il passato prossimo", "das Perfekt"], ["il participio passato", "das Partizip II"],
  ["il preterito", "das Präteritum"], ["l'infinito", "der Infinitiv", "die Infinitive"], ["l'ordine delle parole", "die Wortstellung"],
  ["il comparativo", "der Komparativ", "die Komparative"], ["il superlativo", "der Superlativ", "die Superlative"],
  ["la frase concessiva", "der Konzessivsatz", "die Konzessivsätze"], ["la coniugazione", "die Konjugation", "die Konjugationen"],
  ["l'ausiliare", "das Hilfsverb", "die Hilfsverben"], ["il genere grammaticale", "das grammatische Geschlecht", "die grammatischen Geschlechter"],
  ["la regola", "die Regel", "die Regeln"], ["l'esempio", "das Beispiel", "die Beispiele"], ["l'errore", "der Fehler", "die Fehler"]
]);

addWords("Scuola e formazione", [
  ["il collegio", "das Internat", "die Internate"], ["l'anatomia", "die Anatomie"], ["la storia", "die Geschichte", "die Geschichten"],
  ["il tamburo / la batteria", "das Schlagzeug", "die Schlagzeuge"], ["il teatro", "das Theater", "die Theater"],
  ["il musicista", "der Musiker", "die Musiker"], ["gli studi universitari", "das Studium", "die Studien"],
  ["la penna", "der Kugelschreiber", "die Kugelschreiber"], ["la pagella / il certificato", "das Zeugnis", "die Zeugnisse"]
]);

// Forme irregolari del participio passato tratte dalla tabella dei verbi B1.
const irregularParticiplePairs = `
abfahren|abgefahren abfliegen|abgeflogen abgeben|abgegeben abheben|abgehoben abhängen|abgehangen ablesen|abgelesen abnehmen|abgenommen abraten|abgeraten abschließen|abgeschlossen abziehen|abgezogen
anbieten|angeboten anfangen|angefangen angehen|angegangen anhaben|angehabt ankommen|angekommen anlassen|angelassen annehmen|angenommen anrufen|angerufen anschließen|angeschlossen ansehen|angesehen ansprechen|angesprochen anstehen|angestanden anziehen|angezogen
auffallen|aufgefallen aufgeben|aufgegeben aufhalten|aufgehalten aufhängen|aufgehängt aufladen|aufgeladen aufschlagen|aufgeschlagen aufschreiben|aufgeschrieben aufstehen|aufgestanden auftreten|aufgetreten aufwachsen|aufgewachsen
ausdenken|ausgedacht ausgeben|ausgegeben ausgehen|ausgegangen ausgleichen|ausgeglichen aushalten|ausgehalten auskennen|ausgekannt ausladen|ausgeladen ausleihen|ausgeliehen ausschlafen|ausgeschlafen aussehen|ausgesehen aussprechen|ausgesprochen aussteigen|ausgestiegen aussterben|ausgestorben ausziehen|ausgezogen
backen|gebacken bedenken|bedacht begeben|begeben beginnen|begonnen behalten|behalten bekommen|bekommen benehmen|benommen beraten|beraten beschreiben|beschrieben besitzen|besessen bestehen|bestanden betragen|betragen betreiben|betrieben betrügen|betrogen beweisen|bewiesen bewerben|beworben beziehen|bezogen bieten|geboten binden|gebunden bitten|gebeten bleiben|geblieben brechen|gebrochen brennen|gebrannt bringen|gebracht
denken|gedacht drankommen|drangekommen einbringen|eingebracht einfallen|eingefallen eingeben|eingegeben eingehen|eingegangen einhalten|eingehalten einladen|eingeladen einnehmen|eingenommen einschlafen|eingeschlafen einschlagen|eingeschlagen einsteigen|eingestiegen eintragen|eingetragen einwerfen|eingeworfen einziehen|eingezogen
empfangen|empfangen empfehlen|empfohlen entlanggehen|entlanggegangen entnehmen|entnommen entscheiden|entschieden entsprechen|entsprochen entstehen|entstanden entwerfen|entworfen erfahren|erfahren erfinden|erfunden erhalten|erhalten erkennen|erkannt erraten|erraten erscheinen|erschienen erschießen|erschossen erschließen|erschlossen erschrecken|erschrocken essen|gegessen fahren|gefahren fallen|gefallen fernsehen|ferngesehen finden|gefunden fliegen|geflogen fliehen|geflohen fressen|gefressen
geben|gegeben gefallen|gefallen gehen|gegangen gelingen|gelungen gelten|gegolten genießen|genossen geraten|geraten geschehen|geschehen gewinnen|gewonnen gießen|gegossen greifen|gegriffen gutschreiben|gutgeschrieben halten|gehalten heben|gehoben heimkommen|heimgekommen heißen|geheißen helfen|geholfen herankommen|herangekommen herausfinden|herausgefunden herausnehmen|herausgenommen herunterladen|heruntergeladen hierherkommen|hierhergekommen hinaufgehen|hinaufgegangen hineingehen|hineingegangen hinfahren|hingefahren hingehen|hingegangen hinsehen|hingesehen hinterlassen|hinterlassen hochladen|hochgeladen hochziehen|hochgezogen hängen|gehangen kennen|gekannt klarkommen|klargekommen klingen|geklungen kommen|gekommen laden|geladen lassen|gelassen laufen|gelaufen leihen|geliehen lesen|gelesen liegen|gelegen losfahren|losgefahren losgehen|losgegangen lügen|gelogen melken|gemolken messen|gemessen mitbringen|mitgebracht mithelfen|mitgeholfen mitlesen|mitgelesen mitnehmen|mitgenommen mitsingen|mitgesungen mögen|gemocht nachdenken|nachgedacht nachgeben|nachgegeben nehmen|genommen nennen|genannt raten|geraten rausgehen|rausgegangen reiten|geritten rennen|gerannt riechen|gerochen rufen|gerufen scheinen|geschienen schiefgehen|schiefgegangen schießen|geschossen schlafen|geschlafen schlagen|geschlagen schließen|geschlossen schmelzen|geschmolzen schneiden|geschnitten schreiben|geschrieben schweigen|geschwiegen schwimmen|geschwommen sehen|gesehen sein|gewesen singen|gesungen sitzen|gesessen sprechen|gesprochen springen|gesprungen stattfinden|stattgefunden stechen|gestochen stehen|gestanden stehlen|gestohlen steigen|gestiegen sterben|gestorben stinken|gestunken streiten|gestritten teilnehmen|teilgenommen tragen|getragen treffen|getroffen trinken|getrunken umsehen|umgesehen umsteigen|umgestiegen umziehen|umgezogen unterhalten|unterhalten unternehmen|unternommen unterschreiben|unterschrieben unterstreichen|unterstrichen verbinden|verbunden verbringen|verbracht vergehen|vergangen vergessen|vergessen vergleichen|verglichen vergraben|vergraben verhalten|verhalten verlaufen|verlaufen verlieren|verloren vermeiden|vermieden vernehmen|vernommen verraten|verraten verschieben|verschoben verschlafen|verschlafen verschreiben|verschrieben verschwinden|verschwunden versprechen|versprochen verstehen|verstanden verzeihen|verziehen vorbeifliegen|vorbeigeflogen vorbeigehen|vorbeigegangen vorgehen|vorgegangen vorkommen|vorgekommen vorlesen|vorgelesen vornehmen|vorgenommen vorschlagen|vorgeschlagen vorsingen|vorgesungen vortragen|vorgetragen wachsen|gewachsen waschen|gewaschen wegfahren|weggefahren weggehen|weggegangen weglassen|weggelassen wegwerfen|weggeworfen wegziehen|weggezogen weitergeben|weitergegeben weiterhelfen|weitergeholfen weiterlesen|weitergelesen weiterschreiben|weitergeschrieben werben|geworben werden|geworden werfen|geworfen widersprechen|widersprochen wiederfinden|wiedergefunden wissen|gewusst zerreißen|zerrissen ziehen|gezogen zugehen|zugegangen zunehmen|zugenommen zurückgehen|zurückgegangen zurückkommen|zurückgekommen zurückrufen|zurückgerufen zuwenden|zugewandt zwingen|gezwungen übernehmen|übernommen übersehen|übersehen überweisen|überwiesen überwinden|überwunden
`.trim();
const irregularParticipleForms = Object.fromEntries(
  irregularParticiplePairs.split(/\s+/).map((pair) => pair.split("|"))
);
Object.assign(irregularParticipleForms, {
  haben: "gehabt", tun: "getan", wollen: "gewollt", "spazieren gehen": "spazieren gegangen",
  wehtun: "wehgetan", leidtun: "leidgetan", wiederholen: "wiederholt", erschrecken: "erschrocken / erschreckt",
  zusammenbrechen: "zusammengebrochen", zusammentreffen: "zusammengetroffen",
  zurückerhalten: "zurückerhalten", fangen: "gefangen", zerbrechen: "zerbrochen"
});

const separablePrefixes = [
  "durcheinander", "auseinander", "herein", "heraus", "heran", "hierher", "hinauf", "hinein",
  "entlang", "vorbei", "zurück", "zusammen", "weiter", "wohl", "hoch", "heim", "los", "mit", "nach",
  "weg", "hinzu", "hin", "her", "ab", "an", "auf", "aus", "bei", "ein", "fest", "fort", "raus",
  "rein", "um", "vor", "zu", "wieder"
];
const inseparablePrefixes = ["be", "emp", "ent", "er", "ge", "miss", "ver", "zer", "über", "unter"];
const verbRowsWithParticiple = new Set(["tanzen", "singen", "kochen", "schwimmen"]);

function verbInfinitive(target) {
  const phrase = target.toLocaleLowerCase("de").split(";")[0]
    .replace(/\s+(?:an|auf|aus|bei|für|gegen|in|mit|nach|über|um|unter|von|vor|zu)\s*\+\s*(?:akk\.|dat\.)\s*$/i, "")
    .replace(/\s*\+\s*(?:akk\.|dat\.)\s*$/i, "")
    .replace(/\s+(?:an|auf|aus|bei|für|gegen|in|mit|nach|über|um|unter|von|vor|zu)\s*$/i, "")
    .trim();
  if (phrase.startsWith("es geht")) return "gehen";
  if (phrase === "spazieren gehen") return phrase;
  const tokens = phrase.match(/[a-zäöüß]+/g) || [];
  const candidates = tokens.filter((token) => token.endsWith("en") || token.endsWith("eln") || token.endsWith("ern") || token === "sein" || token === "tun");
  return candidates[candidates.length - 1] || tokens[tokens.length - 1] || phrase;
}

function weakParticiple(verb) {
  const stem = verb.endsWith("eln") || verb.endsWith("ern") ? verb.slice(0, -1) : verb.slice(0, -2);
  const needsE = /(?:[dt]|gn|fn|chn|tm|dn|kn)$/.test(stem);
  return `${stem}${needsE ? "et" : "t"}`;
}

function makeParticiple(verb) {
  if (irregularParticipleForms[verb]) return irregularParticipleForms[verb];
  if (verb.endsWith("ieren")) return `${verb.slice(0, -2)}t`;
  const prefix = separablePrefixes.find((candidate) => verb.startsWith(candidate) && verb.length > candidate.length + 2);
  if (prefix) {
    const root = verb.slice(prefix.length);
    return `${prefix}${irregularParticipleForms[root] || makeParticiple(root)}`;
  }
  const hasInseparablePrefix = inseparablePrefixes.some((candidate) => verb.startsWith(candidate));
  return `${hasInseparablePrefix ? "" : "ge"}${weakParticiple(verb)}`;
}

const addStableWords = (category, rows, lesson = 16) => {
  for (const [slug, it, de, plural = ""] of rows) {
    window.VOCABULARY.push({ id: `l${lesson}-${slug}`, it, de, plural, category });
  }
};

addStableWords("Verbi", [
  ["verb-zerbrechen", "rompere; spezzare", "zerbrechen"], ["verb-fangen", "catturare; prendere", "fangen"],
  ["verb-gebrauchen", "usare; servirsi di", "gebrauchen"], ["verb-verschmutzen", "sporcare", "verschmutzen"],
  ["verb-festnehmen", "arrestare", "festnehmen"], ["verb-pflanzen", "piantare", "pflanzen"],
  ["verb-aufnehmen", "registrare (audio)", "aufnehmen"], ["verb-loeschen", "cancellare; eliminare", "löschen"],
  ["verb-oeffnen", "aprire", "öffnen"], ["verb-zubereiten", "preparare (un pasto)", "zubereiten"],
  ["verb-verbrauchen", "consumare", "verbrauchen"], ["verb-beeinflussen", "influenzare", "beeinflussen"],
  ["verb-foerdern", "favorire; promuovere", "fördern"], ["verb-verzichten", "rinunciare a", "verzichten auf + Akk."],
  ["verb-probieren", "assaggiare; provare", "probieren"], ["verb-kosten", "assaggiare (gustare)", "kosten"],
  ["verb-ernaehren", "alimentarsi", "sich ernähren"]
]);

addStableWords("Aggettivi", [
  ["adj-frisch", "fresco", "frisch"], ["adj-tiefgekuehlt", "surgelato", "tiefgekühlt"],
  ["adj-fettarm", "povero di grassi", "fettarm"], ["adj-fettreich", "ricco di grassi", "fettreich"],
  ["adj-gesund", "sano", "gesund"], ["adj-ungesund", "malsano", "ungesund"],
  ["adj-nachhaltig", "sostenibile", "nachhaltig"], ["adj-umweltfreundlich", "rispettoso dell'ambiente", "umweltfreundlich"],
  ["adj-lokal", "locale", "lokal"], ["adj-regional", "regionale; a chilometro zero", "regional"],
  ["adj-vegan", "vegano (aggettivo)", "vegan"], ["adj-vegetarisch", "vegetariano (aggettivo)", "vegetarisch"],
  ["adj-koestlich", "squisito", "köstlich"], ["adj-geschmacklos", "insapore", "geschmacklos"],
  ["adj-scharf", "piccante", "scharf"], ["adj-sauer", "acido", "sauer"],
  ["adj-salzig", "salato", "salzig"], ["adj-satt", "sazio", "satt"]
]);

addStableWords("Alimentazione", [
  ["food-ernaehrung", "l'alimentazione", "die Ernährung"],
  ["food-essgewohnheit", "l'abitudine alimentare", "die Essgewohnheit", "die Essgewohnheiten"],
  ["food-trend", "la tendenza", "der Trend", "die Trends"],
  ["food-veganismus", "il veganismo", "der Veganismus"], ["food-vegetarismus", "il vegetarianismo", "der Vegetarismus"],
  ["food-vegetarier", "il vegetariano", "der Vegetarier", "die Vegetarier"], ["food-veganer", "il vegano", "der Veganer", "die Veganer"],
  ["food-allesesser", "l'onnivoro", "der Allesesser", "die Allesesser"], ["food-fleischesser", "il carnivoro", "der Fleischesser", "die Fleischesser"],
  ["food-fitness-influencer", "l'influencer del fitness", "der Fitness-Influencer", "die Fitness-Influencer"],
  ["food-konsument", "il consumatore attento ai prezzi", "der preisbewusste Konsument", "die preisbewussten Konsumenten"],
  ["food-zeitmanagement", "la gestione del tempo", "das Zeitmanagement"], ["food-fast-food", "il fast food", "das Fast Food"],
  ["food-slow-food", "lo slow food", "das Slow Food"], ["food-bio-produkt", "il prodotto biologico", "das Bio-Produkt", "die Bio-Produkte"],
  ["food-insekt", "l'insetto", "das Insekt", "die Insekten"], ["food-fleischsteuer", "la tassa sulla carne", "die Fleischsteuer", "die Fleischsteuern"],
  ["food-diaet", "la dieta", "die Diät", "die Diäten"], ["food-zukunftsnahrung", "il cibo del futuro", "die Zukunftsnahrung"],
  ["food-zutat", "l'ingrediente", "die Zutat", "die Zutaten"], ["food-kalorie", "la caloria", "die Kalorie", "die Kalorien"],
  ["food-bio-bauer", "l'agricoltore biologico", "der Bio-Bauer", "die Bio-Bauern"],
  ["food-naehrstoff", "il nutriente", "der Nährstoff", "die Nährstoffe"], ["food-vitamin", "la vitamina", "das Vitamin", "die Vitamine"],
  ["food-nachhaltigkeit", "la sostenibilità", "die Nachhaltigkeit"],
  ["food-umweltbelastung", "l'impatto ambientale", "die Umweltbelastung", "die Umweltbelastungen"],
  ["food-massentierhaltung", "l'allevamento intensivo", "die Massentierhaltung"], ["food-tierschutz", "la tutela degli animali", "der Tierschutz"],
  ["food-lebensmittelverschwendung", "lo spreco alimentare", "die Lebensmittelverschwendung"],
  ["food-genuss", "il piacere del cibo", "der Genuss"], ["food-schlechtes-gewissen", "il senso di colpa", "das schlechte Gewissen"]
]);

addStableWords("Aggettivi", [
  ["adj-zu-feucht", "troppo umido", "zu feucht"]
], 17);

addStableWords("Verbi", [
  ["verb-sich-lohnen", "valere la pena", "sich lohnen"]
], 17);

for (const word of window.VOCABULARY) {
  if (word.category !== "Verbi" && !verbRowsWithParticiple.has(word.de)) continue;
  word.category = "Verbi";
  word.participlePrompt = word.de.toLocaleLowerCase("de").split(";")[0]
    .replace(/\s+(?:an|auf|aus|bei|für|gegen|in|mit|nach|über|um|unter|von|vor|zu)\s*\+\s*(?:akk\.|dat\.)\s*$/i, "")
    .replace(/\s*\+\s*(?:akk\.|dat\.)\s*$/i, "")
    .replace(/\s+(?:an|auf|aus|bei|für|gegen|in|mit|nach|über|um|unter|von|vor|zu)\s*$/i, "")
    .trim();
  word.participle = makeParticiple(verbInfinitive(word.de));
}

const addGrammarQuestions = (rows) => {
  for (const [id, instruction, prompt, answer, explanation] of rows) {
    window.VOCABULARY.push({
      id: `g-${id}`,
      it: prompt,
      de: answer,
      plural: "",
      category: "Grammatica",
      grammarQuestion: true,
      grammarInstruction: instruction,
      grammarPrompt: prompt,
      grammarAnswer: answer,
      grammarExplanation: explanation
    });
  }
};

addGrammarQuestions([
  ["case-nominative", "RICONOSCI IL CASO", "Chi compie l'azione?", "Nominativ", "Il nominativo indica il soggetto della frase."],
  ["case-accusative", "RICONOSCI IL CASO", "Chi o che cosa subisce direttamente l'azione?", "Akkusativ", "L'accusativo indica il complemento oggetto diretto."],
  ["case-dative", "RICONOSCI IL CASO", "A chi o a che cosa è destinata un'azione?", "Dativ", "Il dativo indica spesso il complemento di termine o il destinatario."],
  ["case-genitive", "RICONOSCI IL CASO", "A quale domanda risponde il complemento che indica possesso o appartenenza?", "Genitiv — Wessen?", "Il genitivo indica di chi o di che cosa si parla."],
  ["case-example-nominative", "RICONOSCI IL CASO", "In «Der Mann schenkt der Frau einen Ring», qual è il caso di «der Mann»?", "Nominativ", "Der Mann è il soggetto: compie l'azione."],
  ["case-example-dative", "RICONOSCI IL CASO", "In «Der Mann schenkt der Frau einen Ring», qual è il caso di «der Frau»?", "Dativ", "Der Frau è la destinataria del regalo: a chi?"],
  ["case-example-accusative", "RICONOSCI IL CASO", "In «Der Mann schenkt der Frau einen Ring», qual è il caso di «einen Ring»?", "Akkusativ", "Einen Ring è l'oggetto regalato: che cosa?"],
  ["case-example-genitive", "RICONOSCI IL CASO", "In «Das ist das Auto des Mannes», qual è il caso di «des Mannes»?", "Genitiv", "Des Mannes indica a chi appartiene l'auto: di chi?"],
  ["article-acc-m", "COMPLETA L'ARTICOLO", "Ich habe ___ Tisch gekauft. (der Tisch · accusativo maschile)", "den", "L'articolo determinativo maschile passa da der a den all'accusativo."],
  ["article-dat-m", "COMPLETA L'ARTICOLO", "Ich spreche mit ___ Mann. (der Mann · dativo maschile)", "dem", "L'articolo determinativo maschile al dativo è dem."],
  ["article-dat-f", "COMPLETA L'ARTICOLO", "Ich spreche mit ___ Frau. (die Frau · dativo femminile)", "der", "L'articolo determinativo femminile al dativo è der."],
  ["article-dat-p", "COMPLETA L'ARTICOLO", "Ich spiele mit ___ Kindern. (die Kinder · dativo plurale)", "den", "L'articolo determinativo al dativo plurale è den; al sostantivo si aggiunge spesso -n, se non la possiede già."],
  ["article-gen-m", "COMPLETA L'ARTICOLO", "Die Farbe ___ Tisches. (der Tisch · genitivo maschile)", "des", "L'articolo maschile al genitivo è des; il sostantivo prende -(e)s."],
  ["article-gen-f", "COMPLETA L'ARTICOLO", "Das Auto ___ Frau. (die Frau · genitivo femminile)", "der", "L'articolo femminile al genitivo è der."],
  ["declension-weak-choice", "SCEGLI LA DECLINAZIONE", "Dopo «der/die/das» o «dieser/diese/dieses», quale declinazione dell'aggettivo si usa?", "Debole — schwache Deklination", "Gli articoli determinativi e dimostrativi precedono la declinazione debole."],
  ["declension-mixed-choice", "SCEGLI LA DECLINAZIONE", "Dopo «ein», «kein» o un aggettivo possessivo, quale declinazione si usa?", "Mista — gemischte Deklination", "Ein-, kein- e i possessivi hanno desinenze proprie; l'aggettivo completa le informazioni mancanti."],
  ["declension-strong-choice", "SCEGLI LA DECLINAZIONE", "Se l'aggettivo precede il nome senza articolo, quale declinazione si usa?", "Forte — starke Deklination", "Senza articolo, l'aggettivo porta le desinenze che indicano genere, numero e caso."],
  ["adjective-predicative", "RICORDA LA REGOLA", "In «Die Tasche ist rot», quale desinenza prende «rot»?", "Nessuna: «rot» resta invariato", "L'aggettivo è predicativo, dopo il verbo: non si declina. Davanti al nome sarebbe «die rote Tasche»."],
  ["comparative-formation", "RICORDA LA REGOLA", "Come si forma di solito il comparativo di un aggettivo?", "Radice dell'aggettivo + -er (klein → kleiner)", "La lezione presenta il suffisso -er per il comparativo."],
  ["comparative-as", "COMPLETA LA REGOLA", "Per dire «più ... di» si usa il comparativo seguito da quale parola?", "als", "Esempio della lezione: Deine Tasche ist schöner als meine."],
  ["comparative-umlaut", "COMPLETA LA FRASE", "Mein ___ Bruder lebt in Deutschland. (jung · comparativo)", "jüngerer", "Jung forma il comparativo jünger; dopo mein, al nominativo maschile, l'aggettivo aggiunge -er."],
  ["comparative-weak-ending", "COMPLETA LA DESINENZA", "Deine ___ Tasche ist teuer. (schön · comparativo, nominativo femminile)", "schönere", "Il comparativo schöner riceve anche la desinenza mista -e dopo deine."],
  ["comparative-mixed-ending", "COMPLETA LA DESINENZA", "Ich habe einen ___ Pullover gekauft. (billig · comparativo, accusativo maschile)", "billigeren", "Billig diventa billiger; dopo einen l'aggettivo attributivo prende -en."],
  ["comparative-gut", "RICORDA LA FORMA IRREGOLARE", "Qual è il comparativo di «gut»?", "besser", "Gut forma il comparativo in modo irregolare: besser."],
  ["comparative-gern", "RICORDA LA FORMA IRREGOLARE", "Qual è il comparativo di «gern»?", "lieber", "Gern forma il comparativo in modo irregolare: lieber."],
  ["comparative-viel", "RICORDA LA FORMA IRREGOLARE", "Qual è il comparativo di «viel»?", "mehr", "Viel forma il comparativo in modo irregolare: mehr."],
  ["superlative-formation", "RICORDA LA REGOLA", "Come si forma di solito il superlativo predicativo?", "am + aggettivo + -(e)sten (am schönsten)", "La lezione usa am più la forma in -sten; in alcuni casi si inserisce una e."],
  ["superlative-am", "RICORDA LA REGOLA", "Che cosa significa la forma contratta «am» nel superlativo?", "an dem", "La slide spiega am come contrazione di an dem."],
  ["superlative-attributive", "COMPLETA LA DESINENZA", "Der ___ Zug der Welt fährt sehr schnell. (schnell · superlativo, nominativo maschile)", "schnellste", "Il superlativo attributivo è seguito dalla normale desinenza aggettivale: dopo der, -e."],
  ["superlative-gut", "RICORDA LA FORMA IRREGOLARE", "Qual è il superlativo di «gut» nella forma con am?", "am besten", "La forma è irregolare: gut – besser – am besten."],
  ["superlative-gern", "RICORDA LA FORMA IRREGOLARE", "Qual è il superlativo di «gern» nella forma con am?", "am liebsten", "La forma è irregolare: gern – lieber – am liebsten."],
  ["superlative-viel", "RICORDA LA FORMA IRREGOLARE", "Qual è il superlativo di «viel» nella forma con am?", "am meisten", "La forma è irregolare: viel – mehr – am meisten."],
  ["participle-attribute-rule", "RICORDA LA REGOLA", "Come si declina un participio passato usato prima di un sostantivo?", "Come un aggettivo attributivo", "Il participio II attributivo riceve la desinenza richiesta da articolo, caso, genere e numero."],
  ["participle-attribute-weak-f", "COMPLETA LA DESINENZA", "Die ___ Pasta ist auf dem Tisch. (kochen → Partizip II · nominativo femminile)", "gekochte", "Dopo die al nominativo femminile, il participio attributivo prende -e."],
  ["participle-attribute-mixed-m", "COMPLETA LA DESINENZA", "Ein ___ Mann ist bei der Polizei. (festnehmen → Partizip II · nominativo maschile)", "festgenommener", "Dopo ein al nominativo maschile, il participio attributivo prende -er."],
  ["participle-attribute-weak-pl", "COMPLETA LA DESINENZA", "Die ___ Hausaufgaben waren schwierig. (korrigieren → Partizip II · plurale)", "korrigierten", "Dopo die al plurale, il participio attributivo prende -en."],
  ["participle-attribute-weak-n", "COMPLETA LA DESINENZA", "Das ___ Handy gehört dem Mann. (stehlen → Partizip II · nominativo neutro)", "gestohlene", "Dopo das al nominativo neutro, il participio attributivo prende -e."],
  ["participle-attribute-dative-m", "COMPLETA LA DESINENZA", "Das Kind spielt mit dem ___ Hund. (fangen → Partizip II · dativo maschile)", "gefangenen", "Nel dativo dopo dem, l'aggettivo attributivo prende -en."],
  ["participle-attribute-dative-f", "COMPLETA LA DESINENZA", "Sie trinkt aus der ___ Tasse. (zerbrechen → Partizip II · dativo femminile)", "zerbrochenen", "Nel dativo dopo der, l'aggettivo attributivo prende -en."],
  ["participle-attribute-mixed-n", "COMPLETA LA DESINENZA", "Er kauft ein ___ Handy. (gebrauchen → Partizip II · accusativo neutro)", "gebrauchtes", "Dopo ein all'accusativo neutro, il participio attributivo prende -es."],
  ["participle-attribute-mixed-pl", "COMPLETA LA DESINENZA", "Deine ___ Kleider sind in der Waschmaschine. (waschen → Partizip II · plurale)", "gewaschenen", "Al plurale dopo deine, il participio attributivo prende -en."],
  ["participle-attribute-acc-m", "COMPLETA LA DESINENZA", "Wir suchen den ___ Schlüssel. (verlieren → Partizip II · accusativo maschile)", "verlorenen", "Dopo den all'accusativo maschile, il participio attributivo prende -en."],

  ["weak-nom-m", "COMPLETA LA DESINENZA", "Der ___ Tisch ist billig. (klein · nominativo maschile)", "kleine", "Declinazione debole dopo der: nominativo maschile in -e."],
  ["weak-nom-f", "COMPLETA LA DESINENZA", "Die ___ Tasche ist teuer. (rot · nominativo femminile)", "rote", "Declinazione debole dopo die: nominativo femminile in -e."],
  ["weak-nom-n", "COMPLETA LA DESINENZA", "Das ___ Kind spielt im Garten. (süß · nominativo neutro)", "süße", "Declinazione debole dopo das: nominativo neutro in -e."],
  ["weak-nom-p", "COMPLETA LA DESINENZA", "Diese ___ Studenten haben die Prüfung bestanden. (gut · nominativo plurale)", "guten", "Con un articolo dimostrativo al plurale, l'aggettivo prende -en."],
  ["weak-acc-m", "COMPLETA LA DESINENZA", "Ich habe den ___ Tisch gekauft. (klein · accusativo maschile)", "kleinen", "Nell'accusativo maschile dopo den, l'aggettivo debole prende -en."],
  ["weak-acc-f", "COMPLETA LA DESINENZA", "Wie findest du die ___ Tasche? (rot · accusativo femminile)", "rote", "L'accusativo femminile dopo die è una delle cinque forme deboli in -e."],
  ["weak-acc-p", "COMPLETA LA DESINENZA", "Der Professor hat diese ___ Studenten getroffen. (gut · accusativo plurale)", "guten", "Al plurale, dopo diese, l'aggettivo debole prende -en."],
  ["weak-dat-n", "COMPLETA LA DESINENZA", "Ich habe mit dem ___ Kind gespielt. (süß · dativo neutro)", "süßen", "Nel dativo, dopo un articolo determinativo, l'aggettivo debole prende sempre -en."],
  ["weak-gen-p", "COMPLETA LA DESINENZA", "Die hohen Noten dieser ___ Studenten. (gut · genitivo plurale)", "guten", "Nel genitivo dopo dieser, l'aggettivo debole prende -en."],

  ["mixed-nom-m", "COMPLETA LA DESINENZA", "Ein ___ Tisch kostet zu viel. (klein · nominativo maschile)", "kleiner", "Dopo ein al nominativo maschile, l'aggettivo aggiunge -er per segnalare il genere."],
  ["mixed-nom-f", "COMPLETA LA DESINENZA", "Eine ___ Frau wohnt auf dem Land. (alt · nominativo femminile)", "alte", "Dopo eine al nominativo femminile, l'aggettivo prende -e."],
  ["mixed-nom-n", "COMPLETA LA DESINENZA", "Mein ___ Kind wird fünf Jahre alt. (süß · nominativo neutro)", "süßes", "Il possessivo mein non mostra la desinenza del neutro: l'aggettivo prende -es."],
  ["mixed-nom-p", "COMPLETA LA DESINENZA", "Das sind keine ___ Eltern. (streng · nominativo plurale)", "strengen", "Al plurale, dopo keine, l'aggettivo misto prende -en."],
  ["mixed-acc-m", "COMPLETA LA DESINENZA", "Ich habe einen ___ Tisch gekauft. (klein · accusativo maschile)", "kleinen", "Dopo einen all'accusativo maschile, l'aggettivo prende -en."],
  ["mixed-acc-f", "COMPLETA LA DESINENZA", "Heute habe ich eine ___ Tasche weggeworfen. (alt · accusativo femminile)", "alte", "Dopo eine all'accusativo femminile, l'aggettivo prende -e."],
  ["mixed-acc-n", "COMPLETA LA DESINENZA", "Ich habe ein ___ Auto gekauft. (sportlich · accusativo neutro)", "sportliches", "Ein non mostra la desinenza del neutro: l'aggettivo prende -es."],
  ["mixed-acc-p", "COMPLETA LA DESINENZA", "Ich verkaufe meine ___ Kuchen. (lecker · accusativo plurale)", "leckeren", "Al plurale dopo meine, l'aggettivo misto prende -en."],
  ["mixed-dat-f", "COMPLETA LA DESINENZA", "Ich habe deiner ___ Freundin einen Brief geschrieben. (nett · dativo femminile)", "netten", "Nel dativo, dopo un possessivo, l'aggettivo misto prende sempre -en."],
  ["mixed-dat-p", "COMPLETA LA DESINENZA", "Ich habe vor deinen ___ Eltern Angst. (streng · dativo plurale)", "strengen", "Nel dativo plurale, dopo deinen, l'aggettivo prende -en."],
  ["mixed-gen-m", "COMPLETA LA DESINENZA", "Die Farbe eines ___ Pullovers. (neu · genitivo maschile)", "neuen", "Nel genitivo dopo eines, l'aggettivo misto prende -en."],
  ["mixed-gen-f", "COMPLETA LA DESINENZA", "Das ist der Sohn einer ___ Mutter. (streng · genitivo femminile)", "strengen", "Nel genitivo dopo einer, l'aggettivo misto prende -en."],
  ["mixed-gen-n", "COMPLETA LA DESINENZA", "Die Wände meines ___ Hauses sind weiß. (alt · genitivo neutro)", "alten", "Nel genitivo dopo meines, l'aggettivo misto prende -en."],
  ["mixed-gen-p", "COMPLETA LA DESINENZA", "Die Prüfungen keiner ___ Studenten. (gut · genitivo plurale)", "guten", "Nel genitivo plurale dopo keiner, l'aggettivo misto prende -en."],

  ["strong-nom-m", "COMPLETA LA DESINENZA", "___ Mann infolge eines Unfalls. (verletzt · nominativo maschile)", "Verletzter", "Senza articolo, il nominativo maschile forte prende -er."],
  ["strong-nom-f", "COMPLETA LA DESINENZA", "___ Sängerin im Theater. (toll · nominativo femminile)", "Tolle", "Senza articolo, il nominativo femminile forte prende -e."],
  ["strong-nom-n", "COMPLETA LA DESINENZA", "___ Haus mit Pool. (groß · nominativo neutro)", "Großes", "Senza articolo, il nominativo neutro forte prende -es."],
  ["strong-nom-p", "COMPLETA LA DESINENZA", "___ Bauern protestieren auf dem Platz. (verärgert · nominativo plurale)", "Verärgerte", "Senza articolo, il nominativo plurale forte prende -e."],
  ["strong-acc-m", "COMPLETA LA DESINENZA", "Er bekam einen Preis für ___ Film. (best · accusativo maschile, senza articolo)", "besten", "Senza articolo, l'accusativo maschile forte prende -en."],
  ["strong-acc-f", "COMPLETA LA DESINENZA", "Eine Abstimmung für ___ Straße. (neu · accusativo femminile)", "neue", "Senza articolo, l'accusativo femminile forte prende -e."],
  ["strong-acc-n", "COMPLETA LA DESINENZA", "Es gibt ___ Wetter in Italien. (schön · accusativo neutro)", "schönes", "Senza articolo, l'accusativo neutro forte prende -es."],
  ["strong-acc-p", "COMPLETA LA DESINENZA", "Es gab ___ Stürme in Deutschland. (stark · accusativo plurale)", "starke", "Senza articolo, l'accusativo plurale forte prende -e."],
  ["strong-dat-m", "COMPLETA LA DESINENZA", "Ich habe ein Haus mit ___ Garten gekauft. (groß · dativo maschile)", "großem", "Senza articolo, il dativo maschile forte prende -em."],
  ["strong-dat-f", "COMPLETA LA DESINENZA", "Demonstrationen auf ___ Straße. (neu · dativo femminile)", "neuer", "Senza articolo, il dativo femminile forte prende -er."],
  ["strong-dat-n", "COMPLETA LA DESINENZA", "Ein Film mit ___ Bühnenbild. (best · dativo neutro)", "bestem", "Senza articolo, il dativo neutro forte prende -em."],
  ["strong-dat-p", "COMPLETA LA DESINENZA", "Es ist schwierig, mit ___ Eltern zu sprechen. (streng · dativo plurale)", "strengen", "Senza articolo, il dativo plurale forte prende -en."],
  ["strong-gen-m", "COMPLETA LA DESINENZA", "Die Blumen ___ Gartens. (neu · genitivo maschile)", "neuen", "Senza articolo, il genitivo maschile forte prende -en; il nome prende -(e)s."],
  ["strong-gen-f", "COMPLETA LA DESINENZA", "Die Kinder ___ Mutter sind erzogen. (streng · genitivo femminile)", "strenger", "Senza articolo, il genitivo femminile forte prende -er."],
  ["strong-gen-n", "COMPLETA LA DESINENZA", "Die Fenster ___ Hauses. (groß · genitivo neutro)", "großen", "Senza articolo, il genitivo neutro forte prende -en; il nome prende -(e)s."],
  ["strong-gen-p", "COMPLETA LA DESINENZA", "Die Sprache ___ Blumen ist die Liebe. (rot · genitivo plurale)", "roter", "Senza articolo, il genitivo plurale forte prende -er."],

  ["l17-word-wenige", "ARTIKELWÖRTER", "Come si dice «pochi/e»?", "wenige", "Wenig- si declina come un aggettivo senza articolo."],
  ["l17-word-ein-paar", "ARTIKELWÖRTER", "Come si dice «alcuni/e; un paio di»?", "ein paar", "Ein paar è un quantificatore plurale; l'aggettivo che segue usa la declinazione forte."],
  ["l17-word-solche", "ARTIKELWÖRTER", "Come si dice «tali; di questo tipo»?", "solche", "Solch- segue la declinazione dell'articolo determinativo."],
  ["l17-word-manche", "ARTIKELWÖRTER", "Come si dice «alcuni/e; certi/e»?", "manche", "Manch- compare, per esempio, in «Manche Menschen sind hochbegabt»."],
  ["l17-word-genug", "ARTIKELWÖRTER", "Come si dice «abbastanza; a sufficienza»?", "genug", "Esempio della lezione: «Hast du genug Geld?»."],
  ["l17-word-verschiedene", "ARTIKELWÖRTER", "Come si dice «diversi/e; vari/e»?", "verschiedene", "Verschieden- è tra gli articoli/parole determinanti della lezione."],
  ["l17-word-etwas", "ARTIKELWÖRTER", "Come si dice «qualcosa; un po' di»?", "etwas", "Etwas può indicare una cosa non precisata o una quantità non precisata."],
  ["l17-word-einige", "ARTIKELWÖRTER", "Come si dice «alcuni/e; parecchi/e»?", "einige", "Einig- è usato come quantificatore."],
  ["l17-word-weitere", "ARTIKELWÖRTER", "Come si dice «ulteriori; altri/e»?", "weitere", "Weiter- è tra le parole determinanti della lezione."],
  ["l17-word-viele", "ARTIKELWÖRTER", "Come si dice «molti/e»?", "viele", "Esempio della lezione: «Viele ausländische Facharbeiter ...»."],
  ["l17-word-sonstige", "ARTIKELWÖRTER", "Come si dice «altri/e; rimanenti»?", "sonstige", "Sonstig- è tra le parole determinanti presentate nella panoramica."],
  ["l17-word-etliche", "ARTIKELWÖRTER", "Come si dice «parecchi/e»?", "etliche", "Esempio della lezione: «etliche DDR-Bürger»."],
  ["l17-word-alle", "ARTIKELWÖRTER", "Come si dice «tutti/e»?", "alle", "Alle segue la declinazione dell'articolo determinativo al plurale."],
  ["l17-word-saemtliche", "ARTIKELWÖRTER", "Come si dice «tutti/e; l'intero insieme»?", "sämtliche", "Sämtliche segue la declinazione dell'articolo determinativo al plurale."],
  ["l17-word-andere", "ARTIKELWÖRTER", "Come si dice «altri/e»?", "andere", "Ander- è tra i quantificatori plurali che seguono la declinazione forte."],
  ["l17-word-mehrere", "ARTIKELWÖRTER", "Come si dice «diversi/e; numerosi/e»?", "mehrere", "Mehrere è un quantificatore plurale."],
  ["l17-word-beide", "ARTIKELWÖRTER", "Come si dice «entrambi/e»?", "beide", "Beid- segue la declinazione dell'articolo determinativo al plurale."],
  ["l17-word-jeder", "ARTIKELWÖRTER", "Come si dice «ogni; ciascuno/a»?", "jeder / jede / jedes", "Jed- segue la declinazione dell'articolo determinativo al singolare."],
  ["l17-word-dieser", "ARTIKELWÖRTER", "Come si dice «questo/a»?", "dieser / diese / dieses", "Dies- segue la declinazione dell'articolo determinativo."],
  ["l17-word-jener", "ARTIKELWÖRTER", "Come si dice «quello/a»?", "jener / jene / jenes", "Jen- segue la declinazione dell'articolo determinativo."],
  ["l17-word-folgende", "ARTIKELWÖRTER", "Come si dice «seguente»?", "folgend", "Esempio della lezione: «am folgenden Tag»."],
  ["l17-word-welcher", "ARTIKELWÖRTER", "Come si dice «quale»?", "welcher / welche / welches", "Welch- segue la declinazione dell'articolo determinativo."],
  ["l17-word-manch-ein", "ARTIKELWÖRTER", "Come si dice «più di un; un certo»?", "manch ein", "Manch ein segue la declinazione dell'articolo indeterminativo."],
  ["l17-word-irgendein", "ARTIKELWÖRTER", "Come si dice «un qualsiasi; un qualche»?", "irgendein", "Irgendein segue la declinazione dell'articolo indeterminativo."],
  ["l17-word-irgendwelche", "ARTIKELWÖRTER", "Come si dice «qualche; alcuni/e; qualsiasi»?", "irgendwelche", "Irgendwelch- segue la declinazione dell'articolo determinativo al plurale."],
  ["l17-word-kein", "ARTIKELWÖRTER", "Come si dice «nessun; nessuna»?", "kein", "Kein- segue la declinazione dell'articolo indeterminativo."],
  ["l17-word-viel", "ARTIKELWÖRTER", "Come si dice «molto/a; molti/e»?", "viel", "Con viel l'aggettivo che segue usa la declinazione forte: «viel leerem Geschwätz»."],
  ["l17-word-derjenige", "ARTIKELWÖRTER", "Come si dice «colui/colei/ciò che»?", "derjenige / diejenige / dasjenige", "Le forme concordano con ciò a cui si riferiscono; al plurale: diejenigen."],
  ["l17-term-artikelwort", "VOCABOLARIO GRAMMATICALE", "Come si dice «parola articolo; determinante»?", "das Artikelwort; plurale: die Artikelwörter", "È il termine usato nelle slide per parole come manch-, welch- e sämtliche."],
  ["l17-term-nullartikel", "VOCABOLARIO GRAMMATICALE", "Come si dice «articolo zero; assenza di articolo»?", "der Nullartikel", "Nullartikel indica che davanti al sostantivo non c'è un articolo determinativo o indeterminativo."],

  ["l17-singular-definite-pattern", "RICONOSCI LA DECLINAZIONE", "Quali parole determinanti seguono al singolare lo schema dell'articolo determinativo?", "manch-, jen-, folgend-, dies-, welch-, jed-", "L'aggettivo che segue usa la declinazione debole, come dopo der/die/das."],
  ["l17-singular-indefinite-pattern", "RICONOSCI LA DECLINAZIONE", "Quali parole determinanti seguono al singolare lo schema dell'articolo indeterminativo?", "manch ein-, kein-, irgendein-", "L'aggettivo che segue usa la declinazione mista, come dopo ein."],
  ["l17-singular-zero-pattern", "RICONOSCI LA DECLINAZIONE", "Dopo etwas, genug, viel e mehr, quale declinazione dell'aggettivo si usa?", "Forte, come con il Nullartikel", "Esempi della lezione: «genug schwierige Grammatikaufgaben» e «viel leerem Geschwätz»."],
  ["l17-plural-definite-pattern", "RICONOSCI LA DECLINAZIONE", "Quali parole determinanti plurali seguono lo schema dell'articolo determinativo?", "diejenigen-, dies-, irgendwelch-, jen-, solch-, beid-, alle, sämtliche, verschiedene", "L'aggettivo che segue usa la declinazione debole."],
  ["l17-plural-zero-pattern", "RICONOSCI LA DECLINAZIONE", "Quali quantificatori plurali seguono lo schema senza articolo?", "wenig-, ander-, einig-, ein paar, etlich-, zahlreich-, viele, mehrere", "L'aggettivo che segue usa la declinazione forte."],
  ["l17-example-mancher", "COMPLETA LA DESINENZA", "Mancher ___ Arbeitnehmer hat heutzutage Angst. (fleißig)", "fleißige", "Manch- segue la declinazione dell'articolo determinativo: al nominativo maschile l'aggettivo prende -e."],
  ["l17-example-kein", "COMPLETA LA DESINENZA", "Kein ___ Mensch würde mit dem Auto rasen. (vorsichtig)", "vorsichtiger", "Kein- segue la declinazione mista: al nominativo maschile l'aggettivo prende -er."],
  ["l17-example-alle", "COMPLETA LA DESINENZA", "Fast alle ___ Menschen müssen Steuern zahlen. (berufstätig)", "berufstätigen", "Alle segue la declinazione dell'articolo determinativo al plurale: l'aggettivo prende -en."]
]);
