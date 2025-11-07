import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';

const PrimaryButton = ({ title, onPress, loading, style }) => {
  return (
    <TouchableOpacity style={[styles.btn, style]} activeOpacity={0.85} onPress={onPress} disabled={loading}>
      {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.text}>{title}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: { height: 48, borderRadius: 24, backgroundColor: '#D42814', alignItems: 'center', justifyContent: 'center' },
  text: { color: '#fff', fontWeight: '700', fontSize: 16 },
});

export default PrimaryButton;


