import React from 'react';
import { View, StyleSheet } from 'react-native';

const EmailIcon = ({ width = 20, height = 20, fill = '#999' }) => {
  const envelopeWidth = width * 0.85;
  const envelopeHeight = height * 0.7;
  const flapSize = width * 0.425;
  const flapHeight = height * 0.35;
  const leftOffset = width * 0.075;

  return (
    <View style={[styles.container, { width, height }]}>
      {/* Envelope shape */}
      <View style={[styles.envelope, { 
        width: envelopeWidth, 
        height: envelopeHeight, 
        borderWidth: 2, 
        borderColor: fill,
        borderRadius: 2,
        bottom: 0,
        left: leftOffset,
      }]} />
      {/* Triangle flap on top */}
      <View style={[styles.flap, {
        width: 0,
        height: 0,
        borderLeftWidth: flapSize,
        borderRightWidth: flapSize,
        borderBottomWidth: flapHeight,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: fill,
        top: 0,
        left: leftOffset,
      }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  envelope: {
    position: 'absolute',
  },
  flap: {
    position: 'absolute',
  },
});

export default EmailIcon;

