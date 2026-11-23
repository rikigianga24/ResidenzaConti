// Dati della struttura: unica fonte di verità, usata da pagine e SEO.
// TODO: completare con i dati reali (contatti, coordinate, CIN/CIR).
import type { Lingua } from '../i18n/ui';

export const struttura = {
  nome: 'Residenza Conti',
  localita: 'Castiglion Fiorentino (AR)',
  metriQuadri: 75,
  postiLetto: 6,
  camere: 2,
  bagni: 1,
  piscina: '6×3 m',
  animaliAmmessi: false,
  contatti: {
    email: '', // TODO
    telefono: '', // TODO (usato anche per WhatsApp, formato internazionale senza +)
    indirizzo: '', // TODO
    instagram: '', // TODO
    tiktok: '', // TODO
  },
};

export const servizi: Record<Lingua, string[]> = {
  it: [
    'Spazio esterno privato',
    'Barbecue',
    'Piscina privata',
    'Cucina attrezzata',
    'Parcheggio',
    'Wi-Fi',
    'Teli piscina',
    'Kit di benvenuto',
  ],
  en: [
    'Private outdoor area',
    'Barbecue',
    'Private pool',
    'Equipped kitchen',
    'Parking',
    'Wi-Fi',
    'Pool towels',
    'Welcome kit',
  ],
};
