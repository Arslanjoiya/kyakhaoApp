import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const SecondaryButton = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.btn, style]} activeOpacity={0.85} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: { height: 48, borderRadius: 24, borderWidth: 1, borderColor: '#E5E7EB', alignItems: 'center', justifyContent: 'center' },
  text: { color: '#111', fontWeight: '700', fontSize: 16 },
});

export default SecondaryButton;


