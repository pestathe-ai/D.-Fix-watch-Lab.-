import 'dart:io';
import 'dart:isolate';

import 'package:image/image.dart' as img;

/// Le scritte sui movimenti seguono il giro dei ponti e sono incise su metallo lucido:
/// l'OCR le legge meglio se gli diamo la foto in più versioni (ruotata e con più contrasto).
Future<List<String>> ocrVariants(String path, String outDir) {
  return Isolate.run(() {
    final src = img.decodeImage(File(path).readAsBytesSync());
    if (src == null) return <String>[];
    var im = img.bakeOrientation(src);
    final long = im.width > im.height ? im.width : im.height;
    if (long > 1400) {
      im = im.width >= im.height ? img.copyResize(im, width: 1400) : img.copyResize(im, height: 1400);
    }
    // grigio + contrasto: le incisioni risaltano sul metallo
    final g = img.grayscale(img.Image.from(im));
    img.normalize(g, min: 0, max: 255);
    final sharp = img.convolution(img.Image.from(g), filter: [0, -1, 0, -1, 5, -1, 0, -1, 0]);
    final out = <String>[];
    void save(img.Image x, String name) {
      final f = '$outDir/ocr_$name.jpg';
      File(f).writeAsBytesSync(img.encodeJpg(x, quality: 85));
      out.add(f);
    }

    save(sharp, 'c0');
    save(img.copyRotate(sharp, angle: 90), 'c90');
    save(img.copyRotate(sharp, angle: 180), 'c180');
    save(img.copyRotate(sharp, angle: 270), 'c270');
    return out;
  });
}
