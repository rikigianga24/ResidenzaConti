# Schede dei luoghi (Umbria). Fonti: Umbria Tourism (umbriatourism.it) e italia.it, lette il 25/11/2026.
from schede_toscana import T

SCHEDE_UMBRIA = [
 dict(id='citta-di-castello', nome='Città di Castello', categoria='cultura', chiave='citta_di_castello', mappa='Città di Castello, Perugia',
  url='https://www.umbriatourism.it/citta-di-castello',
  descrizione=T(
   "Città dell'Alta Valle del Tevere, a pochi chilometri dalla Toscana. In Piazza Matteotti c'è il Palazzo del Podestà; la Pinacoteca Comunale, nel rinascimentale Palazzo Vitelli alla Cannoniera, è la più importante raccolta d'arte umbra dopo quella di Perugia. È anche la città di Alberto Burri, a cui è dedicata una fondazione.",
   "A town in the Alta Valle del Tevere, a few kilometres from Tuscany. Piazza Matteotti has the Palazzo del Podestà; the Pinacoteca Comunale, housed in the Renaissance Palazzo Vitelli alla Cannoniera, is described as Umbria's most important art collection after Perugia's. It is also the town of Alberto Burri, to whom a foundation is dedicated.",
   "Eine Stadt im Alta Valle del Tevere, wenige Kilometer von der Toskana entfernt. An der Piazza Matteotti steht der Palazzo del Podestà; die Pinacoteca Comunale im Renaissance-Palazzo Vitelli alla Cannoniera gilt als bedeutendste umbrische Kunstsammlung nach der von Perugia. Es ist auch die Stadt von Alberto Burri, dem eine Stiftung gewidmet ist.",
   "Ville de l'Alta Valle del Tevere, à quelques kilomètres de la Toscane. La Piazza Matteotti abrite le Palazzo del Podestà ; la Pinacoteca Comunale, installée dans le palais Renaissance Palazzo Vitelli alla Cannoniera, est décrite comme la plus importante collection d'art ombrien après celle de Pérouse. C'est aussi la ville d'Alberto Burri, à qui une fondation est consacrée.")),
 dict(id='montone', nome='Montone', categoria='borgo', chiave='montone', mappa='Montone, Perugia',
  url='https://www.umbriatourism.it/montone',
  descrizione=T(
   "Borgo medievale dell'Alta Valle del Tevere, tra \"I Borghi più belli d'Italia\". Legato alla famiglia Fortebracci e a Braccio da Montone, ha la chiesa gotica di San Francesco con il suo complesso museale e la Collegiata di Santa Maria e San Gregorio Magno. Si gira a piedi tra vicoli e panorami.",
   "A medieval village in the Alta Valle del Tevere, listed among \"I Borghi più belli d'Italia\". Tied to the Fortebracci family and to Braccio da Montone, it has the Gothic church of San Francesco with its museum complex and the Collegiata of Santa Maria and San Gregorio Magno. Best explored on foot, through alleys and viewpoints.",
   "Mittelalterliches Dorf im Alta Valle del Tevere, eines der \"Borghi più belli d'Italia\". Mit der Familie Fortebracci und Braccio da Montone verbunden, besitzt es die gotische Kirche San Francesco mit ihrem Museumskomplex und die Collegiata di Santa Maria e San Gregorio Magno. Man erkundet es zu Fuß, durch Gassen und Aussichtspunkte.",
   "Village médiéval de l'Alta Valle del Tevere, classé parmi \"I Borghi più belli d'Italia\". Lié à la famille Fortebracci et à Braccio da Montone, il possède l'église gothique San Francesco avec son complexe muséal et la Collegiata Santa Maria e San Gregorio Magno. À parcourir à pied, entre ruelles et points de vue.")),
 dict(id='umbertide', nome='Umbertide', categoria='cultura', chiave='umbertide', mappa='Umbertide, Perugia',
  url='https://www.umbriatourism.it/-/rocca-di-umbertide',
  descrizione=T(
   "Città tra il Monte Acuto e il Tevere, con la Rocca medievale nel centro storico, simbolo della città: progettata nel 1374, ha una torre quadrata alta oltre 30 m e oggi ospita il Centro d'Arte Contemporanea. Nella chiesa di Santa Croce si conserva una Deposizione di Luca Signorelli.",
   "A town between Monte Acuto and the Tiber, with the medieval Rocca in its historic centre, the town's symbol: designed in 1374, it has a square tower over 30 m tall and now hosts the Centro d'Arte Contemporanea. The church of Santa Croce preserves a Deposition by Luca Signorelli.",
   "Eine Stadt zwischen dem Monte Acuto und dem Tiber, mit der mittelalterlichen Rocca im historischen Zentrum, dem Wahrzeichen der Stadt: 1374 entworfen, mit einem über 30 m hohen quadratischen Turm, beherbergt sie heute das Centro d'Arte Contemporanea. In der Kirche Santa Croce wird eine Kreuzabnahme von Luca Signorelli bewahrt.",
   "Ville entre le Monte Acuto et le Tibre, avec la Rocca médiévale dans le centre historique, symbole de la cité : conçue en 1374, elle a une tour carrée de plus de 30 m et accueille aujourd'hui le Centro d'Arte Contemporanea. L'église Santa Croce conserve une Déposition de Luca Signorelli.")),
 dict(id='gubbio', nome='Gubbio', categoria='borgo', chiave='gubbio', mappa='Gubbio, Perugia',
  url='https://www.umbriatourism.it/gubbio',
  descrizione=T(
   "Città medievale alle pendici del Monte Ingino. Piazza Grande è dominata dal gotico Palazzo dei Consoli, che ospita il Museo Civico e le Tavole Iguvine; poi il Duomo e il Teatro Romano, costruito nel I secolo a.C.",
   "A medieval city on the slopes of Monte Ingino. Piazza Grande is dominated by the Gothic Palazzo dei Consoli, which houses the Civic Museum and the Iguvine Tablets; then the Cathedral and the Roman Theatre, begun in the 1st century BC.",
   "Mittelalterliche Stadt am Hang des Monte Ingino. Die Piazza Grande wird vom gotischen Palazzo dei Consoli beherrscht, der das Stadtmuseum und die Iguvinischen Tafeln beherbergt; dazu der Dom und das Römische Theater aus dem 1. Jahrhundert v. Chr.",
   "Ville médiévale à flanc du Monte Ingino. La Piazza Grande est dominée par le Palazzo dei Consoli gothique, qui abrite le musée civique et les Tables d'Iguvium ; puis la cathédrale et le théâtre romain, commencé au Ier siècle av. J.-C.")),
 dict(id='castiglione-del-lago', nome='Castiglione del Lago', categoria='borgo', chiave='castiglione_del_lago', mappa='Castiglione del Lago, Perugia',
  url='https://www.umbriatourism.it/en/w/castiglione-del-lago-en',
  descrizione=T(
   "Borgo su un promontorio affacciato sul Trasimeno, cinto da mura medievali. C'è la Rocca del Leone, con un anfiteatro all'aperto, e il lago a portata di sguardo.",
   "A village on a promontory overlooking Lake Trasimeno, ringed by medieval walls. It has the Rocca del Leone, with an open-air amphitheatre, and the lake always in view.",
   "Dorf auf einer Landzunge über dem Trasimenischen See, von mittelalterlichen Mauern umgeben. Es gibt die Rocca del Leone mit einem Freilufttheater, und der See ist immer im Blick.",
   "Village sur un promontoire dominant le lac Trasimène, ceint de remparts médiévaux. On y trouve la Rocca del Leone, avec un amphithéâtre en plein air, et le lac toujours en vue.")),
 dict(id='passignano', nome=T('Passignano sul Trasimeno','Passignano sul Trasimeno','Passignano sul Trasimeno','Passignano sul Trasimeno'), categoria='borgo', chiave='passignano', mappa='Passignano sul Trasimeno, Perugia',
  url='https://www.umbriatourism.it/en/w/passignano-sul-trasimeno-en',
  descrizione=T(
   "Borgo medievale sul lato nord del lago, con una passeggiata sull'acqua e la Rocca. Da qui partono anche i traghetti per l'Isola Maggiore.",
   "A medieval village on the north shore of the lake, with a lakeside promenade and the Rocca. Ferries to Isola Maggiore also leave from here.",
   "Mittelalterliches Dorf am Nordufer des Sees, mit einer Uferpromenade und der Rocca. Von hier fahren auch Fähren zur Isola Maggiore.",
   "Village médiéval sur la rive nord du lac, avec une promenade au bord de l'eau et la Rocca. C'est aussi d'ici que partent les bacs pour l'Isola Maggiore.")),
 dict(id='isola-maggiore', nome='Isola Maggiore', categoria='borgo', chiave='isola_maggiore', mappa='Isola Maggiore, Tuoro sul Trasimeno',
  url='https://www.umbriatourism.it/en/w/isola-maggiore-en-1',
  descrizione=T(
   "La seconda isola del lago e l'unica con un piccolo villaggio abitato vicino al porto: la chiesa di San Michele Arcangelo con affreschi di scuola umbra e la tradizione del merletto irlandese. Si raggiunge con i traghetti da Tuoro, Passignano e Castiglione del Lago (verificate orari e gestore).",
   "The lake's second island and the only one with a small inhabited village near the harbour: the church of San Michele Arcangelo with Umbrian-school frescoes, and the Irish lace tradition. Reached by ferry from Tuoro, Passignano and Castiglione del Lago (check timetables and operator).",
   "Die zweitgrößte Insel des Sees und die einzige mit einem kleinen bewohnten Dorf am Hafen: die Kirche San Michele Arcangelo mit Fresken der umbrischen Schule und die Tradition der irischen Spitze. Erreichbar mit Fähren ab Tuoro, Passignano und Castiglione del Lago (Fahrpläne und Betreiber bitte prüfen).",
   "La deuxième île du lac et la seule avec un petit village habité près du port : l'église San Michele Arcangelo avec des fresques de l'école ombrienne, et la tradition de la dentelle irlandaise. On y accède en bac depuis Tuoro, Passignano et Castiglione del Lago (vérifiez horaires et exploitant).")),
]
