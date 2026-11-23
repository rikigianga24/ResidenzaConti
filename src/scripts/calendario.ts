// Calendario disponibilità (lato browser).
// Legge /disponibilita.json, prodotto sul server da scripts/sync-ical.ts:
//   { "aggiornatoIl": "2026-11-23T10:00:00Z", "occupati": [{ "dal": "2026-07-04", "al": "2026-07-11" }] }
// "al" è il giorno di partenza (escluso): quel giorno è libero per un nuovo arrivo.
// Mostra 2 mesi alla volta, fino a 12 mesi avanti. Se il file manca, resta il messaggio di fallback.

interface Disponibilita {
  aggiornatoIl: string;
  occupati: { dal: string; al: string }[];
}

const MESI_AVANTI = 12;
const MESI_VISIBILI = 2;

/** 'AAAA-MM-GG' del giorno locale */
function chiave(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function giorniOccupati(dati: Disponibilita): Set<string> {
  const set = new Set<string>();
  for (const { dal, al } of dati.occupati) {
    const [a, m, g] = dal.split('-').map(Number);
    const d = new Date(a, m - 1, g);
    // limite di sicurezza: nessun soggiorno oltre un anno
    for (let i = 0; i < 366 && chiave(d) < al; i++) {
      set.add(chiave(d));
      d.setDate(d.getDate() + 1);
    }
  }
  return set;
}

function crea<K extends keyof HTMLElementTagNameMap>(tag: K, testo?: string, classe?: string) {
  const el = document.createElement(tag);
  if (testo !== undefined) el.textContent = testo;
  if (classe) el.className = classe;
  return el;
}

function disegnaMese(anno: number, mese: number, occ: Set<string>, oggi: string, lang: string, txt: DOMStringMap) {
  const box = crea('div', undefined, 'cal-mese');
  const nomeMese = new Intl.DateTimeFormat(lang, { month: 'long', year: 'numeric' }).format(new Date(anno, mese, 1));
  box.append(crea('h3', nomeMese));

  const tab = crea('table');
  // intestazione: giorni della settimana, da lunedì
  const tr0 = crea('tr');
  const fmtGiorno = new Intl.DateTimeFormat(lang, { weekday: 'narrow' });
  for (let i = 0; i < 7; i++) {
    const th = crea('th', fmtGiorno.format(new Date(2024, 0, 1 + i))); // 1/1/2024 = lunedì
    th.scope = 'col';
    tr0.append(th);
  }
  const thead = crea('thead');
  thead.append(tr0);
  tab.append(thead);

  const tbody = crea('tbody');
  const primo = (new Date(anno, mese, 1).getDay() + 6) % 7; // 0 = lunedì
  const giorni = new Date(anno, mese + 1, 0).getDate();
  let tr = crea('tr');
  for (let i = 0; i < primo; i++) tr.append(crea('td', '', 'vuoto'));
  for (let g = 1; g <= giorni; g++) {
    const k = chiave(new Date(anno, mese, g));
    const occupato = occ.has(k);
    const td = crea('td', String(g), occupato ? 'occ' : k < oggi ? 'pass' : undefined);
    // per i lettori di schermo il colore non basta: stato anche in testo
    td.setAttribute('aria-label', `${g} ${nomeMese}: ${occupato ? txt.occupato : txt.libero}`);
    tr.append(td);
    if ((primo + g) % 7 === 0) {
      tbody.append(tr);
      tr = crea('tr');
    }
  }
  if (tr.children.length) {
    while (tr.children.length < 7) tr.append(crea('td', '', 'vuoto'));
    tbody.append(tr);
  }
  tab.append(tbody);
  box.append(tab);
  return box;
}

export async function avviaCalendario(el: HTMLElement) {
  const txt = el.dataset;
  const lang = txt.lang ?? 'it';
  let dati: Disponibilita;
  try {
    const r = await fetch('/disponibilita.json', { cache: 'no-cache' });
    if (!r.ok) throw new Error(String(r.status));
    dati = await r.json();
  } catch {
    return; // resta il messaggio "calendario non disponibile"
  }

  const occ = giorniOccupati(dati);
  const oggi = new Date();
  const kOggi = chiave(oggi);
  let scarto = 0;

  const nav = crea('div', undefined, 'cal-nav');
  const prec = crea('button', '‹');
  const succ = crea('button', '›');
  prec.type = succ.type = 'button';
  prec.setAttribute('aria-label', txt.precedente ?? '');
  succ.setAttribute('aria-label', txt.successivo ?? '');
  const stato = crea('p', '', 'muted');
  stato.setAttribute('aria-live', 'polite');
  nav.append(prec, stato, succ);
  const mesi = crea('div', undefined, 'cal-mesi');

  const aggiornato = crea('p', `${txt.aggiornato} ${new Intl.DateTimeFormat(lang, { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(dati.aggiornatoIl))}`, 'muted');

  function disegna() {
    mesi.replaceChildren();
    for (let i = 0; i < MESI_VISIBILI; i++) {
      const d = new Date(oggi.getFullYear(), oggi.getMonth() + scarto + i, 1);
      mesi.append(disegnaMese(d.getFullYear(), d.getMonth(), occ, kOggi, lang, txt));
    }
    prec.disabled = scarto === 0;
    succ.disabled = scarto + MESI_VISIBILI >= MESI_AVANTI;
    stato.textContent = Array.from(mesi.querySelectorAll('h3')).map((h) => h.textContent).join(' – ');
  }
  prec.addEventListener('click', () => { scarto = Math.max(0, scarto - 1); disegna(); });
  succ.addEventListener('click', () => { scarto = Math.min(MESI_AVANTI - MESI_VISIBILI, scarto + 1); disegna(); });

  disegna();
  el.replaceChildren(nav, mesi, aggiornato);
}
