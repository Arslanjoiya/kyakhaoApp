import React from 'react';
import { View, ImageBackground, StyleSheet, Text, TouchableOpacity } from 'react-native';
import CenteredTextBlock from '../../components/CenteredTextBlock/CenteredTextBlock';

const Mask2Screen = ({ navigation }) => {
  return (
    <ImageBackground source={require('../../assets/images/Mask (2).png')} style={styles.background} resizeMode="cover">
      {/* main title text block with exact position and typography */}
      <View style={styles.overlayWrapper}>
        <Text style={styles.overlayText}>Create yours and share it</Text>
      </View>

      {/* subtitle text with exact layout and typography */}
      <View style={styles.subtitleWrapper}>
        <Text style={styles.subtitleText}>
          Create and share recipes that you make for all food lovers in the world
        </Text>
      </View>

      {/* reused buttons from onboarding with pagination dots */}
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

      {/* terms text with exact position */}
      <View style={styles.termsWrapper} pointerEvents="none">
        <Text style={styles.termsText}>By joining you agree to our Terms of Service and Privacy Policy</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1, width: '100%', height: '100%' },
  // exact layout requested for the main text overlay
  overlayWrapper: {
    position: 'absolute',
    top: 240, // moved up from 305 to 240
    left: 32,
    width: 311,
    height: 96,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1,
  },
  overlayText: {
    color: '#FFFFFF',
    fontFamily: 'SF Pro Display',
    fontWeight: '700',
    fontSize: 40,
    lineHeight: 40, // 100% of fontSize for line-height: 100%
    letterSpacing: 0,
    textAlign: 'center',
  },
  // subtitle wrapper with exact layout
  subtitleWrapper: {
    position: 'absolute',
    top: 360, // moved up from 417 to 360
    left: 32,
    width: 311,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1,
  },
  // subtitle text with exact typography
  subtitleText: {
    color: '#FFFFFF',
    fontFamily: 'SF Pro Text',
    fontWeight: '400',
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: 'center',
  },
  // pagination dots styles (reused from Onboarding)
  dotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255,255,255,0.4)',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#fff',
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  // reused button styles from onboarding
  buttonsWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 120,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsRow: {
    flexDirection: 'row',
    marginTop: 8,
    marginBottom: 8,
    justifyContent: 'center',
  },
  signUp: {
    backgroundColor: '#E53935',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
    marginRight: 12,
  },
  signUpText: {
    color: '#fff',
    fontWeight: '700',
  },
  signIn: {
    borderWidth: 1,
    borderColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
  },
  signInText: {
    color: '#fff',
    fontWeight: '700',
  },
  // exact layout for terms text (reused)
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

export default Mask2Screen;