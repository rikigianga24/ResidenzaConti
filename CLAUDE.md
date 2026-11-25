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
npm run preview   # serve dist/ (senza i redirect dei vecchi URL, che li fa Cloudflare)
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
  - `dintorni.json` è **generato** da `python scripts/dati/costruisci_dintorni.py` (dati in `scripts/dati/schede_*.py` e `itinerari_nuovi.py`; non modificarlo a mano). Contiene le **schede** dei luoghi (coordinate, link ufficiale, km e minuti in auto da Taragnano) e i **quattro itinerari** (Toscana "borghi, tradizioni e sapori", Umbria, Toscana iconica, "Natura e movimento"): tappe (`facoltativa`, `giorno: 2` per la giornata alternativa), introduzione, sapori, consigli, fonti ufficiali, PDF. Km e minuti sono stime OSRM/OpenStreetMap senza traffico, arrotondate per eccesso a 5 min (servono rete: i risultati sono in `scripts/dati/cache_geo.json`). Le schede con `vetrina: true` compaiono anche in "Da non perdere". I testi della pagina (apertura, storia della valle, titoli SEO) sono in `guida` nel frontmatter di `dintorni.md`. I campi `null` non vanno inventati e non si mostrano; orari e biglietti non si riportano mai (si rimanda ai siti ufficiali). Lo stesso vale per le righe "[DA FORNIRE]" dei dati piscina in `home.md`: restano nel file ma la home le nasconde.
  - La pagina **La nostra storia** è una timeline: `timeline` nel frontmatter di `storia.md` (etichette al posto delle date: le date solo se documentate; la tradizione orale ha la sua `nota`).
- **Foto**: `src/assets/foto/{casa,giardino,piscina,...}/`, con catalogo e alt nelle 4 lingue in `src/data/foto.ts`. La build fallisce se una foto non ha la sua voce. L'hero è a tutta larghezza e usa `casa/00-casa-sera` (foto serale con le luci accese) se il file esiste, altrimenti `casa/05-viale-cipressi` (serve una foto orizzontale). Si usano sempre con `<Foto id="area/nome" lang={lang} />` (Picture AVIF/WebP). Le foto dei dintorni del vecchio sito sono state escluse perché probabilmente coperte da copyright.
- **Calendario**: unico JavaScript del sito (`src/scripts/calendario.ts`). Legge `/disponibilita.json`, prodotto da `scripts/sync-ical.ts` (solo date occupate, link iCal mai nel repo). Il JSON non è nel repo. Con Cloudflare Pages non c'è un cron sul server: serve una Pages Function con cache o un Worker pianificato, ancora da scrivere. Senza file o senza JS resta un messaggio di ripiego.
- **CSP restrittiva** (`public/_headers`: `script-src 'self'; style-src 'self'`). Niente `style="..."`, `<style>` o script inline nel markup: i ritardi delle animazioni sono classi `nth-child` in `global.css`. La config Astro forza CSS e script in file esterni (`inlineStylesheets: 'never'`, `assetsInlineLimit: 0`). Unica eccezione ammessa: il JSON-LD di schema.org.
- **Stili**: tutto in `src/styles/global.css`, redesign "rustico toscano + eleganza editoriale" (brief nel doc "ResidenzaConti Design"). Palette come token in `:root`: avorio, salvia, terracotta, pietra, bruno, bianco, più varianti scure (`--salvia-scuro`, `--terracotta-scuro`) usate per testo e pulsanti perché i colori del brief da soli non arrivano a contrasto AA. Niente oro. Mobile first, con breakpoint a 720, 1040 e 1240 px (menu completo solo da 1240). Animazioni solo transform/opacity (più il colore dell'header allo scroll), una sola volta e discrete, tutte spente con `prefers-reduced-motion`; la comparsa allo scroll è CSS puro (`animation-timeline: view()`), nessuna parallasse né animazioni continue. Font self-hosted in `public/fonts/` (OFL): Cormorant Garamond per i titoli, DM Sans per il testo (non più di due famiglie).
- **Logo**: monogramma RC in `src/assets/logo/logo-rc.png`, usato dal componente `Logo.astro` (header, hero della home, footer; WebP 1×/2× con trasparenza). Favicon e icone (`public/favicon.ico`, `favicon-32.png`, `apple-touch-icon.png`, `icon-192.png`) e `public/logo-rc.png` (dati strutturati) derivano dallo stesso file. Su telefono le lingue stanno nel menu perché la testata non ha spazio accanto a logo e nome.
- **Card fotografiche**: `src/components/CardFoto.astro` (foto a pieno riquadro, pannello semitrasparente in basso, senza foto diventa card di solo testo). **Galleria**: masonry a colonne CSS con filtri per categoria (`scripts/galleria.ts`, compaiono solo per le aree che hanno foto); una foto "grande" a tutta larghezza per area.
- **PDF degli itinerari**: `public/itinerari/*.pdf` (4 itinerari × 4 lingue, 1-2 pagine) sono file statici generati a mano con `python scripts/pdf/genera_itinerari.py` (serve `reportlab` per i QR code e `playwright` per la stampa; non fanno parte della build). Rigenerarli e ricommittarli quando cambia `dintorni.json`. La **mappa delle tappe** nella pagina Dintorni è un SVG schematico disegnato in build da `MappaItinerario.astro` (nessuna mappa di terzi, per CSP e GDPR); i pulsanti aprono il percorso su Google Maps.
- **Script del sito** (oltre al calendario): `src/scripts/header.ts` (header della home trasparente sulla foto, avorio allo scroll; senza JS vale `public/nojs.css`) e `src/scripts/lightbox.ts` (galleria e pagina La casa, `<dialog>` nativo; senza JS i link aprono la foto grande). Se una foto larga finisce in un riquadro stretto, impostare `pos` nella voce di `src/data/foto.ts` (classi `pos-*`, niente `style` inline).
- **Redirect dei vecchi URL WordPress**: solo in `public/_redirects`, una regola per percorso (Cloudflare tratta `/x` e `/x/` come lo stesso percorso). Non metterli anche in `redirects` di `astro.config.mjs`: l'adapter che Cloudflare aggiunge in deploy li accoda a `_redirects` e il deploy fallisce con "Duplicate rule".
- **Hosting**: Cloudflare Pages (build `npm run build`, cartella `dist`), dominio su IONOS. Header e cache in `public/_headers`.
