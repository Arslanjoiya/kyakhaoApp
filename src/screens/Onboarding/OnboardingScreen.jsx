import React, { useState, useRef } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const slides = [
  {
    image: require('../../assets/images/Mask.png'),
    title: 'Discover from the best',
    subtitle: 'Discover delicious recipes from around the world with inspiring chefs',
  },
  {
    image: require('../../assets/images/Mask (1).png'),
    title: 'Cook with confidence',
    subtitle: 'Step-by-step guides and expert tips to master any cuisine',
  },
  {
    image: require('../../assets/images/Mask (2).png'),
    title: 'Share your creations',
    subtitle: 'Join a community of food lovers and showcase your culinary skills',
  },
];

const OnboardingScreen = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef(null);

  const handleScroll = (event) => {
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / SCREEN_WIDTH);
    setCurrentIndex(slideIndex);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={styles.scrollView}
      >
        {slides.map((slide, index) => (
          <ImageBackground key={index} source={slide.image} style={styles.background} resizeMode="cover">
            <View style={styles.content}>
              <View style={styles.centerBlock}>
                <Text style={styles.title}>{slide.title}</Text>
                <Text style={styles.subtitle}>{slide.subtitle}</Text>
              </View>
            </View>
          </ImageBackground>
        ))}
      </ScrollView>

      {/* Fixed buttons and dots overlay */}
      <View style={styles.buttonsContainer} pointerEvents="box-none">
        {/* pagination dots above buttons */}
        <View style={styles.dotsContainer} pointerEvents="none">
          {slides.map((_, index) => (
            <View
              key={index}
              style={[styles.dot, currentIndex === index && styles.activeDot]}
            />
          ))}
        </View>

        <View style={styles.buttonsRow}>
          <TouchableOpacity style={styles.signUp} onPress={() => navigation?.navigate('SignUp')}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signIn} onPress={() => navigation?.navigate('SignIn')}>
            <Text style={styles.signInText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* exact-positioned terms text as requested */}
      <View style={styles.termsWrapper} pointerEvents="none">
        <Text style={styles.termsText}>By joining you agree to our Terms of Service and Privacy Policy</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollView: { flex: 1 },
  background: { flex: 1, width: SCREEN_WIDTH, height: '100%' },
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
