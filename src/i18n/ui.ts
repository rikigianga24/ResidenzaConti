// Testi brevi dell'interfaccia (menu, pulsanti, etichette) nelle 4 lingue.
// I testi lunghi delle pagine stanno in src/content/{lingua}/*.md.
// Traduzioni EN/DE/FR: bozza da far rivedere a una persona prima del lancio.
import type { Lingua, Pagina } from './lingue';

const it = {
  // menu: nome di ogni pagina
  'pag.home': 'Home',
  'pag.casa': 'La casa',
  'pag.galleria': 'Galleria',
  'pag.storia': 'La nostra storia',
  'pag.dintorni': 'Dintorni',
  'pag.disponibilita': 'Disponibilità e prezzi',
  'pag.recensioni': 'Recensioni',
  'pag.arrivare': 'Come arrivare',
  'pag.faq': 'Domande frequenti',
  'pag.contatti': 'Contatti',
  'pag.privacy': 'Privacy',
  'pag.cookie': 'Cookie',

  'nav.principale': 'Principale',
  'nav.menu': 'Menu',
  'nav.lingua': 'Lingua',
  'nav.salta': 'Vai al contenuto',

  'cta.whatsapp': 'WhatsApp',
  'cta.whatsappLungo': 'Scrivici su WhatsApp',
  'cta.chiama': 'Chiama',
  'cta.email': 'Scrivi una email',
  'cta.booking': 'Prenota su Booking.com',
  // messaggio precompilato di WhatsApp
  'wa.messaggio': 'Ciao! Vorrei informazioni per un soggiorno dal … al … per … persone',

  'foot.indirizzo': 'Indirizzo',
  'foot.contatti': 'Contatti',
  'foot.info': 'Informazioni',
  'foot.daFornire': '[DA FORNIRE]',

  'badge.giro': 'Residenza Conti  ✦  Val di Chio, Toscana  ✦',
  'scorri.casa': 'Le stanze della casa, scorri per vederle',
  'scorri.dintorni': 'Dintorni, scorri per vederli',
  'link.tuttoCasa': 'Tutto sulla casa',
  'link.storia': 'La nostra storia',
  'link.dintorni': 'Cosa fare nei dintorni',
  'link.galleria': 'Guarda tutte le foto',
  'link.recensioniBooking': 'Leggi le recensioni su Booking.com',

  'rec.titolo': 'Dicono di noi su Booking.com',
  'rec.media': 'su 10, punteggio medio su Booking.com',
  'rec.nessuna': '[DA FORNIRE: recensioni reali da Booking.com, copiate senza modifiche]',
  'rec.lingua': 'Recensione originale in',

  'cal.titolo': 'Calendario',
  'cal.libero': 'Libero',
  'cal.occupato': 'Occupato',
  'cal.indicativo': 'Il calendario è indicativo: la conferma arriva sempre da noi, su WhatsApp.',
  'cal.nonDisponibile': 'Il calendario non è disponibile in questo momento. Scriveteci le date su WhatsApp.',
  'cal.precedente': 'Mese precedente',
  'cal.successivo': 'Mese successivo',
  'cal.aggiornato': 'Aggiornato il',

  'prezzi.titolo': 'Prezzi per stagione',
  'prezzi.stagione': 'Stagione',
  'prezzi.periodo': 'Periodo',
  'prezzi.daPartire': 'A partire da',
  'prezzi.minimo': 'Soggiorno minimo',
  'prezzi.notti': 'notti',
  'prezzi.aNotte': 'a notte',
  'prezzi.nota': 'Contattaci per il prezzo esatto.',

  'mappa.google': 'Apri in Google Maps',
  'mappa.apple': 'Apri in Apple Maps',

  'galleria.casa': 'La casa',
  'galleria.giardino': 'Il giardino',
  'galleria.piscina': 'La piscina',
  'galleria.dintorni': 'I dintorni',
  'galleria.stagioni': 'Le stagioni',

  'auto.tempo': 'in auto',

  '404.titolo': 'Pagina non trovata',
  '404.testo': 'Questa pagina non esiste, o forse si è persa tra gli ulivi.',
  '404.home': 'Torna alla home',
};

export type ChiaveUi = keyof typeof it;

const en: Record<ChiaveUi, string> = {
  'pag.home': 'Home',
  'pag.casa': 'The house',
  'pag.galleria': 'Gallery',
  'pag.storia': 'Our story',
  'pag.dintorni': 'Surroundings',
  'pag.disponibilita': 'Availability & prices',
  'pag.recensioni': 'Reviews',
  'pag.arrivare': 'Getting here',
  'pag.faq': 'FAQ',
  'pag.contatti': 'Contact',
  'pag.privacy': 'Privacy',
  'pag.cookie': 'Cookies',

  'nav.principale': 'Main',
  'nav.menu': 'Menu',
  'nav.lingua': 'Language',
  'nav.salta': 'Skip to content',

  'cta.whatsapp': 'WhatsApp',
  'cta.whatsappLungo': 'Message us on WhatsApp',
  'cta.chiama': 'Call',
  'cta.email': 'Send an email',
  'cta.booking': 'Book on Booking.com',
  'wa.messaggio': 'Hi! I would like some information about a stay from … to … for … people',

  'foot.indirizzo': 'Address',
  'foot.contatti': 'Contact',
  'foot.info': 'Information',
  'foot.daFornire': '[TO BE PROVIDED]',

  'badge.giro': 'Residenza Conti  ✦  Val di Chio, Tuscany  ✦',
  'scorri.casa': 'The rooms of the house, scroll to see them',
  'scorri.dintorni': 'Surroundings, scroll to see them',
  'link.tuttoCasa': 'All about the house',
  'link.storia': 'Our story',
  'link.dintorni': 'Things to do nearby',
  'link.galleria': 'See all the photos',
  'link.recensioniBooking': 'Read the reviews on Booking.com',

  'rec.titolo': 'What guests say on Booking.com',
  'rec.media': 'out of 10, average score on Booking.com',
  'rec.nessuna': '[TO BE PROVIDED: real reviews from Booking.com, copied unchanged]',
  'rec.lingua': 'Original review in',

  'cal.titolo': 'Calendar',
  'cal.libero': 'Available',
  'cal.occupato': 'Booked',
  'cal.indicativo': 'The calendar is a guide only: we always confirm on WhatsApp.',
  'cal.nonDisponibile': 'The calendar is not available right now. Send us your dates on WhatsApp.',
  'cal.precedente': 'Previous month',
  'cal.successivo': 'Next month',
  'cal.aggiornato': 'Updated on',

  'prezzi.titolo': 'Prices by season',
  'prezzi.stagione': 'Season',
  'prezzi.periodo': 'Dates',
  'prezzi.daPartire': 'From',
  'prezzi.minimo': 'Minimum stay',
  'prezzi.notti': 'nights',
  'prezzi.aNotte': 'per night',
  'prezzi.nota': 'Get in touch for the exact price.',

  'mappa.google': 'Open in Google Maps',
  'mappa.apple': 'Open in Apple Maps',

  'galleria.casa': 'The house',
  'galleria.giardino': 'The garden',
  'galleria.piscina': 'The pool',
  'galleria.dintorni': 'The surroundings',
  'galleria.stagioni': 'The seasons',

  'auto.tempo': 'by car',

  '404.titolo': 'Page not found',
  '404.testo': 'This page does not exist, or maybe it got lost among the olive trees.',
  '404.home': 'Back to the home page',
};

const de: Record<ChiaveUi, string> = {
  'pag.home': 'Startseite',
  'pag.casa': 'Das Haus',
  'pag.galleria': 'Galerie',
  'pag.storia': 'Unsere Geschichte',
  'pag.dintorni': 'Umgebung',
  'pag.disponibilita': 'Verfügbarkeit & Preise',
  'pag.recensioni': 'Bewertungen',
  'pag.arrivare': 'Anreise',
  'pag.faq': 'Häufige Fragen',
  'pag.contatti': 'Kontakt',
  'pag.privacy': 'Datenschutz',
  'pag.cookie': 'Cookies',

  'nav.principale': 'Hauptmenü',
  'nav.menu': 'Menü',
  'nav.lingua': 'Sprache',
  'nav.salta': 'Zum Inhalt springen',

  'cta.whatsapp': 'WhatsApp',
  'cta.whatsappLungo': 'Schreiben Sie uns auf WhatsApp',
  'cta.chiama': 'Anrufen',
  'cta.email': 'E-Mail schreiben',
  'cta.booking': 'Auf Booking.com buchen',
  'wa.messaggio': 'Hallo! Ich hätte gern Informationen zu einem Aufenthalt vom … bis … für … Personen',

  'foot.indirizzo': 'Adresse',
  'foot.contatti': 'Kontakt',
  'foot.info': 'Informationen',
  'foot.daFornire': '[FOLGT]',

  'badge.giro': 'Residenza Conti  ✦  Val di Chio, Toskana  ✦',
  'scorri.casa': 'Die Räume des Hauses, zum Ansehen wischen',
  'scorri.dintorni': 'Umgebung, zum Ansehen wischen',
  'link.tuttoCasa': 'Alles über das Haus',
  'link.storia': 'Unsere Geschichte',
  'link.dintorni': 'Ausflüge in der Umgebung',
  'link.galleria': 'Alle Fotos ansehen',
  'link.recensioniBooking': 'Bewertungen auf Booking.com lesen',

  'rec.titolo': 'Das sagen unsere Gäste auf Booking.com',
  'rec.media': 'von 10, Durchschnitt auf Booking.com',
  'rec.nessuna': '[FOLGT: echte Bewertungen von Booking.com, unverändert übernommen]',
  'rec.lingua': 'Originalbewertung auf',

  'cal.titolo': 'Kalender',
  'cal.libero': 'Frei',
  'cal.occupato': 'Belegt',
  'cal.indicativo': 'Der Kalender dient nur zur Orientierung: Die Bestätigung erhalten Sie immer von uns per WhatsApp.',
  'cal.nonDisponibile': 'Der Kalender ist gerade nicht verfügbar. Schreiben Sie uns Ihre Daten auf WhatsApp.',
  'cal.precedente': 'Vorheriger Monat',
  'cal.successivo': 'Nächster Monat',
  'cal.aggiornato': 'Aktualisiert am',

  'prezzi.titolo': 'Preise nach Saison',
  'prezzi.stagione': 'Saison',
  'prezzi.periodo': 'Zeitraum',
  'prezzi.daPartire': 'Ab',
  'prezzi.minimo': 'Mindestaufenthalt',
  'prezzi.notti': 'Nächte',
  'prezzi.aNotte': 'pro Nacht',
  'prezzi.nota': 'Für den genauen Preis kontaktieren Sie uns bitte.',

  'mappa.google': 'In Google Maps öffnen',
  'mappa.apple': 'In Apple Karten öffnen',

  'galleria.casa': 'Das Haus',
  'galleria.giardino': 'Der Garten',
  'galleria.piscina': 'Der Pool',
  'galleria.dintorni': 'Die Umgebung',
  'galleria.stagioni': 'Die Jahreszeiten',

  'auto.tempo': 'mit dem Auto',

  '404.titolo': 'Seite nicht gefunden',
  '404.testo': 'Diese Seite gibt es nicht – vielleicht hat sie sich zwischen den Olivenbäumen verlaufen.',
  '404.home': 'Zur Startseite',
};

const fr: Record<ChiaveUi, string> = {
  'pag.home': 'Accueil',
  'pag.casa': 'La maison',
  'pag.galleria': 'Galerie',
  'pag.storia': 'Notre histoire',
  'pag.dintorni': 'Alentours',
  'pag.disponibilita': 'Disponibilités et tarifs',
  'pag.recensioni': 'Avis',
  'pag.arrivare': 'Accès',
  'pag.faq': 'Questions fréquentes',
  'pag.contatti': 'Contact',
  'pag.privacy': 'Confidentialité',
  'pag.cookie': 'Cookies',

  'nav.principale': 'Principal',
  'nav.menu': 'Menu',
  'nav.lingua': 'Langue',
  'nav.salta': 'Aller au contenu',

  'cta.whatsapp': 'WhatsApp',
  'cta.whatsappLungo': 'Écrivez-nous sur WhatsApp',
  'cta.chiama': 'Appeler',
  'cta.email': 'Envoyer un e-mail',
  'cta.booking': 'Réserver sur Booking.com',
  'wa.messaggio': 'Bonjour ! Je souhaiterais des informations pour un séjour du … au … pour … personnes',

  'foot.indirizzo': 'Adresse',
  'foot.contatti': 'Contact',
  'foot.info': 'Informations',
  'foot.daFornire': '[À FOURNIR]',

  'badge.giro': 'Residenza Conti  ✦  Val di Chio, Toscane  ✦',
  'scorri.casa': 'Les pièces de la maison, faites défiler pour les voir',
  'scorri.dintorni': 'Les alentours, faites défiler pour les voir',
  'link.tuttoCasa': 'Tout sur la maison',
  'link.storia': 'Notre histoire',
  'link.dintorni': 'Que faire aux alentours',
  'link.galleria': 'Voir toutes les photos',
  'link.recensioniBooking': 'Lire les avis sur Booking.com',

  'rec.titolo': 'Ce que disent nos hôtes sur Booking.com',
  'rec.media': 'sur 10, note moyenne sur Booking.com',
  'rec.nessuna': '[À FOURNIR : avis réels de Booking.com, copiés sans modification]',
  'rec.lingua': 'Avis original en',

  'cal.titolo': 'Calendrier',
  'cal.libero': 'Libre',
  'cal.occupato': 'Réservé',
  'cal.indicativo': 'Le calendrier est indicatif : la confirmation vient toujours de nous, sur WhatsApp.',
  'cal.nonDisponibile': "Le calendrier n'est pas disponible pour le moment. Envoyez-nous vos dates sur WhatsApp.",
  'cal.precedente': 'Mois précédent',
  'cal.successivo': 'Mois suivant',
  'cal.aggiornato': 'Mis à jour le',

  'prezzi.titolo': 'Tarifs par saison',
  'prezzi.stagione': 'Saison',
  'prezzi.periodo': 'Période',
  'prezzi.daPartire': 'À partir de',
  'prezzi.minimo': 'Séjour minimum',
  'prezzi.notti': 'nuits',
  'prezzi.aNotte': 'par nuit',
  'prezzi.nota': 'Contactez-nous pour le prix exact.',

  'mappa.google': 'Ouvrir dans Google Maps',
  'mappa.apple': 'Ouvrir dans Plans (Apple)',

  'galleria.casa': 'La maison',
  'galleria.giardino': 'Le jardin',
  'galleria.piscina': 'La piscine',
  'galleria.dintorni': 'Les alentours',
  'galleria.stagioni': 'Les saisons',

  'auto.tempo': 'en voiture',

  '404.titolo': 'Page introuvable',
  '404.testo': "Cette page n'existe pas, ou peut-être s'est-elle perdue parmi les oliviers.",
  '404.home': "Retour à l'accueil",
};

const ui: Record<Lingua, Record<ChiaveUi, string>> = { it, en, de, fr };

export function useT(lang: Lingua) {
  return (k: ChiaveUi): string => ui[lang][k];
}

export function nomePagina(p: Pagina, lang: Lingua): string {
  return ui[lang][`pag.${p}` as ChiaveUi];
}
