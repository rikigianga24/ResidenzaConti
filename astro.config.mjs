// @ts-check
import { defineConfig } from 'astro/config';

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
  // I redirect dei vecchi URL WordPress sono SOLO in public/_redirects (301 veri su Cloudflare).
  // Non rimetterli qui: l'adapter che Cloudflare aggiunge in deploy li accoda a _redirects
  // e il deploy fallisce con "Duplicate rule".
});
