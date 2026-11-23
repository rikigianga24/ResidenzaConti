// Dati fattuali della struttura: fonte unica per pagine, footer, SEO e schema.org.
// Fonte: residenzaconti.md, sezione 1. Stringa vuota = [DA FORNIRE].
export const struttura = {
  nome: 'Residenza Conti',
  indirizzo: {
    via: 'Via Santa Cristina, loc. Taragnano 25',
    cap: '52043',
    citta: 'Castiglion Fiorentino',
    provincia: 'AR',
    regione: 'Toscana',
    paese: 'IT',
  },
  // coordinate per schema.org e mappa: [DA FORNIRE]
  coordinate: null as null | { lat: number; lng: number },
  telefono: '+393475176525', // formato E.164, usato per tel: e wa.me
  telefonoLeggibile: '+39 347 517 6525',
  email: 'info.residenzaconti@gmail.com',
  instagram: 'https://www.instagram.com/residenza_conti/',
  tiktok: 'https://www.tiktok.com/@residenzaconti',
  bookingUrl: '' as string, // [DA FORNIRE: URL pagina struttura su Booking.com]
  cin: '' as string, // [DA FORNIRE]
  cir: '' as string, // [DA FORNIRE]
  alloggio: {
    metriQuadri: 75,
    ospitiMax: 6,
    camere: 2,
    bagni: 1,
    piscina: '6×3 m',
  },
  checkIn: '' as string, // [DA FORNIRE]
  checkOut: '' as string, // [DA FORNIRE]
} as const;

/** Link WhatsApp con messaggio precompilato. */
export function linkWhatsApp(messaggio: string): string {
  return `https://wa.me/${struttura.telefono.replace('+', '')}?text=${encodeURIComponent(messaggio)}`;
}

export const indirizzoCompleto = `${struttura.indirizzo.via}, ${struttura.indirizzo.cap} ${struttura.indirizzo.citta} (${struttura.indirizzo.provincia})`;
