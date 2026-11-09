import 'dart:ui' show FontVariation;

import 'package:flutter/material.dart';

/// Colori dell'interfaccia: verde petrolio e corallo su bianco.
/// (L'icona resta nei colori del marchio Dom Studio.)
class Brand {
  static const blu = Color(0xFF0F766E); // accento principale: verde petrolio
  static const arancio = Color(0xFFF97362); // secondo accento: corallo
  static const carta = Color(0xFFFFFFFF); // fondo
  static const inchiostro = Color(0xFF12302C); // testi
  static const tenue = Color(0xFFF2F7F6); // carte e riquadri
  static const verdeChiaro = Color(0xFFD9EFEC);

  static TextStyle sora(double size, int weight, {Color? color}) => TextStyle(
        fontFamily: 'Sora',
        fontSize: size,
        fontWeight: FontWeight.values[((weight ~/ 100) - 1).clamp(0, 8)],
        fontVariations: [FontVariation('wght', weight.toDouble())],
        color: color,
        height: 1.25,
      );
}

ThemeData buildTheme() {
  final scheme = ColorScheme.fromSeed(
    seedColor: Brand.blu,
    primary: Brand.blu,
    secondary: Brand.arancio,
    surface: Brand.carta,
    onSurface: Brand.inchiostro,
  );
  return ThemeData(
    useMaterial3: true,
    colorScheme: scheme,
    scaffoldBackgroundColor: Brand.carta,
    appBarTheme: AppBarTheme(
      backgroundColor: Brand.carta,
      foregroundColor: Brand.inchiostro,
      elevation: 0,
      scrolledUnderElevation: 1,
      titleTextStyle: Brand.sora(19, 700, color: Brand.inchiostro),
    ),
    cardTheme: CardThemeData(
      color: Brand.tenue,
      elevation: 0,
      margin: EdgeInsets.zero,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(18)),
    ),
    textTheme: const TextTheme(
      bodyLarge: TextStyle(fontSize: 17, height: 1.45, color: Brand.inchiostro),
      bodyMedium: TextStyle(fontSize: 16, height: 1.45, color: Brand.inchiostro),
      titleMedium: TextStyle(fontSize: 17, fontWeight: FontWeight.w600, color: Brand.inchiostro),
    ),
    listTileTheme: const ListTileThemeData(
      minVerticalPadding: 12,
      titleTextStyle: TextStyle(fontSize: 17, fontWeight: FontWeight.w600, color: Brand.inchiostro),
      subtitleTextStyle: TextStyle(fontSize: 14.5, height: 1.35, color: Color(0xFF4A6460)),
    ),
    filledButtonTheme: FilledButtonThemeData(
      style: FilledButton.styleFrom(
        minimumSize: const Size(56, 58),
        padding: const EdgeInsets.symmetric(horizontal: 20),
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
        textStyle: Brand.sora(17, 700),
      ),
    ),
    outlinedButtonTheme: OutlinedButtonThemeData(
      style: OutlinedButton.styleFrom(
        minimumSize: const Size(56, 54),
        padding: const EdgeInsets.symmetric(horizontal: 18),
        foregroundColor: Brand.blu,
        side: const BorderSide(color: Brand.blu, width: 1.5),
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
        textStyle: Brand.sora(16, 600),
      ),
    ),
    textButtonTheme: TextButtonThemeData(
      style: TextButton.styleFrom(minimumSize: const Size(48, 48), textStyle: Brand.sora(15.5, 600)),
    ),
    inputDecorationTheme: InputDecorationTheme(
      filled: true,
      fillColor: Brand.tenue,
      labelStyle: const TextStyle(fontSize: 16),
      border: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: BorderSide.none),
    ),
    expansionTileTheme: const ExpansionTileThemeData(
      shape: Border(),
      collapsedShape: Border(),
      iconColor: Brand.blu,
      collapsedIconColor: Brand.blu,
    ),
  );
}

/// Riquadro colorato per "perché", "attenzione", "lubrificazione".
class InfoBox extends StatelessWidget {
  final IconData icon;
  final String title;
  final String text;
  final Color color;

  const InfoBox({
    super.key,
    required this.icon,
    required this.title,
    required this.text,
    required this.color,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        color: color.withValues(alpha: 0.10),
        borderRadius: BorderRadius.circular(14),
        border: Border(left: BorderSide(color: color, width: 4)),
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Icon(icon, color: color, size: 22),
          const SizedBox(width: 10),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(title, style: Brand.sora(15.5, 700, color: Brand.inchiostro)),
                const SizedBox(height: 4),
                Text(text, style: const TextStyle(fontSize: 16.5, height: 1.45, color: Brand.inchiostro)),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
