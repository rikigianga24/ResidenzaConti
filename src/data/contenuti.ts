// Tipi e accesso ai dati JSON curati a mano (src/content/*.json).
import type { Lingua } from '../i18n/lingue';
import dintorniJson from '../content/dintorni.json';
import prezziJson from '../content/prezzi.json';
import recensioniJson from '../content/recensioni.json';

type Tradotto = Record<Lingua, string>;

export interface Luogo {
  id: string;
  nome: string | Tradotto;
  minutiAuto: number | null;
  descrizione: Tradotto;
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

export const luoghi = dintorniJson.luoghi as Luogo[];
export const prezzi = prezziJson as { valuta: string; stagioni: Stagione[] };
export const recensioni = recensioniJson as {
  punteggioMedio: number | null;
  numeroRecensioni: number | null;
  aggiornatoIl: string | null;
  recensioni: Recensione[];
};

export function nomeLuogo(l: Luogo, lang: Lingua): string {
  return typeof l.nome === 'string' ? l.nome : l.nome[lang];
}

/** Recensioni ordinate: prima quelle nella lingua della pagina, poi le altre (più recenti prima). */
export function recensioniPerLingua(lang: Lingua): Recensione[] {
  return [...recensioni.recensioni].sort((a, b) => {
    const la = a.lingua === lang ? 0 : 1;
    const lb = b.lingua === lang ? 0 : 1;
    return la - lb || b.data.localeCompare(a.data);
  });
}
