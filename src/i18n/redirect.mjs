// Vecchi URL del sito WordPress → nuovi URL. Usato da astro.config.mjs;
// tenere allineato con public/_redirects (i 301 veri li fa Cloudflare Pages).
export const redirectVecchiSito = {
  '/dettaglio': '/casa/',
  '/en/dettaglio-appartamento': '/en/the-house/',
  '/en/dettaglio': '/en/the-house/',
  '/en/galleria': '/en/gallery/',
  '/en/contatti': '/en/contact/',
};
