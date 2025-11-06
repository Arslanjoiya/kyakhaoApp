# Fix Package Conflict Issue

## Problem
App install nahi ho rahi kyunki device par pehle se same package name ka app installed hai (debug version).

## Solutions

### Solution 1: Uninstall Existing App (Recommended)
1. Device par settings me jao
2. Apps/Application Manager kholo
3. "KyakhaoApp" ya app ka naam dhoondo
4. Uninstall karo
5. Phir naya APK install karo

### Solution 2: Use ADB to Uninstall
```bash
# Device connect karein (USB debugging enabled)
adb devices

# App uninstall karein
adb uninstall com.kyakhaoapp

# Phir APK install karein
adb install android/app/build/outputs/apk/release/app-release.apk
```

### Solution 3: Rebuild with New Version (Already Done)
Version code already update kar diya hai (2) aur version name (1.1).
Ab naya APK rebuild karo:

```bash
cd android
.\gradlew.bat clean
.\gradlew.bat assembleRelease -PreactNativeArchitectures=arm64-v8a
```

### Solution 4: Install with -r flag (Replace)
```bash
adb install -r android/app/build/outputs/apk/release/app-release.apk
```

## Quick Fix Commands

```powershell
# Option A: Uninstall existing app
adb uninstall com.kyakhaoapp

# Option B: Install with replace flag (will overwrite existing)
adb install -r android/app/build/outputs/apk/release/app-release.apk

# Option C: Force install (uninstall + install)
adb install -r -d android/app/build/outputs/apk/release/app-release.apk
```

## Manual Installation
1. Device par APK file copy karo
2. File Manager se APK open karo
3. Settings me "Install from Unknown Sources" enable karo (agar required ho)
4. Install button click karo
5. Agar conflict aaye, pehle existing app uninstall karo

