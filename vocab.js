/* Seed vocabulary: Italian, German, German plural (when useful). */
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
