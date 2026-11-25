// Stampa in PDF le pagine HTML elencate in un file JSON [{ html, pdf }] (usato da genera_itinerari.py).
// Richiede `playwright` installato (non è una dipendenza del sito).
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');

const lavori = JSON.parse(readFileSync(process.argv[2], 'utf8'));
const browser = await chromium.launch();
for (const l of lavori) {
  const page = await browser.newPage();
  await page.goto(l.html, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({ path: l.pdf, format: 'A4', printBackground: true, preferCSSPageSize: true });
  await page.close();
}
await browser.close();
