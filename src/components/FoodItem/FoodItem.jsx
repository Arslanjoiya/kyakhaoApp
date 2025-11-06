import React from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';

const FoodItem = ({ label, source, selected = false, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.container, selected && styles.containerSelected]}
    >
      <View style={styles.imageWrap}>
        <Image source={source} style={styles.image} resizeMode="cover" />
        {selected ? (
          <View style={styles.checkBadge}>
            <Text style={styles.checkText}>✓</Text>
          </View>
        ) : (
          <View style={styles.unselectedDot} />
        )}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '31%',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    backgroundColor: '#fff',
    marginBottom: 16,
    overflow: 'hidden',
  },
  containerSelected: {
    borderColor: '#E53935',
    shadowColor: '#E53935',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 2,
  },
  imageWrap: {
    width: '100%',
    height: 96,
    backgroundColor: '#fafafa',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  checkBadge: {
    position: 'absolute',
    top: 6,
    right: 6,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#22c55e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  unselectedDot: {
    position: 'absolute',
    top: 6,
    right: 6,
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#fff',
    backgroundColor: 'rgba(0,0,0,0.25)',
  },
  checkText: {
    color: '#fff',
    fontSize: 12,
    lineHeight: 12,
    fontWeight: '700',
  },
  label: {
    paddingVertical: 10,
    paddingHorizontal: 8,
    fontSize: 13,
    color: '#111',
  },
});

export default FoodItem;


