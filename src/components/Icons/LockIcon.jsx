import React from 'react';
import { View, StyleSheet } from 'react-native';

const LockIcon = ({ width = 20, height = 20, fill = '#999' }) => (
  <View style={[styles.container, { width, height }]}>
    {/* Lock shackle - curved U shape on top */}
    <View style={[styles.shackleTop, { 
      width: width * 0.55, 
      height: height * 0.25, 
      borderWidth: 2, 
      borderColor: fill, 
      borderTopLeftRadius: width * 0.275,
      borderTopRightRadius: width * 0.275,
      borderBottomWidth: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      top: 2,
      left: width * 0.225,
    }]} />
    {/* Lock shackle - left vertical line */}
    <View style={[styles.shackleLeft, { 
      width: 2, 
      height: height * 0.3, 
      backgroundColor: fill,
      top: height * 0.25,
      left: width * 0.225,
    }]} />
    {/* Lock shackle - right vertical line */}
    <View style={[styles.shackleRight, { 
      width: 2, 
      height: height * 0.3, 
      backgroundColor: fill,
      top: height * 0.25,
      right: width * 0.225,
    }]} />
    {/* Lock body - main rectangular box */}
    <View style={[styles.lockBody, { 
      backgroundColor: fill, 
      width: width * 0.65, 
      height: height * 0.55, 
      borderRadius: 3,
      bottom: 0,
      left: width * 0.175,
    }]} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  lockBody: {
    position: 'absolute',
  },
  shackleTop: {
    position: 'absolute',
  },
  shackleLeft: {
    position: 'absolute',
  },
  shackleRight: {
    position: 'absolute',
  },
});

export default LockIcon;

