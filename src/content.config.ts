// Collezione dei testi delle pagine: un file Markdown per pagina e per lingua,
// in src/content/{it,en,de,fr}/{chiave-pagina}.md (es. it/casa.md).
// Il frontmatter contiene titoli, SEO e i testi strutturati; il corpo Markdown la prosa.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const testoBreve = z.object({ titolo: z.string(), testo: z.string() });

const pagine = defineCollection({
  loader: glob({ pattern: '{it,en,de,fr}/*.md', base: './src/content' }),
  schema: z.object({
    // SEO: title e description scritti a mano per ogni pagina e lingua
    seoTitolo: z.string(),
    descrizione: z.string(),
    titolo: z.string(),
    intro: z.string().optional(),

    // --- solo home ---
    hero: z.object({ riga1: z.string(), riga2: z.string(), sottotitolo: z.string() }).optional(),
    nastro: z.array(z.string()).optional(),
    sempre: z.object({ titolo: z.string(), citazione: z.string(), testo: z.string() }).optional(),
    storia: z.object({
      titolo: z.string(),
      testo: z.string(),
      daFornire: z.string(),
      viale: z.string(),
      cappella: z.string(),
      portico: z.string(),
      motto: z.string(),
    }).optional(),
    fuori: z.object({
      titolo: z.string(),
      testo: z.string(),
      // stesso ordine delle icone in components/Servizi.astro
      servizi: z.array(testoBreve).length(8),
    }).optional(),
    casa: z.object({
      titolo: z.string(),
      testo: z.string(),
      stanze: z.array(z.string()).length(5),
      onesta: z.array(testoBreve),
    }).optional(),
    dintorni: z.object({ titolo: z.string(), testo: z.string() }).optional(),
    contatti: z.object({ titolo: z.string(), testo: z.string(), bookingTesto: z.string() }).optional(),

    // --- pagina La casa ---
    dotazioni: z.array(z.object({ titolo: z.string(), voci: z.array(z.string()) })).optional(),

    // --- pagina FAQ ---
    domande: z.array(z.object({ d: z.string(), r: z.string() })).optional(),
  }),
});

export const collections = { pagine };
