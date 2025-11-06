import React from 'react';
import { View, StyleSheet } from 'react-native';

const UserIcon = ({ width = 20, height = 20, fill = '#999' }) => (
  <View style={[styles.container, { width, height }]}>
    <View style={[styles.circle, { backgroundColor: fill, width: width * 0.6, height: width * 0.6, borderRadius: width * 0.3 }]} />
    <View style={[styles.body, { backgroundColor: fill, width: width * 0.8, height: height * 0.5, borderBottomLeftRadius: width * 0.4, borderBottomRightRadius: width * 0.4, marginTop: -width * 0.1 }]} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    position: 'absolute',
    top: 0,
  },
  body: {
    position: 'absolute',
    bottom: 0,
  },
});

export default UserIcon;

