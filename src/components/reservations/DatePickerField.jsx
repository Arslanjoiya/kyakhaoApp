import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const DatePickerField = ({ value, onChange }) => {
  return (
    <TouchableOpacity style={styles.field} activeOpacity={0.8} onPress={() => onChange(new Date().toISOString().slice(0,10))}>
      <Text style={styles.value}>{value || 'Select date'}</Text>
      <Text style={styles.caret}>📅</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  field: {
    height: 44,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    paddingHorizontal: 12,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  value: { fontSize: 14, color: '#111' },
  caret: { fontSize: 16 },
});

export default DatePickerField;


