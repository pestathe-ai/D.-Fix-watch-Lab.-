/// Glossario dei pezzi: cosa sono e a cosa servono, spiegati semplice.
class WatchPart {
  final String id;
  final String name;
  final String aka; // altri nomi (anche inglesi), per riconoscerlo nei video e nei forum
  final String group;
  final String whatItDoes; // a cosa serve, in una frase
  final String detail; // come funziona, più a fondo
  final String careful; // a cosa stare attenti quando lo maneggi

  const WatchPart({
    required this.id,
    required this.name,
    required this.aka,
    required this.group,
    required this.whatItDoes,
    required this.detail,
    required this.careful,
  });
}

const partGroups = [
  'Esterno',
  'Energia',
  'Trasmissione',
  'Scappamento e regolazione',
  'Carica e messa all\'ora',
  'Lato quadrante',
  'Carica automatica',
  'Supporti',
];

const List<WatchPart> parts = [
  // ---------- ESTERNO ----------
  WatchPart(
    id: 'cassa',
    name: 'Cassa',
    aka: 'case',
    group: 'Esterno',
    whatItDoes: 'Il guscio che protegge il movimento da polvere, acqua e colpi.',
    detail:
        'Tiene il movimento centrato e fermo con un anello o delle viti di fissaggio. '
        'Insieme a vetro, fondello, corona e guarnizioni crea la tenuta all\'acqua.',
    careful: 'Proteggila con nastro da carrozziere quando usi gli attrezzi, si riga in un attimo.',
  ),
  WatchPart(
    id: 'fondello',
    name: 'Fondello',
    aka: 'caseback, coperchio',
    group: 'Esterno',
    whatItDoes: 'Il coperchio posteriore: è la porta d\'accesso al movimento.',
    detail:
        'Può essere avvitato (ha delle tacche per la chiave apri-fondelli), a pressione '
        '(ha una piccola fessura dove infilare la leva) oppure fissato con viti.',
    careful: 'Usa l\'attrezzo giusto: se la chiave scivola rovina le tacche e righe tutto.',
  ),
  WatchPart(
    id: 'guarnizioni',
    name: 'Guarnizioni',
    aka: 'gaskets, O-ring',
    group: 'Esterno',
    whatItDoes: 'Anelli di gomma che tengono fuori acqua e polvere.',
    detail:
        'Ce n\'è una sotto il fondello, una nella corona e spesso una sul vetro. '
        'Con gli anni induriscono e si schiacciano: una guarnizione vecchia non tiene più.',
    careful: 'In revisione vanno cambiate. Un velo di grasso al silicone le fa scorrere e sigillare meglio.',
  ),
  WatchPart(
    id: 'corona',
    name: 'Corona',
    aka: 'crown',
    group: 'Esterno',
    whatItDoes: 'Il pomellino esterno con cui carichi e metti all\'ora.',
    detail:
        'È avvitata in punta allo stelo. Tirandola cambi funzione: dentro carica, '
        'a metà regola la data (se c\'è), tutta fuori sposta le lancette.',
    careful: 'Se è a vite, svitala prima di estrarla, altrimenti rovini il filetto.',
  ),
  WatchPart(
    id: 'stelo',
    name: 'Stelo',
    aka: 'albero di carica, winding stem',
    group: 'Esterno',
    whatItDoes: 'L\'asta che collega la corona al meccanismo dentro.',
    detail:
        'Ha una parte quadrata su cui scorre il pignone scorrevole e una scanalatura dove '
        'si aggancia il tiretto, che lo tiene in posizione.',
    careful: 'Per estrarlo devi premere il perno del tiretto, non tirarlo a forza.',
  ),
  WatchPart(
    id: 'anello_fissaggio',
    name: 'Anello o viti di fissaggio',
    aka: 'movement ring, case clamps',
    group: 'Esterno',
    whatItDoes: 'Bloccano il movimento dentro la cassa perché non balli.',
    detail: 'A volte è un anello di plastica o metallo, a volte due piccole staffe con vite.',
    careful: 'Fotografa come erano messe prima di toglierle.',
  ),

  // ---------- ENERGIA ----------
  WatchPart(
    id: 'molla_motrice',
    name: 'Molla motrice',
    aka: 'mainspring, molla di carica',
    group: 'Energia',
    whatItDoes: 'La "batteria" dell\'orologio: accumula l\'energia quando lo carichi.',
    detail:
        'È un nastro d\'acciaio speciale arrotolato dentro il bariletto. Caricando la avvolgi; '
        'lei si srotola piano spingendo tutto il resto per 38-50 ore circa.',
    careful:
        'Contiene molta energia: scaricala sempre prima di smontare. Se scatta fuori può '
        'ferirti o rovinarsi. Si sostituisce spesso in revisione perché perde forza.',
  ),
  WatchPart(
    id: 'bariletto',
    name: 'Bariletto',
    aka: 'barrel, tamburo',
    group: 'Energia',
    whatItDoes: 'Il tamburo dentato che contiene la molla motrice e trasmette la sua forza.',
    detail:
        'La molla è agganciata dentro all\'albero centrale e alla parete del tamburo. '
        'Quando si srotola fa girare il bariletto, che con i suoi denti spinge il treno di ruote.',
    careful: 'Il coperchio si apre facendo leva nella sua piccola tacca, senza deformarlo.',
  ),
  WatchPart(
    id: 'albero_bariletto',
    name: 'Albero del bariletto',
    aka: 'barrel arbor',
    group: 'Energia',
    whatItDoes: 'Il perno centrale su cui si avvolge la molla quando carichi.',
    detail: 'Ha un gancio a cui si attacca l\'occhiello interno della molla e un quadro su cui si monta il rocchetto a cricco.',
    careful: 'Controlla che il gancio sia integro: se è consumato la molla scivola.',
  ),
  WatchPart(
    id: 'briglia',
    name: 'Briglia',
    aka: 'slipping bridle',
    group: 'Energia',
    whatItDoes: 'Negli automatici evita che la molla si rompa per troppa carica.',
    detail:
        'È l\'estremità esterna della molla, che invece di essere agganciata preme contro la '
        'parete del bariletto. Quando la molla è carica al massimo, la briglia scivola e '
        'l\'orologio non si sovraccarica mai.',
    careful: 'Funziona solo con il grasso giusto sulla parete del bariletto: niente, scivola troppo; troppo, non scivola.',
  ),
  WatchPart(
    id: 'ponte_bariletto',
    name: 'Ponte del bariletto',
    aka: 'barrel bridge',
    group: 'Supporti',
    whatItDoes: 'La piastra che tiene in sede il bariletto e le ruote di carica.',
    detail: 'Sopra ci sono il rocchetto a cricco e la ruota di carica, sotto il bariletto.',
    careful: 'Spesso ha viti di lunghezze diverse: mettile in ordine.',
  ),

  // ---------- CARICA E MESSA ALL'ORA ----------
  WatchPart(
    id: 'rocchetto_cricco',
    name: 'Rocchetto a cricco',
    aka: 'ratchet wheel',
    group: 'Carica e messa all\'ora',
    whatItDoes: 'La ruota grande sopra il bariletto che avvolge la molla.',
    detail: 'È montata sul quadro dell\'albero del bariletto: quando gira, avvolge la molla.',
    careful: 'Spesso ha una vite normale (destra). Non confonderla con quella della ruota di carica.',
  ),
  WatchPart(
    id: 'ruota_carica',
    name: 'Ruota di carica',
    aka: 'crown wheel, ruota a corona',
    group: 'Carica e messa all\'ora',
    whatItDoes: 'Porta il movimento della corona al rocchetto a cricco.',
    detail: 'Riceve la rotazione dal pignone di carica e la gira di 90° verso il rocchetto a cricco.',
    careful: 'In molti calibri la sua vite è a filetto SINISTRO: si svita girando in senso orario. Controlla prima di forzare.',
  ),
  WatchPart(
    id: 'cricchetto',
    name: 'Cricchetto',
    aka: 'click, nottolino',
    group: 'Carica e messa all\'ora',
    whatItDoes: 'Fa girare il rocchetto in un solo verso, così la molla non si scarica all\'indietro.',
    detail: 'È il dentino che fa il "tic tic" quando carichi a mano. Una piccola molla lo tiene premuto.',
    careful: 'È lui che sollevi per scaricare la molla. La sua mollina scappa facilmente: lavora sotto una busta.',
  ),
  WatchPart(
    id: 'tiretto',
    name: 'Tiretto',
    aka: 'setting lever',
    group: 'Carica e messa all\'ora',
    whatItDoes: 'La levetta che si aggancia allo stelo e decide la posizione della corona.',
    detail:
        'Quando tiri la corona, il tiretto si sposta e muove la bascula, che fa passare il '
        'pignone scorrevole da "carica" a "messa all\'ora".',
    careful: 'Il suo perno (spesso vicino allo stelo) è quello da premere per liberare lo stelo.',
  ),
  WatchPart(
    id: 'bascula',
    name: 'Bascula',
    aka: 'yoke, leva di innesto',
    group: 'Carica e messa all\'ora',
    whatItDoes: 'Sposta il pignone scorrevole avanti e indietro.',
    detail: 'Comandata dal tiretto e tenuta da una molla, fa ingranare il pignone o con la carica o con le lancette.',
    careful: 'Ha una molla in tensione: quando la sganci tienila ferma con il dito o il cacciavite.',
  ),
  WatchPart(
    id: 'molla_tiretto',
    name: 'Molla del tiretto (placca)',
    aka: 'setting lever spring, cover plate',
    group: 'Carica e messa all\'ora',
    whatItDoes: 'Dà gli "scatti" netti alle posizioni della corona.',
    detail: 'Spesso è una piastrina sagomata che copre tiretto e bascula e li tiene in sede.',
    careful: 'È uno dei pezzi che più spesso "vola": toglila sotto una bustina di plastica.',
  ),
  WatchPart(
    id: 'pignone_scorrevole',
    name: 'Pignone scorrevole',
    aka: 'clutch wheel, sliding pinion',
    group: 'Carica e messa all\'ora',
    whatItDoes: 'Il "cambio" del remontoir: ingrana con la carica o con le lancette.',
    detail:
        'Scorre sulla parte quadrata dello stelo. Ha denti da un lato per la carica e denti '
        'dall\'altro per la messa all\'ora.',
    careful: 'Si monta con un verso preciso: guarda come era prima di toglierlo.',
  ),
  WatchPart(
    id: 'pignone_carica',
    name: 'Pignone di carica',
    aka: 'winding pinion',
    group: 'Carica e messa all\'ora',
    whatItDoes: 'Ingrana con la ruota di carica quando giri la corona.',
    detail: 'Gira libero sullo stelo; il pignone scorrevole lo trascina quando sei in posizione di carica.',
    careful: 'Si consuma sui denti a sega: controllalo con la lente.',
  ),
  WatchPart(
    id: 'ruota_rinvio',
    name: 'Ruota di rinvio',
    aka: 'setting wheel, ruota di messa all\'ora',
    group: 'Carica e messa all\'ora',
    whatItDoes: 'Porta la rotazione della corona alla minuteria per spostare le lancette.',
    detail: 'Lavora solo con la corona tirata nella posizione di messa all\'ora.',
    careful: 'Piccola e facile da perdere: va subito nel contenitore.',
  ),

  // ---------- TRASMISSIONE ----------
  WatchPart(
    id: 'treno',
    name: 'Treno del tempo',
    aka: 'gear train, rotismo',
    group: 'Trasmissione',
    whatItDoes: 'La catena di ruote che porta l\'energia dal bariletto allo scappamento.',
    detail:
        'Ogni ruota fa girare la successiva più veloce: centro, terzo, secondi, scappamento. '
        'Le proporzioni dei denti fanno sì che la ruota dei minuti faccia un giro all\'ora.',
    careful: 'I perni sono sottilissimi: prendile per la ruota, mai stringere il perno con la pinzetta.',
  ),
  WatchPart(
    id: 'ruota_centro',
    name: 'Ruota di centro',
    aka: 'center wheel, ruota dei minuti',
    group: 'Trasmissione',
    whatItDoes: 'Fa un giro esatto all\'ora: porta la lancetta dei minuti.',
    detail:
        'Nei movimenti classici sta al centro. In molti automatici moderni è spostata di lato e '
        'il centro è una ruota indiretta, ma il principio è lo stesso.',
    careful: 'Su di lei si monta a forza la chaussée: toglierla male piega il perno.',
  ),
  WatchPart(
    id: 'ruota_terzo',
    name: 'Ruota di terzo',
    aka: 'third wheel',
    group: 'Trasmissione',
    whatItDoes: 'Ruota intermedia che collega centro e secondi.',
    detail: 'Serve solo a moltiplicare la velocità tra la ruota dei minuti e quella dei secondi.',
    careful: 'Spesso molto sottile: maneggiala piano.',
  ),
  WatchPart(
    id: 'ruota_secondi',
    name: 'Ruota dei secondi',
    aka: 'fourth wheel, ruota di quarto',
    group: 'Trasmissione',
    whatItDoes: 'Fa un giro al minuto: porta la lancetta dei secondi.',
    detail: 'Il suo perno lungo esce dal quadrante (centrale o a ore 6 nei piccoli secondi).',
    careful: 'Il perno lungo si piega facile: appoggiala sempre di lato.',
  ),
  WatchPart(
    id: 'ruota_scappamento',
    name: 'Ruota di scappamento',
    aka: 'escape wheel',
    group: 'Scappamento e regolazione',
    whatItDoes: 'L\'ultima ruota: dà le spinte all\'ancora, un dente alla volta.',
    detail:
        'Ha denti a forma speciale. L\'ancora la blocca e la libera a ritmo, e ad ogni '
        'liberazione la ruota dà una piccola spinta che tiene in moto il bilanciere.',
    careful: 'I denti sono delicatissimi: un dente piegato basta a far fermare l\'orologio.',
  ),
  WatchPart(
    id: 'ponte_treno',
    name: 'Ponte del treno',
    aka: 'train bridge, ponte delle ruote',
    group: 'Supporti',
    whatItDoes: 'La piastra che tiene in piedi le ruote del treno.',
    detail: 'Ha i rubini dove girano i perni superiori delle ruote.',
    careful: 'Rimontandolo, ogni perno deve entrare nel suo rubino prima di stringere le viti. Mai forzare.',
  ),

  // ---------- SCAPPAMENTO E REGOLAZIONE ----------
  WatchPart(
    id: 'ancora',
    name: 'Ancora',
    aka: 'pallet fork, leva',
    group: 'Scappamento e regolazione',
    whatItDoes: 'Il "cancello": blocca e libera la ruota di scappamento a ritmo del bilanciere.',
    detail:
        'Ha due palette di rubino (entrata e uscita) che si alternano sui denti della ruota. '
        'Con la forchetta riceve il colpo dal bilanciere e gli restituisce la spinta: è il "tac" del tic-tac.',
    careful:
        'Le palette sono incollate con gommalacca: non lasciarla a lungo nell\'alcol e non '
        'scaldarla. Prendila per il corpo, non per le palette.',
  ),
  WatchPart(
    id: 'ponte_ancora',
    name: 'Ponte dell\'ancora',
    aka: 'pallet bridge',
    group: 'Supporti',
    whatItDoes: 'La piccola piastra che tiene l\'ancora.',
    detail: 'Ha un rubino per il perno superiore dell\'ancora.',
    careful: 'Spesso ha una vite sola o due: non perderle.',
  ),
  WatchPart(
    id: 'bilanciere',
    name: 'Bilanciere',
    aka: 'balance wheel',
    group: 'Scappamento e regolazione',
    whatItDoes: 'Il "cuore": oscilla avanti e indietro a ritmo costante e decide la velocità dell\'orologio.',
    detail:
        'È una ruota con la spirale attaccata. Oscilla per esempio 4 volte al secondo (28.800 alternanze/ora). '
        'Sotto ha il plateau con un piccolo rubino (ellisse) che colpisce l\'ancora ad ogni oscillazione.',
    careful:
        'È il pezzo più delicato. Toglilo insieme al suo ponte, sollevandolo dritto e ruotandolo appena. '
        'Mai toccare la spirale con le pinzette.',
  ),
  WatchPart(
    id: 'spirale',
    name: 'Spirale',
    aka: 'hairspring, molla del bilanciere',
    group: 'Scappamento e regolazione',
    whatItDoes: 'La molla sottilissima che riporta indietro il bilanciere: è lei che dà il ritmo.',
    detail:
        'È spessa come un capello. La sua lunghezza attiva decide quanto veloce oscilla il bilanciere. '
        'Le spire devono essere piatte, concentriche e non toccarsi.',
    careful:
        'Si deforma con un niente e si magnetizza. Se l\'orologio corre di minuti al giorno, '
        'spesso è magnetizzata o ha le spire incollate.',
  ),
  WatchPart(
    id: 'ponte_bilanciere',
    name: 'Ponte del bilanciere',
    aka: 'balance cock, coq',
    group: 'Supporti',
    whatItDoes: 'Il ponticello sospeso che regge il bilanciere da un lato solo.',
    detail: 'Porta il pitone (dove è fissata la spirale), la racchetta e il dispositivo antiurto superiore.',
    careful: 'Toglilo con il bilanciere attaccato, poi appoggialo capovolto senza schiacciare la spirale.',
  ),
  WatchPart(
    id: 'racchetta',
    name: 'Racchetta',
    aka: 'regulator',
    group: 'Scappamento e regolazione',
    whatItDoes: 'La levetta con + e - che serve a regolare se l\'orologio avanza o ritarda.',
    detail:
        'Ha due piccoli perni che abbracciano l\'ultima spira della spirale. Spostandoli accorci o '
        'allunghi la parte attiva: più corta = oscillazioni più veloci = l\'orologio avanza.',
    careful: 'Movimenti piccolissimi: un capello di spostamento vale già diversi secondi al giorno.',
  ),
  WatchPart(
    id: 'antiurto',
    name: 'Antiurto',
    aka: 'shock protection, Incabloc, Diashock, Parechoc',
    group: 'Scappamento e regolazione',
    whatItDoes: 'Protegge i perni del bilanciere quando l\'orologio prende un colpo.',
    detail:
        'Pietra e contropietra sono tenute da una mollina che cede in caso di urto e poi '
        'riporta tutto al suo posto, invece di far spezzare il perno.',
    careful: 'Le molline (a lira o a stella) saltano via facilmente: aprila con un attrezzo appuntito e sotto una bustina.',
  ),
  WatchPart(
    id: 'rubini',
    name: 'Rubini',
    aka: 'jewels, pietre',
    group: 'Supporti',
    whatItDoes: 'Pietre sintetiche durissime dove girano i perni, per ridurre attrito e usura.',
    detail:
        'Non sono preziosi: sono rubini sintetici. Più rubini non vuol dire per forza più qualità, '
        'ma servono nei punti più sollecitati. Hanno una piccola conca che trattiene l\'olio.',
    careful: 'Puliscili con un bastoncino di legno appuntito. Controlla che non siano incrinati.',
  ),

  // ---------- LATO QUADRANTE ----------
  WatchPart(
    id: 'quadrante',
    name: 'Quadrante',
    aka: 'dial',
    group: 'Lato quadrante',
    whatItDoes: 'La faccia dell\'orologio con indici e numeri.',
    detail: 'È fissato al movimento con due piedini bloccati da viti laterali o da eccentrici.',
    careful: 'Non va mai nel liquido di pulizia: si rovina la stampa. Toccalo solo dai bordi, con i guanti o i salvadita.',
  ),
  WatchPart(
    id: 'lancette',
    name: 'Lancette',
    aka: 'hands',
    group: 'Lato quadrante',
    whatItDoes: 'Mostrano ore, minuti e secondi.',
    detail: 'Sono piantate a pressione sui loro alberi: ore sulla ruota delle ore, minuti sulla chaussée, secondi sulla ruota dei secondi.',
    careful: 'Toglile con la leva lancette proteggendo il quadrante con una bustina. Rimontandole, premi solo al centro.',
  ),
  WatchPart(
    id: 'minuteria',
    name: 'Minuteria',
    aka: 'motion works',
    group: 'Lato quadrante',
    whatItDoes: 'Le ruote sotto il quadrante che fanno girare la lancetta delle ore 12 volte più piano dei minuti.',
    detail: 'È formata da chaussée, ruota di minuteria e ruota delle ore.',
    careful: 'Vanno rimontate nell\'ordine giusto e la ruota delle ore deve avere un minimo di gioco.',
  ),
  WatchPart(
    id: 'chaussee',
    name: 'Chaussée',
    aka: 'cannon pinion',
    group: 'Lato quadrante',
    whatItDoes: 'Il tubetto che porta la lancetta dei minuti e la "frizione" per mettere all\'ora.',
    detail:
        'È piantata a frizione sulla ruota di centro: gira con lei, ma quando metti all\'ora '
        'può slittare senza fermare il movimento.',
    careful: 'Va tolta con l\'apposita pinza dritta verso l\'alto. Se slitta troppo, le lancette restano indietro.',
  ),
  WatchPart(
    id: 'ruota_minuteria',
    name: 'Ruota di minuteria',
    aka: 'minute wheel',
    group: 'Lato quadrante',
    whatItDoes: 'Riduce la velocità dalla chaussée alla ruota delle ore.',
    detail: 'Ha una ruota e un pignone: prende dalla chaussée e passa alla ruota delle ore.',
    careful: 'È tenuta da un ponticello o dalla placca: si sfila facile.',
  ),
  WatchPart(
    id: 'ruota_ore',
    name: 'Ruota delle ore',
    aka: 'hour wheel',
    group: 'Lato quadrante',
    whatItDoes: 'Porta la lancetta delle ore.',
    detail: 'Fa un giro ogni 12 ore e infila la chaussée.',
    careful: 'Nei calibri con data ha un dente o una camma che fa scattare il datario.',
  ),
  WatchPart(
    id: 'datario',
    name: 'Calendario (datario)',
    aka: 'date mechanism, date ring',
    group: 'Lato quadrante',
    whatItDoes: 'Fa scattare la data a mezzanotte.',
    detail:
        'Un disco con i numeri 1-31, una ruota che lo spinge una volta al giorno, un saltarello '
        'a molla che lo tiene fermo sul numero giusto e spesso un correttore rapido.',
    careful: 'Fotografalo prima di smontarlo: le molle del saltarello e del correttore scappano e le posizioni contano.',
  ),

  // ---------- CARICA AUTOMATICA ----------
  WatchPart(
    id: 'rotore',
    name: 'Rotore',
    aka: 'massa oscillante, rotor',
    group: 'Carica automatica',
    whatItDoes: 'Il semicerchio pesante che gira quando muovi il polso e carica la molla da solo.',
    detail:
        'Ruota su un cuscinetto a sfere o su un perno. I suoi movimenti vengono raddrizzati '
        'dagli invertitori e mandati al rocchetto a cricco.',
    careful: 'Se gratta sul fondello o fa rumore, spesso è il cuscinetto consumato.',
  ),
  WatchPart(
    id: 'invertitori',
    name: 'Ruote d\'inversione',
    aka: 'reversing wheels, invertitori, magic lever (Seiko)',
    group: 'Carica automatica',
    whatItDoes: 'Trasformano la rotazione del rotore in entrambi i versi in una carica in un verso solo.',
    detail:
        'Contengono piccoli nottolini interni che ingranano in un senso e girano a vuoto nell\'altro. '
        'Seiko usa invece una levetta a pinza (magic lever) che fa lo stesso lavoro.',
    careful: 'Su molti calibri (es. ETA/Sellita) NON si lubrificano: l\'olio le fa slittare. Verifica sempre per il tuo calibro.',
  ),
  WatchPart(
    id: 'ponte_automatico',
    name: 'Ponte (modulo) automatico',
    aka: 'automatic bridge',
    group: 'Carica automatica',
    whatItDoes: 'Il gruppo che tiene rotore e ruote di carica automatica.',
    detail: 'In molti calibri si toglie tutto insieme con due o tre viti.',
    careful: 'Toglilo prima di arrivare al bariletto e al treno.',
  ),

  // ---------- SUPPORTI ----------
  WatchPart(
    id: 'platina',
    name: 'Platina',
    aka: 'main plate, piastra principale',
    group: 'Supporti',
    whatItDoes: 'La base del movimento su cui è montato tutto.',
    detail: 'Da un lato ci sono i ponti e le ruote, dall\'altro (lato quadrante) remontoir, minuteria e calendario.',
    careful: 'Lavorala sempre su un porta-movimento, mai appoggiata su pezzi che sporgono.',
  ),
];

WatchPart? partById(String id) {
  for (final p in parts) {
    if (p.id == id) return p;
  }
  return null;
}
