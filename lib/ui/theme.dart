import 'dart:ui' show FontVariation;

import 'package:flutter/material.dart';

class Brand {
  static const blu = Color(0xFF1D3A8A);
  static const arancio = Color(0xFFF28C38);
  static const carta = Color(0xFFFFF8F0);
  static const inchiostro = Color(0xFF14213D);

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
      color: Colors.white,
      elevation: 0,
      margin: EdgeInsets.zero,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(16),
        side: BorderSide(color: Brand.inchiostro.withValues(alpha: 0.08)),
      ),
    ),
    filledButtonTheme: FilledButtonThemeData(
      style: FilledButton.styleFrom(
        minimumSize: const Size(48, 50),
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
        textStyle: Brand.sora(15, 600),
      ),
    ),
    outlinedButtonTheme: OutlinedButtonThemeData(
      style: OutlinedButton.styleFrom(
        minimumSize: const Size(48, 50),
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
        textStyle: Brand.sora(15, 600),
      ),
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
                Text(title, style: Brand.sora(14, 700, color: Brand.inchiostro)),
                const SizedBox(height: 4),
                Text(text, style: const TextStyle(fontSize: 15, height: 1.4, color: Brand.inchiostro)),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
