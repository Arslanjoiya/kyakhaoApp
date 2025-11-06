import React, {useEffect, useRef} from 'react';
import {Animated, ImageBackground, StyleSheet, View} from 'react-native';

// Simple splash that fades in the provided image and notifies when done
export default function SplashScreen({onFinish}) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start(() => {
      // Give users a brief moment with the splash then finish
      const timer = setTimeout(() => {
        onFinish?.();
      }, 800);
      return () => clearTimeout(timer);
    });
  }, [opacity, onFinish]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.fill, {opacity}]}>        
        <ImageBackground
          source={require('../assets/images/01-Splash-Screen.png')}
          resizeMode="cover"
          style={styles.fill}
          accessibilityLabel="Splash background"
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  fill: {
    flex: 1,
  },
});


