# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Sito statico della casa vacanze Residenza Conti (Val di Chio, Castiglion Fiorentino), che sostituisce il vecchio sito WordPress. **Prima di ogni modifica leggere `residenzaconti.md`**: è il documento di progetto, con dati della struttura, obiettivi, vincoli GDPR e sicurezza, tono dei testi e istruzioni per Claude (§12).

## Regole operative (da residenzaconti.md §12)

- Tutto in italiano: risposte, commenti, commit. Comandi per l'utente in sintassi **PowerShell** (lavora su Windows).
- Modifiche grandi: prima un piano da approvare. **Chiedere prima di installare pacchetti.**
- Commit a lavoro finito; il push lo fa il proprietario, salvo richiesta esplicita.
- Non inventare dati della struttura (prezzi, distanze, recensioni, storia): lasciare `[DA FORNIRE]` (EN `[TO BE PROVIDED]`, DE `[FOLGT]`, FR `[À FOURNIR]`).
- Ogni testo nuovo va scritto in tutte e 4 le lingue (it, en, de, fr), oppure segnalato come da tradurre. Le traduzioni attuali EN/DE/FR sono bozze da far rivedere a una persona.

## Comandi

```powershell
npm run dev       # sviluppo, http://localhost:4321
npm run build     # astro check (tipi) + build statica in dist/
npm run preview   # serve dist/ (redirect vecchi URL inclusi)
node scripts/sync-ical.ts   # job iCal; richiede ICAL_URL e OUTPUT_FILE (dove farlo girare: da decidere, vedi Calendario)
```

Non ci sono test: la verifica è `npm run build`, con 0 errori di `astro check`. La prima build elabora tutte le foto (AVIF lento, ~2 min); le successive usano la cache in `node_modules/.astro`.

## Architettura

- **Routing unico**: `src/pages/[...percorso].astro` genera lingua × pagina in `getStaticPaths` e sceglie la vista in `src/views/`. Le chiavi pagina e gli slug tradotti stanno in `src/i18n/lingue.ts` (`ROTTE`). Per costruire un URL usare sempre `url(pagina, lang)`. L'italiano non ha prefisso; le altre lingue sono sotto `/en/`, `/de/`, `/fr/`.
- **Aggiungere una pagina**:
  1. voce in `ROTTE`;
  2. chiave `pag.<chiave>` nei 4 dizionari di `src/i18n/ui.ts`;
  3. `src/content/{it,en,de,fr}/<chiave>.md`;
  4. vista in `src/views/` e ramo in `[...percorso].astro`.
  
  `getStaticPaths` va in errore se manca un file di lingua.
- **Testi**:
  - Collezione `pagine` (`src/content.config.ts`, schema Zod): un `.md` per pagina e lingua. Il frontmatter contiene SEO (`seoTitolo`, `descrizione`), titoli e testi strutturati (la home è quasi tutta frontmatter; ordine delle sezioni in `src/views/Home.astro`: hero, valle, casa, spazio, storia, dintorni, recensioni, contatti); il corpo Markdown è la prosa.
  - Le etichette brevi dell'interfaccia sono in `src/i18n/ui.ts`: le chiavi sono tipizzate su `it`, quindi le altre lingue devono averle tutte.
- **Dati**:
  - `src/data/struttura.ts` è la fonte unica dei dati fattuali (indirizzo, telefono, CIN/CIR, Booking URL; stringa vuota = da fornire). I componenti nascondono le parti che dipendono da un dato vuoto, per esempio i pulsanti Booking.
  - JSON curati a mano in `src/content/` (`prezzi.json`, `recensioni.json`, `dintorni.json`), tipizzati in `src/data/contenuti.ts`.
- **Foto**: `src/assets/foto/{casa,giardino,piscina,...}/`, con catalogo e alt nelle 4 lingue in `src/data/foto.ts`. La build fallisce se una foto non ha la sua voce. L'hero usa `casa/00-casa-sera` (foto serale con le luci accese) se il file esiste, altrimenti `casa/01-casa-e-viale`. Si usano sempre con `<Foto id="area/nome" lang={lang} />` (Picture AVIF/WebP). Le foto dei dintorni del vecchio sito sono state escluse perché probabilmente coperte da copyright.
- **Calendario**: unico JavaScript del sito (`src/scripts/calendario.ts`). Legge `/disponibilita.json`, prodotto da `scripts/sync-ical.ts` (solo date occupate, link iCal mai nel repo). Il JSON non è nel repo. Con Cloudflare Pages non c'è un cron sul server: serve una Pages Function con cache o un Worker pianificato, ancora da scrivere. Senza file o senza JS resta un messaggio di ripiego.
- **CSP restrittiva** (`public/_headers`: `script-src 'self'; style-src 'self'`). Niente `style="..."`, `<style>` o script inline nel markup: i ritardi delle animazioni sono classi `nth-child` in `global.css`. La config Astro forza CSS e script in file esterni (`inlineStylesheets: 'never'`, `assetsInlineLimit: 0`). Unica eccezione ammessa: il JSON-LD di schema.org.
- **Stili**: tutto in `src/styles/global.css`, che parte dal CSS del prototipo Claude Design "Residenza Conti – prototipo sito", con palette cipresso/crema/legno/oro (variabili in `:root`; contrasti verificati WCAG AA). È mobile first, con breakpoint a 720, 1040 e 1240 px (menu completo solo da 1240). Le animazioni usano solo transform/opacity e sono tutte spente con `prefers-reduced-motion`. Font self-hosted in `public/fonts/` (OFL): Fraunces per i titoli, Parisienne solo per il nome nell'hero (`NomeHero.astro`), DM Sans per il testo.
- **Redirect dei vecchi URL WordPress**: `src/i18n/redirect.mjs` (per Astro) e `public/_redirects` (301 reali su Cloudflare Pages) vanno tenuti allineati.
- **Hosting**: Cloudflare Pages (build `npm run build`, cartella `dist`), dominio su IONOS. Header e cache in `public/_headers`.
