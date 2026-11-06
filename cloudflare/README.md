# Backend di sincronizzazione

L'app resta ospitata su GitHub Pages. Questo Worker fornisce soltanto l'API per leggere e salvare i progressi; D1 conserva un documento per profilo. Il codice di sincronizzazione è una chiave casuale, senza account o password. Il Worker ne memorizza solo l'hash.

## Stato del servizio

Il database D1 `ripasso-b1-progress` è stato creato e la migrazione iniziale è applicata. Il Worker è pubblicato all'indirizzo `https://ripasso-b1-sync.de-learn.workers.dev`; `sync-config.js` punta già a questa API.

Per pubblicare modifiche future al Worker, dalla cartella del progetto esegui:

   ```sh
   npx wrangler deploy --config cloudflare/wrangler.jsonc
   ```

Per le modifiche alla PWA, pubblica il repository su GitHub Pages: il nuovo service worker aggiorna la cache alla versione 35.

Il piano gratuito Cloudflare comprende quote ampie per questa app personale. Se si supera una quota giornaliera, l'API restituisce un errore e l'app continua a salvare i progressi localmente.

## Avvio iniziale senza perdere i progressi

1. Apri Ripasso B1 sull'iPhone e scegli **Crea codice da questo dispositivo**. I progressi dell'iPhone diventano lo stato iniziale nel cloud.
2. Copia il codice mostrato.
3. Apri Ripasso B1 sul Mac, scegli **Collega a un codice esistente** e inseriscilo. I progressi locali del Mac vengono sostituiti dalla copia dell'iPhone.

In seguito entrambi i dispositivi leggono e aggiornano lo stesso profilo. Il codice va conservato e non condiviso: chi lo possiede può leggere e modificare quei progressi. Se il codice viene perso, il profilo cloud non può essere recuperato tramite un account.
