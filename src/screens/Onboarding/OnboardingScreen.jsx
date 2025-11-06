import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

const OnboardingScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require('../../assets/images/Mask.png')} style={styles.background} resizeMode="cover">
      <View style={styles.content}>
        <View style={styles.centerBlock}>
          <Text style={styles.title}>Discover from the best</Text>
          <Text style={styles.subtitle}>Discover delicious recipes from around the world with inspiring chefs</Text>
        </View>

        {/* Buttons fixed near bottom */}
        <View style={styles.buttonsContainer} pointerEvents="box-none">
          {/* pagination dots above buttons */}
          <View style={styles.dotsContainer} pointerEvents="none">
            <View style={[styles.dot, styles.activeDot]} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>

          <View style={styles.buttonsRow}>
            <TouchableOpacity style={styles.signUp} onPress={() => navigation?.navigate('Mask2')}>
              <Text style={styles.signUpText}>Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.signIn} onPress={() => navigation?.navigate('SignIn')}>
              <Text style={styles.signInText}>Sign In</Text>
            </TouchableOpacity>
          </View>

          {/* inline terms removed; will position absolutely below */}
        </View>
      </View>

      {/* exact-positioned terms text as requested */}
      <View style={styles.termsWrapper} pointerEvents="none">
        <Text style={styles.termsText}>By joining you agree to our Terms of Service and Privacy Policy</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1, width: '100%', height: '100%' },
  // center content vertically and horizontally
  content: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24, backgroundColor: 'rgba(0,0,0,0.25)' },
  title: { color: '#fff', fontSize: 28, fontWeight: '700', marginBottom: 8, textAlign: 'center' },
  subtitle: { color: '#fff', fontSize: 15, marginBottom: 20, textAlign: 'center' },
  // center block (title/subtitle)
  centerBlock: { alignItems: 'center', paddingHorizontal: 16 },

  // container that pins content near the bottom
  buttonsContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
  // slightly lower than before (closer to bottom) — tuned for a small downward shift
  bottom: 80,
    alignItems: 'center',
    paddingHorizontal: 24,
  },

  // move buttons further down from the title/subtitle — layout inside bottom container
  buttonsRow: { flexDirection: 'row', marginTop: 8, marginBottom: 8, justifyContent: 'center' },
  signUp: { backgroundColor: '#E53935', paddingVertical: 12, paddingHorizontal: 24, borderRadius: 6, marginRight: 12 },
  signUpText: { color: '#fff', fontWeight: '700' },
  signIn: { borderWidth: 1, borderColor: '#fff', paddingVertical: 12, paddingHorizontal: 24, borderRadius: 6 },
  signInText: { color: '#fff', fontWeight: '700' },
  terms: { color: '#fff', fontSize: 12, textAlign: 'center', marginTop: 8 },
  // dots (pagination) styles
  // moved further up from the buttons and made smaller
  dotsContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 40 },
  dot: { width: 6, height: 6, borderRadius: 3, backgroundColor: 'rgba(255,255,255,0.4)', marginHorizontal: 5 },
  activeDot: { backgroundColor: '#fff', width: 8, height: 8, borderRadius: 4 },
  // exact layout requested for the terms text
  termsWrapper: {
    position: 'absolute',
    top: 702,
    left: 32,
    width: 311,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1,
  },
  termsText: {
    color: '#fff',
    fontFamily: 'SF Pro Text',
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: 'center',
  },
});

export default OnboardingScreen;
