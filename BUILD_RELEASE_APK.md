# Release APK Build Guide

## Step 1: Generate Release Keystore

Navigate to the `android/app` folder and run the following command:

```bash
cd android/app
keytool -genkeypair -v -storetype PKCS12 -keystore my-release-key.keystore -alias kyakhao -keyalg RSA -keysize 2048 -validity 10000 -storepass KyaKhaoStore#2025 -keypass KyaKhaoKey#2025 -dname "CN=KyakhaoApp, OU=Dev, O=Kyakhao, L=City, S=State, C=PK"
```

**Important Notes:**
- The keystore file will be created in `android/app/my-release-key.keystore`
- Keep this keystore file secure and backed up - you'll need it for all future releases
- Do NOT commit this keystore to version control

## Step 2: Configuration Status

✅ **Already Configured:**
- `android/gradle.properties` contains:
  - `MYAPP_UPLOAD_STORE_FILE=my-release-key.keystore`
  - `MYAPP_UPLOAD_STORE_PASSWORD=KyaKhaoStore#2025`
  - `MYAPP_UPLOAD_KEY_ALIAS=kyakhao`
  - `MYAPP_UPLOAD_KEY_PASSWORD=KyaKhaoKey#2025`

- `android/app/build.gradle` is configured with:
  - Release signing config pointing to the keystore
  - Release build type using the signing config

## Step 3: Build Release APK

### Option A: Using Gradle Wrapper (Recommended)

Navigate to the `android` folder and run:

**For Windows:**
```bash
cd android
.\gradlew.bat clean
.\gradlew.bat assembleRelease
```

**For macOS/Linux:**
```bash
cd android
./gradlew clean
./gradlew assembleRelease
```

### Option B: Using Android Studio

1. Open the project in Android Studio
2. Go to `Build` → `Generate Signed Bundle / APK`
3. Select `APK`
4. Choose the release keystore file
5. Enter the passwords and alias
6. Select `release` build variant
7. Click `Finish`

## Step 4: Locate the APK

After successful build, the signed APK will be located at:

```
android/app/build/outputs/apk/release/app-release.apk
```

## Step 5: Verify the APK

You can verify the APK is signed correctly using:

```bash
jarsigner -verify -verbose -certs android/app/build/outputs/apk/release/app-release.apk
```

Or using `apksigner`:
```bash
apksigner verify android/app/build/outputs/apk/release/app-release.apk
```

## Security Best Practices

1. **Never commit the keystore file** - Add `my-release-key.keystore` to `.gitignore`
2. **Backup the keystore** - Store it in a secure location (password manager, encrypted storage)
3. **Keep credentials secure** - Don't share passwords in plain text
4. **Use environment variables** (Optional) - For CI/CD, use secure environment variables instead of gradle.properties

## Troubleshooting

### Error: Keystore file not found
- Ensure the keystore is in `android/app/` folder
- Check the file name matches exactly: `my-release-key.keystore`

### Error: Password incorrect
- Verify the passwords in `gradle.properties` match the keystore passwords
- Ensure no extra spaces or characters

### Error: Build failed
- Run `./gradlew clean` first
- Check for any syntax errors in `build.gradle`
- Ensure all dependencies are properly synced

## Next Steps

Once you have the APK:
1. Test it on a device before distributing
2. Share with the client for testing
3. Prepare for Google Play Store submission (if applicable)

