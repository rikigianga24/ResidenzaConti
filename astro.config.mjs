// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.residenzaconti.it',
  i18n: {
    defaultLocale: 'it',
    locales: ['it', 'en'],
    // L'italiano resta senza prefisso (/), l'inglese sotto /en/
    routing: { prefixDefaultLocale: false },
  },
  // Vecchi URL WordPress → nuovi, per non perdere posizionamento e link esterni
  redirects: {
    '/dettaglio': '/appartamento',
    '/en/dettaglio-appartamento': '/en/apartment',
    '/en/contatti': '/en/contact',
  },
});
