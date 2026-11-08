#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
flutter create --project-name d_fix_watch_lab --org dev.dfixwatchlab --platforms=android,ios . >/dev/null
rm -f test/widget_test.dart

GRADLE=android/app/build.gradle.kts
[ -f "$GRADLE" ] || GRADLE=android/app/build.gradle
sed -i -E 's/minSdk *= *flutter\.minSdkVersion/minSdk = 24/; s/minSdkVersion flutter\.minSdkVersion/minSdkVersion 24/' "$GRADLE"

MANIFEST=android/app/src/main/AndroidManifest.xml
if ! grep -q RECORD_AUDIO "$MANIFEST"; then
  sed -i 's#<application#<uses-permission android:name="android.permission.RECORD_AUDIO"/>\n    <application#' "$MANIFEST"
fi
if ! grep -q 'android.permission.INTERNET' "$MANIFEST"; then
  sed -i 's#<application#<uses-permission android:name="android.permission.INTERNET"/>\n    <application#' "$MANIFEST"
fi
sed -i 's#android:label="d_fix_watch_lab"#android:label="D. Fix Watch Lab"#' "$MANIFEST"

PLIST=ios/Runner/Info.plist
if [ "$(uname)" = "Darwin" ] && [ -f "$PLIST" ]; then
  /usr/libexec/PlistBuddy -c "Add :NSMicrophoneUsageDescription string 'Per ascoltare il ticchettio e misurare la marcia.'" "$PLIST" || true
  /usr/libexec/PlistBuddy -c "Add :NSCameraUsageDescription string 'Per fotografare i passi della revisione.'" "$PLIST" || true
  /usr/libexec/PlistBuddy -c "Add :NSPhotoLibraryUsageDescription string 'Per allegare foto ai passi.'" "$PLIST" || true
  /usr/libexec/PlistBuddy -c "Add :NSAppTransportSecurity dict" "$PLIST" || true
  /usr/libexec/PlistBuddy -c "Set :CFBundleDisplayName 'D. Fix Watch Lab'" "$PLIST" || true
fi
[ -f ios/Podfile ] && sed -i.bak "s/^# platform :ios.*/platform :ios, '13.0'/" ios/Podfile || true

# ML Kit: gli script non latini non sono inclusi, R8 non deve cercarli
cat > android/app/proguard-rules.pro <<'PRO'
-dontwarn com.google.mlkit.vision.text.chinese.**
-dontwarn com.google.mlkit.vision.text.devanagari.**
-dontwarn com.google.mlkit.vision.text.japanese.**
-dontwarn com.google.mlkit.vision.text.korean.**
PRO
if ! grep -q 'proguard-rules.pro' "$GRADLE"; then
  if [[ "$GRADLE" == *.kts ]]; then
    sed -i 's#signingConfig = signingConfigs.getByName("debug")#signingConfig = signingConfigs.getByName("debug")\n            proguardFiles(getDefaultProguardFile("proguard-android-optimize.txt"), "proguard-rules.pro")#' "$GRADLE"
  else
    sed -i "s#signingConfig signingConfigs.debug#signingConfig signingConfigs.debug\n            proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'#" "$GRADLE"
  fi
fi
grep -n "proguard" "$GRADLE" || true

flutter pub get
dart run flutter_launcher_icons
grep -n "RECORD_AUDIO\|android:label" "$MANIFEST"
grep -n "minSdk" "$GRADLE"
