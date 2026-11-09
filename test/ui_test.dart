import 'dart:io';
import 'dart:ui' as ui;

import 'package:d_fix_watch_lab/data/calibers.dart';
import 'package:d_fix_watch_lab/logic/revision.dart';
import 'package:d_fix_watch_lab/logic/store.dart';
import 'package:d_fix_watch_lab/main.dart';
import 'package:d_fix_watch_lab/ui/guide_page.dart';
import 'package:d_fix_watch_lab/ui/new_revision_page.dart';
import 'package:d_fix_watch_lab/ui/theme.dart';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:shared_preferences/shared_preferences.dart';

final _shots = Platform.environment['SHOTS'] == '1';
final _boundary = GlobalKey();

Future<void> _fonts() async {
  final sora = FontLoader('Sora')..addFont(rootBundle.load('assets/fonts/Sora.ttf'));
  await sora.load();
  final root = Platform.environment['FLUTTER_ROOT'];
  if (root != null) {
    final f = File('$root/bin/cache/artifacts/material_fonts/MaterialIcons-Regular.otf');
    if (f.existsSync()) {
      final icons = FontLoader('MaterialIcons')
        ..addFont(Future.value(ByteData.view(f.readAsBytesSync().buffer)));
      await icons.load();
    }
  }
  // testo normale: usa Sora anche per il corpo, così lo screenshot è leggibile
}

Widget _wrap(Widget home) => RepaintBoundary(
      key: _boundary,
      child: MaterialApp(
        debugShowCheckedModeBanner: false,
        theme: buildTheme().copyWith(
          textTheme: buildTheme().textTheme.apply(fontFamily: 'Sora'),
        ),
        home: DefaultTextStyle.merge(style: const TextStyle(fontFamily: 'Sora'), child: home),
      ),
    );

Future<void> _shot(WidgetTester t, String name) async {
  await t.runAsync(() async {
    final b = _boundary.currentContext!.findRenderObject()! as RenderRepaintBoundary;
    final img = await b.toImage(pixelRatio: 1);
    final data = await img.toByteData(format: ui.ImageByteFormat.png);
    final dir = Directory('build/shots')..createSync(recursive: true);
    File('${dir.path}/ui_$name.png').writeAsBytesSync(data!.buffer.asUint8List());
  });
}

Future<void> _settle(WidgetTester t) async {
  for (var i = 0; i < 6; i++) {
    await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 150)));
    await t.pump(const Duration(milliseconds: 100));
  }
}

void main() {
  setUp(() async {
    SharedPreferences.setMockInitialValues({'view3d': false});
  });

  testWidgets('home vuota: un solo grande pulsante per iniziare', (t) async {
    await t.runAsync(_fonts);
    t.view.physicalSize = const Size(412, 915);
    t.view.devicePixelRatio = 1;
    addTearDown(t.view.reset);
    await t.pumpWidget(_wrap(const HomePage()));
    await _settle(t);
    expect(find.text('Inizia una revisione'), findsOneWidget);
    expect(find.text('Che calibro ho?'), findsOneWidget);
    if (_shots) await _shot(t, '1_home');
  });

  testWidgets('home con revisione in corso: riprendi', (t) async {
    final r = Revision(
      id: '1',
      watchName: 'Seiko del nonno',
      caliberId: calibers.first.id,
      hasDate: true,
      started: DateTime(2026, 11, 9),
      currentIndex: 4,
    );
    SharedPreferences.setMockInitialValues({'revisions_v1': Revision.encodeList([r]), 'view3d': false});
    await t.runAsync(_fonts);
    t.view.physicalSize = const Size(412, 915);
    t.view.devicePixelRatio = 1;
    addTearDown(t.view.reset);
    await t.pumpWidget(_wrap(const HomePage()));
    await _settle(t);
    expect(find.text('Riprendi'), findsOneWidget);
    if (_shots) await _shot(t, '2_home_riprendi');
  });

  testWidgets('nuova revisione: scelta guidata e numero scritto a mano', (t) async {
    await t.runAsync(_fonts);
    t.view.physicalSize = const Size(412, 1400);
    t.view.devicePixelRatio = 1;
    addTearDown(t.view.reset);
    final store = RevisionStore();
    await t.runAsync(store.load);
    await t.pumpWidget(_wrap(NewRevisionPage(store: store)));
    await _settle(t);
    expect(find.text('Prima scegli il movimento'), findsOneWidget);
    if (_shots) await _shot(t, '3_nuova');
    await t.enterText(find.widgetWithText(TextField, 'Numero del calibro'), 'NH35');
    await _settle(t);
    expect(find.text('Questo'), findsWidgets);
    await t.tap(find.text('Questo').first);
    await _settle(t);
    expect(find.text('Inizia la revisione'), findsOneWidget);
    if (_shots) await _shot(t, '4_nuova_scelto');
  });

  testWidgets('passo della guida: immagine, cosa fare, dettagli chiusi', (t) async {
    await t.runAsync(_fonts);
    t.view.physicalSize = const Size(412, 1500);
    t.view.devicePixelRatio = 1;
    addTearDown(t.view.reset);
    final store = RevisionStore();
    await t.runAsync(store.load);
    final r = Revision(
      id: '2',
      watchName: 'Seiko del nonno',
      caliberId: calibers.first.id,
      hasDate: true,
      started: DateTime(2026, 11, 9),
      currentIndex: 1,
    );
    await t.pumpWidget(_wrap(GuidePage(store: store, revision: r)));
    await _settle(t);
    expect(find.text('Perché si fa'), findsOneWidget);
    if (_shots) await _shot(t, '5_passo');
  });
}
