import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const OccasionPicker = ({ value, onChange, options = ['Birthday','Anniversary','Business','Casual'] }) => {
  const current = value || 'Select occasion';
  return (
    <TouchableOpacity style={styles.field} activeOpacity={0.8} onPress={() => onChange(options[0])}>
      <Text style={styles.value}>{current}</Text>
      <Text style={styles.caret}>▾</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  field: { height: 44, borderWidth: 1, borderColor: '#E5E7EB', borderRadius: 8, paddingHorizontal: 12, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fff' },
  value: { fontSize: 14, color: '#111' },
  caret: { fontSize: 18, color: '#9CA3AF' },
});

export default OccasionPicker;


