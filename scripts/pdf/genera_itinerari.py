#!/usr/bin/env python3
"""Genera i PDF degli itinerari (2 itinerari × 4 lingue) in public/itinerari/.

Legge src/content/dintorni.json (stessi dati della pagina Dintorni), costruisce una pagina HTML per
ogni PDF con un QR code per ogni località (apre la mappa) e la stampa con Chromium/Playwright.

Non fa parte della build del sito: si lancia a mano quando cambiano i dati, poi si committano i PDF.
Requisiti (solo per questo script): Python 3 con `reportlab` (QR code), Node con `playwright`.
    python scripts/pdf/genera_itinerari.py
Nei PDF compaiono solo i dati verificati (i campi null non si stampano).
"""
import json, subprocess, sys, tempfile
from pathlib import Path
from urllib.parse import quote
from reportlab.graphics.barcode.qr import QrCodeWidget
from reportlab.graphics.shapes import Drawing
from reportlab.graphics import renderSVG
from reportlab.lib import colors

RADICE = Path(__file__).resolve().parents[2]
DATI = json.loads((RADICE / 'src/content/dintorni.json').read_text(encoding='utf-8'))
FONT = (RADICE / 'public/fonts').as_uri()
SCHEDE = {s['id']: s for s in DATI['schede']}
LINGUE = ['it', 'en', 'de', 'fr']

# colori del design system (src/styles/global.css)
COL = {'terracotta': '#6F4630', 'salvia': '#4A5542', 'bruno': '#403B32'}
AVORIO, PIETRA, BRUNO = '#F4F0E7', '#D8CBB7', '#403B32'

# etichette del PDF nelle 4 lingue (bozze EN/DE/FR da far rivedere, come il resto del sito)
T = {
    'it': dict(itinerario='Itinerario', ideale='Ideale per', tappe='Possibili tappe', mappa='Scansiona per aprire la mappa',
               lunghezza='Lunghezza', dislivello='Dislivello', difficolta='Difficoltà', durata='Durata', tipologia='Tipologia', partenza='Partenza',
               luogo='Residenza Conti · Val di Chio, Castiglion Fiorentino', nota='Informazioni indicative: verificate orari, aperture e condizioni dei percorsi prima di partire.', assaggi='Da assaggiare', facoltativa='Facoltativa', min='min in auto', da='da Taragnano', dalla='Dalla Residenza', fino='fino a', giro='giro di', consigli='Consigli pratici', segue='Continua nella pagina seguente'),
    'en': dict(itinerario='Itinerary', ideale='Ideal for', tappe='Possible stops', mappa='Scan to open the map',
               lunghezza='Length', dislivello='Elevation gain', difficolta='Difficulty', durata='Duration', tipologia='Type', partenza='Start',
               luogo='Residenza Conti · Val di Chio, Castiglion Fiorentino', nota='Indicative information: check opening times and trail conditions before you set off.', assaggi='To taste', facoltativa='Optional', min='min by car', da='from Taragnano', dalla='From the Residenza', fino='up to', giro='loop of', consigli='Practical tips', segue='Continues on the next page'),
    'de': dict(itinerario='Route', ideale='Ideal für', tappe='Mögliche Stationen', mappa='Scannen, um die Karte zu öffnen',
               lunghezza='Länge', dislivello='Höhenunterschied', difficolta='Schwierigkeit', durata='Dauer', tipologia='Art', partenza='Start',
               luogo='Residenza Conti · Val di Chio, Castiglion Fiorentino', nota='Richtwerte: Öffnungszeiten und Wegzustand bitte vor dem Aufbruch prüfen.', assaggi='Zum Probieren', facoltativa='Optional', min='Min. mit dem Auto', da='ab Taragnano', dalla='Ab der Residenza', fino='bis zu', giro='Runde von', consigli='Praktische Tipps', segue='Fortsetzung auf der nächsten Seite'),
    'fr': dict(itinerario='Itinéraire', ideale='Idéal pour', tappe='Étapes possibles', mappa='Scannez pour ouvrir la carte',
               lunghezza='Longueur', dislivello='Dénivelé', difficolta='Difficulté', durata='Durée', tipologia='Type', partenza='Départ',
               luogo='Residenza Conti · Val di Chio, Castiglion Fiorentino', nota='Informations indicatives : vérifiez horaires et état des sentiers avant de partir.', assaggi='À goûter', facoltativa='Facultative', min='min en voiture', da='depuis Taragnano', dalla='Depuis la Residenza', fino="jusqu'à", giro='boucle de', consigli='Conseils pratiques', segue='Suite page suivante'),
}

def qr_svg(url: str, colore: str) -> str:
    w = QrCodeWidget(url, barLevel='M')
    w.barFillColor = colors.HexColor(colore)
    w.barStrokeColor = colors.HexColor(colore)
    x0, y0, x1, y1 = w.getBounds()
    d = Drawing(100, 100, transform=[100 / (x1 - x0), 0, 0, 100 / (y1 - y0), 0, 0])
    d.add(w)
    svg = renderSVG.drawToString(d)
    return svg[svg.index('<svg'):]

def esc(s: str) -> str:
    return s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')

def dettaglio(tp, lang):
    if 'scheda' in tp:
        s = SCHEDE[tp['scheda']]
        nome = s['nome'] if isinstance(s['nome'], str) else s['nome'][lang]
        stima = (s.get('minuti'), s.get('km'))
        return nome, s['descrizione'][lang], s.get('mappa'), stima
    return tp['nome'][lang], (tp['testo'][lang] if tp.get('testo') else None), tp.get('mappa'), (None, None)

def riga(n, tp, lang, col):
    t = T[lang]
    nome, testo, mappa, (minuti, km) = dettaglio(tp, lang)
    p = tp.get('percorso')
    dati = ''
    if p:
        campi = [('lunghezza', p.get('lunghezza')), ('dislivello', p.get('dislivello')),
                 ('difficolta', p['difficolta'][lang] if p.get('difficolta') else None), ('durata', p.get('durata')),
                 ('tipologia', p['tipologia'][lang] if p.get('tipologia') else None), ('partenza', p.get('partenza'))]
        dati = '<dl>' + ''.join(f'<div><dt>{t[k]}</dt><dd>{esc(v)}</dd></div>' for k, v in campi if v) + '</dl>'
    qr = ''
    if mappa:
        url = 'https://www.google.com/maps/search/?api=1&query=' + quote(mappa, safe='')
        qr = f'<div class="qr">{qr_svg(url, col)}<span>{t["mappa"]}</span></div>'
    opz = f'<span class="opz">{t["facoltativa"]}</span>' if tp.get('facoltativa') else ''
    stima = f'<p class="st">≈ {minuti} {t["min"]} · {km} km {t["da"]}</p>' if minuti else ''
    return f'<li><span class="n">{n}</span><div class="tx"><h3>{esc(nome)}{opz}</h3>{stima}{f"<p>{esc(testo)}</p>" if testo else ""}{dati}</div>{qr}</li>'

def html(it, lang):
    t = T[lang]
    col = COL[it['tono']]
    g1 = [x for x in it['tappe'] if x.get('giorno', 1) == 1]
    g2 = [x for x in it['tappe'] if x.get('giorno', 1) == 2]
    r1 = ''.join(riga(n, tp, lang, col) for n, tp in enumerate(g1, 1))
    tag = ''.join(f'<li>{esc(x)}</li>' for x in it['ideale'][lang])
    v = it.get('viaggio')
    viaggio = f'<p class="vg">{t["dalla"]}: {t["fino"]} ≈ {v["minutiMax"]} {t["min"]} · {t["giro"]} ≈ {v["km"]} km</p>' if v else ''
    luoghi = f'<p class="lu">{esc(it["luoghi"][lang])}</p>' if it.get('luoghi') else ''
    pag2 = ''
    if g2 and it.get('giorno2'):
        r2 = ''.join(riga(n, tp, lang, col) for n, tp in enumerate(g2, 1))
        pag2 += f'<h2 class="g2">{esc(it["giorno2"]["titolo"][lang])}</h2><p class="nota2">{esc(it["giorno2"]["nota"][lang])}</p><ol>{r2}</ol>'
    if it.get('gastronomia'):
        pr = ''.join(f'<li><b>{esc(x["nome"][lang])}.</b> {esc(x["testo"][lang])}</li>' for x in it['gastronomia']['prodotti'])
        pag2 += f'<h2 class="g2">{esc(it["gastronomia"]["titolo"][lang])}</h2><ul class="pr">{pr}</ul>'
    if it.get('consigli'):
        cs = ''.join(f'<li>{esc(c)}</li>' for c in it['consigli'][lang])
        pag2 += f'<h2 class="g2">{t["consigli"]}</h2><ul class="pr">{cs}</ul>'
    foot = f'<footer><span><strong>{t["luogo"]}</strong><br>www.residenzaconti.it</span><span>{t["nota"]}</span></footer>'
    pagina2 = f'<section class="pg p2"><main>{pag2}</main>{foot}</section>' if pag2 else ''
    foot1 = foot if not pag2 else f'<footer><span><strong>{t["luogo"]}</strong><br>www.residenzaconti.it</span><span>{t["segue"]}</span></footer>'
    return f'''<!doctype html><html lang="{lang}"><head><meta charset="utf-8"><title>{esc(it["titolo"][lang])} – Residenza Conti</title>
<style>
@font-face {{ font-family: 'Cormorant Garamond'; src: url('{FONT}/cormorant-garamond-500.woff2'); font-weight: 500; }}
@font-face {{ font-family: 'Cormorant Garamond'; src: url('{FONT}/cormorant-garamond-400-italic.woff2'); font-weight: 400; font-style: italic; }}
@font-face {{ font-family: 'DM Sans'; src: url('{FONT}/dm-sans-variable.woff2'); font-weight: 300 800; }}
@page {{ size: A4; margin: 0 }}
* {{ box-sizing: border-box; }}
body {{ margin: 0; background: {AVORIO}; color: {BRUNO}; font-family: 'DM Sans', sans-serif; font-size: 10pt; line-height: 1.5; }}
.pg {{ width: 210mm; height: 297mm; display: flex; flex-direction: column; overflow: hidden; page-break-after: always; }}
.pg:last-child {{ page-break-after: auto; }}
header {{ background: {col}; color: {AVORIO}; padding: 9mm 16mm 6mm; }}
.num {{ font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 36pt; line-height: .8; color: {PIETRA}; margin: 0; }}
.et {{ font-size: 8pt; font-weight: 600; letter-spacing: .16em; text-transform: uppercase; color: {PIETRA}; margin: 3mm 0 1.5mm; }}
h1 {{ font-family: 'Cormorant Garamond', serif; font-weight: 500; font-size: 26pt; line-height: 1; margin: 0 0 2mm; }}
header p.d {{ margin: 0; font-size: 10.5pt; max-width: 150mm; }}
.lu {{ margin: 2mm 0 0; font-size: 8pt; color: {PIETRA}; }}
.vg {{ margin: 1.5mm 0 0; font-size: 8.5pt; font-weight: 600; }}
main {{ padding: 5mm 16mm 0; flex: 1; }}
.p2 main {{ padding-top: 12mm; }}
h2 {{ font-size: 7.5pt; font-weight: 600; letter-spacing: .16em; text-transform: uppercase; color: #5E574B; margin: 0 0 2mm; }}
h2.g2 {{ font-family: 'Cormorant Garamond', serif; font-size: 17pt; font-weight: 500; letter-spacing: 0; text-transform: none; color: {BRUNO}; margin: 5mm 0 1.5mm; }}
.nota2 {{ margin: 0 0 2mm; font-size: 8.8pt; color: #5E574B; }}
.tag {{ display: flex; flex-wrap: wrap; gap: 1.6mm; margin: 0 0 4mm; padding: 0; list-style: none; }}
.tag li {{ border: .3mm solid {col}; border-radius: 10mm; padding: .5mm 2.6mm; font-size: 8.5pt; }}
ol {{ margin: 0; padding: 0; list-style: none; }}
ol > li {{ display: flex; gap: 4mm; align-items: flex-start; padding: 2mm 0; border-top: .25mm solid rgba(64,59,50,.22); break-inside: avoid; }}
.n {{ flex: none; width: 7.5mm; height: 7.5mm; border-radius: 50%; border: .35mm solid {col}; display: flex; align-items: center; justify-content: center; font-family: 'Cormorant Garamond', serif; font-size: 12pt; }}
.tx {{ flex: 1; }}
h3 {{ font-family: 'Cormorant Garamond', serif; font-weight: 500; font-size: 13pt; line-height: 1.1; margin: 0 0 .5mm; }}
.opz {{ font-family: 'DM Sans', sans-serif; font-size: 6pt; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; border: .25mm solid #5E574B; border-radius: 6mm; padding: 0 1.6mm; margin-left: 2mm; vertical-align: middle; color: #5E574B; }}
.st {{ margin: 0 0 .5mm; font-size: 7.6pt; font-weight: 600; color: {col}; }}
.tx p {{ margin: 0; font-size: 8.4pt; line-height: 1.38; }}
.tx p.st {{ font-size: 7.6pt; }}
dl {{ display: flex; flex-wrap: wrap; gap: 1mm 6mm; margin: 1.6mm 0 0; }}
dt {{ font-size: 6.2pt; font-weight: 600; letter-spacing: .12em; text-transform: uppercase; color: #5E574B; }}
dd {{ margin: 0; font-weight: 600; font-size: 8.6pt; }}
.qr {{ flex: none; width: 17mm; text-align: center; }}
.qr svg {{ width: 14mm; height: 14mm; display: block; margin: 0 auto 1mm; }}
.qr span {{ font-size: 5.4pt; line-height: 1.2; display: block; color: #5E574B; }}
.pr {{ margin: 0; padding: 0; list-style: none; }}
.pr li {{ margin: 0 0 1.6mm; font-size: 8.6pt; line-height: 1.4; }}
.pr li b {{ font-weight: 600; }}
footer {{ padding: 3mm 16mm 7mm; font-size: 7.5pt; color: #5E574B; display: flex; justify-content: space-between; gap: 8mm; }}
footer strong {{ color: {BRUNO}; }}
</style></head><body>
<section class="pg"><header><p class="num">{it["numero"]:02d}</p><p class="et">{t["itinerario"]} {it["numero"]:02d}</p><h1>{esc(it["titolo"][lang])}</h1><p class="d">{esc(it["descrizione"][lang])}</p>{luoghi}{viaggio}</header>
<main><h2>{t["ideale"]}</h2><ul class="tag">{tag}</ul><h2>{t["tappe"]}</h2><ol>{r1}</ol></main>{foot1}</section>
{pagina2}
</body></html>'''

def main():
    out = RADICE / 'public/itinerari'
    out.mkdir(parents=True, exist_ok=True)
    lavori = []
    tmp = Path(tempfile.mkdtemp(prefix='itinerari-'))
    for it in DATI['itinerari']:
        for lang in LINGUE:
            f = tmp / f'{it["id"]}-{lang}.html'
            f.write_text(html(it, lang), encoding='utf-8')
            lavori.append({'html': f.as_uri(), 'pdf': str(RADICE / 'public' / it['pdf'][lang].lstrip('/'))})
    lista = tmp / 'lavori.json'
    lista.write_text(json.dumps(lavori), encoding='utf-8')
    subprocess.run(['node', str(RADICE / 'scripts/pdf/stampa.mjs'), str(lista)], check=True)
    print('PDF creati:', len(lavori))

if __name__ == '__main__':
    sys.exit(main())
