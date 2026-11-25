// Tipi e accesso ai dati JSON curati a mano (src/content/*.json).
import type { Lingua } from '../i18n/lingue';
import dintorniJson from '../content/dintorni.json';
import prezziJson from '../content/prezzi.json';
import recensioniJson from '../content/recensioni.json';

type Tradotto = Record<Lingua, string>;

type Nome = string | Tradotto;

/** Dati di un percorso a piedi o in bici: solo valori verificati, il resto resta null (non va inventato). */
export interface DatiPercorso {
  lunghezza: string | null;
  dislivello: string | null;
  difficolta: Tradotto | null;
  durata: string | null;
  tipologia: Tradotto | null;
  partenza: string | null;
  /** link a una traccia o a una scheda ufficiale */
  traccia: string | null;
}

export type CategoriaScheda = 'borgo' | 'cultura' | 'natura' | 'trekking';

/** Scheda "Da non perdere". */
export interface Scheda {
  id: string;
  nome: Nome;
  categoria: CategoriaScheda;
  /** minuti in auto dalla struttura: null finché non verificato */
  minutiAuto: number | null;
  /** ricerca o coordinate per Google Maps */
  mappa: string;
  descrizione: Tradotto;
}

/** Tappa di un itinerario: rimanda a una scheda oppure ha il proprio testo. */
export interface Tappa {
  scheda?: string;
  nome?: Tradotto;
  testo?: Tradotto | null;
  mappa?: string | null;
  percorso?: DatiPercorso;
}

export interface Itinerario {
  id: string;
  numero: number;
  foto: string;
  tono: 'terracotta' | 'salvia' | 'bruno';
  pdf: Tradotto;
  titolo: Tradotto;
  descrizione: Tradotto;
  ideale: Record<Lingua, string[]>;
  tappe: Tappa[];
  assaggi?: { titolo: Tradotto; testo: Tradotto };
}

export const schede = dintorniJson.schede as Scheda[];
export const itinerari = dintorniJson.itinerari as Itinerario[];

export function nomeScheda(s: Scheda, lang: Lingua): string {
  return typeof s.nome === 'string' ? s.nome : s.nome[lang];
}

/** Link a Google Maps: indicazioni verso il luogo (senza partenza: la sceglie chi clicca). */
export function linkIndicazioni(mappa: string): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mappa)}`;
}
/** Link a Google Maps: il luogo sulla mappa (usato dai QR code dei PDF). */
export function linkMappa(mappa: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mappa)}`;
}

export interface Stagione {
  id: string;
  nome: Tradotto;
  /** intervalli 'MM-GG' inclusi */
  periodi: { dal: string; al: string }[];
  prezzoDa: number | null;
  notteMinime: number | null;
}

export interface Recensione {
  nome: string;
  paese: string;
  data: string; // AAAA-MM
  punteggio: number;
  testo: string;
  lingua: Lingua | 'altro';
}

export const prezzi = prezziJson as { valuta: string; stagioni: Stagione[] };
export const recensioni = recensioniJson as {
  punteggioMedio: number | null;
  numeroRecensioni: number | null;
  aggiornatoIl: string | null;
  recensioni: Recensione[];
};

/** Recensioni ordinate: prima quelle nella lingua della pagina, poi le altre (più recenti prima). */
export function recensioniPerLingua(lang: Lingua): Recensione[] {
  return [...recensioni.recensioni].sort((a, b) => {
    const la = a.lingua === lang ? 0 : 1;
    const lb = b.lingua === lang ? 0 : 1;
    return la - lb || b.data.localeCompare(a.data);
  });
}
