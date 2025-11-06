import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

// Adjust the import path if you move this file
// Use an existing image in src/assets/images. There was no splashscreen.png file,
// so point to the available 01-Splash-Screen.png instead.
const splashImage = require('../../assets/images/01-Splash-Screen.png');

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Simulate loading then navigate (replace with real logic)
    const t = setTimeout(() => {
      console.log('Splash: navigating to Onboarding');
      if (navigation && navigation.navigate) navigation.navigate('Onboarding');
    }, 2000);
    return () => clearTimeout(t);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={splashImage} style={styles.image} resizeMode="cover" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  image: { width: '100%', height: '100%' },
});

export default SplashScreen;
