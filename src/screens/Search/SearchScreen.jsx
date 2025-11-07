import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, TextInput, Image, ScrollView } from 'react-native';

const TABS = ['Kitchen', 'Reservation', 'Deals', 'Vlogs', 'Smoothies'];

const MOCK_RESULTS = [
  {
    id: '1',
    title: 'Spicy Paneer Tikka Bowl',
    by: 'Spice Route Kitchen',
    image: require('../../assets/images/Karahi.png'),
  },
  {
    id: '2',
    title: 'Creamy Falooda Sundae Delight',
    by: 'Sweet Indulgence',
    image: require('../../assets/images/image3.png'),
  },
  {
    id: '3',
    title: 'Classic Spaghetti Carbonara',
    by: 'Reika Fabio',
    image: require('../../assets/images/pasta.png'),
  },
  {
    id: '4',
    title: 'Hawaiian Aloha Chicken Burger',
    by: 'Ella Carisma',
    image: require('../../assets/images/piza.png.png'),
  },
];

const HISTORY = [
  'Matcha Pistachio Cloud Latte',
  'Nutella Brioche French Toast',
  'Butter Chicken Brioche Bun',
];

const SearchScreen = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState('Kitchen');

  return (
    <SafeAreaView style={styles.screen}>
      {/* Search Row */}
      <View style={styles.searchRow}>
        <View style={styles.searchInputContainer}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Search"
            placeholderTextColor="#9CA3AF"
            style={styles.searchInput}
          />
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.cancel}>Cancel</Text>
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabsContainer}
      >
        {TABS.map((t) => (
          <TouchableOpacity key={t} onPress={() => setActiveTab(t)} activeOpacity={0.8} style={styles.tabBtn}>
            <Text style={[styles.tabText, activeTab === t && styles.tabTextActive]}>{t}</Text>
            {activeTab === t && <View style={styles.tabUnderline} />}
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Results */}
      <ScrollView style={styles.results} showsVerticalScrollIndicator={false}>
        {MOCK_RESULTS.map((r) => (
          <View key={r.id} style={styles.resultRow}>
            <Image source={r.image} style={styles.resultImage} resizeMode="cover" />
            <View style={styles.resultMeta}>
              <Text style={styles.resultTitle}>{r.title}</Text>
              <Text style={styles.resultBy}>by {r.by}</Text>
            </View>
          </View>
        ))}

        {/* History */}
        <Text style={styles.historyHeader}>History</Text>
        {HISTORY.map((h, idx) => (
          <View key={`${idx}`} style={styles.historyRow}>
            <Text style={styles.historyText}>{h}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#fff' },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginTop: 6,
    marginBottom: 8,
  },
  searchInputContainer: {
    flex: 1,
    height: 36,
    borderRadius: 8,
    backgroundColor: '#F3F4F6',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginRight: 10,
  },
  searchIcon: { fontSize: 14, color: '#9CA3AF', marginRight: 6 },
  searchInput: { flex: 1, color: '#111', fontSize: 14 },
  cancel: { color: '#111', fontSize: 16 },

  tabsContainer: { paddingHorizontal: 12 },
  tabBtn: { alignItems: 'center', marginRight: 18 },
  tabText: { color: '#9CA3AF', fontSize: 14, paddingVertical: 8 },
  tabTextActive: { color: '#E53935', fontWeight: '700' },
  tabUnderline: { width: 34, height: 2, backgroundColor: '#E53935', borderRadius: 2, marginTop: -4 },

  results: { paddingHorizontal: 12, marginTop: 6 },
  resultRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E5E7EB',
  },
  resultImage: { width: 56, height: 56, borderRadius: 8, backgroundColor: '#eee' },
  resultMeta: { marginLeft: 12, flex: 1 },
  resultTitle: { color: '#111', fontSize: 15, fontWeight: '700' },
  resultBy: { color: '#9CA3AF', fontSize: 12, marginTop: 2 },

  historyHeader: { fontSize: 16, fontWeight: '700', color: '#111', marginTop: 18, marginBottom: 8 },
  historyRow: {
    paddingVertical: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E5E7EB',
  },
  historyText: { color: '#111', fontSize: 14 },
});

export default SearchScreen;



