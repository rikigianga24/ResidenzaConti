# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Sito statico della casa vacanze Residenza Conti (Castiglion Fiorentino, AR), che sostituisce il vecchio sito WordPress su www.residenzaconti.it. Costruito con Astro 7 (output statico) e TypeScript strict, senza framework UI né CSS esterni. Testi, commenti e nomi nel codice sono in italiano.

## Comandi

```bash
npm run dev       # server di sviluppo (http://localhost:4321)
npm run build     # astro check (tipi) + build statica in dist/
npm run preview   # serve dist/ in locale
npm run check     # solo controllo tipi
```

Non ci sono test: `npm run build` è la verifica di riferimento.

## Architettura

- **i18n**: italiano senza prefisso (`/`), inglese sotto `/en/` (config in `astro.config.mjs`). `src/i18n/ui.ts` contiene:
  - `rotte`: mappa chiave logica della pagina → slug per lingua (gli slug sono tradotti, es. `/appartamento` ↔ `/en/apartment`);
  - `ui`: dizionari dei testi, con chiavi tipizzate su `it`.
  
  Per aggiungere una pagina o un testo bisogna aggiornare entrambe le lingue.
- **Viste vs pagine**: il markup vive in `src/views/*.astro`, che riceve la prop `lang`. I file in `src/pages/` e `src/pages/en/` sono wrapper di una riga (`<V lang="it" />`). Aggiungere una pagina = vista + due wrapper + voce in `rotte` + chiave `nav.*` in `ui` (se va nel menu, anche in `Header.astro`).
- **Layout** `src/layouts/Base.astro`: gestisce canonical e `hreflang` (incluso `x-default`) a partire da `rotte`, quindi ogni pagina deve passare la sua chiave `pagina`.
- **Dati struttura** `src/data/struttura.ts`: fonte unica per i dati fattuali (m², posti letto, servizi, contatti). Le viste leggono da qui e non devono avere i dati scritti dentro.
- **Galleria** `src/components/Galleria.astro`: carica con `import.meta.glob` tutte le immagini in `src/assets/galleria/` (ordinate per nome file) e le ottimizza in build con `astro:assets` (webp, srcset). Per aggiungere foto basta copiarle nella cartella, senza ridurle a mano.
- **Redirect** dei vecchi URL WordPress (`/dettaglio`, `/en/dettaglio-appartamento`, `/en/contatti`) in `astro.config.mjs`: vanno mantenuti per la SEO.
- **Stili**: variabili in `src/styles/global.css`, il resto in `<style>` scoped nei componenti.

## Aperti (TODO nel codice)

- Il form contatti (`ContactForm.astro`) non ha ancora un backend: `action="#"`.
- Mancano i contatti reali, il CIN nel footer, i testi descrittivi e la mappa.
- La documentazione di prodotto arriverà in `residenzaconti.md`.
