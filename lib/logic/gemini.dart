import 'dart:async';
import 'dart:convert';
import 'dart:io';

import 'dart:isolate';

import 'package:image/image.dart' as img;
import 'package:shared_preferences/shared_preferences.dart';

import '../data/calibers.dart';
import 'caliber_match.dart';
import 'screw_detector.dart';

/// AI facoltativa: Google Gemini col livello gratuito (chiave dell'utente).
class AiSettings {
  static const _kKey = 'gemini_key';
  static const _kModel = 'gemini_model';
  static const _kDeep = 'gemini_deep';
  /// Alias di Google che punta sempre all'ultimo Flash: non "scade" quando escono modelli nuovi.
  static const defaultModel = 'gemini-flash-latest';

  /// Modelli spenti o in uscita: chi li aveva salvati passa in automatico al predefinito.
  static bool isRetired(String m) =>
      RegExp(r'^gemini-(1\.|2\.0|2\.5-(flash|pro)$|2\.5-flash-preview|3-pro-preview|3\.1-flash-lite-preview)').hasMatch(m);

  final String key;
  final String model;
  /// Ragionamento lungo: più preciso ma molto più lento. Spento di base.
  final bool deep;
  const AiSettings(this.key, this.model, {this.deep = false});

  /// Quanto aspetto la risposta prima di arrendermi.
  Duration get timeout => deep ? const Duration(seconds: 60) : const Duration(seconds: 25);

  bool get enabled => key.trim().isNotEmpty;

  static Future<AiSettings> load() async {
    final p = await SharedPreferences.getInstance();
    var m = p.getString(_kModel) ?? defaultModel;
    if (m.trim().isEmpty || isRetired(m.trim())) m = defaultModel;
    return AiSettings(p.getString(_kKey) ?? '', m.trim(), deep: p.getBool(_kDeep) ?? false);
  }

  static Future<void> setDeep(bool v) async {
    final p = await SharedPreferences.getInstance();
    await p.setBool(_kDeep, v);
  }

  static Future<void> save(String key, String model) async {
    final p = await SharedPreferences.getInstance();
    await p.setString(_kKey, key.trim());
    await p.setString(_kModel, model.trim().isEmpty ? defaultModel : model.trim());
  }
}

/// Sceglie da solo un modello Flash che c'è davvero, chiedendo a Google l'elenco.
Future<String?> discoverGeminiModel(String key) async {
  final client = HttpClient()..connectionTimeout = const Duration(seconds: 15);
  try {
    final req = await client.getUrl(Uri.parse('https://generativelanguage.googleapis.com/v1beta/models?pageSize=200'));
    req.headers.set('x-goog-api-key', key);
    final res = await req.close().timeout(const Duration(seconds: 30));
    final txt = await res.transform(utf8.decoder).join();
    if (res.statusCode != 200) return null;
    return pickGeminiModel(jsonDecode(txt) as Map<String, dynamic>);
  } catch (_) {
    return null;
  } finally {
    client.close();
  }
}

/// Dall'elenco dei modelli: il Flash più recente che sa rispondere a testo e immagini.
String? pickGeminiModel(Map<String, dynamic> list) {
  final names = <String>[];
  for (final e in (list['models'] as List? ?? const [])) {
    final m = Map<String, dynamic>.from(e as Map);
    final methods = (m['supportedGenerationMethods'] as List?)?.cast<String>() ?? const [];
    if (!methods.contains('generateContent')) continue;
    final n = (m['name'] as String? ?? '').replaceFirst('models/', '');
    if (!n.startsWith('gemini')) continue;
    if (RegExp(r'tts|image|live|audio|embed|transcribe|robotics|computer|translate|exp').hasMatch(n)) continue;
    names.add(n);
  }
  if (names.contains(AiSettings.defaultModel)) return AiSettings.defaultModel;
  double ver(String n) => double.tryParse(RegExp(r'gemini-(\d+(\.\d+)?)').firstMatch(n)?.group(1) ?? '') ?? 0;
  int rank(String n) {
    var r = 0;
    if (n.contains('flash') && !n.contains('lite')) r += 4;
    if (n.contains('lite')) r += 2;
    if (!n.contains('preview')) r += 1;
    return r;
  }
  names.sort((a, b) {
    final c = rank(b).compareTo(rank(a));
    return c != 0 ? c : ver(b).compareTo(ver(a));
  });
  return names.isEmpty ? null : names.first;
}

/// Perché l'AI non è stata usata.
enum AiFail { busy, quota, key, offline, slow, other }

class AiException implements Exception {
  final String message;
  final AiFail kind;
  const AiException(this.message, {this.kind = AiFail.other});
  @override
  String toString() => message;
}

/// Risposta dell'AI sulle viti di un passo.
class AiScrews {
  final List<FoundScrew> screws;
  final String? tip;
  const AiScrews(this.screws, this.tip);
}

class Gemini {
  final AiSettings s;
  const Gemini(this.s);

  /// Manda la richiesta. Se il modello non esiste più ne sceglie un altro da solo;
  /// se Google è sovraccarico riprova una volta sola col modello leggero.
  static Future<(int, String, String)> post(AiSettings s, String body, {Duration? timeout}) async {
    var model = s.model;
    var payload = body;
    for (var attempt = 0; attempt < 3; attempt++) {
      final client = HttpClient()..connectionTimeout = const Duration(seconds: 10);
      try {
        final uri = Uri.parse('https://generativelanguage.googleapis.com/v1beta/models/$model:generateContent');
        final req = await client.postUrl(uri);
        req.headers.contentType = ContentType.json;
        req.headers.set('x-goog-api-key', s.key);
        req.add(utf8.encode(payload));
        final res = await req.close().timeout(timeout ?? s.timeout);
        final txt = await res.transform(utf8.decoder).join();
        if ((res.statusCode == 503 || res.statusCode == 500) && attempt == 0) {
          await Future<void>.delayed(const Duration(seconds: 2));
          model = 'gemini-flash-lite-latest';
          continue;
        }
        // un modello che non accetta il livello di ragionamento: riprovo senza
        if (res.statusCode == 400 && txt.toLowerCase().contains('thinking') && payload.contains('thinkingConfig')) {
          final j = jsonDecode(payload) as Map<String, dynamic>;
          (j['generationConfig'] as Map).remove('thinkingConfig');
          payload = jsonEncode(j);
          continue;
        }
        if (res.statusCode == 404 && attempt == 0) {
          final other = await discoverGeminiModel(s.key);
          if (other != null && other != model) {
            model = other;
            await AiSettings.save(s.key, other);
            continue;
          }
        }
        return (res.statusCode, txt, model);
      } finally {
        client.close(force: true);
      }
    }
    return (503, '', model);
  }

  /// Foto più leggera per l'AI: 1280 px bastano per leggere le incisioni e si carica in un attimo.
  static Future<List<int>> smallJpeg(String path) => Isolate.run(() {
        final bytes = File(path).readAsBytesSync();
        final src = img.decodeImage(bytes);
        if (src == null) return bytes;
        var im = img.bakeOrientation(src);
        final long = im.width > im.height ? im.width : im.height;
        if (long > 1280) {
          im = im.width >= im.height ? img.copyResize(im, width: 1280) : img.copyResize(im, height: 1280);
        }
        return img.encodeJpg(im, quality: 82);
      });

  Future<Map<String, dynamic>> _ask(String imagePath, String prompt) async {
    final bytes = await smallJpeg(imagePath);
    final body = jsonEncode({
      'contents': [
        {
          'parts': [
            {
              'inline_data': {'mime_type': 'image/jpeg', 'data': base64Encode(bytes)},
            },
            {'text': prompt},
          ],
        },
      ],
      'generationConfig': {
        'response_mime_type': 'application/json',
        'temperature': 0.2,
        'thinkingConfig': {'thinkingLevel': s.deep ? 'high' : 'low'},
      },
    });
    try {
      final (code, txt, model) = await post(s, body);
      final res = (statusCode: code);
      if (res.statusCode == 429) {
        throw const AiException('Hai raggiunto il limite gratuito di Gemini per ora: riprova tra qualche minuto.', kind: AiFail.quota);
      }
      if (res.statusCode == 400 || res.statusCode == 401 || res.statusCode == 403) {
        throw AiException('Gemini ha rifiutato la richiesta (codice ${res.statusCode}): controlla la chiave nelle impostazioni.',
            kind: AiFail.key);
      }
      if (res.statusCode == 404) {
        throw AiException('Il modello "$model" non risponde e non ne ho trovato un altro: riprova più tardi.');
      }
      if (res.statusCode == 503 || res.statusCode == 500) {
        throw const AiException('I server di Google sono sovraccarichi in questo momento (capita spesso col piano gratuito).',
            kind: AiFail.busy);
      }
      if (res.statusCode != 200) throw AiException('Errore di Gemini (${res.statusCode}).');
      return parseGeminiJson(txt);
    } on SocketException {
      throw const AiException('Niente connessione a internet.', kind: AiFail.offline);
    } on TimeoutException {
      throw AiException('Gemini non ha risposto entro ${s.timeout.inSeconds} secondi.', kind: AiFail.slow);
    } on HttpException {
      throw const AiException('Connessione con Gemini interrotta.', kind: AiFail.offline);
    }
  }

  Future<List<CaliberGuess>> identify(String imagePath) async {
    final known = calibers.where((c) => !c.generic).map((c) => '${c.id}: ${c.name}').join('\n');
    final j = await _ask(imagePath, '''
Sei un orologiaio esperto. Guarda la foto di un movimento meccanico di orologio.
Leggi le scritte incise (calibro, rubini/jewels, marca del movimento) e guarda la forma dei ponti.
Rispondi SOLO con JSON:
{"caliber_text": "testo del calibro letto o vuoto", "caliber_id": "uno degli id sotto oppure null",
 "name": "nome del calibro che riconosci anche se non è in elenco", "automatic": true/false/null,
 "jewels": numero o null, "bph": alternanze/ora o null, "has_date": true/false/null, "chrono": true/false,
 "confidence": numero da 0 a 1, "reason": "breve spiegazione in italiano",
 "tips": ["2-4 consigli pratici in italiano per smontare e rimontare QUESTO movimento (viti sinistrorse, pezzi delicati, particolarità)"]}
Calibri noti (id: nome):
$known
''');
    return geminiCaliberGuesses(j);
  }

  Future<AiScrews> findScrews(String imagePath, {required String stepTitle, required String removing}) async {
    final j = await _ask(imagePath, '''
Sei un orologiaio esperto. Nella foto c'è un movimento meccanico durante la revisione.
Passo attuale: "$stepTitle". In questo passo si toglie: $removing.
Trova le teste delle VITI visibili nella foto, mettendo per prime quelle da svitare in questo passo.
Non segnare rubini, perni, ruote o fori. Rispondi SOLO con JSON:
{"screws": [{"box_2d": [ymin, xmin, ymax, xmax], "this_step": true/false, "part": "pezzo che tiene, in italiano"}],
 "tip": "un consiglio breve in italiano su questo passo per questo movimento, o null"}
Le coordinate box_2d vanno da 0 a 1000 rispetto all'immagine.
''');
    return geminiScrews(j);
  }
}

/// Estrae il JSON dalla risposta di generateContent.
Map<String, dynamic> parseGeminiJson(String responseBody) {
  final r = jsonDecode(responseBody) as Map<String, dynamic>;
  final cands = r['candidates'] as List?;
  if (cands == null || cands.isEmpty) throw const AiException('Gemini non ha risposto (risposta vuota).');
  final parts = ((cands.first as Map)['content'] as Map?)?['parts'] as List?;
  final text = parts?.map((p) => (p as Map)['text'] ?? '').join() ?? '';
  var t = text.trim();
  if (t.startsWith('```')) {
    t = t.replaceAll(RegExp(r'^```(json)?'), '').replaceAll(RegExp(r'```$'), '').trim();
  }
  final start = t.indexOf('{'), end = t.lastIndexOf('}');
  if (start < 0 || end <= start) throw const AiException('Risposta di Gemini non leggibile.');
  return Map<String, dynamic>.from(jsonDecode(t.substring(start, end + 1)) as Map);
}

List<CaliberGuess> geminiCaliberGuesses(Map<String, dynamic> j) {
  final conf = ((j['confidence'] as num?) ?? 0.5).toDouble().clamp(0.0, 1.0);
  final reason = (j['reason'] as String?)?.trim();
  final out = <CaliberGuess>[];
  final id = j['caliber_id'] as String?;
  if (id != null && calibers.any((c) => c.id == id)) {
    out.add(CaliberGuess(caliberById(id), conf, [if (reason != null && reason.isNotEmpty) reason], source: 'AI'));
  }
  // anche il testo letto dall'AI passa dall'abbinamento
  final txt = [j['caliber_text'], j['name'], if (j['jewels'] != null) '${j['jewels']} JEWELS'].whereType<Object>().join(' ');
  for (final g in matchEngravings(txt).guesses) {
    if (out.any((o) => o.caliber.id == g.caliber.id)) continue;
    out.add(CaliberGuess(g.caliber, g.score * 0.9, ['letto dall\'AI: ${j['caliber_text'] ?? j['name']}'], source: 'AI'));
  }
  if (out.isEmpty) {
    final auto = j['automatic'];
    final name = (j['name'] as String?)?.trim();
    final tips = ((j['tips'] as List?) ?? const []).map((e) => e.toString().trim()).where((e) => e.isNotEmpty).take(5);
    final cal = Caliber.unknown(
      name: (name != null && name.isNotEmpty) ? name : (auto == false ? 'Movimento a carica manuale' : 'Movimento automatico'),
      automatic: auto != false,
      bph: (j['bph'] as num?)?.toInt(),
      jewels: (j['jewels'] as num?)?.toInt(),
      hasDate: (j['has_date'] as bool?) ?? true,
      chrono: (j['chrono'] as bool?) ?? false,
      notes: [for (final t in tips) 'Consiglio dell\'AI: $t'],
    );
    out.add(CaliberGuess(cal, conf * 0.6, [
      if (name != null && name.isNotEmpty) 'L\'AI pensa sia: $name (non è nel mio archivio)',
      if (reason != null && reason.isNotEmpty) reason,
    ], source: 'AI'));
  }
  return out;
}

AiScrews geminiScrews(Map<String, dynamic> j) {
  final list = (j['screws'] as List?) ?? const [];
  final mine = <FoundScrew>[], others = <FoundScrew>[];
  for (final e in list) {
    final m = Map<String, dynamic>.from(e as Map);
    final b = (m['box_2d'] as List?)?.map((v) => (v as num).toDouble()).toList();
    if (b == null || b.length != 4) continue;
    final ymin = b[0] / 1000, xmin = b[1] / 1000, ymax = b[2] / 1000, xmax = b[3] / 1000;
    if (xmax <= xmin || ymax <= ymin) continue;
    final s = FoundScrew((xmin + xmax) / 2, (ymin + ymax) / 2, ((xmax - xmin) + (ymax - ymin)) / 4, 1.0);
    if (m['this_step'] == true) {
      mine.add(s);
    } else {
      others.add(s);
    }
  }
  final tip = j['tip'] is String && (j['tip'] as String).trim().isNotEmpty ? (j['tip'] as String).trim() : null;
  // se l'AI ha distinto le viti del passo, usiamo quelle; altrimenti tutte
  return AiScrews(mine.isNotEmpty ? mine : others, tip);
}
