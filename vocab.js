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
