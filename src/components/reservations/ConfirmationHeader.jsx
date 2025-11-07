import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ConfirmationHeader = ({ title, subtitle, onBack }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBack} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }} style={styles.backButton}>
        <Image source={require('../../assets/icons/Arrow.png')} style={styles.backIcon} resizeMode="contain" />
      </TouchableOpacity>
      <View style={styles.textBlock}>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 28,
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    left: 0,
    top: -4,
  },
  backIcon: { width: 24, height: 24, tintColor: '#111' },
  textBlock: { maxWidth: 409, alignItems: 'center', paddingTop: 12 },
  title: {
    fontSize: 32,
    lineHeight: 36,
    letterSpacing: -0.6,
    fontWeight: '800',
    color: '#111',
    textAlign: 'center',
    fontFamily: 'Archivo-ExtraBold',
  },
  subtitle: {
    marginTop: 10,
    color: '#6B7280',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default ConfirmationHeader;

