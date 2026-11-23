// Testi dell'interfaccia e mappa delle rotte per lingua.
export const lingue = { it: 'Italiano', en: 'English' } as const;
export type Lingua = keyof typeof lingue;
export const linguaDefault: Lingua = 'it';

// Chiave logica della pagina → slug per lingua
export const rotte = {
  home: { it: '/', en: '/en/' },
  appartamento: { it: '/appartamento', en: '/en/apartment' },
  galleria: { it: '/galleria', en: '/en/gallery' },
  contatti: { it: '/contatti', en: '/en/contact' },
} as const;
export type Pagina = keyof typeof rotte;

export const ui = {
  it: {
    'nav.home': 'Home',
    'nav.appartamento': "L'appartamento",
    'nav.galleria': 'Galleria',
    'nav.contatti': 'Contatti',
    'home.titolo': 'Residenza Conti',
    'home.sottotitolo': 'Casa vacanze nella Val di Chio, Castiglion Fiorentino',
    'home.cta': 'Richiedi disponibilità',
    'appartamento.titolo': "L'appartamento",
    'appartamento.servizi': 'Servizi',
    'galleria.titolo': 'Galleria',
    'galleria.vuota': 'Foto in arrivo.',
    'contatti.titolo': 'Contatti',
    'form.nome': 'Nome',
    'form.email': 'Email',
    'form.arrivo': 'Arrivo',
    'form.partenza': 'Partenza',
    'form.ospiti': 'Ospiti',
    'form.messaggio': 'Messaggio',
    'form.invia': 'Invia richiesta',
    'footer.diritti': 'Tutti i diritti riservati',
  },
  en: {
    'nav.home': 'Home',
    'nav.appartamento': 'The apartment',
    'nav.galleria': 'Gallery',
    'nav.contatti': 'Contact',
    'home.titolo': 'Residenza Conti',
    'home.sottotitolo': 'Holiday home in the Val di Chio, Castiglion Fiorentino',
    'home.cta': 'Check availability',
    'appartamento.titolo': 'The apartment',
    'appartamento.servizi': 'Amenities',
    'galleria.titolo': 'Gallery',
    'galleria.vuota': 'Photos coming soon.',
    'contatti.titolo': 'Contact',
    'form.nome': 'Name',
    'form.email': 'Email',
    'form.arrivo': 'Check-in',
    'form.partenza': 'Check-out',
    'form.ospiti': 'Guests',
    'form.messaggio': 'Message',
    'form.invia': 'Send request',
    'footer.diritti': 'All rights reserved',
  },
} as const satisfies Record<Lingua, Record<string, string>>;

export type ChiaveUi = keyof (typeof ui)['it'];

export function useT(lang: Lingua) {
  return (k: ChiaveUi): string => ui[lang][k] ?? ui[linguaDefault][k];
}

export function url(pagina: Pagina, lang: Lingua): string {
  return rotte[pagina][lang];
}
