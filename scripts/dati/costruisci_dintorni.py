#!/usr/bin/env python3
"""Costruisce src/content/dintorni.json da schede_*.py e itinerari_nuovi.py.

Calcola coordinate (Photon/OpenStreetMap) e distanza/tempo in auto da Taragnano (OSRM, profilo auto, senza traffico):
stime orientative, arrotondate per eccesso a 5 minuti. Serve rete; i risultati si salvano in cache_geo.json.
Uso: python scripts/dati/costruisci_dintorni.py   (solo Python 3, nessun pacchetto)
"""
import json, math, time, urllib.parse, urllib.request
from pathlib import Path
from schede_toscana import SCHEDE_TOSCANA
from schede_umbria import SCHEDE_UMBRIA
from itinerari_nuovi import NUOVI

QUI = Path(__file__).resolve().parent
RADICE = QUI.parents[1]
FILE = RADICE / 'src/content/dintorni.json'
CACHE = QUI / 'cache_geo.json'
ORIGINE = [11.9803214, 43.3595278]  # Taragnano (OpenStreetMap)

QUERY = {  # ricerca per il geocoding
 'castiglion': 'Castiglion Fiorentino centro', 'montecchio': 'Castello di Montecchio Vesponi', 'cortona': 'Cortona', 'arezzo': 'Arezzo',
 'val_di_chio': 'Pieve di Chio Castiglion Fiorentino', 'monte': 'Monte Castiglion Maggio',
 'citta_di_castello': 'Città di Castello', 'montone': 'Montone Perugia', 'umbertide': 'Umbertide', 'gubbio': 'Gubbio',
 'castiglione_del_lago': 'Castiglione del Lago', 'passignano': 'Passignano sul Trasimeno', 'isola_maggiore': 'Isola Maggiore Tuoro sul Trasimeno',
 'siena': 'Siena', 'monteriggioni': 'Monteriggioni', 'san_gimignano': 'San Gimignano', 'pienza': 'Pienza',
 'san_quirico': "San Quirico d'Orcia", 'bagno_vignoni': 'Bagno Vignoni', 'montepulciano': 'Montepulciano',
}
cache = json.loads(CACHE.read_text()) if CACHE.exists() else {}

def get(u):
    r = urllib.request.Request(u, headers={'User-Agent': 'Mozilla/5.0 (distanze orientative per sito vacanze)'})
    return json.load(urllib.request.urlopen(r, timeout=30))

def coord_di(chiave):
    k = 'c:' + chiave
    if k not in cache:
        d = get('https://photon.komoot.io/api/?limit=1&q=' + urllib.parse.quote(QUERY[chiave]))
        cache[k] = d['features'][0]['geometry']['coordinates']; time.sleep(.4)
    return cache[k]

def percorso(coord):
    k = 'r:%s,%s' % tuple(coord)
    if k not in cache:
        d = get('https://router.project-osrm.org/route/v1/driving/%s,%s;%s,%s?overview=false' % (*ORIGINE, *coord))['routes'][0]
        cache[k] = [d['distance'] / 1000, d['duration'] / 60]; time.sleep(.4)
    return cache[k]

def ceil5(m): return int(math.ceil(m / 5.0) * 5)

schede = []
for s in SCHEDE_TOSCANA + SCHEDE_UMBRIA:
    s = dict(s)
    c = s.pop('coord', None) or coord_di(s['chiave'])
    s.pop('chiave', None)
    km, mi = percorso(c)
    s['coord'] = [round(c[0], 5), round(c[1], 5)]
    s['km'] = round(km); s['minuti'] = ceil5(mi)
    s.setdefault('vetrina', False)
    schede.append(s)

# giro principale: km e minuti di guida complessivi (calcolati con OSRM, vedi cache), arrotondati
GIRI = {'toscana-borghi-tradizioni-sapori': (43, 56, 'cortona'), 'umbria-autentica': (114, 135, 'citta_di_castello'), 'toscana-iconica': (141, 183, 'bagno_vignoni')}
itinerari = []
for it in NUOVI:
    it = dict(it)
    km, mi, lontana = GIRI[it['id']]
    maxmin = max(ceil5(percorso(coord_di(k))[1]) for k in {'toscana-borghi-tradizioni-sapori': ['cortona'], 'umbria-autentica': ['citta_di_castello', 'umbertide'], 'toscana-iconica': ['bagno_vignoni']}[it['id']])
    it['viaggio'] = {'km': km, 'minutiGiro': ceil5(mi), 'minutiMax': maxmin}
    it.pop('regione', None)
    itinerari.append(it)

# quarto itinerario: Natura e movimento (già presente), rinumerato
vecchio = json.loads(FILE.read_text())
nm = next(i for i in vecchio['itinerari'] if i['id'] == 'natura-e-movimento')
nm['numero'] = 4
nm['tono'] = 'salvia'
nm['pdf'] = {'it': '/itinerari/04-natura-e-movimento-it.pdf', 'en': '/itinerari/04-nature-and-movement-en.pdf', 'de': '/itinerari/04-natur-und-bewegung-de.pdf', 'fr': '/itinerari/04-nature-et-mouvement-fr.pdf'}
nm['luoghi'] = {'it': 'Val di Chio · Antichi Mulini · Parco del Cilone · Monte Castiglion Maggio', 'en': 'Val di Chio · Ancient Mills · Cilone Park · Monte Castiglion Maggio', 'de': 'Val di Chio · Alte Mühlen · Cilone-Park · Monte Castiglion Maggio', 'fr': 'Val di Chio · Anciens moulins · Parc du Cilone · Monte Castiglion Maggio'}
nm['temi'] = ['natura', 'borghi']
for tp in nm['tappe']:
    if tp.get('nome', {}).get('it') == 'Santa Cristina e Taragnano':
        tp['testo'] = {'it': 'Sono i nomi del luogo in cui si trova la Residenza (via Santa Cristina, località Taragnano).', 'en': 'These are the names of the place where the Residenza stands (via Santa Cristina, locality Taragnano).', 'de': 'Das sind die Namen des Ortes, an dem die Residenza liegt (Via Santa Cristina, Ortsteil Taragnano).', 'fr': 'Ce sont les noms du lieu où se trouve la Residenza (via Santa Cristina, lieu-dit Taragnano).'}
nm.pop('assaggi', None)
itinerari.append(nm)

nota = ("Guida dei dintorni. Fonti: Umbria Tourism, italia.it, Visit Tuscany, Visit Valdichiana, Terre di Siena, Opera della Metropolitana, UNESCO (decisione 28 COM 14B.51), letti il 25/11/2026. "
        "km e minuti: stime in auto da Taragnano calcolate con routing OpenStreetMap (OSRM), senza traffico, minuti arrotondati per eccesso a 5: indicative, da ricontrollare con il navigatore. "
        "Campi null = non verificato: non vanno inventati. Orari e biglietti non sono mai riportati: si rimanda ai siti ufficiali. Foto: solo proprie o con licenza.")
out = {'_nota': nota, 'origine': {'nome': 'Taragnano', 'coord': ORIGINE}, 'schede': schede, 'itinerari': itinerari}
FILE.write_text(json.dumps(out, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
CACHE.write_text(json.dumps(cache))
print('schede', len(schede), 'itinerari', len(itinerari))
for s in schede: print(f"  {s['id']:24s} {s['km']:4d} km {s['minuti']:4d} min")
