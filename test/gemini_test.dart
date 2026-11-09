import 'package:d_fix_watch_lab/logic/gemini.dart';
import 'package:flutter_test/flutter_test.dart';

Map<String, dynamic> _m(String n, [List<String> methods = const ['generateContent']]) =>
    {'name': 'models/$n', 'supportedGenerationMethods': methods};

void main() {
  test('i modelli spenti passano a quello consigliato', () {
    expect(AiSettings.isRetired('gemini-2.5-flash'), isTrue);
    expect(AiSettings.isRetired('gemini-2.0-flash'), isTrue);
    expect(AiSettings.isRetired('gemini-1.5-flash'), isTrue);
    expect(AiSettings.isRetired('gemini-flash-latest'), isFalse);
    expect(AiSettings.isRetired('gemini-3.8-flash'), isFalse);
    expect(AiSettings.isRetired('gemini-2.5-flash-lite'), isFalse);
  });

  test('sceglie l\'alias se esiste', () {
    final pick = pickGeminiModel({
      'models': [_m('gemini-3.6-flash'), _m('gemini-flash-latest'), _m('gemini-3.8-flash')],
    });
    expect(pick, 'gemini-flash-latest');
  });

  test('altrimenti il Flash più recente, non tts/immagini/lite', () {
    final pick = pickGeminiModel({
      'models': [
        _m('gemini-3.8-flash-tts'),
        _m('gemini-3.5-flash-lite'),
        _m('gemini-3.6-flash'),
        _m('gemini-3.8-flash'),
        _m('gemini-3.1-flash-image'),
        _m('gemini-embedding-2', ['embedContent']),
      ],
    });
    expect(pick, 'gemini-3.8-flash');
  });

  test('nessun modello utile: null', () {
    expect(pickGeminiModel({'models': [_m('gemini-embedding-2', ['embedContent'])]}), isNull);
  });
}
