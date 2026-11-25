# Schede dei luoghi (Toscana) per src/content/dintorni.json. Vedi costruisci_dintorni.py.
# Regola: solo fatti letti su fonti ufficiali o presenti nel brief del proprietario; niente orari, prezzi o date non verificate.
def T(it, en, de, fr): return {'it': it, 'en': en, 'de': de, 'fr': fr}

SCHEDE_TOSCANA = [
 dict(id='castiglion-fiorentino', nome='Castiglion Fiorentino', categoria='borgo', vetrina=True, chiave='castiglion', mappa='Castiglion Fiorentino, Arezzo',
  url='https://www.visitvaldichiana.it/esplora/castiglion-fiorentino/',
  descrizione=T(
   "Borgo medievale su un colle della Valdichiana, con mura duecentesche e la Torre del Cassero. Nell'area del Cassero si trovano la Pinacoteca Comunale e il Percorso Archeologico Sotterraneo; le Logge del Vasari, del 1513, aprono il panorama sulla valle. C'è anche il Museo Civico Archeologico.",
   "A medieval hill town in the Valdichiana, with thirteenth-century walls and the Cassero tower. The Cassero area holds the Pinacoteca Comunale (art gallery) and the Underground Archaeological Trail; Vasari's loggia, dated 1513, opens onto the view of the valley. The Museo Civico Archeologico is here too.",
   "Mittelalterliches Hügelstädtchen in der Valdichiana, mit Mauern aus dem 13. Jahrhundert und dem Turm des Cassero. Im Bereich des Cassero befinden sich die Pinacoteca Comunale und der unterirdische archäologische Rundgang; die Loggia von Vasari von 1513 öffnet den Blick auf das Tal. Auch das Museo Civico Archeologico ist hier.",
   "Village médiéval perché sur une colline de la Valdichiana, avec des remparts du XIIIe siècle et la tour du Cassero. Le quartier du Cassero abrite la Pinacoteca Comunale et le parcours archéologique souterrain ; la loggia de Vasari, datée de 1513, ouvre la vue sur la vallée. Le Museo Civico Archeologico se trouve aussi ici.")),
 dict(id='val-di-chio', nome=T('La Val di Chio','The Val di Chio','Das Val di Chio','Le Val di Chio'), categoria='natura', vetrina=False, chiave='val_di_chio', mappa='Pieve di Chio, Castiglion Fiorentino',
  url='https://www.visitvaldichiana.it/esplora/castiglion-fiorentino/',
  descrizione=T(
   "La valle in cui si trova la Residenza: piccoli borghi di origine medievale, antiche ville agricole, la Pieve di Chio e oliveti che danno un olio franto a freddo nei frantoi della zona. Si visita senza fretta, in auto o a piedi.",
   "The valley where the Residenza stands: small villages of medieval origin, old farm villas, the Pieve di Chio and olive groves that give a cold-pressed oil in the local mills. Best enjoyed slowly, by car or on foot.",
   "Das Tal, in dem die Residenza liegt: kleine Dörfer mittelalterlichen Ursprungs, alte Landgüter, die Pieve di Chio und Olivenhaine, die ein kaltgepresstes Öl in den örtlichen Ölmühlen liefern. Am schönsten ohne Eile, mit dem Auto oder zu Fuß.",
   "La vallée où se trouve la Residenza : petits villages d'origine médiévale, anciennes villas agricoles, la Pieve di Chio et des oliveraies qui donnent une huile pressée à froid dans les moulins de la région. À découvrir sans hâte, en voiture ou à pied.")),
 dict(id='montecchio-vesponi', nome=T('Castello di Montecchio Vesponi','Montecchio Vesponi Castle','Burg Montecchio Vesponi',"Château de Montecchio Vesponi"), categoria='cultura', vetrina=True, chiave='montecchio', mappa='Castello di Montecchio Vesponi, Castiglion Fiorentino',
  url='https://www.visitvaldichiana.it/esplora/castiglion-fiorentino/',
  descrizione=T(
   "Fortezza privata all'ingresso della Val di Chio, su un colle ben visibile dal paesaggio circostante. Fu la dimora del capitano di ventura Giovanni Acuto. Prima di andare, verificate se e quando è visitabile.",
   "A private fortress at the entrance to the Val di Chio, on a hill visible across the surrounding landscape. It was the home of the mercenary captain Giovanni Acuto (John Hawkwood). Check beforehand whether and when it can be visited.",
   "Private Festung am Eingang des Val di Chio, auf einem Hügel, der in der Landschaft weithin sichtbar ist. Sie war der Wohnsitz des Söldnerführers Giovanni Acuto (John Hawkwood). Bitte vorher klären, ob und wann eine Besichtigung möglich ist.",
   "Forteresse privée à l'entrée du Val di Chio, sur une colline bien visible dans le paysage. Elle fut la demeure du condottiere Giovanni Acuto (John Hawkwood). Avant d'y aller, vérifiez si et quand elle se visite.")),
 dict(id='cortona', nome=T('Cortona','Cortona','Cortona','Cortone'), categoria='borgo', vetrina=True, chiave='cortona', mappa='Cortona, Arezzo',
  url='https://www.visitvaldichiana.it/esplora/cortona/',
  descrizione=T(
   "Città etrusca e medievale affacciata sulla Valdichiana: Piazza della Repubblica con il Palazzo Comunale duecentesco, il MAEC (Museo dell'Accademia Etrusca) con il Lampadario Etrusco e la Tabula Cortonensis, la Fortezza del Girifalco con il suo parco di ulivi e il panorama dal Parterre.",
   "An Etruscan and medieval town overlooking the Valdichiana: Piazza della Repubblica with its thirteenth-century town hall, the MAEC (Museum of the Etruscan Academy) with the Etruscan Lamp and the Tabula Cortonensis, the Girifalco Fortress with its olive park, and the view from the Parterre.",
   "Etruskische und mittelalterliche Stadt über der Valdichiana: die Piazza della Repubblica mit dem Rathaus aus dem 13. Jahrhundert, das MAEC (Museum der Etruskischen Akademie) mit dem Etruskischen Leuchter und der Tabula Cortonensis, die Festung Girifalco mit ihrem Olivenpark und der Blick vom Parterre.",
   "Ville étrusque et médiévale dominant la Valdichiana : la Piazza della Repubblica avec son palais communal du XIIIe siècle, le MAEC (musée de l'Académie étrusque) avec le Lustre étrusque et la Tabula Cortonensis, la forteresse du Girifalco et son parc d'oliviers, et la vue depuis le Parterre.")),
 dict(id='arezzo', nome='Arezzo', categoria='cultura', vetrina=True, chiave='arezzo', mappa='Arezzo',
  url='https://museiarezzo.it/affreschi-di-piero-della-francesca/',
  descrizione=T(
   "Il capoluogo della provincia. Nella Basilica di San Francesco c'è uno dei cicli di affreschi più importanti dell'arte italiana, di Piero della Francesca (di norma si visita su prenotazione: verificate sul sito ufficiale). Poi il centro storico con Piazza Grande e il Duomo, il Museo archeologico dedicato a Gaio Cilnio Mecenate e il Crocifisso di Cimabue in San Domenico.",
   "The provincial capital. The Basilica of San Francesco holds one of the most important fresco cycles in Italian art, by Piero della Francesca (visits are normally by reservation: check the official website). Then the historic centre with Piazza Grande and the Cathedral, the archaeological museum dedicated to Gaius Cilnius Maecenas, and Cimabue's Crucifix in San Domenico.",
   "Die Provinzhauptstadt. In der Basilika San Francesco befindet sich einer der bedeutendsten Freskenzyklen der italienischen Kunst, von Piero della Francesca (Besichtigung in der Regel nur nach Reservierung: bitte auf der offiziellen Website prüfen). Dazu das historische Zentrum mit der Piazza Grande und dem Dom, das dem Gaius Cilnius Maecenas gewidmete Archäologische Museum und das Kruzifix von Cimabue in San Domenico.",
   "Le chef-lieu de la province. La basilique San Francesco abrite l'un des plus importants cycles de fresques de l'art italien, de Piero della Francesca (visite en principe sur réservation : vérifiez sur le site officiel). Puis le centre historique avec la Piazza Grande et la cathédrale, le musée archéologique dédié à Caius Cilnius Mécène et le Crucifix de Cimabue à San Domenico.")),
 dict(id='parco-del-cilone', nome=T('Parco del Cilone','Cilone Park','Cilone-Park','Parc du Cilone'), categoria='natura', vetrina=True, chiave=None, coord=[11.84216,43.34057], mappa='43.340569,11.842158',
  url='https://www.visitvaldichiana.it/esplora/trekking-tra-gli-antichi-mulini-della-val-di-chio/',
  descrizione=T(
   "Il parco lungo il corso del Cilone, attraversato dal percorso degli Antichi Mulini: un luogo da vivere a piedi, senza fretta.",
   "The park along the course of the Cilone, crossed by the Ancient Mills trail: a place to enjoy on foot, without hurry.",
   "Der Park entlang des Cilone, den der Weg der alten Mühlen durchquert: ein Ort, den man zu Fuß und ohne Eile erleben sollte.",
   "Le parc qui longe le cours du Cilone, traversé par le sentier des anciens moulins : un lieu à parcourir à pied, sans se presser.")),
 dict(id='antichi-mulini', nome=T('Percorso degli Antichi Mulini','Ancient Mills Trail','Weg der alten Mühlen','Sentier des anciens moulins'), categoria='trekking', vetrina=True, chiave=None, coord=[11.84216,43.34057], mappa='43.340569,11.842158',
  url='https://www.visitvaldichiana.it/esplora/trekking-tra-gli-antichi-mulini-della-val-di-chio/',
  descrizione=T(
   "Un trekking facile di circa 10 km, con circa 35 m di dislivello, che segue il corso del Cilone. Lungo il cammino i nomi dei luoghi ricordano i mulini: Mulin Nuovo, Mulino Bianco, Mulino dello Zoppo. Racconta quanto l'acqua abbia contato per la valle.",
   "An easy hike of about 10 km with roughly 35 m of elevation gain, following the course of the Cilone. Along the way, place names recall the mills: Mulin Nuovo, Mulino Bianco, Mulino dello Zoppo. It tells how much water has mattered to the valley.",
   "Eine leichte Wanderung von etwa 10 km mit rund 35 Höhenmetern, die dem Lauf des Cilone folgt. Unterwegs erinnern Ortsnamen an die Mühlen: Mulin Nuovo, Mulino Bianco, Mulino dello Zoppo. Sie erzählt, wie wichtig das Wasser für das Tal war.",
   "Une randonnée facile d'environ 10 km, avec environ 35 m de dénivelé, qui suit le cours du Cilone. En chemin, les noms de lieux rappellent les moulins : Mulin Nuovo, Mulino Bianco, Mulino dello Zoppo. Elle raconte l'importance de l'eau pour la vallée.")),
 dict(id='monte-castiglion-maggio', nome='Monte Castiglion Maggio', categoria='natura', vetrina=True, chiave='monte', mappa='Monte Castiglion Maggio, Castiglion Fiorentino',
  descrizione=T(
   "Il monte che delimita a ovest la Val di Chio: un riferimento per capire la forma della valle.",
   "The mountain that closes the Val di Chio to the west: a landmark for understanding the shape of the valley.",
   "Der Berg, der das Val di Chio im Westen begrenzt: ein Orientierungspunkt, um die Form des Tals zu verstehen.",
   "La montagne qui ferme le Val di Chio à l'ouest : un repère pour comprendre la forme de la vallée.")),
 # ---- Toscana iconica ----
 dict(id='montepulciano', nome='Montepulciano', categoria='borgo', chiave='montepulciano', mappa='Montepulciano, Siena',
  url='https://www.italia.it/it/toscana/cosa-fare/montepulciano',
  descrizione=T(
   "Cittadina contesa nei secoli tra Firenze e Siena, con palazzi storici e vicoli in salita. Piazza Grande è il suo cuore, con il Palazzo Comunale e il Duomo; intorno si produce il Vino Nobile di Montepulciano DOCG, da uve Prugnolo Gentile.",
   "A town fought over for centuries by Florence and Siena, with historic palaces and steep alleys. Piazza Grande is its heart, with the Town Hall and the Cathedral; the Vino Nobile di Montepulciano DOCG, made from Prugnolo Gentile grapes, is produced around the town.",
   "Eine Stadt, um die Florenz und Siena jahrhundertelang rangen, mit historischen Palästen und ansteigenden Gassen. Die Piazza Grande ist ihr Herz, mit dem Rathaus und dem Dom; rund um die Stadt wird der Vino Nobile di Montepulciano DOCG aus Prugnolo-Gentile-Trauben erzeugt.",
   "Ville disputée pendant des siècles entre Florence et Sienne, avec ses palais historiques et ses ruelles en pente. La Piazza Grande en est le cœur, avec l'hôtel de ville et la cathédrale ; autour de la ville on produit le Vino Nobile di Montepulciano DOCG, issu du cépage Prugnolo Gentile.")),
 dict(id='pienza', nome='Pienza', categoria='cultura', chiave='pienza', mappa='Pienza, Siena',
  url='https://www.italia.it/it/toscana/siena/pienza',
  descrizione=T(
   "La \"città ideale\" del Rinascimento: Papa Pio II fece ridisegnare il borgo medievale di Corsignano e l'opera fu affidata a Bernardo Rossellino. Piazza Pio II, trapezoidale, è circondata dalla Cattedrale e dai palazzi; lungo il corso principale le botteghe vendono il pecorino.",
   "The Renaissance \"ideal city\": Pope Pius II had the medieval village of Corsignano redesigned, entrusting the work to Bernardo Rossellino. The trapezoidal Piazza Pio II is surrounded by the Cathedral and the palaces; along the main street the shops sell pecorino.",
   "Die \"Idealstadt\" der Renaissance: Papst Pius II. ließ das mittelalterliche Dorf Corsignano neu gestalten und beauftragte Bernardo Rossellino. Die trapezförmige Piazza Pio II wird von Dom und Palästen gesäumt; entlang der Hauptstraße verkaufen die Läden Pecorino.",
   "La \"ville idéale\" de la Renaissance : le pape Pie II fit redessiner le village médiéval de Corsignano et confia l'œuvre à Bernardo Rossellino. La Piazza Pio II, trapézoïdale, est entourée par la cathédrale et les palais ; le long de la rue principale, les boutiques vendent le pecorino.")),
 dict(id='san-quirico', nome=T("San Quirico d'Orcia","San Quirico d'Orcia","San Quirico d'Orcia","San Quirico d'Orcia"), categoria='borgo', chiave='san_quirico', mappa="San Quirico d'Orcia, Siena",
  url='https://www.italia.it/it/toscana/cosa-fare/val-orcia',
  descrizione=T(
   "Borgo della Val d'Orcia con un centro storico raccolto e gli Horti Leonini, giardino all'italiana nel cuore del paese. Fa parte dei borghi che compongono il paesaggio riconosciuto dall'UNESCO.",
   "A Val d'Orcia village with a compact historic centre and the Horti Leonini, an Italian garden in the heart of the town. It is one of the villages that make up the landscape recognised by UNESCO.",
   "Ein Dorf im Val d'Orcia mit einem überschaubaren historischen Zentrum und den Horti Leonini, einem italienischen Garten mitten im Ort. Es gehört zu den Dörfern, die die von der UNESCO anerkannte Landschaft ausmachen.",
   "Village du Val d'Orcia au centre historique ramassé, avec les Horti Leonini, jardin à l'italienne au cœur du bourg. Il fait partie des villages qui composent le paysage reconnu par l'UNESCO.")),
 dict(id='bagno-vignoni', nome='Bagno Vignoni', categoria='borgo', chiave='bagno_vignoni', mappa='Bagno Vignoni, San Quirico d\'Orcia',
  url='https://www.italia.it/it/toscana/siena/san-quirico-d%27orcia/cosa-fare/bagno-vignoni-e-le-acque-termali',
  descrizione=T(
   "Un piccolo borgo famoso per la sua piazza: al posto del selciato, al centro c'è una grande vasca di acqua termale. Una sosta breve e suggestiva, ideale prima di rientrare.",
   "A small village famous for its square: instead of paving, at the centre lies a large thermal water pool. A short, evocative stop, ideal before heading back.",
   "Ein kleines Dorf, berühmt für seinen Platz: Statt Pflaster liegt in der Mitte ein großes Thermalwasserbecken. Ein kurzer, stimmungsvoller Halt, ideal vor der Rückfahrt.",
   "Un petit village célèbre pour sa place : au lieu des pavés, un grand bassin d'eau thermale occupe le centre. Une halte brève et évocatrice, idéale avant de rentrer.")),
 dict(id='siena', nome=T('Siena','Siena','Siena','Sienne'), categoria='cultura', chiave='siena', mappa='Siena',
  url='https://www.italia.it/it/toscana/siena/cosa-fare/siena-centro-storico',
  descrizione=T(
   "Città d'arte con il centro storico riconosciuto dall'UNESCO (1995). Piazza del Campo, a conchiglia, è il centro; il Palazzo Pubblico ospita il Museo Civico e la Torre del Mangia, il Duomo custodisce opere di Nicola Pisano, Donatello e Michelangelo. Dell'Opera della Metropolitana fanno parte anche Libreria Piccolomini, Museo e Battistero.",
   "An art city whose historic centre is recognised by UNESCO (1995). Shell-shaped Piazza del Campo is its centre; the Palazzo Pubblico houses the Civic Museum and the Torre del Mangia, while the Cathedral holds works by Nicola Pisano, Donatello and Michelangelo. The Opera della Metropolitana complex also includes the Piccolomini Library, the Museum and the Baptistery.",
   "Eine Kunststadt, deren Altstadt von der UNESCO anerkannt ist (1995). Die muschelförmige Piazza del Campo ist ihr Zentrum; im Palazzo Pubblico befinden sich das Stadtmuseum und der Torre del Mangia, der Dom bewahrt Werke von Nicola Pisano, Donatello und Michelangelo. Zum Komplex der Opera della Metropolitana gehören auch die Libreria Piccolomini, das Museum und das Baptisterium.",
   "Ville d'art dont le centre historique est reconnu par l'UNESCO (1995). La Piazza del Campo, en forme de coquille, en est le centre ; le Palazzo Pubblico abrite le musée civique et la Torre del Mangia, la cathédrale conserve des œuvres de Nicola Pisano, Donatello et Michel-Ange. Le complexe de l'Opera della Metropolitana comprend aussi la Libreria Piccolomini, le musée et le baptistère.")),
 dict(id='monteriggioni', nome='Monteriggioni', categoria='borgo', chiave='monteriggioni', mappa='Monteriggioni, Siena',
  descrizione=T(
   "Piccolo borgo fortificato medievale, racchiuso da mura e torri: si gira in poco tempo ed è una sosta facile lungo la strada tra Siena e San Gimignano.",
   "A small medieval fortified village enclosed by walls and towers: it can be seen quickly and makes an easy stop on the road between Siena and San Gimignano.",
   "Ein kleines mittelalterliches Festungsdorf, von Mauern und Türmen umschlossen: Man sieht es schnell, und es ist ein einfacher Halt auf dem Weg zwischen Siena und San Gimignano.",
   "Petit village fortifié médiéval, enfermé dans ses remparts et ses tours : on en fait vite le tour, et c'est une halte facile sur la route entre Sienne et San Gimignano.")),
 dict(id='san-gimignano', nome='San Gimignano', categoria='borgo', chiave='san_gimignano', mappa='San Gimignano, Siena',
  url='https://www.italia.it/it/toscana/siena/san-gimignano/cosa-fare/san-gimignano-e-le-sue-torri',
  descrizione=T(
   "Il borgo delle torri: oggi ne restano 14, in origine erano 72. La Torre Grossa, la più alta (52 m, del 1311), sorge accanto al Palazzo Comunale in piazza Duomo; poco lontano c'è piazza della Cisterna. Nel Palazzo Comunale ci sono i Musei Civici e la Sala di Dante.",
   "The town of towers: 14 remain today, there were originally 72. The Torre Grossa, the tallest (52 m, from 1311), stands beside the Town Hall in Piazza Duomo; Piazza della Cisterna is not far. The Town Hall houses the Civic Museums and the Sala di Dante.",
   "Das Städtchen der Türme: Heute stehen noch 14, ursprünglich waren es 72. Die Torre Grossa, der höchste (52 m, von 1311), steht neben dem Rathaus an der Piazza Duomo; nicht weit entfernt liegt die Piazza della Cisterna. Im Rathaus befinden sich die Stadtmuseen und die Sala di Dante.",
   "Le bourg des tours : il en reste 14 aujourd'hui, il y en avait 72 à l'origine. La Torre Grossa, la plus haute (52 m, de 1311), s'élève à côté de l'hôtel de ville sur la Piazza Duomo ; la Piazza della Cisterna n'est pas loin. L'hôtel de ville abrite les musées civiques et la Sala di Dante.")),
]
