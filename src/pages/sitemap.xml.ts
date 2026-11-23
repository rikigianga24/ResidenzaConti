// sitemap.xml multilingua: ogni pagina con le sue versioni nelle altre lingue (xhtml:link).
import type { APIRoute } from 'astro';
import { LINGUE, LINGUA_DEFAULT, PAGINE, url } from '../i18n/lingue';

export const GET: APIRoute = ({ site }) => {
  const abs = (p: string) => new URL(p, site).href;
  const voci = PAGINE.flatMap((pagina) =>
    LINGUE.map((lang) => {
      const alternative = LINGUE.map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${abs(url(pagina, l))}"/>`);
      alternative.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(url(pagina, LINGUA_DEFAULT))}"/>`);
      return `  <url>\n    <loc>${abs(url(pagina, lang))}</loc>\n${alternative.join('\n')}\n  </url>`;
    }),
  );
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${voci.join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
