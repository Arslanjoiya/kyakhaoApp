import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CenteredTextBlock = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 311,
    height: 96,
    // background removed per request (transparent)
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1,
  },
  text: {
    // Requested typography (SF Pro Display may need bundling for Android)
    fontFamily: 'SF Pro Display',
    fontWeight: '700',
    fontSize: 40,
    lineHeight: 40, // 100% of 40
    letterSpacing: 0,
    textAlign: 'center',
    color: '#fff',
  },
});

export default CenteredTextBlock;
