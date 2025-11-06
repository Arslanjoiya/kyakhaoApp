import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FoodItem from '../../components/FoodItem/FoodItem';
import CommonButton from '../../components/CommonButton/CommonButton';

// Items and images from assets/images (names must not change)
const FOOD_ITEMS = [
  { label: 'baryani', src: require('../../assets/images/baryani.png.png') },
  { label: 'piza', src: require('../../assets/images/piza.png.png') },
  { label: 'pasta', src: require('../../assets/images/pasta.png') },
  { label: 'BBQ', src: require('../../assets/images/BBQ.png') },
  { label: 'Tacos', src: require('../../assets/images/Tacos.png') },
  { label: 'Karahi', src: require('../../assets/images/Karahi.png') },
  { label: 'Shawarma', src: require('../../assets/images/Shawarma.png') },
  { label: 'Potato', src: require('../../assets/images/Potato.png') },
  { label: 'Noodles', src: require('../../assets/images/Noodles.png') },
  { label: 'Momos', src: require('../../assets/images/Momos.png') },
  { label: 'Sushi', src: require('../../assets/images/Sushi.png') },
  { label: 'paratha', src: require('../../assets/images/paratha.png') },
];

const ChoicesFoodScreen = ({ navigation }) => {
  const [selected, setSelected] = useState(new Set());

  const toggle = (label) => {
    const next = new Set(selected);
    if (next.has(label)) next.delete(label); else next.add(label);
    setSelected(next);
  };

  const handleNext = () => {
    navigation?.navigate('Home', { chosenFoods: Array.from(selected) });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.topBar}>
          <TouchableOpacity
            onPress={() => navigation?.goBack()}
            style={styles.backBtn}
            hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}
          >
            <Text style={styles.backIcon}>‹</Text>
          </TouchableOpacity>
          <View style={styles.skipTextContainer}>
            <TouchableOpacity onPress={() => navigation?.navigate('Home')}>
              <Text style={styles.skipText}>Do it Later</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.headerBlock}>
          <Text style={styles.title}>Choose yours</Text>
          <Text style={styles.subtitle}>
            Choose at least 7 foods or flavors to refine your tastes and dish picks.
          </Text>
        </View>

        <View style={styles.grid}>
          {FOOD_ITEMS.map((item) => (
            <FoodItem
              key={item.label}
              label={item.label}
              source={item.src}
              selected={selected.has(item.label)}
              onPress={() => toggle(item.label)}
            />
          ))}
        </View>

        <CommonButton title="Done" onPress={handleNext} style={styles.button} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  container: { flexGrow: 1, paddingHorizontal: 24, paddingBottom: 24 },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 4,
    marginBottom: 8,
    width: '100%',
  },
  backBtn: { paddingVertical: 8, paddingHorizontal: 8, marginLeft: -12 },
  backIcon: { fontSize: 28, color: '#111', lineHeight: 28 },
  skipTextContainer: {
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  skipText: { color: '#111', fontSize: 14, fontWeight: '400' },
  headerBlock: { marginTop: 4, marginBottom: 8 },
  title: { fontSize: 32, fontWeight: '700', color: '#000', marginBottom: 8 },
  subtitle: { fontSize: 14, color: '#4b5563', lineHeight: 20, marginBottom: 8 },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#E53935',
    width: 311,
    height: 50,
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 16,
  },
});

export default ChoicesFoodScreen;


