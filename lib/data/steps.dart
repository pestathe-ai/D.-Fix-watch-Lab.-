/// Sequenza universale di revisione, valida per la maggior parte dei movimenti
/// a tre lancette (con o senza data). I calibri specifici aggiungono note proprie.

enum Applies { all, automaticOnly, manualOnly }

class ServiceStep {
  final String id;
  final String phase;
  final String title;
  final List<String> todo; // cosa fare, in ordine
  final String why; // perché si fa
  final List<String> partIds; // pezzi coinvolti (spiegati nel glossario)
  final String? warning;
  final String? lube; // lubrificazione indicativa
  final int? timerSeconds;
  final bool photo; // consigliata una foto prima di procedere
  final Applies applies;
  final bool optional; // es. solo se ha la data
  final String? optionalLabel;

  const ServiceStep({
    required this.id,
    required this.phase,
    required this.title,
    required this.todo,
    required this.why,
    this.partIds = const [],
    this.warning,
    this.lube,
    this.timerSeconds,
    this.photo = false,
    this.applies = Applies.all,
    this.optional = false,
    this.optionalLabel,
  });
}

const phases = [
  'Preparazione',
  'Apertura',
  'Smontaggio lato quadrante',
  'Smontaggio lato ponti',
  'Pulizia e controllo',
  'Rimontaggio e lubrificazione',
  'Regolazione e chiusura',
];

const List<ServiceStep> universalSteps = [
  // ---------------- PREPARAZIONE ----------------
  ServiceStep(
    id: 'banco',
    phase: 'Preparazione',
    title: 'Prepara il banco',
    todo: [
      'Tappetino chiaro e pulito, buona luce, niente spifferi.',
      'Lente (almeno 3x, meglio 5x-10x), pinzette antimagnetiche, cacciaviti di misura giusta.',
      'Porta-movimento, pompetta ad aria, bustine di plastica, salvadita o guanti.',
      'Contenitori a scomparti, uno per fase, per tenere viti e pezzi in ordine.',
    ],
    why:
        'La metà delle revisioni fallite nasce da un pezzo perso o da una vite messa nel posto sbagliato. '
        'L\'ordine sul banco è già metà del lavoro.',
  ),
  ServiceStep(
    id: 'valutazione',
    phase: 'Preparazione',
    title: 'Valuta l\'orologio prima di aprire',
    todo: [
      'Carica a mano 20-30 giri e senti se la carica è fluida o gratta.',
      'Prova tutte le posizioni della corona: carica, data, messa all\'ora.',
      'Se puoi, misura la marcia con la funzione "Misura" dell\'app e annota il risultato.',
      'Fotografa l\'orologio fuori e dentro (se ha il fondello trasparente).',
    ],
    why:
        'Ti dice cosa non va prima di smontare, così sai cosa cercare. E ti dà un "prima" da '
        'confrontare con il "dopo".',
    photo: true,
  ),

  // ---------------- APERTURA ----------------
  ServiceStep(
    id: 'fondello',
    phase: 'Apertura',
    title: 'Apri il fondello',
    todo: [
      'Blocca la cassa nel morsetto o nel porta-casse.',
      'A vite: chiave apri-fondelli ben centrata, gira in senso antiorario.',
      'A pressione: leva nella fessura, piccoli movimenti tutto intorno.',
      'Togli e metti da parte la guarnizione del fondello.',
    ],
    why: 'È l\'accesso al movimento. Si lavora sempre dal retro.',
    partIds: ['fondello', 'guarnizioni', 'cassa'],
    warning: 'Proteggi la cassa con nastro di carta: se l\'attrezzo scivola, la riga.',
    photo: true,
  ),
  ServiceStep(
    id: 'rotore',
    phase: 'Apertura',
    title: 'Togli il rotore',
    todo: [
      'Svita la vite centrale del rotore (o la vite/le viti del suo cuscinetto).',
      'Sollevalo dritto, senza strisciare sul movimento.',
    ],
    why: 'Copre i ponti e impedisce di lavorare. Va tolto per primo negli automatici.',
    partIds: ['rotore'],
    applies: Applies.automaticOnly,
    warning: 'Tieni fermo il rotore con un dito mentre sviti, altrimenti gira con il cacciavite.',
  ),
  ServiceStep(
    id: 'scarica',
    phase: 'Apertura',
    title: 'Scarica la molla motrice',
    todo: [
      'Gira un po\' la corona in carica e tienila ferma.',
      'Con una punta sottile solleva il cricchetto dal rocchetto a cricco.',
      'Lascia girare la corona all\'indietro tra le dita, piano, fino a fine corsa.',
    ],
    why:
        'La molla carica spinge tutto il treno. Se smonti ancora o ruote con la molla carica, '
        'il treno parte di colpo e spezza perni e denti.',
    partIds: ['molla_motrice', 'cricchetto', 'rocchetto_cricco'],
    warning: 'Passo OBBLIGATORIO. Non saltarlo mai, nemmeno se l\'orologio sembra fermo.',
  ),
  ServiceStep(
    id: 'stelo',
    phase: 'Apertura',
    title: 'Estrai stelo e corona',
    todo: [
      'Tira la corona in posizione di messa all\'ora.',
      'Trova il perno del tiretto (spesso vicino allo stelo, a volte indicato da una freccia).',
      'Premilo leggermente e sfila la corona.',
    ],
    why: 'Lo stelo attraversa la cassa e tiene il movimento: senza toglierlo il movimento non esce.',
    partIds: ['stelo', 'corona', 'tiretto'],
    warning: 'Premi poco: se spingi troppo il tiretto si sgancia dall\'altro lato.',
  ),
  ServiceStep(
    id: 'estrai',
    phase: 'Apertura',
    title: 'Togli il movimento dalla cassa',
    todo: [
      'Togli anello o viti di fissaggio.',
      'Fai uscire il movimento con il quadrante verso il basso, appoggiandolo su un panno.',
      'Rimetti subito la corona sullo stelo nel movimento, solo per poter girare le lancette.',
    ],
    why: 'Da qui in poi lavori sul movimento nudo, su un porta-movimento.',
    partIds: ['anello_fissaggio', 'cassa'],
    photo: true,
  ),

  // ---------------- LATO QUADRANTE ----------------
  ServiceStep(
    id: 'lancette',
    phase: 'Smontaggio lato quadrante',
    title: 'Togli le lancette',
    todo: [
      'Metti le lancette tutte sovrapposte (es. a mezzogiorno) e annota l\'ora in cui scatta la data.',
      'Copri il quadrante con una bustina di plastica tagliata.',
      'Con la leva lancette sollevale dritte: prima secondi, poi minuti e ore insieme o una alla volta.',
    ],
    why: 'Lancette e quadrante coprono la minuteria e il calendario.',
    partIds: ['lancette', 'quadrante'],
    warning: 'Non fare leva sul quadrante nudo: lo segni per sempre.',
  ),
  ServiceStep(
    id: 'quadrante',
    phase: 'Smontaggio lato quadrante',
    title: 'Togli il quadrante',
    todo: [
      'Allenta le viti o gli eccentrici laterali che bloccano i piedini.',
      'Solleva il quadrante dai bordi e mettilo in una scatolina, faccia in su.',
    ],
    why: 'Sotto c\'è il cuore del lato quadrante: minuteria, calendario e remontoir.',
    partIds: ['quadrante'],
    warning: 'Il quadrante non va mai lavato.',
  ),
  ServiceStep(
    id: 'calendario',
    phase: 'Smontaggio lato quadrante',
    title: 'Smonta il calendario',
    todo: [
      'Foto da vicino PRIMA di toccare qualsiasi cosa.',
      'Togli la placca del calendario (viti), poi disco datario, saltarello e ruote del datario.',
      'Una foto dopo ogni pezzo tolto.',
    ],
    why:
        'Il calendario è una piccola macchina separata sopra la minuteria. Va tolto per arrivare '
        'al remontoir.',
    partIds: ['datario'],
    optional: true,
    optionalLabel: 'Solo se l\'orologio ha la data',
    warning: 'Le molle del saltarello e del correttore scappano: lavora sotto una bustina.',
    photo: true,
  ),
  ServiceStep(
    id: 'minuteria',
    phase: 'Smontaggio lato quadrante',
    title: 'Togli la minuteria',
    todo: [
      'Sfila la ruota delle ore.',
      'Togli la ruota di minuteria (e il suo ponticello se c\'è).',
      'Estrai la chaussée con l\'apposita pinza, tirando dritto verso l\'alto.',
    ],
    why: 'La minuteria fa girare le lancette. La chaussée blocca la ruota di centro dall\'altro lato.',
    partIds: ['minuteria', 'ruota_ore', 'ruota_minuteria', 'chaussee'],
    warning: 'In alcuni calibri la chaussée si toglie solo dopo aver smontato il treno: se non viene via, non forzare.',
  ),

  // ---------------- LATO PONTI ----------------
  ServiceStep(
    id: 'automatico',
    phase: 'Smontaggio lato ponti',
    title: 'Smonta il modulo automatico',
    todo: [
      'Svita le viti del ponte automatico e sollevalo.',
      'Togli le ruote d\'inversione (o la magic lever) e mettile da parte, separate.',
    ],
    why: 'Copre il bariletto e le ruote di carica.',
    partIds: ['ponte_automatico', 'invertitori'],
    applies: Applies.automaticOnly,
    photo: true,
  ),
  ServiceStep(
    id: 'bilanciere',
    phase: 'Smontaggio lato ponti',
    title: 'Togli il bilanciere',
    todo: [
      'Svita la vite del ponte del bilanciere.',
      'Infila la punta del cacciavite nella tacca del ponte e sollevalo appena.',
      'Alza il ponte con il bilanciere appeso, ruotandolo leggermente per liberare il plateau dalla forchetta dell\'ancora.',
      'Appoggialo capovolto in un contenitore coperto.',
    ],
    why:
        'Il bilanciere va tolto prima dell\'ancora e del treno: è il pezzo più delicato e '
        'deve stare al sicuro il prima possibile.',
    partIds: ['bilanciere', 'spirale', 'ponte_bilanciere', 'racchetta'],
    warning: 'Se senti resistenza, fermati: il plateau è ancora incastrato nella forchetta. Mai tirare.',
    photo: true,
  ),
  ServiceStep(
    id: 'ancora',
    phase: 'Smontaggio lato ponti',
    title: 'Togli ancora e ponte dell\'ancora',
    todo: [
      'Svita il ponte dell\'ancora e sollevalo.',
      'Prendi l\'ancora per il corpo e sollevala dritta.',
    ],
    why: 'L\'ancora collega treno e bilanciere. Togliendola, il treno resta libero (per questo la molla deve essere scarica).',
    partIds: ['ancora', 'ponte_ancora'],
    warning: 'Non stringere le palette con le pinzette: sono rubini incollati.',
  ),
  ServiceStep(
    id: 'carica',
    phase: 'Smontaggio lato ponti',
    title: 'Togli ruota di carica, rocchetto e cricchetto',
    todo: [
      'Svita la vite della ruota di carica (controlla se è a filetto sinistro!).',
      'Svita la vite del rocchetto a cricco.',
      'Togli il cricchetto e la sua molla.',
    ],
    why: 'Sono montati sul ponte del bariletto: vanno via prima di sollevarlo.',
    partIds: ['ruota_carica', 'rocchetto_cricco', 'cricchetto'],
    warning: 'Molti calibri hanno la vite della ruota di carica a filetto sinistro: si svita in senso ORARIO.',
    photo: true,
  ),
  ServiceStep(
    id: 'bariletto_out',
    phase: 'Smontaggio lato ponti',
    title: 'Togli ponte del bariletto e bariletto',
    todo: [
      'Svita le viti del ponte del bariletto (annota lunghezze diverse).',
      'Sollevalo e sfila il bariletto.',
    ],
    why: 'Il bariletto è il serbatoio di energia: si apre e si controlla a parte.',
    partIds: ['ponte_bariletto', 'bariletto'],
  ),
  ServiceStep(
    id: 'treno_out',
    phase: 'Smontaggio lato ponti',
    title: 'Togli ponte del treno e ruote',
    todo: [
      'Foto della disposizione delle ruote.',
      'Svita il ponte del treno e sollevalo dritto.',
      'Togli le ruote una alla volta: scappamento, secondi, terzo, centro.',
    ],
    why: 'Il treno porta l\'energia allo scappamento. Smontato, ogni ruota si può pulire e controllare.',
    partIds: ['ponte_treno', 'treno', 'ruota_centro', 'ruota_terzo', 'ruota_secondi', 'ruota_scappamento'],
    photo: true,
  ),
  ServiceStep(
    id: 'remontoir_out',
    phase: 'Smontaggio lato ponti',
    title: 'Smonta il remontoir (lato quadrante)',
    todo: [
      'Gira il movimento lato quadrante.',
      'Togli la placca/molla del tiretto, poi la bascula e la sua molla.',
      'Sfila la ruota di rinvio, lo stelo, il pignone scorrevole e il pignone di carica.',
      'Infine svita il tiretto.',
    ],
    why: 'Il remontoir è il "cambio" della corona: carica o messa all\'ora. Va pulito e ingrassato.',
    partIds: ['tiretto', 'bascula', 'molla_tiretto', 'pignone_scorrevole', 'pignone_carica', 'ruota_rinvio', 'stelo'],
    warning: 'La molla del tiretto e quella della bascula volano via: copri con la bustina.',
    photo: true,
  ),
  ServiceStep(
    id: 'antiurto_out',
    phase: 'Smontaggio lato ponti',
    title: 'Apri gli antiurto (avanzato)',
    todo: [
      'Sotto la bustina, ruota o sgancia la mollina dell\'antiurto.',
      'Togli contropietra e pietra forata, sopra e sotto il bilanciere.',
    ],
    why:
        'Lì gira il perno del bilanciere, il più veloce di tutto l\'orologio. Olio vecchio qui '
        '= ampiezza bassa e marcia irregolare.',
    partIds: ['antiurto', 'rubini'],
    optional: true,
    optionalLabel: 'Consigliato, ma da fare quando ti senti sicuro',
    warning: 'Pezzi minuscoli: lavora su un tappetino pulito per ritrovarli.',
  ),
  ServiceStep(
    id: 'bariletto_apri',
    phase: 'Smontaggio lato ponti',
    title: 'Apri e controlla il bariletto',
    todo: [
      'Fai leva sul coperchio nella sua tacca.',
      'Sfila l\'albero e controlla il gancio.',
      'Valuta la molla: se è deformata, segnata o di forma a "S" stanca, sostituiscila.',
    ],
    why:
        'Una molla stanca dà poca forza: ampiezza bassa e poca autonomia. Negli automatici '
        'spesso si cambia tutto il bariletto o la molla con la sua briglia.',
    partIds: ['bariletto', 'albero_bariletto', 'molla_motrice', 'briglia'],
    warning: 'Senza avvolgimolle, togliere e rimettere la molla è rischioso: valuta una molla nuova già pronta.',
  ),

  // ---------------- PULIZIA ----------------
  ServiceStep(
    id: 'prepulizia',
    phase: 'Pulizia e controllo',
    title: 'Prepara i pezzi per il lavaggio',
    todo: [
      'Metti i pezzi nei cestelli divisi per gruppo.',
      'FUORI dal lavaggio: quadrante, lancette, rotore (se ha cuscinetto lubrificato) e guarnizioni.',
      'Ancora e bilanciere: lavaggio breve, non lasciarli in ammollo nell\'alcol.',
    ],
    why:
        'Il liquido scioglie l\'olio vecchio ma può rovinare stampe, gommalacca e parti in plastica.',
    partIds: ['ancora', 'bilanciere', 'quadrante'],
  ),
  ServiceStep(
    id: 'lavaggio',
    phase: 'Pulizia e controllo',
    title: 'Lavaggio',
    todo: [
      'Immergi i pezzi nel liquido di lavaggio per orologi (meglio con ultrasuoni o agitandoli).',
      'Usa il timer qui sotto.',
    ],
    why: 'Toglie olio vecchio, sporco e residui metallici.',
    timerSeconds: 600,
  ),
  ServiceStep(
    id: 'risciacquo1',
    phase: 'Pulizia e controllo',
    title: 'Primo risciacquo',
    todo: ['Sposta i pezzi nel liquido di risciacquo pulito.'],
    why: 'Toglie i residui del liquido di lavaggio, che lascerebbe aloni.',
    timerSeconds: 300,
  ),
  ServiceStep(
    id: 'risciacquo2',
    phase: 'Pulizia e controllo',
    title: 'Secondo risciacquo e asciugatura',
    todo: [
      'Secondo bagno di risciacquo, pulito.',
      'Asciuga con aria calda (non bollente) o lascia asciugare coperto.',
    ],
    why: 'Un pezzo non perfettamente asciutto rovina l\'olio nuovo.',
    timerSeconds: 300,
  ),
  ServiceStep(
    id: 'ispezione',
    phase: 'Pulizia e controllo',
    title: 'Ispeziona tutto con la lente',
    todo: [
      'Pulisci ogni foro dei rubini con un bastoncino di legno appuntito (pegwood) finché esce pulito.',
      'Perni: dritti, lucidi, senza segni.',
      'Denti delle ruote: nessuno piegato o consumato.',
      'Rubini: nessuna crepa.',
      'Spirale: piatta, spire concentriche, nessuna spira che tocca l\'altra.',
    ],
    why: 'Ora che è tutto pulito si vedono i difetti. È il momento di ordinare ricambi.',
    partIds: ['rubini', 'treno', 'spirale'],
  ),

  // ---------------- RIMONTAGGIO ----------------
  ServiceStep(
    id: 'bariletto_in',
    phase: 'Rimontaggio e lubrificazione',
    title: 'Richiudi il bariletto',
    todo: [
      'Molla in sede (nuova o rimessa con l\'avvolgimolle).',
      'Lubrifica come indicato sotto, poi albero e coperchio.',
      'Controlla che l\'albero giri con poco gioco.',
    ],
    why: 'La lubrificazione giusta qui decide quanto è regolare la forza che arriva al bilanciere.',
    partIds: ['bariletto', 'molla_motrice', 'albero_bariletto', 'briglia'],
    lube:
        'Manuale: velo di grasso per molle sulle spire. Automatico: grasso frenante sulla parete '
        'interna del bariletto (dove scivola la briglia). Perni dell\'albero: olio medio-denso. '
        'Esempi comuni: Moebius 8200 (molle manuali), 8217 (parete automatici), HP1300 (albero).',
  ),
  ServiceStep(
    id: 'remontoir_in',
    phase: 'Rimontaggio e lubrificazione',
    title: 'Rimonta il remontoir',
    todo: [
      'Tiretto, pignone di carica, pignone scorrevole (nel verso giusto), stelo.',
      'Bascula con la sua molla, ruota di rinvio, placca/molla del tiretto.',
      'Prova: tirando lo stelo devi sentire scatti netti.',
    ],
    why: 'Se il remontoir non lavora bene, la corona non carica o non mette all\'ora.',
    partIds: ['tiretto', 'bascula', 'pignone_scorrevole', 'pignone_carica', 'ruota_rinvio', 'molla_tiretto'],
    lube: 'Grasso per remontoir sui punti di sfregamento e sui denti dei pignoni (es. Moebius 9504 o Molykote DX). Poco.',
  ),
  ServiceStep(
    id: 'treno_in',
    phase: 'Rimontaggio e lubrificazione',
    title: 'Rimonta il treno',
    todo: [
      'Ruote al loro posto: centro, terzo, secondi, scappamento.',
      'Appoggia il ponte e, con una punta, guida ogni perno nel suo rubino PRIMA di stringere.',
      'Stringi le viti piano, a croce.',
      'Prova di scorrimento: soffia con la pompetta, le ruote devono girare libere e rallentare dolcemente.',
    ],
    why:
        'Se una ruota non gira libera, l\'energia si perde per strada e il bilanciere oscilla poco.',
    partIds: ['treno', 'ponte_treno', 'ruota_centro', 'ruota_terzo', 'ruota_secondi', 'ruota_scappamento'],
    warning: 'Se il ponte non scende piatto da solo, c\'è un perno fuori posto: non stringere.',
    lube:
        'Una goccina minuscola su ogni perno, nella conca del rubino, dopo il montaggio. '
        'Ruote lente (centro, terzo): olio medio (es. HP1300). Ruote veloci (secondi, scappamento): olio fine (es. 9010).',
  ),
  ServiceStep(
    id: 'bariletto_rimonta',
    phase: 'Rimontaggio e lubrificazione',
    title: 'Rimonta bariletto, ponte e ruote di carica',
    todo: [
      'Bariletto in sede, ponte del bariletto, viti.',
      'Rocchetto a cricco, ruota di carica (attento al filetto sinistro), cricchetto e molla.',
      'Prova: girando la corona senti il cricchetto scattare.',
    ],
    why: 'Ora l\'orologio può di nuovo accumulare energia.',
    partIds: ['bariletto', 'ponte_bariletto', 'rocchetto_cricco', 'ruota_carica', 'cricchetto'],
    lube: 'Velo di grasso sotto la ruota di carica e sul perno del cricchetto. Olio medio sui perni del bariletto.',
  ),
  ServiceStep(
    id: 'ancora_in',
    phase: 'Rimontaggio e lubrificazione',
    title: 'Rimonta l\'ancora',
    todo: [
      'Ancora in sede, ponte dell\'ancora, viti.',
      'Dai 2-3 scatti di carica.',
      'Con una setola sposta la forchetta da un lato all\'altro: deve scattare netta e la ruota di scappamento avanzare.',
    ],
    why: 'Verifichi che lo scappamento funzioni prima di rimettere il bilanciere.',
    partIds: ['ancora', 'ponte_ancora', 'ruota_scappamento'],
    lube:
        'Perni dell\'ancora: di solito asciutti. Palette: olio per scappamento (es. Moebius 9415) '
        'sulla paletta d\'uscita, poi fai avanzare la ruota di qualche dente per distribuirlo.',
  ),
  ServiceStep(
    id: 'antiurto_in',
    phase: 'Rimontaggio e lubrificazione',
    title: 'Lubrifica e chiudi gli antiurto',
    todo: [
      'Una goccina d\'olio sulla contropietra (deve formare un cerchietto pari a metà della pietra).',
      'Rimetti la pietra forata sopra, poi tutto in sede e richiudi la mollina.',
    ],
    why: 'Il perno del bilanciere ruota avanti e indietro senza sosta: qui l\'olio conta più che ovunque.',
    partIds: ['antiurto', 'rubini'],
    lube: 'Olio fine per bilanciere (es. Moebius 9010).',
    optional: true,
    optionalLabel: 'Solo se li hai aperti',
  ),
  ServiceStep(
    id: 'bilanciere_in',
    phase: 'Rimontaggio e lubrificazione',
    title: 'Rimonta il bilanciere',
    todo: [
      'Dai qualche scatto di carica.',
      'Cala il ponte con il bilanciere appeso, facendo entrare l\'ellisse nella forchetta.',
      'Appena il ponte si appoggia, il bilanciere deve partire da solo.',
      'Stringi la vite.',
    ],
    why: 'È il momento della verità: se oscilla ampio e regolare, il lavoro è buono.',
    partIds: ['bilanciere', 'spirale', 'ponte_bilanciere'],
    warning: 'Se il ponte non scende piatto, NON stringere: il perno non è nel rubino e si spezza.',
  ),
  ServiceStep(
    id: 'automatico_in',
    phase: 'Rimontaggio e lubrificazione',
    title: 'Rimonta il modulo automatico',
    todo: [
      'Ruote d\'inversione o magic lever al loro posto.',
      'Ponte automatico e viti.',
    ],
    why: 'Ridà all\'orologio la carica con il movimento del polso.',
    partIds: ['ponte_automatico', 'invertitori'],
    applies: Applies.automaticOnly,
    lube: 'Ruote d\'inversione: su molti calibri (es. ETA, Sellita) NON si oliano. Controlla il tuo calibro.',
  ),
  ServiceStep(
    id: 'quadrante_in',
    phase: 'Rimontaggio e lubrificazione',
    title: 'Rimonta minuteria, calendario, quadrante e lancette',
    todo: [
      'Chaussée (spinta in sede), ruota di minuteria, ruota delle ore.',
      'Calendario, seguendo le tue foto.',
      'Quadrante e viti dei piedini.',
      'Lancette: porta l\'ora al punto in cui scatta la data, poi monta le lancette tutte sovrapposte a mezzanotte.',
    ],
    why: 'Così la data cambia a mezzanotte e non a mezzogiorno.',
    partIds: ['chaussee', 'ruota_minuteria', 'ruota_ore', 'datario', 'quadrante', 'lancette'],
    lube: 'Un velo d\'olio dentro la chaussée e sui perni della minuteria. Calendario: grasso leggero solo sui punti di sfregamento.',
  ),

  // ---------------- REGOLAZIONE ----------------
  ServiceStep(
    id: 'regola',
    phase: 'Regolazione e chiusura',
    title: 'Misura e regola',
    todo: [
      'Carica completamente e aspetta 15-30 minuti.',
      'Misura con la funzione "Misura" quadrante in su e corona in basso.',
      'Se avanza, sposta la racchetta verso "-" (S); se ritarda, verso "+" (F). Movimenti piccolissimi.',
      'Ripeti finché sei entro qualche secondo al giorno.',
    ],
    why: 'La marcia giusta si ottiene alla fine, con tutto pulito e lubrificato.',
    partIds: ['racchetta', 'bilanciere'],
    warning: 'Se l\'errore è di minuti al giorno, la racchetta non basta: probabile magnetizzazione o spirale da controllare.',
  ),
  ServiceStep(
    id: 'chiudi',
    phase: 'Regolazione e chiusura',
    title: 'Rimetti in cassa',
    todo: [
      'Guarnizioni nuove, con un velo di grasso al silicone.',
      'Movimento in cassa, stelo e corona, anello o viti di fissaggio.',
      'Rotore (negli automatici), fondello.',
    ],
    why: 'Le guarnizioni nuove ridanno la tenuta: polvere e umidità sono i nemici dell\'olio nuovo.',
    partIds: ['guarnizioni', 'fondello', 'corona', 'stelo', 'rotore'],
    photo: true,
  ),
  ServiceStep(
    id: 'prova',
    phase: 'Regolazione e chiusura',
    title: 'Prova di 24-48 ore',
    todo: [
      'Metti l\'orologio all\'ora esatta.',
      'Controlla dopo 24 ore quanto ha avanzato o ritardato e annotalo.',
      'Se serve, riapri e ritocca la racchetta.',
    ],
    why: 'La prova vera è al polso o sul comodino, non sul banco.',
  ),
];
