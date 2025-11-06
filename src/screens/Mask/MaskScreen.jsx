import React from 'react';
import { View, ImageBackground, StyleSheet, Text, TouchableOpacity } from 'react-native';
import CenteredTextBlock from '../../components/CenteredTextBlock/CenteredTextBlock';

const MaskScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require('../../assets/images/Mask (1).png')} style={styles.background} resizeMode="cover">
      <View style={styles.overlayWrapper}>
        <CenteredTextBlock text="Organized grocery list" />
      </View>

      {/* subtitle text under the main block */}
      <View style={styles.subtitleWrapper}>
        <Text style={styles.subtitleText}>
          Add recipes to your shopping list and never forget a recipe item again
        </Text>
      </View>

      {/* reuse buttons from onboarding (Sign Up / Sign In) with pagination dots above buttons */}
      <View style={styles.buttonsWrapper} pointerEvents="box-none">
        {/* pagination dots above buttons */}
        <View style={styles.dotsContainer} pointerEvents="none">
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        <View style={styles.buttonsRow}>
          <TouchableOpacity style={styles.signUp} onPress={() => navigation?.navigate('Login')}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signIn} onPress={() => navigation?.navigate('Login')}>
            <Text style={styles.signInText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* terms text reused from onboarding screen */}
      <View style={styles.termsWrapper} pointerEvents="none">
        <Text style={styles.termsText}>By joining you agree to our Terms of Service and Privacy Policy</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1, width: '100%', height: '100%' },
  overlayWrapper: {
    position: 'absolute',
    // moved up to position the text higher on the image
    top: 240,
    left: 32,
  },
  subtitleWrapper: {
    position: 'absolute',
    // moved up so the subtitle appears closer to the main text block
    top: 340,
    left: 32,
    width: 311,
    height: 44,
    justifyContent: 'center',
  },
  subtitleText: {
    color: '#FFFFFF',
    // requested typography
    fontFamily: 'SF Pro Text',
    fontWeight: '400',
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: 'center',
  },
  buttonsWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    // move buttons higher by increasing bottom offset
    bottom: 120,
    // column layout so we can place dots above the buttons
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // buttons row (horizontal)
  buttonsRow: { flexDirection: 'row', marginTop: 8, marginBottom: 8, justifyContent: 'center' },
  signUp: { backgroundColor: '#E53935', paddingVertical: 12, paddingHorizontal: 24, borderRadius: 6, marginRight: 12 },
  signUpText: { color: '#fff', fontWeight: '700' },
  signIn: { borderWidth: 1, borderColor: '#fff', paddingVertical: 12, paddingHorizontal: 24, borderRadius: 6 },
  signInText: { color: '#fff', fontWeight: '700' },
  // dots (pagination) styles (reused from Onboarding)
  dotsContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 16 },
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

export default MaskScreen;
