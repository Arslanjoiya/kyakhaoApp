import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const categories = ['Dishes', 'Restaurant', 'Deals', 'Kitchen', 'Reser'];

const HomeHeader = ({ onPressSearch, onSelectCategory }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Image source={require('../../assets/images/finalLogo.png')} style={styles.logo} />
        <TouchableOpacity onPress={onPressSearch} hitSlop={{ top: 8, left: 8, right: 8, bottom: 8 }}>
          <Image
            source={require('../../assets/icons/IconSearch.png')}
            style={styles.searchIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.tabsRow}>
        {categories.map((c, i) => (
          <TouchableOpacity
            key={c}
            onPress={() => {
              setActiveIndex(i);
              if (onSelectCategory) onSelectCategory(c);
            }}
            style={[styles.tab, i === activeIndex && styles.tabActive]}
            activeOpacity={0.8}
          >
            <Text style={[styles.tabText, i === activeIndex && styles.tabTextActive]}>{c}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { paddingHorizontal: 0, paddingTop: 4, paddingBottom: 8 },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    paddingHorizontal: 0,
  },
  logo: { width: 140, height: 40, resizeMode: 'contain', marginLeft: 0 },
  searchIcon: { width: 18, height: 18, marginRight: 16 },
  tabsRow: { paddingHorizontal: 8 },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    backgroundColor: '#fff',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#eee',
    marginRight: 10,
  },
  tabActive: { backgroundColor: '#E53935', borderColor: '#E53935' },
  tabText: { color: '#6B7280', fontSize: 13, fontWeight: '600' },
  tabTextActive: { color: '#fff' },
});

export default HomeHeader;


