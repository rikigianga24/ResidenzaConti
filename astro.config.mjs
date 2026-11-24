// @ts-check
import { defineConfig } from 'astro/config';
import { redirectVecchiSito } from './src/i18n/redirect.mjs';

export default defineConfig({
  site: 'https://www.residenzaconti.it',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'it',
    locales: ['it', 'en', 'de', 'fr'],
    // italiano senza prefisso (/), le altre lingue sotto /en/, /de/, /fr/
    routing: { prefixDefaultLocale: false },
  },
  vite: {
    // niente script/asset inline nell'HTML: permette una CSP con script-src 'self'
    build: { assetsInlineLimit: 0 },
  },
  build: {
    // CSS sempre in file esterni: permette una Content-Security-Policy senza 'unsafe-inline'
    inlineStylesheets: 'never',
  },
  // Redirect dei vecchi URL WordPress. In produzione li fa Cloudflare Pages con un vero 301
  // (public/_redirects); questi servono per `astro preview` e come rete di sicurezza.
  redirects: redirectVecchiSito,
});
