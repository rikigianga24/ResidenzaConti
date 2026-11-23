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
- **Booking.com:** `[DA FORNIRE: URL pagina struttura]`
- **CIN:** `[DA FORNIRE]` · **CIR:** `[DA FORNIRE]`

### L'alloggio
- Un appartamento al piano terra, 75 m², fino a 6 ospiti
- 2 camere matrimoniali, 1 bagno con la roccia originale lasciata a vista
- Soggiorno con angolo cottura che si apre sul portico
- Pavimenti in cotto fatto a mano, soffitti con travi di castagno secolari
- Mura spesse: la casa resta fresca d'estate (non c'è aria condizionata, va detto con onestà nelle FAQ)
- Animali non ammessi

### Servizi
- Piscina privata 6×3 m, con teli forniti
- Grande giardino tra gli olivi, con lettini e ombrelloni
- Barbecue, parcheggio, Wi-Fi, cucina attrezzata, welcome kit
- Check-in / check-out: `[DA FORNIRE]`
- Regole della casa: `[DA FORNIRE]`

### Cosa ci distingue (è il messaggio centrale del sito)
1. **Ci siamo sempre.** I proprietari abitano al piano di sopra: c'è un'accoglienza vera, con consigli e aiuto quando serve, e allo stesso tempo l'ospite ha la sua indipendenza.
2. **Spazio.** Un giardino enorme, la piscina e gli ulivi sono a disposizione degli ospiti.
3. **La storia.** L'edificio era il piccolo castello di caccia della famiglia Conti. Si arriva da un viale di cipressi e la cappella di famiglia consacrata è proprio di fronte al portico. Dettagli della storia: `[DA FORNIRE]`
4. **La posizione.** Si sta in una valle tranquilla, comoda per esplorare la zona: Castiglion Fiorentino, Montecchio, Cortona, Arezzo e la Valdichiana.

Motto del sito attuale da recuperare: *"Valle di Chio… valle di Dio"*.

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
| **Home** | Hero, chi siamo / ci siamo sempre, la casa in breve, piscina e giardino, recensioni in evidenza, dintorni in breve, CTA contatti |
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
- **Immagini:** componente `<Image>` di Astro (AVIF/WebP, dimensioni responsive, lazy load).
- **Font self-hosted** (non da Google Fonts remoto): caricarli da Google trasferisce l'IP del visitatore, ed è un problema GDPR già sanzionato in Germania.

### Hosting
- **VPS IONOS** (lo stesso di AiuolaLab), con un **virtual host separato** in nginx
- HTTPS con Let's Encrypt (rinnovo automatico)
- Deploy: build in locale (Windows/PowerShell) o in CI, poi upload della cartella `dist/` sul VPS (rsync/scp o un piccolo script)
- Configurazione attuale del VPS (nginx? Docker? OS?): `[DA FORNIRE]`
- DNS di residenzaconti.it da puntare al VPS. Registrar: `[DA FORNIRE]`
- Prima di spegnere il sito su Altervista: **redirect 301** dai vecchi URL (`/dettaglio/`, `/galleria/`, `/contatti/`, `/en/...`) ai nuovi

### Disponibilità collegata a Booking
- Booking esporta il calendario come **link iCal** (Extranet → Tariffe e disponibilità → Sincronizza calendari)
- Sul VPS gira un **job pianificato** (cron, ogni 30–60 min) che scarica l'iCal e lo converte in un `disponibilita.json` (solo le date occupate, nessun dato degli ospiti), servito come file statico
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
- Header HTTP in nginx: `Strict-Transport-Security`, `Content-Security-Policy` restrittiva, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `X-Frame-Options`
- VPS: accesso SSH solo con chiave, firewall (solo 22/80/443), fail2ban, aggiornamenti automatici di sicurezza
- Il job iCal gira con un utente non privilegiato. Il link iCal sta in un file di configurazione fuori dal repository (`.env`), mai committato
- Isolamento da AiuolaLab: cartelle, utenti e log separati

---

## 8. SEO e prestazioni

- Lighthouse ≥ 95 su tutte le metriche, anche su mobile
- Dati strutturati **schema.org `VacationRental` / `LodgingBusiness`** (indirizzo, coordinate, servizi, punteggio recensioni)
- `sitemap.xml` multilingua, `robots.txt`, Open Graph e immagini per la condivisione su WhatsApp/social
- Title e description scritti a mano per ogni pagina e lingua (es. *"Appartamento con piscina in Toscana – Castiglion Fiorentino"*)
- Scheda **Google Business Profile** coerente con il sito (stesso nome, indirizzo e telefono)

---

## 9. Design e interazioni

> Il design viene sviluppato con **Claude Design**. Questa sezione fissa solo la direzione e i vincoli; il resto si completa dopo.

- **Atmosfera:** cozy, toscana, elegante ma non troppo. Calda, tranquilla, con un pizzico di simpatia. Niente lusso freddo e niente stile rustico kitsch.
- **Animazioni:** carine e leggere, al servizio dell'atmosfera (es. elementi del paesaggio che si muovono allo scroll, transizioni morbide)
- **Vincoli tecnici per il design:**
  - rispettare `prefers-reduced-motion`: con l'impostazione attiva, nessun movimento non essenziale
  - animazioni solo su `transform`/`opacity`, mai su proprietà che ricalcolano il layout
  - contenuti leggibili e funzionanti anche senza JavaScript
  - mobile first: la maggior parte degli ospiti guarda dal telefono
  - accessibilità WCAG 2.1 AA (contrasto, focus visibile, testi alternativi sulle foto, navigazione da tastiera)
- Palette, tipografia, illustrazioni, logo: `[DA DEFINIRE con Claude Design]`
- Foto disponibili (professionali / drone / video): `[DA FORNIRE]`

---

## 10. Tono dei testi

- **Accogliente, tranquillo, un po' simpatico.** Come il padrone di casa che ti accoglie al cancello.
- Frasi brevi e concrete, niente superlativi da depliant ("esclusivo", "da sogno", "unico al mondo")
- Raccontare cose vere: il cotto fatto a mano, le travi di castagno, la roccia nel bagno, i proprietari al piano di sopra
- Onestà su quello che non c'è (aria condizionata, animali): meglio dirlo prima
- Esempio di tono: *"Noi abitiamo al piano di sopra: se vi serve un consiglio su dove mangiare, basta bussare. Altrimenti, il giardino è tutto vostro."*

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
├─ public/                    # font, favicon, disponibilita.json (generato)
├─ scripts/
│  └─ sync-ical.ts            # job sul VPS: iCal Booking → disponibilita.json
├─ deploy/
│  └─ nginx.conf              # vhost + header di sicurezza
└─ residenzaconti.md          # questo file
```

---

## 12. Istruzioni per Claude

- Tutto in **italiano**: risposte, commenti nel codice, messaggi di commit
- Il proprietario è sviluppatore ABAP/SAP, ma questo stack (Astro, nginx, frontend) lo sta imparando: per ogni scelta importante spiegare in poche righe il perché
- Ambiente locale: **Windows + PowerShell**. I comandi vanno dati in sintassi PowerShell
- **Modifiche grandi:** prima un piano da approvare. **Modifiche piccole:** procedere direttamente
- **Chiedere prima di installare librerie o pacchetti**
- **Commit** a lavoro finito, **mai push** (lo fa il proprietario)
- Niente riassunti lunghi a fine risposta
- Se un approccio richiesto sembra sbagliato, dirlo chiaramente
- Non inventare dati della struttura (prezzi, distanze, recensioni, storia): usare questo file e lasciare `[DA FORNIRE]` dove mancano
- Ogni testo nuovo va scritto in tutte e 4 le lingue, o segnalato come da tradurre

---

## 13. Fasi

1. **Contenuti:** completare i `[DA FORNIRE]`, raccogliere foto e recensioni, scrivere i testi in IT
2. **Design:** con Claude Design (palette, font, componenti, animazioni)
3. **Sviluppo:** setup Astro + i18n, pagine, componenti, animazioni
4. **Integrazioni:** job iCal, prezzi, recensioni, mappa
5. **Traduzioni:** EN, DE, FR
6. **Legale e SEO:** informative, CIN/CIR, schema.org, sitemap
7. **Messa online:** vhost sul VPS, HTTPS, header, DNS, redirect 301 dal vecchio sito
8. **Dopo il lancio:** Google Business Profile, verifica Search Console, aggiornamento periodico delle recensioni
