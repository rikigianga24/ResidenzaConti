// Job sul VPS: scarica il calendario iCal di Booking.com e scrive disponibilita.json
// con SOLO le date occupate (nessun dato degli ospiti).
//
// Perché sul server e non nel browser: Booking blocca le richieste cross-origin (CORS)
// e il link iCal è privato, quindi non deve mai finire nel codice del sito.
//
// Uso (Node ≥ 22.18 esegue TypeScript direttamente):
//   node scripts/sync-ical.ts
// Variabili d'ambiente (file .env fuori dal repository, MAI committato):
//   ICAL_URL      link iCal esportato da Booking (Extranet → Tariffe e disponibilità → Sincronizza calendari)
//   OUTPUT_FILE   percorso del JSON da scrivere (es. /var/www/residenzaconti/disponibilita.json)
// Con cron, ogni 30 minuti, come utente non privilegiato:
//   */30 * * * * cd /opt/residenzaconti && node --env-file=.env scripts/sync-ical.ts
import { writeFile, rename } from 'node:fs/promises';

interface Periodo {
  dal: string; // AAAA-MM-GG, primo giorno occupato
  al: string; // AAAA-MM-GG, giorno di partenza (escluso)
}

const ICAL_URL = process.env.ICAL_URL;
const OUTPUT_FILE = process.env.OUTPUT_FILE ?? 'public/disponibilita.json';

if (!ICAL_URL) {
  console.error('Manca ICAL_URL (vedi commento in testa al file).');
  process.exit(1);
}

/** Righe iCal "srotolate": le righe che iniziano con spazio continuano la precedente (RFC 5545). */
function righe(testo: string): string[] {
  return testo.replace(/\r\n[ \t]/g, '').replace(/\n[ \t]/g, '').split(/\r?\n/);
}

/** DTSTART;VALUE=DATE:20260704 oppure DTSTART:20260704T140000Z → '2026-07-04' */
function data(valore: string): string {
  const m = valore.match(/(\d{4})(\d{2})(\d{2})/);
  if (!m) throw new Error(`Data iCal non valida: ${valore}`);
  return `${m[1]}-${m[2]}-${m[3]}`;
}

function estraiPeriodi(ics: string): Periodo[] {
  const periodi: Periodo[] = [];
  let corrente: Partial<Periodo> | null = null;
  for (const riga of righe(ics)) {
    if (riga === 'BEGIN:VEVENT') corrente = {};
    else if (riga === 'END:VEVENT') {
      if (corrente?.dal && corrente.al) periodi.push(corrente as Periodo);
      corrente = null;
    } else if (corrente) {
      // si leggono SOLO le date: SUMMARY, DESCRIPTION ecc. vengono ignorati
      const [chiave, ...resto] = riga.split(':');
      const valore = resto.join(':');
      if (chiave.startsWith('DTSTART')) corrente.dal = data(valore);
      else if (chiave.startsWith('DTEND')) corrente.al = data(valore);
    }
  }
  return periodi;
}

/** Tiene solo i periodi non ancora finiti, ordinati e uniti se contigui. */
function pulisci(periodi: Periodo[]): Periodo[] {
  const oggi = new Date().toISOString().slice(0, 10);
  const ordinati = periodi.filter((p) => p.al > oggi && p.al > p.dal).sort((a, b) => a.dal.localeCompare(b.dal));
  const uniti: Periodo[] = [];
  for (const p of ordinati) {
    const ultimo = uniti.at(-1);
    if (ultimo && p.dal <= ultimo.al) ultimo.al = p.al > ultimo.al ? p.al : ultimo.al;
    else uniti.push({ ...p });
  }
  return uniti;
}

const risposta = await fetch(ICAL_URL, { signal: AbortSignal.timeout(30_000) });
if (!risposta.ok) {
  // in caso di errore NON si sovrascrive il file: resta l'ultimo calendario valido
  console.error(`Download iCal fallito: HTTP ${risposta.status}`);
  process.exit(1);
}
const ics = await risposta.text();
if (!ics.includes('BEGIN:VCALENDAR')) {
  console.error('La risposta non sembra un calendario iCal.');
  process.exit(1);
}

const json = JSON.stringify({ aggiornatoIl: new Date().toISOString(), occupati: pulisci(estraiPeriodi(ics)) }, null, 2);
// scrittura atomica: prima un file temporaneo, poi rename (nginx non legge mai un file a metà)
const tmp = `${OUTPUT_FILE}.tmp`;
await writeFile(tmp, json + '\n', 'utf8');
await rename(tmp, OUTPUT_FILE);
console.log(`Scritto ${OUTPUT_FILE}`);
