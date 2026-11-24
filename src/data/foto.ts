// Catalogo delle foto: file in src/assets/foto/{area}/, testo alternativo nelle 4 lingue.
// Le immagini vengono ottimizzate in build da astro:assets (AVIF/WebP, più larghezze).
// Per aggiungere una foto: copiarla nella cartella giusta e aggiungere la voce qui sotto.
import type { ImageMetadata } from 'astro';
import type { Lingua } from '../i18n/lingue';

const file = import.meta.glob<{ default: ImageMetadata }>('../assets/foto/*/*.{jpg,jpeg,png,webp}', { eager: true });

export type Area = 'casa' | 'giardino' | 'piscina' | 'dintorni' | 'stagioni';
type Testi = Record<Lingua, string>;

interface VoceFoto {
  area: Area;
  alt: Testi;
}

const catalogo: Record<string, VoceFoto> = {
  'casa/01-casa-e-viale': { area: 'casa', alt: {
    it: "L'edificio in pietra con l'arco, i cipressi e il viale sterrato",
    en: 'The stone building with its arch, cypress trees and the gravel drive',
    de: 'Das Steingebäude mit dem Bogen, Zypressen und der Schotterzufahrt',
    fr: "Le bâtiment en pierre avec son arche, les cyprès et l'allée de gravier" } },
  'casa/02-casa-portico-esterno': { area: 'casa', alt: {
    it: 'La casa in pietra con il portico ad arco, sotto il cielo azzurro',
    en: 'The stone house with its arched portico under a blue sky',
    de: 'Das Steinhaus mit dem Bogengang unter blauem Himmel',
    fr: 'La maison en pierre et son portique en arc sous le ciel bleu' } },
  'casa/03-cappella': { area: 'casa', alt: {
    it: 'La cappella di famiglia con il campanile, dietro gli oleandri in fiore',
    en: 'The family chapel and its bell gable behind flowering oleanders',
    de: 'Die Familienkapelle mit Glockengiebel hinter blühendem Oleander',
    fr: 'La chapelle familiale et son clocher derrière les lauriers-roses en fleurs' } },
  'casa/04-portico': { area: 'casa', alt: {
    it: "Il portico con le sedute, che guarda fuori attraverso l'arco in mattoni",
    en: 'The portico with seating, looking out through the brick arch',
    de: 'Der Laubengang mit Sitzplätzen und Blick durch den Ziegelbogen',
    fr: "Le portique avec ses sièges, ouvert sur l'arche en briques" } },
  'casa/05-viale-cipressi': { area: 'casa', alt: {
    it: 'Il viale di cipressi tra i prati della valle',
    en: 'The cypress avenue through the meadows of the valley',
    de: 'Die Zypressenallee durch die Wiesen des Tals',
    fr: "L'allée de cyprès à travers les prés de la vallée" } },
  'casa/06-soggiorno': { area: 'casa', alt: {
    it: 'Il soggiorno con il tavolo da pranzo, il cotto e le travi a vista',
    en: 'The living room with dining table, terracotta floor and exposed beams',
    de: 'Der Wohnraum mit Esstisch, Terrakottaboden und sichtbaren Balken',
    fr: 'Le séjour avec la table, les tomettes et les poutres apparentes' } },
  'casa/07-soggiorno-cucina': { area: 'casa', alt: {
    it: "Il soggiorno con l'angolo cottura e la porta finestra sul portico",
    en: 'The living room with kitchenette and the French door onto the portico',
    de: 'Der Wohnraum mit Kochnische und Fenstertür zum Laubengang',
    fr: 'Le séjour avec le coin cuisine et la porte-fenêtre sur le portique' } },
  'casa/08-angolo-cottura': { area: 'casa', alt: {
    it: "L'angolo cottura con fornelli a gas e piastrelle in cotto",
    en: 'The kitchenette with gas hob and terracotta tiles',
    de: 'Die Kochnische mit Gasherd und Terrakottafliesen',
    fr: 'Le coin cuisine avec plaques au gaz et carrelage en terre cuite' } },
  'casa/09-camera-1': { area: 'casa', alt: {
    it: 'La prima camera, con soffitto a travi e pavimento in cotto',
    en: 'The first bedroom, with beamed ceiling and terracotta floor',
    de: 'Das erste Schlafzimmer mit Balkendecke und Terrakottaboden',
    fr: 'La première chambre, plafond à poutres et sol en terre cuite' } },
  'casa/10-camera-1b': { area: 'casa', alt: {
    it: 'La prima camera vista dalla porta',
    en: 'The first bedroom seen from the door',
    de: 'Das erste Schlafzimmer von der Tür aus',
    fr: 'La première chambre vue depuis la porte' } },
  'casa/11-camera-2': { area: 'casa', alt: {
    it: 'La seconda camera, con il letto matrimoniale e la finestra',
    en: 'The second bedroom, with double bed and window',
    de: 'Das zweite Schlafzimmer mit Doppelbett und Fenster',
    fr: 'La deuxième chambre, avec lit double et fenêtre' } },
  'casa/12-camera-2b': { area: 'casa', alt: {
    it: 'La seconda camera con il letto in legno',
    en: 'The second bedroom with its wooden bed',
    de: 'Das zweite Schlafzimmer mit Holzbett',
    fr: 'La deuxième chambre et son lit en bois' } },
  'casa/13-camera-2-travi': { area: 'casa', alt: {
    it: 'Le travi di castagno sopra il letto della seconda camera',
    en: 'Chestnut beams above the bed in the second bedroom',
    de: 'Kastanienbalken über dem Bett im zweiten Schlafzimmer',
    fr: 'Les poutres en châtaignier au-dessus du lit de la deuxième chambre' } },
  'casa/14-camera-2c': { area: 'casa', alt: {
    it: 'La seconda camera con la finestra e la cassettiera',
    en: 'The second bedroom with window and chest of drawers',
    de: 'Das zweite Schlafzimmer mit Fenster und Kommode',
    fr: 'La deuxième chambre avec fenêtre et commode' } },
  'piscina/01-piscina-ulivi': { area: 'piscina', alt: {
    it: 'La piscina con il bordo in legno, tra gli ulivi e le colline',
    en: 'The pool with its wooden deck, among olive trees and hills',
    de: 'Der Pool mit Holzdeck zwischen Olivenbäumen und Hügeln',
    fr: 'La piscine et sa terrasse en bois, entre oliviers et collines' } },
  'piscina/02-piscina-bordo': { area: 'piscina', alt: {
    it: "L'acqua della piscina vista dal bordo in legno",
    en: 'The pool water seen from the wooden deck',
    de: 'Das Poolwasser vom Holzdeck aus gesehen',
    fr: "L'eau de la piscine vue depuis la terrasse en bois" } },
  'piscina/03-piscina-cielo': { area: 'piscina', alt: {
    it: 'La piscina che riflette il cielo, con gli ulivi intorno',
    en: 'The pool reflecting the sky, surrounded by olive trees',
    de: 'Der Pool spiegelt den Himmel, umgeben von Olivenbäumen',
    fr: 'La piscine reflétant le ciel, entourée d’oliviers' } },
  'piscina/04-piscina-cipressi': { area: 'piscina', alt: {
    it: 'La piscina con i cipressi sullo sfondo',
    en: 'The pool with cypress trees in the background',
    de: 'Der Pool mit Zypressen im Hintergrund',
    fr: 'La piscine avec des cyprès en arrière-plan' } },
  'giardino/01-vista-valle': { area: 'giardino', alt: {
    it: 'La vista sulla valle dal giardino, tra i gladioli e un cipresso',
    en: 'The view over the valley from the garden, between gladioli and a cypress',
    de: 'Der Blick aus dem Garten über das Tal, zwischen Gladiolen und einer Zypresse',
    fr: 'La vue sur la vallée depuis le jardin, entre glaïeuls et cyprès' } },
  'giardino/02-gladioli': { area: 'giardino', alt: {
    it: 'Gladioli rossi e gialli nel giardino',
    en: 'Red and yellow gladioli in the garden',
    de: 'Rote und gelbe Gladiolen im Garten',
    fr: 'Glaïeuls rouges et jaunes dans le jardin' } },
  'giardino/03-lettini-ulivi': { area: 'giardino', alt: {
    it: "Le sdraio all'ombra degli ulivi",
    en: 'Deck chairs in the shade of the olive trees',
    de: 'Liegestühle im Schatten der Olivenbäume',
    fr: "Des chaises longues à l'ombre des oliviers" } },
  'giardino/04-amaca': { area: 'giardino', alt: {
    it: "L'amaca all'ombra degli alberi",
    en: 'The hammock in the shade of the trees',
    de: 'Die Hängematte im Schatten der Bäume',
    fr: "Le hamac à l'ombre des arbres" } },
  'giardino/05-laghetto': { area: 'giardino', alt: {
    it: 'Il laghetto con le ninfee e il giardino fiorito',
    en: 'The pond with water lilies and the flower garden',
    de: 'Der Teich mit Seerosen und der Blumengarten',
    fr: "Le bassin aux nénuphars et le jardin fleuri" } },
  'giardino/06-tramonto-ulivi': { area: 'giardino', alt: {
    it: 'Il sole che tramonta tra gli ulivi del giardino',
    en: 'The sun setting between the olive trees in the garden',
    de: 'Die Sonne geht zwischen den Olivenbäumen im Garten unter',
    fr: 'Le soleil se couche entre les oliviers du jardin' } },
  'giardino/07-cipressi-giardino': { area: 'giardino', alt: {
    it: 'Il prato del giardino con i cipressi e le colline',
    en: 'The garden lawn with cypress trees and hills',
    de: 'Der Rasen im Garten mit Zypressen und Hügeln',
    fr: 'La pelouse du jardin avec cyprès et collines' } },
  'giardino/08-laghetto-sera': { area: 'giardino', alt: {
    it: 'Il laghetto con gli iris gialli nella luce della sera',
    en: 'The pond with yellow irises in the evening light',
    de: 'Der Teich mit gelben Iris im Abendlicht',
    fr: 'Le bassin et les iris jaunes dans la lumière du soir' } },
  'giardino/09-aiuola': { area: 'giardino', alt: {
    it: 'Un’aiuola fiorita bordata in legno, tra gli ulivi',
    en: 'A flower bed edged with wood, among the olive trees',
    de: 'Ein mit Holz eingefasstes Blumenbeet zwischen Olivenbäumen',
    fr: 'Un parterre fleuri bordé de bois, parmi les oliviers' } },
  'giardino/10-prato-cipressi': { area: 'giardino', alt: {
    it: 'Il prato con i cipressi e il bordo del laghetto',
    en: 'The lawn with cypress trees and the edge of the pond',
    de: 'Die Wiese mit Zypressen und dem Rand des Teichs',
    fr: 'La pelouse avec les cyprès et le bord du bassin' } },
  // Foto serale della casa con le luci accese (hero). Da aggiungere come
  // src/assets/foto/casa/00-casa-sera.jpg: appena il file c'è, la home la usa da sola.
  'casa/00-casa-sera': { area: 'casa', alt: {
    it: 'La casa di sera, con tutte le luci accese',
    en: 'The house in the evening, with all the lights on',
    de: 'Das Haus am Abend, alle Lichter an',
    fr: 'La maison le soir, toutes lumières allumées' } },
};

export interface Foto {
  id: string;
  area: Area;
  src: ImageMetadata;
  alt: Testi;
}

/** Tutte le foto del catalogo, nell'ordine dei nomi file. */
export const tutteLeFoto: Foto[] = Object.entries(file)
  .map(([percorso, mod]) => {
    const id = percorso.replace('../assets/foto/', '').replace(/\.[a-z]+$/i, '');
    const voce = catalogo[id];
    if (!voce) throw new Error(`Foto senza voce nel catalogo (src/data/foto.ts): ${id}`);
    return { id, area: voce.area, src: mod.default, alt: voce.alt };
  })
  .sort((a, b) => a.id.localeCompare(b.id));

/** Una foto per id (es. 'casa/03-cappella'); errore in build se manca. */
export function foto(id: string): Foto {
  const f = tutteLeFoto.find((x) => x.id === id);
  if (!f) throw new Error(`Foto non trovata: ${id}`);
  return f;
}

/** true se la foto è presente in src/assets/foto (le voci del catalogo senza file sono ammesse). */
export function esisteFoto(id: string): boolean {
  return tutteLeFoto.some((x) => x.id === id);
}
