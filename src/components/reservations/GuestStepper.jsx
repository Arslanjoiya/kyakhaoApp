import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const GuestStepper = ({ value = 2, onChange, min = 1, max = 12 }) => {
  const dec = () => onChange(Math.max(min, (value || 0) - 1));
  const inc = () => onChange(Math.min(max, (value || 0) + 1));
  return (
    <View style={styles.row}>
      <TouchableOpacity style={styles.btn} onPress={dec}><Text style={styles.btnText}>−</Text></TouchableOpacity>
      <View style={styles.valueBox}><Text style={styles.valueText}>{value}</Text></View>
      <TouchableOpacity style={styles.btn} onPress={inc}><Text style={styles.btnText}>+</Text></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center' },
  btn: { width: 44, height: 44, borderRadius: 8, borderWidth: 1, borderColor: '#E5E7EB', alignItems: 'center', justifyContent: 'center' },
  btnText: { fontSize: 22, color: '#111' },
  valueBox: { width: 64, height: 44, borderRadius: 8, borderWidth: 1, borderColor: '#E5E7EB', alignItems: 'center', justifyContent: 'center', marginHorizontal: 12 },
  valueText: { fontSize: 16, fontWeight: '700', color: '#111' },
});

export default GuestStepper;


