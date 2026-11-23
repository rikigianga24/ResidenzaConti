// Lingue e rotte del sito.
// Ogni pagina ha una chiave logica (es. 'casa') e uno slug tradotto per lingua.
export const LINGUE = ['it', 'en', 'de', 'fr'] as const;
export type Lingua = (typeof LINGUE)[number];
export const LINGUA_DEFAULT: Lingua = 'it';

export const NOMI_LINGUE: Record<Lingua, string> = {
  it: 'Italiano',
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
};

/** Slug per lingua ('' = home della lingua). */
export const ROTTE = {
  home: { it: '', en: '', de: '', fr: '' },
  casa: { it: 'casa', en: 'the-house', de: 'das-haus', fr: 'la-maison' },
  galleria: { it: 'galleria', en: 'gallery', de: 'galerie', fr: 'galerie' },
  storia: { it: 'storia', en: 'our-story', de: 'geschichte', fr: 'histoire' },
  dintorni: { it: 'dintorni', en: 'surroundings', de: 'umgebung', fr: 'alentours' },
  disponibilita: { it: 'disponibilita-prezzi', en: 'availability-prices', de: 'verfuegbarkeit-preise', fr: 'disponibilites-tarifs' },
  recensioni: { it: 'recensioni', en: 'reviews', de: 'bewertungen', fr: 'avis' },
  arrivare: { it: 'come-arrivare', en: 'getting-here', de: 'anreise', fr: 'acces' },
  faq: { it: 'faq', en: 'faq', de: 'faq', fr: 'faq' },
  contatti: { it: 'contatti', en: 'contact', de: 'kontakt', fr: 'contact' },
  privacy: { it: 'privacy', en: 'privacy', de: 'datenschutz', fr: 'confidentialite' },
  cookie: { it: 'cookie', en: 'cookies', de: 'cookies', fr: 'cookies' },
} as const satisfies Record<string, Record<Lingua, string>>;

export type Pagina = keyof typeof ROTTE;
export const PAGINE = Object.keys(ROTTE) as Pagina[];

/** URL assoluto-dal-root di una pagina in una lingua, sempre con '/' finale. */
export function url(pagina: Pagina, lang: Lingua): string {
  const prefisso = lang === LINGUA_DEFAULT ? '' : `/${lang}`;
  const slug = ROTTE[pagina][lang];
  return `${prefisso}/${slug ? slug + '/' : ''}`;
}

/** Percorso per getStaticPaths di [...percorso].astro (undefined = root). */
export function percorso(pagina: Pagina, lang: Lingua): string | undefined {
  const p = url(pagina, lang).replace(/^\/|\/$/g, '');
  return p === '' ? undefined : p;
}
