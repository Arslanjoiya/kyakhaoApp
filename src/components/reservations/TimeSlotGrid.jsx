import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const TimeSlotGrid = ({ slots = [], value, onChange }) => {
  const data = slots.length ? slots : ['6:00 PM','6:30 PM','7:00 PM','7:30 PM','8:00 PM','8:30 PM','9:00 PM','9:30 PM','10:00 PM'];
  return (
    <View style={styles.grid}>
      {data.map((label) => {
        const selected = value === label;
        return (
          <TouchableOpacity key={label} style={[styles.slot, selected && styles.slotSelected]} onPress={() => onChange(label)} activeOpacity={0.85}>
            <Text style={[styles.slotText, selected && styles.slotTextSelected]}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  slot: {
    width: '31%',
    height: 40,
    borderRadius: 8,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  slotSelected: { backgroundColor: '#D42814' },
  slotText: { color: '#111', fontWeight: '600' },
  slotTextSelected: { color: '#fff' },
});

export default TimeSlotGrid;


