import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, FlatList, Pressable } from 'react-native';

const RestaurantPicker = ({ value, options = [], onChange }) => {
  const [visible, setVisible] = useState(false);
  const selected = useMemo(() => options.find(r => r.id === value) || null, [options, value]);

  const handleSelect = (id) => {
    onChange && onChange(id);
    setVisible(false);
  };

  return (
    <>
      <TouchableOpacity activeOpacity={0.8} style={styles.field} onPress={() => setVisible(true)}>
        <Text style={styles.value}>{selected ? selected.name : 'Select restaurant'}</Text>
        <Text style={styles.caret}>▾</Text>
      </TouchableOpacity>

      <Modal visible={visible} animationType="fade" transparent onRequestClose={() => setVisible(false)}>
        <Pressable style={styles.backdrop} onPress={() => setVisible(false)} />
        <View style={styles.popup}>
          <Text style={styles.popupTitle}>Choose Restaurant</Text>
          <FlatList
            data={options}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.row}
                onPress={() => handleSelect(item.id)}
                activeOpacity={0.85}
              >
                <Text style={styles.rowText}>{item.name}</Text>
                {value === item.id && <Text style={styles.check}>✓</Text>}
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity style={styles.closeBtn} onPress={() => setVisible(false)}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
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
  caret: { fontSize: 18, color: '#9CA3AF' },
  backdrop: { flex: 1, backgroundColor: 'rgba(0,0,0,0.35)', justifyContent: 'center', alignItems: 'center' },
  popup: {
    width: '88%',
    maxHeight: '70%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    position: 'absolute',
    alignSelf: 'center',
    top: '15%',
  },
  popupTitle: { fontSize: 16, fontWeight: '700', marginBottom: 10, color: '#111' },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 12 },
  rowText: { fontSize: 14, color: '#111' },
  check: { fontSize: 16, color: '#10B981', fontWeight: '700' },
  separator: { height: 1, backgroundColor: '#F3F4F6' },
  closeBtn: { marginTop: 10, height: 44, borderRadius: 8, backgroundColor: '#F3F4F6', alignItems: 'center', justifyContent: 'center' },
  closeText: { color: '#111', fontWeight: '700' },
});

export default RestaurantPicker;


