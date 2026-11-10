"""Profili dei calibri, ricalcati dalle foto (coordinate G 0-1000, corona a destra).
Genera lib/art/profiles.dart."""
import json, math, sys


def sc(pts, k):  # scala attorno al centro (foto con l'anello porta-movimento)
    return [[round(500 + (x - 500) * k), round(500 + (y - 500) * k)] for x, y in pts]


def circ(c, r, n=28):
    return [[round(c[0] + r * math.cos(2 * math.pi * i / n)), round(c[1] + r * math.sin(2 * math.pi * i / n))] for i in range(n)]


def halfdisc():
    pts = [[500, 60]]
    for i in range(1, 12):
        a = -math.pi / 2 + math.pi * i / 12
        pts.append([round(500 + 440 * math.cos(a)), round(500 + 440 * math.sin(a))])
    pts.append([500, 940])
    return pts


P = {}

# ---------------------------------------------------------------- Jeambrun PS31 (foto dell'utente)
P['ps31'] = dict(
    g=dict(barrel=[550, 300], crownWheel=[760, 495], click=[400, 420], center=[485, 525], third=[585, 665],
           fourth=[500, 785], escape=[380, 805], pallet=[305, 710], balance=[225, 595], cockFoot=[145, 350]),
    radii=dict(barrel=170, ratchet=180, crown=100, balance=150),
    regulator=-2.11,
    bridges=dict(
        ponte_treno=[[210, 260], [320, 240], [350, 300], [470, 470], [560, 520], [700, 630], [820, 720], [850, 800], [780, 850],
                     [650, 820], [560, 760], [450, 740], [430, 640], [420, 560], [320, 470], [230, 400], [200, 320]],
        ponte_bariletto=[[250, 140], [400, 100], [600, 95], [780, 150], [880, 260], [910, 400], [900, 600], [860, 650], [780, 620],
                         [700, 600], [560, 480], [450, 440], [360, 300], [320, 230]],
        ponte_bilanciere=[[60, 410], [120, 370], [200, 380], [260, 450], [300, 560], [290, 640], [220, 670], [150, 650], [80, 560]],
        ponte_ancora=[[330, 770], [385, 765], [435, 820], [435, 885], [390, 905], [335, 860]],
    ),
    screws=dict(ponte_bariletto=[[300, 190], [875, 435], [845, 660]], ponte_treno=[[280, 320], [735, 820], [445, 925]],
                ponte_ancora=[[400, 870]], ponte_bilanciere=[[145, 350]]),
)

# ---------------------------------------------------------------- Unitas 6497
P['6497'] = dict(
    g=dict(barrel=[600, 690], crownWheel=[765, 505], click=[470, 610], center=[490, 490], third=[335, 545], fourth=[240, 490],
           escape=[235, 380], pallet=[310, 325], balance=[390, 230], cockFoot=[590, 120]),
    radii=dict(barrel=160, ratchet=165, crown=115, balance=140),
    regulator=-0.73,
    bridges=dict(
        ponte_treno=[[175, 190], [250, 300], [300, 335], [410, 450], [425, 560], [230, 770], [170, 780], [120, 700], [80, 560],
                     [80, 420], [110, 300]],
        ponte_bariletto=[[425, 450], [470, 410], [580, 270], [780, 165], [830, 200], [900, 300], [935, 450], [930, 600], [880, 730],
                         [790, 850], [650, 930], [500, 945], [300, 880], [235, 820], [300, 720], [425, 600]],
        ponte_bilanciere=[[240, 150], [330, 105], [470, 70], [600, 75], [640, 130], [600, 180], [470, 240], [420, 270], [330, 300],
                          [260, 260]],
        ponte_ancora=[[260, 290], [340, 270], [365, 330], [300, 365], [255, 340]],
    ),
    screws=dict(ponte_bariletto=[[775, 300], [840, 665], [910, 555]], ponte_treno=[[145, 310], [175, 685], [295, 775]],
                ponte_ancora=[[330, 290]], ponte_bilanciere=[[590, 120]]),
)

# ---------------------------------------------------------------- Seiko NH35 / NH36 (foto con l'anello: scala 1.1)
K = 1.1
P['nh35'] = dict(
    g=dict(zip(['barrel', 'crownWheel', 'click', 'third', 'fourth', 'escape', 'pallet', 'balance', 'cockFoot', 'rev1', 'rev2'],
               sc([[560, 300], [790, 430], [700, 300], [665, 420], [550, 575], [440, 585], [370, 550], [280, 510], [285, 710],
                   [470, 330], [560, 420]], K))),
    radii=dict(barrel=150, ratchet=160, crown=60, balance=125),
    regulator=1.73,
    merged=True,
    bridges=dict(
        ponte_bariletto=sc([[200, 330], [320, 260], [450, 250], [520, 330], [600, 360], [700, 360], [745, 450], [740, 600], [690, 700],
                            [600, 760], [500, 790], [400, 770], [380, 650], [400, 560], [330, 420], [230, 380]], K),
        ponte_bilanciere=sc([[150, 560], [210, 540], [330, 560], [360, 640], [330, 760], [260, 790], [200, 740], [160, 660]], K),
        ponte_ancora=sc([[400, 450], [470, 440], [480, 500], [410, 520]], K),
        ponte_automatico=sc([[330, 260], [470, 200], [620, 190], [720, 260], [740, 380], [650, 470], [520, 520], [400, 500], [330, 420]], K),
    ),
    screws=dict(ponte_bariletto=sc([[355, 230], [360, 310], [640, 680], [580, 765]], K), ponte_bilanciere=sc([[285, 710]], K),
                ponte_ancora=sc([[430, 470]], K), ponte_automatico=sc([[400, 300], [680, 300]], K)),
)
P['nh36'] = dict(P['nh35'])

# ---------------------------------------------------------------- Seiko 7S26 / 7S36
P['7s26'] = dict(
    g=dict(barrel=[550, 280], crownWheel=[680, 400], click=[690, 250], center=[490, 490], third=[560, 625], fourth=[490, 680],
           escape=[415, 620], pallet=[345, 550], balance=[255, 480], cockFoot=[245, 705], rev1=[470, 330], rev2=[600, 420]),
    radii=dict(barrel=145, ratchet=150, crown=65, balance=110),
    regulator=1.79,
    merged=True,
    bridges=dict(
        ponte_bariletto=[[225, 255], [300, 185], [430, 160], [600, 130], [760, 190], [840, 300], [860, 450], [850, 600], [800, 720],
                         [700, 820], [560, 850], [450, 840], [400, 760], [380, 640], [330, 420], [250, 330]],
        ponte_bilanciere=[[160, 540], [230, 530], [320, 540], [380, 640], [450, 760], [490, 830], [420, 860], [300, 820], [200, 780],
                          [160, 680]],
        ponte_ancora=[[320, 520], [385, 520], [395, 580], [330, 595]],
        ponte_automatico=[[380, 200], [520, 170], [660, 190], [760, 280], [760, 420], [650, 480], [520, 470], [420, 420], [370, 320]],
    ),
    screws=dict(ponte_bariletto=[[320, 215], [815, 430], [620, 795]], ponte_bilanciere=[[245, 705], [225, 800]],
                ponte_ancora=[[330, 400]], ponte_automatico=[[420, 260], [720, 300]]),
)

# ---------------------------------------------------------------- ETA 2824 / 2836 (sotto il ponte dell'automatismo: ricostruito)
P['2824'] = dict(
    g=dict(barrel=[690, 420], crownWheel=[800, 560], click=[640, 300], center=[500, 500], third=[600, 620], fourth=[470, 640],
           escape=[390, 600], pallet=[330, 545], balance=[260, 490], cockFoot=[200, 580], rev1=[430, 605], rev2=[575, 520]),
    radii=dict(barrel=150, ratchet=150, crown=60, balance=95),
    regulator=-1.59,
    bridges=dict(
        ponte_bilanciere=[[200, 290], [320, 290], [335, 420], [315, 560], [255, 625], [180, 605], [165, 450]],
        ponte_automatico=circ([510, 510], 205),
    ),
    screws=dict(ponte_bariletto=[[270, 215], [845, 590]], ponte_treno=[[270, 745], [660, 780]],
                ponte_bilanciere=[[200, 580]], ponte_automatico=[[370, 340], [690, 400], [460, 760]]),
)

# ---------------------------------------------------------------- Miyota 8215
P['8215'] = dict(
    g=dict(barrel=[560, 280], crownWheel=[800, 520], click=[700, 350], center=[480, 480], third=[380, 480], fourth=[600, 640],
           escape=[580, 720], pallet=[470, 690], balance=[365, 700], cockFoot=[150, 630], rev1=[430, 520], rev2=[560, 430]),
    radii=dict(barrel=160, ratchet=150, crown=60, balance=135),
    regulator=3.14,
    merged=True,
    bridges=dict(
        ponte_bariletto=circ([520, 470], 290),
        ponte_bilanciere=[[80, 540], [200, 520], [330, 580], [400, 640], [410, 720], [330, 780], [200, 760], [100, 720], [70, 620]],
        ponte_automatico=circ([495, 480], 115, 20),
    ),
    screws=dict(ponte_bariletto=[[250, 100], [140, 270], [765, 560], [750, 730]], ponte_bilanciere=[[150, 630]],
                ponte_automatico=[[420, 430], [575, 530]]),
)

# ---------------------------------------------------------------- Miyota 9015 / 9039
P['9015'] = dict(
    g=dict(barrel=[560, 240], crownWheel=[810, 470], click=[720, 230], center=[510, 490], third=[330, 330], fourth=[410, 445],
           escape=[440, 560], pallet=[490, 640], balance=[565, 710], cockFoot=[780, 725], rev1=[460, 520], rev2=[580, 430]),
    radii=dict(barrel=165, ratchet=165, crown=60, balance=140),
    regulator=-0.48,
    merged=True,
    bridges=dict(
        ponte_bariletto=[[200, 360], [260, 260], [380, 180], [540, 150], [700, 170], [790, 240], [840, 380], [840, 560], [820, 600],
                         [600, 605], [530, 575], [430, 570], [380, 660], [300, 700], [220, 640], [200, 500]],
        ponte_bilanciere=[[480, 640], [560, 610], [820, 600], [860, 650], [840, 760], [760, 780], [650, 760]],
        ponte_automatico=circ([510, 490], 110, 20),
    ),
    screws=dict(ponte_bariletto=[[350, 125], [120, 370], [805, 255], [890, 550]], ponte_bilanciere=[[780, 725]],
                ponte_automatico=[[440, 470], [585, 520]]),
)

# ---------------------------------------------------------------- Omega 650 (foto 800 px -> G x1.25)
k = 1.25
def o(pts): return [[round(x * k), round(y * k)] for x, y in pts]
P['omega650'] = dict(
    g=dict(barrel=[569, 269], crownWheel=[737, 481], click=[400, 330], center=[500, 488], third=[588, 619], fourth=[544, 763],
           escape=[413, 681], pallet=[340, 620], balance=[256, 525], cockFoot=[175, 300]),
    radii=dict(barrel=165, ratchet=175, crown=106, balance=165),
    regulator=-1.90,
    bridges=dict(
        ponte_treno=o([[345, 360], [470, 345], [560, 470], [640, 480], [715, 500], [720, 600], [700, 690], [640, 760], [560, 800],
                       [450, 810], [290, 780], [250, 700], [240, 630], [300, 560], [330, 440]]),
        ponte_bariletto=o([[230, 90], [330, 60], [480, 50], [620, 100], [700, 180], [730, 280], [720, 400], [650, 470], [560, 470],
                           [480, 350], [360, 360], [270, 330], [240, 220]]),
        ponte_bilanciere=o([[60, 330], [120, 260], [200, 250], [260, 330], [270, 460], [230, 520], [150, 520], [80, 460]]),
        ponte_ancora=o([[200, 520], [270, 520], [280, 600], [220, 620]]),
    ),
    screws=dict(ponte_bariletto=[[338, 131], [856, 331]], ponte_treno=[[838, 669], [356, 862]], ponte_bilanciere=[[175, 300]],
                ponte_ancora=[[300, 700]]),
)

# ---------------------------------------------------------------- Omega 620 (famiglia 601-625)
P['omega620'] = dict(
    g=dict(barrel=[581, 269], crownWheel=[725, 475], click=[420, 320], center=[494, 475], third=[556, 619], fourth=[494, 725],
           escape=[369, 756], pallet=[300, 660], balance=[250, 525], cockFoot=[169, 294]),
    radii=dict(barrel=140, ratchet=144, crown=112, balance=138),
    regulator=-2.17,
    bridges=dict(
        ponte_treno=o([[270, 250], [330, 230], [380, 330], [420, 420], [500, 440], [560, 460], [580, 560], [560, 650], [520, 760],
                       [420, 790], [330, 780], [280, 700], [300, 560], [320, 450], [280, 330]]),
        ponte_bariletto=o([[390, 90], [560, 80], [700, 180], [740, 320], [720, 460], [640, 520], [560, 460], [500, 430], [420, 400],
                           [380, 300]]),
        ponte_bilanciere=[[110, 330], [170, 270], [300, 280], [340, 400], [320, 520], [240, 560], [150, 520], [100, 440]],
        ponte_ancora=[[270, 620], [340, 620], [350, 690], [285, 700]],
    ),
    screws=dict(ponte_bariletto=[[813, 338], [869, 538]], ponte_treno=[[813, 613], [631, 788], [344, 294]],
                ponte_bilanciere=[[169, 294]], ponte_ancora=[[320, 640]]),
)

# ---------------------------------------------------------------- Omega 663 (famiglia 66x-68x)
P['omega663'] = dict(
    g=dict(barrel=[588, 263], crownWheel=[760, 470], click=[700, 300], center=[500, 500], third=[560, 620], fourth=[519, 800],
           escape=[644, 750], pallet=[420, 700], balance=[300, 631], cockFoot=[231, 738], rev1=[650, 330], rev2=[700, 560]),
    radii=dict(barrel=145, ratchet=150, crown=70, balance=125),
    regulator=2.14,
    merged=True,
    rotor=-math.pi / 2,
    bridges=dict(
        ponte_bariletto=o([[170, 330], [220, 250], [330, 180], [430, 170], [520, 250], [580, 330], [600, 450], [560, 520], [470, 560],
                           [380, 520], [300, 470], [220, 440]]),
        ponte_bilanciere=[[150, 600], [220, 560], [330, 560], [360, 650], [320, 760], [250, 790], [180, 760], [140, 690]],
        ponte_ancora=o([[380, 700], [470, 600], [560, 570], [620, 590], [640, 650], [560, 700], [450, 740]]),
        ponte_automatico=halfdisc(),
    ),
    screws=dict(ponte_bariletto=[[300, 250], [700, 560]], ponte_bilanciere=[[231, 738]], ponte_ancora=[[700, 760]],
                ponte_automatico=[[640, 150], [880, 520], [640, 860]]),
)

# ---------------------------------------------------------------- Raketa 2609
P['raketa2609'] = dict(
    g=dict(barrel=[575, 263], crownWheel=[763, 500], click=[420, 330], center=[494, 488], third=[581, 638], fourth=[470, 700],
           escape=[400, 631], pallet=[338, 550], balance=[244, 444], cockFoot=[244, 225]),
    radii=dict(barrel=175, ratchet=188, crown=106, balance=160),
    regulator=-2.09,
    bridges=dict(
        ponte_treno=o([[340, 380], [420, 360], [500, 420], [520, 520], [560, 620], [620, 700], [600, 800], [470, 870], [320, 860],
                       [200, 800], [180, 700], [260, 600], [300, 480]]),
        ponte_bariletto=o([[230, 90], [340, 60], [500, 55], [640, 110], [720, 200], [745, 320], [720, 460], [640, 560], [560, 560],
                           [520, 440], [440, 370], [330, 330], [290, 250]]),
        ponte_bilanciere=o([[120, 210], [230, 170], [300, 260], [300, 330], [240, 420], [150, 440], [90, 380], [80, 300]]),
        ponte_ancora=[[300, 520], [370, 515], [385, 575], [320, 590]],
    ),
    screws=dict(ponte_bariletto=[[381, 125], [819, 313]], ponte_treno=[[831, 650], [675, 819], [300, 819]],
                ponte_bilanciere=[[244, 225]], ponte_ancora=[[350, 600]]),
)

NAMES = {'ps31': 'Jeambrun PS31', '6497': 'Unitas 6497', 'nh35': 'Seiko NH35', 'nh36': 'Seiko NH36', '7s26': 'Seiko 7S26',
         '2824': 'ETA 2824', '8215': 'Miyota 8215', '9015': 'Miyota 9015', 'omega650': 'Omega 650', 'omega620': 'Omega 620',
         'omega663': 'Omega 663', 'raketa2609': 'Raketa 2609'}
# calibri dell'archivio -> profilo
MAP = {'jeambrun_ps31': 'ps31', 'eta6497': '6497', 'st36': '6497', 'nh35': 'nh35', 'nh36': 'nh36', 'seiko7s26': '7s26', 'seiko7s': '7s26',
       'eta2824': '2824', 'eta2836': '2824', 'sw200': '2824', 'clone2824': '2824', 'miyota8215': '8215', 'miyota8205': '8215',
       'miyota9015': '9015', 'omega650': 'omega650', 'omega601': 'omega620', 'omega66x': 'omega663', 'raketa2609': 'raketa2609',
       'raketa2614': 'raketa2609'}
# bariletto: viti della ruota del cricchetto/corona: restano quelle generiche (centrate su G)

def dart(v):
    return json.dumps(v)

out = ["// GENERATO da tool/profiles_src.py: profili dei calibri ricalcati dalle foto.", "// ignore_for_file: lines_longer_than_80_chars", "",
       "import 'dart:ui';", "", "import 'actions.dart';", "", "class MovementProfile {",
       "  final String id;", "  final String name;", "  final Map<String, dynamic> data;",
       "  const MovementProfile(this.id, this.name, this.data);", "",
       "  Map<String, dynamic> toJson() => {'id': id, ...data};", "",
       "  /// Viti del lato ponti di questo calibro (le altre restano quelle dello schema).",
       "  List<ScrewDef> get screws {", "    final out = <ScrewDef>[];", "    final m = Map<String, dynamic>.from(data['screws'] as Map);",
       "    for (final e in m.entries) {", "      final list = e.value as List;", "      for (var i = 0; i < list.length; i++) {",
       "        final p = list[i] as List;",
       "        out.add(ScrewDef('v_${e.key.replaceFirst('ponte_', '')}_${i + 1}', e.key, Offset((p[0] as num).toDouble(), (p[1] as num).toDouble()), e.key == 'ponte_automatico' ? 12 : 13));",
       "      }", "    }", "    return out;", "  }", "}", "",
       "const movementProfiles = <String, MovementProfile>{"]
for pid, d in P.items():
    d = {k: v for k, v in d.items()}
    out.append(f"  '{pid}': MovementProfile('{pid}', '{NAMES[pid]}', {dart(d)}),")
out += ["};", "", "/// Calibro dell'archivio -> profilo 3D fedele (se c'è).", "const caliberProfile = <String, String>{"]
for a, b in MAP.items():
    out.append(f"  '{a}': '{b}',")
out += ["};", ""]
open(sys.argv[1], 'w').write("\n".join(out))
print('ok', len(P))
