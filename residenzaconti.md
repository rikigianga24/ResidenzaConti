# Residenza Conti – Documento di progetto del sito

> Contesto e istruzioni per costruire il nuovo sito residenzaconti.it.
> Chi lavora al progetto (anche Claude) legge questo file prima di ogni modifica.
> I campi `[DA FORNIRE]` vanno completati dal proprietario.

---

## 1. La struttura

**Residenza Conti** – casa vacanza in campagna, Val di Chio (Toscana).

- **Indirizzo:** Via Santa Cristina, loc. Taragnano 25 – 52043 Castiglion Fiorentino (AR)
- **Contatti:** tel/WhatsApp +39 347 517 6525 · info.residenzaconti@gmail.com
- **Social:** Instagram `residenza_conti` · TikTok `@residenzaconti`
- **Booking.com:** https://www.booking.com/hotel/it/residenza-conti-provincia-di-arezzo.it.html
- **CIN:** IT051012C2CPCFWOEM · **CIR:** 051012LTN0190

### L'alloggio
- Un appartamento al piano terra, 75 m², fino a 4 ospiti
- 2 camere matrimoniali, 1 bagno con la roccia originale lasciata a vista
- Soggiorno con angolo cottura che si apre sul portico
- Pavimenti in cotto fatto a mano, soffitti con travi di castagno secolari
- Mura spesse: la casa resta fresca d'estate (non c'è aria condizionata, va detto con onestà nelle FAQ)
- Animali non ammessi

### Servizi
- Piscina privata 6×3 m, con teli forniti
- Grande giardino tra gli olivi, con lettini e ombrelloni
- Barbecue, parcheggio, Wi-Fi, cucina attrezzata, welcome kit
- Check-in / check-out: 16:00 – 10:00
- Regole della casa:
  - Al check-in gli ospiti devono esibire un documento d'identità con foto e una carta di credito. Le richieste speciali sono soggette a disponibilità e potrebbero comportare un supplemento.
  - Gli ospiti devono comunicare in anticipo l'orario di arrivo previsto (nelle richieste speciali della prenotazione, o con i recapiti della conferma).
  - La struttura non è disponibile per feste di addio al nubilato/celibato o simili.
  - Gli ospiti di età inferiore ai 18 anni possono effettuare il check-in solo se accompagnati da un genitore o da un tutore legale.

### Cosa ci distingue (è il messaggio centrale del sito)

Il centro del sito è la valle e la tranquillità, la natura, le passeggiate e il rilassamento. La storia della casa è lo sfondo.

> Decisione del 24/11/2026: nel doc la frase qui sopra e l'elenco seguente si contraddicevano (l'elenco metteva la storia per prima e la valle «come sfondo»). Vale la frase: in home la valle e la natura vengono per prime, la storia è una sezione più in basso.

1. **La storia.** L'edificio era il piccolo castello di caccia della famiglia Conti, costruito in epoca romana. Si arriva da un viale di cipressi e la cappella di famiglia consacrata è proprio di fronte al portico. Da racconti orali:
   - dei patrizi romani possedevano questa casa come casa di caccia e di vacanza dalla frenesia di Roma;
   - la casa divenne poi un'abitazione dopo il sacco di Roma (il proprietario non ricorda se il primo o il secondo: nel sito si dice «uno dei sacchi di Roma»);
   - successivamente fu costruita una cappella e fu trovata una fonte di acqua sorgiva proveniente dalla collina, dentro al bosco: venne incanalata e tutt'ora è presente una sorgente di acqua potabile naturale;
   - la casa è stata abitata per secoli dalla famiglia Conti, famosa nella zona della valle per Leone Conti, proprietario terriero della zona, ma la discendenza è finita con Maria Conti, l'unica figlia femmina;
   - oggi a mantenere la casa c'è la generazione Bernardinello e Giangani: madre e figlio.
2. **La casa.** Cose vere e concrete: la roccia originale nel bagno, le travi di castagno secolari, il cotto fatto a mano, il portico, acqua sorgiva.
3. **Spazio.** Un giardino enorme, la piscina privata e gli ulivi del giardino sono a disposizione degli ospiti.
4. **La valle.** Una valle tranquilla e poco conosciuta, comoda per esplorare la zona: Castiglion Fiorentino, Montecchio, Cortona, Arezzo e la Valdichiana.
5. **La famiglia al piano di sopra, detto con discrezione.** I proprietari abitano al piano di sopra e aiutano quando serve, ma l'ospite ha la sua indipendenza. **Non va messo in evidenza** (niente titoli tipo "Ci siamo sempre", niente slogan): basta una riga tranquilla, per esempio *"Noi abitiamo al piano di sopra: se vi serve qualcosa, ci trovate."*

Motto: *"Valle di Chio… valle di Dio"*. Non è la prima frase del sito: sta in fondo alla sezione della valle.

### Ospite ideale
- Famiglie straniere e coppie
- Persone che la casa la vivono come base e passano la giornata a girare per borghi, vino e cibo, e la sera tornano in giardino o in piscina

---

## 2. Obiettivi del sito

- È una **vetrina**: il sito non vende né incassa.
- **Prima chiamata all'azione: WhatsApp / telefono**, perché la prenotazione diretta non ha commissioni. **Seconda: Booking.com**, per chi vuole prenotare lì.
- I pulsanti WhatsApp e Chiama sono sempre visibili: in basso su mobile, in alto nella testata su desktop.
- I link WhatsApp hanno un messaggio precompilato nella lingua della pagina, per esempio *"Ciao! Vorrei informazioni per un soggiorno dal … al … per … persone"*.
- Nessun pagamento online e nessun account utente.

---

## 3. Lingue

- **it** (predefinita), **en**, **de**, **fr**
- URL: `/` (it), `/en/`, `/de/`, `/fr/`, con selettore lingua sempre visibile
- Tag `hreflang` su tutte le pagine
- Testi tradotti a mano o rivisti da una persona, niente traduzione automatica a runtime
- Registro: IT e EN informali e caldi; DE con il *Sie* e FR con il *vous*, comunque con tono cordiale

---

## 4. Pagine e sezioni

| Pagina | Contenuto |
|---|---|
| **Home** | Hero (nome «Residenza Conti» in corsivo animato + foto serale della casa), fascia con i punti forti, la valle (vista, natura, passeggiate, rilassamento, motto), la casa in breve (stanze da sfogliare + note oneste + riga sui proprietari), fuori c'è spazio (servizi con icone), la storia (viale, cappella, portico), da qui si gira la zona (dintorni), recensioni in evidenza, CTA contatti |
| **La casa** | Dettaglio dell'alloggio, dotazioni, planimetria (facoltativa), galleria |
| **Galleria** | Foto divise per area (casa, giardino, piscina, dintorni, stagioni) |
| **La nostra storia** | Castello di caccia, viale di cipressi, cappella, famiglia Conti |
| **Dintorni** | Cosa fare: borghi, vino, cibo, passeggiate, eventi, con distanze e tempi in auto `[DA FORNIRE / da verificare]` |
| **Disponibilità e prezzi** | Calendario sincronizzato con Booking, tabella dei prezzi per stagione, CTA WhatsApp |
| **Recensioni** | Recensioni vere di Booking, con il punteggio e il link alla pagina Booking |
| **Come arrivare** | Mappa, indicazioni da aeroporti (Firenze, Pisa, Perugia, Roma) e stazione, ultimo tratto di strada sterrata se c'è `[DA FORNIRE]` |
| **FAQ** | Check-in, animali, aria condizionata, piscina (stagione e orari), parcheggio, spesa vicina, culle/lettini, tassa di soggiorno |
| **Contatti** | WhatsApp, telefono, email, indirizzo |
| **Privacy / Cookie** | Informative GDPR |

Nel footer, su tutte le pagine: CIN, CIR, indirizzo, contatti e link alle informative.

---

## 5. Architettura tecnica

### Stack
- **Astro** (sito statico) + **TypeScript**
  - *Perché:* genera solo HTML e CSS, il JavaScript si aggiunge solo dove serve (le animazioni). Ne vengono un sito velocissimo, nessun database e nessun pannello admin da attaccare, quindi la sicurezza è quasi gratis. Ha già il supporto multilingua (i18n).
- **Contenuti in file Markdown/JSON nel repository**, una cartella per lingua (`src/content/{it,en,de,fr}/`)
  - *Perché:* gli aggiornamenti sono sporadici e li fa il proprietario, quindi non serve un CMS. Si modifica il file, si esegue la build e si pubblica.
- **Animazioni:** CSS + Web Animations API. Una libreria (es. GSAP o Motion) solo se davvero serve, chiedendo prima di installarla.
- **Immagini:** componente `<Picture>` di Astro (AVIF/WebP, dimensioni responsive, lazy load).
- **Font self-hosted** (non da Google Fonts remoto): caricarli da Google trasferisce l'IP del visitatore, ed è un problema GDPR già sanzionato in Germania.

### Hosting
- **Cloudflare Pages** per il sito, dominio registrato su **IONOS** (si punta il DNS a Cloudflare)
- HTTPS gestito da Cloudflare (certificato automatico)
- Header di sicurezza e cache in `public/_headers`, redirect 301 in `public/_redirects` (finiscono in `dist/`)
- Deploy: collegare il repository GitHub a Cloudflare Pages (build `npm run build`, cartella `dist`), oppure caricare `dist/` a mano
- Prima di spegnere il sito su Altervista: **redirect 301** dai vecchi URL (`/dettaglio/`, `/galleria/`, `/contatti/`, `/en/...`) ai nuovi
- Nota: il job iCal per il calendario (sezione sotto) era pensato per un VPS con cron. Con Cloudflare Pages serve un'alternativa (una Pages Function con cache, o un Worker pianificato): `[DA DECIDERE]`

### Disponibilità collegata a Booking
- Booking esporta il calendario come **link iCal** (Extranet → Tariffe e disponibilità → Sincronizza calendari)
- Un **job pianificato** (ogni 30–60 min; dove gira: vedi nota in Hosting) che scarica l'iCal e lo converte in un `disponibilita.json` (solo le date occupate, nessun dato degli ospiti), servito come file statico
- Il calendario sul sito legge quel JSON
  - *Perché non direttamente dal browser:* Booking blocca le richieste cross-origin (CORS) e il link iCal è privato, quindi non va mai esposto nel codice del sito
- Il calendario mostra "occupato / libero" ed è **indicativo**: la conferma arriva sempre via WhatsApp

### Prezzi
- L'iCal di Booking **non contiene i prezzi**, quindi si usa una tabella manuale per stagione in un file JSON (`src/content/prezzi.json`)
- Prezzi "a partire da", con soggiorno minimo per stagione e nota *"Contattaci per il prezzo esatto"*
- Prezzi per stagione: `[DA FORNIRE]`

### Recensioni
- Booking non offre un'API pubblica delle recensioni per le piccole strutture, quindi le recensioni stanno in un file JSON curato a mano (`src/content/recensioni.json`)
- Campi: nome (solo il nome di battesimo), paese, mese/anno, punteggio, testo originale, lingua
- Regole: **solo recensioni reali, copiate senza modifiche**. Si indica la fonte "Booking.com", con il link alla pagina e il punteggio medio aggiornato a mano
- Ogni lingua mostra prima le recensioni scritte in quella lingua

### Mappa
- Di default un'**immagine statica della mappa** + pulsanti "Apri in Google Maps" / "Apri in Apple Maps"
- Nessun embed di Google Maps al caricamento della pagina, perché imposta cookie e trasferisce l'IP. Se si vuole la mappa interattiva, va caricata solo dopo un clic esplicito ("click-to-load")

### Contatti
- Niente modulo nella v1: WhatsApp, telefono e `mailto:` coprono tutto, senza un backend da mantenere e senza spam
- Se in futuro servirà un modulo, sarà un piccolo endpoint sul VPS con honeypot e rate limit

---

## 6. GDPR, cookie, obblighi di legge

- **CIN e CIR** ben visibili nel footer di ogni pagina e nella pagina La casa (l'esposizione del CIN è obbligatoria negli annunci)
- **Nessun cookie di profilazione** e nessuno script di terze parti caricato in automatico (niente Google Fonts remoti, Maps embed, pixel social o YouTube embed)
  - Con solo cookie tecnici **non serve il banner di consenso**: basta l'informativa
- Statistiche facoltative e **cookieless, self-hosted** (es. Umami o Plausible sul VPS), da dichiarare nell'informativa
- Pagine **Privacy** e **Cookie** in tutte e 4 le lingue, con titolare del trattamento: `[DA FORNIRE: nome, indirizzo, email]`
- Video eventuali: self-hosted, oppure embed click-to-load

---

## 7. Sicurezza

- Il sito statico non ha login, database né plugin, quindi la superficie d'attacco è minima
- Header HTTP (in `public/_headers` su Cloudflare Pages): `Strict-Transport-Security`, `Content-Security-Policy` restrittiva, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `X-Frame-Options`
- Il link iCal sta in una variabile d'ambiente (mai nel repository, mai nel codice del sito)

---

## 8. SEO e prestazioni

- Lighthouse ≥ 95 su tutte le metriche, anche su mobile
- Dati strutturati **schema.org `VacationRental` / `LodgingBusiness`** (indirizzo, coordinate, servizi, punteggio recensioni)
- `sitemap.xml` multilingua, `robots.txt`, Open Graph e immagini per la condivisione su WhatsApp/social
- Title e description scritti a mano per ogni pagina e lingua (es. *"Appartamento con piscina in Toscana – Castiglion Fiorentino"*)
- Scheda **Google Business Profile** coerente con il sito (stesso nome, indirizzo e telefono)

---

## 9. Design e interazioni

Il design è stato definito con **Claude Design**. Prototipo della home (desktop e telefono): https://claude.ai/artifact/AUBQ8VLuzmF96nBd3w8p15. Il codice parte da quel prototipo, con le modifiche del 24/11/2026 qui sotto.

- **Atmosfera:** cozy, toscana, elegante ma non troppo. Calda, tranquilla, con un pizzico di simpatia. Niente lusso freddo e niente stile rustico kitsch.
- **Colori** (variabili CSS in `src/styles/global.css`): verde cipresso e crema leggero, con marroncino e oro.
  - crema: fondo #F7F2E5, superfici #FBF8EF e #FFFDF7
  - verde cipresso: testo #1F2A22, pulsanti #2F4B3A (hover #213829), sezione scura #263A2D
  - marroncino: bollino rotondo #7A5638, piè di pagina #33261C
  - oro: dettagli e link sul verde scuro #E6C97E, decorazioni #B8923A
  - tutte le coppie testo/sfondo sono sopra 4.5:1 (WCAG AA)
- **Tipografia** (self-hosted, licenza OFL):
  - **Fraunces** per titoli e citazioni (serif morbido e caldo); sostituisce Cardo, giudicato poco gradevole
  - **Parisienne** (corsivo) solo per il nome «Residenza Conti» nell'hero
  - **DM Sans** per testi, pulsanti e interfaccia
- **Hero:** la prima cosa che si legge è il nome «Residenza Conti» in corsivo, che compare lettera per lettera, con un ramo d'ulivo che cresce sotto (le foglie si aprono una a una, poi ondeggiano piano). Il motto non è la prima frase.
- **Foto dell'hero:** la foto serale della casa con tutte le luci accese (`src/assets/foto/casa/00-casa-sera.jpg`). Finché il file non c'è, si usa la casa vista dal viale.
- **Motivi ricorrenti:** foto con cornice ad **arco** (come gli archi del portico), bollino rotondo che gira lentamente, fascia di testo che scorre con i punti forti, fila di cipressi animata nella sezione della storia
- **Animazioni** (tutte su transform/opacity):
  - allo scroll: le foto si "aprono" (zoom in uscita), i cipressi ondeggiano
  - icone dei servizi animate (onde della piscina, foglie dell'ulivo, ombrellone, fiamma del barbecue, auto, Wi-Fi, vapore della pentola, bottiglia del welcome kit; ulivo, amaca, cipressi, campana della cappella, lanterna del portico): su desktop si muovono al passaggio del mouse, su telefono si muovono da sole
  - icone di WhatsApp e Chiama animate al passaggio del mouse
- **Telefono:** stanze e dintorni si sfogliano col dito (scroll-snap orizzontale), barra fissa in basso con WhatsApp e Chiama
- **Vincoli tecnici per il design:**
  - rispettare `prefers-reduced-motion`: con l'impostazione attiva, nessun movimento non essenziale
  - animazioni solo su `transform`/`opacity`, mai su proprietà che ricalcolano il layout
  - contenuti leggibili e funzionanti anche senza JavaScript (le animazioni allo scroll usano le scroll-driven animations CSS dove il browser le supporta)
  - mobile first: la maggior parte degli ospiti guarda dal telefono
  - accessibilità WCAG 2.1 AA (contrasto, focus visibile, testi alternativi sulle foto, navigazione da tastiera)
- **Foto:** solo della proprietà e della vista da lì. Niente foto di campi, vigne o proprietà di altri presentate come parte della casa.
  - Servono: la casa dal viale di cipressi, la casa di sera, il viale, la cappella, il portico, gli interni (soggiorno, camere, bagno con la roccia, travi, cotto), la piscina, il giardino con gli ulivi, la vista sulla valle dal giardino
  - Foto disponibili (professionali / drone / video): `[DA FORNIRE]`
- Logo: `[DA DEFINIRE]` (per ora il nome è scritto in Fraunces)

---

## 10. Tono dei testi

- **Accogliente, tranquillo, un po' simpatico.** Come il padrone di casa che ti accoglie al cancello.
- Frasi brevi e concrete, niente superlativi da depliant ("esclusivo", "da sogno", "unico al mondo")
- Raccontare cose vere: il cotto fatto a mano, le travi di castagno, la roccia nel bagno, il viale di cipressi, la cappella
- La presenza dei proprietari si dice con discrezione, in una riga, senza farne uno slogan
- Onestà su quello che non c'è (aria condizionata, animali): meglio dirlo prima
- Esempio di tono: *"Noi abitiamo al piano di sopra: se vi serve qualcosa, ci trovate."*

---

## 11. Struttura del repository (proposta)

```
residenzaconti/
├─ src/
│  ├─ content/
│  │  ├─ it/ en/ de/ fr/      # testi delle pagine in Markdown
│  │  ├─ prezzi.json
│  │  ├─ recensioni.json
│  │  └─ dintorni.json
│  ├─ components/
│  ├─ layouts/
│  ├─ pages/[lang]/
│  └─ styles/
├─ public/                    # font, favicon, _headers, _redirects, disponibilita.json (generato)
├─ scripts/
│  └─ sync-ical.ts            # job pianificato: iCal Booking → disponibilita.json
└─ residenzaconti.md          # questo file
```

---

## 12. Istruzioni per Claude

- Tutto in **italiano**: risposte, commenti nel codice, messaggi di commit
- Il proprietario è sviluppatore ABAP/SAP, ma questo stack (Astro, Cloudflare Pages, frontend) lo sta imparando: per ogni scelta importante spiegare in poche righe il perché
- Ambiente locale: **Windows + PowerShell**. I comandi vanno dati in sintassi PowerShell
- **Modifiche grandi:** prima un piano da approvare. **Modifiche piccole:** procedere direttamente
- **Chiedere prima di installare librerie o pacchetti**
- **Commit** a lavoro finito, **mai push** (lo fa il proprietario)
- Niente riassunti lunghi a fine risposta
- Se un approccio richiesto sembra sbagliato, dirlo chiaramente
- Non inventare dati della struttura (prezzi, distanze, recensioni, storia, descrizioni dei luoghi): usare questo file e lasciare `[DA FORNIRE]` dove mancano
- Seguire il prototipo approvato (sezione 9) per layout e animazioni; palette e font sono quelli della sezione 9
- Ogni testo nuovo va scritto in tutte e 4 le lingue, o segnalato come da tradurre

---

## 13. Fasi

1. **Contenuti:** completare i `[DA FORNIRE]`, raccogliere foto e recensioni, scrivere i testi in IT
2. **Design:** ✅ prototipo della home con Claude Design; palette (cipresso, crema, legno, oro) e font (Fraunces, Parisienne) scelti il 24/11/2026
3. **Sviluppo:** setup Astro + i18n, pagine, componenti, animazioni
4. **Integrazioni:** job iCal, prezzi, recensioni, mappa
5. **Traduzioni:** EN, DE, FR
6. **Legale e SEO:** informative, CIN/CIR, schema.org, sitemap
7. **Messa online:** Cloudflare Pages, DNS da IONOS, header, redirect 301 dal vecchio sito
8. **Dopo il lancio:** Google Business Profile, verifica Search Console, aggiornamento periodico delle recensioni
