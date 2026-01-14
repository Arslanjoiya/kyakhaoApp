import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, StatusBar, Image, FlatList } from 'react-native';

const FAVORITES = [
  {
    id: 'fav-1',
    title: 'Classic Spaghetti Carbonara',
    category: 'Breakfast',
    time: '26 minutes',
    rating: 4.5,
  },
  {
    id: 'fav-2',
    title: 'Berry Fruity Angel Cake Parfait',
    category: 'Snacks',
    time: '50 minutes',
    rating: 4.5,
  },
  {
    id: 'fav-3',
    title: 'Classic Spaghetti Carbonara',
    category: 'Breakfast',
    time: '26 minutes',
    rating: 4.5,
  },
  {
    id: 'fav-4',
    title: 'Berry Fruity Angel Cake Parfait',
    category: 'Snacks',
    time: '50 minutes',
    rating: 4.5,
  },
];

const FavoritesDetailsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.headerRow}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.iconButton}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          activeOpacity={0.8}
        >
          <Text style={styles.iconText}>‹</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconButton}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          activeOpacity={0.8}
        >
          <Image source={require('../assets/icons/IconSearch.png')} style={styles.searchIcon} resizeMode="contain" />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Favorites</Text>

      <FlatList
        data={FAVORITES}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.listRow}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View style={styles.filtersRow}>
            <TouchableOpacity style={[styles.filterButton, styles.filterDivider]} activeOpacity={0.85}>
              <Text style={styles.filterText}>⇅ Sort</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterButton} activeOpacity={0.85}>
              <View style={styles.filterInnerRow}>
                <Image source={require('../assets/icons/IconFilter.png')} style={styles.filterIcon} resizeMode="contain" />
                <Text style={styles.filterText}>Filter</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
        ListHeaderComponentStyle={styles.listHeader}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardImagePlaceholder}>
              <Image
                source={require('../assets/icons/LoveIconfilled.png')}
                style={styles.cardHeart}
                resizeMode="contain"
              />
              <View style={styles.cardRatingBadge}>
                <Text style={styles.cardRatingText}>★ {item.rating}</Text>
              </View>
            </View>
            <View style={styles.cardMetaRow}>
              <Text style={styles.cardMetaText}>{item.category}</Text>
              <Text style={styles.cardMetaText}> · {item.time}</Text>
            </View>
            <Text style={styles.cardTitle} numberOfLines={2}>
              {item.title}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    fontSize: 30,
    color: '#111827',
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: '#111827',
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#111827',
    paddingHorizontal: 16,
    marginTop: 12,
  },
  listHeader: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  filtersRow: {
    flexDirection: 'row',
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 10,
    overflow: 'hidden',
  },
  filterButton: {
    flex: 1,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  filterDivider: {
    borderRightWidth: 1,
    borderRightColor: '#E5E7EB',
  },
  filterInnerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  filterText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4B5563',
  },
  filterIcon: {
    width: 16,
    height: 16,
    tintColor: '#4B5563',
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  listRow: {
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    width: '48%',
  },
  cardImagePlaceholder: {
    height: 190,
    borderRadius: 16,
    backgroundColor: '#E5E5EA',
    position: 'relative',
    overflow: 'hidden',
    justifyContent: 'flex-end',
    padding: 12,
  },
  cardHeart: {
    position: 'absolute',
    left: 12,
    bottom: 12,
    width: 24,
    height: 24,
  },
  cardRatingBadge: {
    position: 'absolute',
    right: 12,
    bottom: 12,
    backgroundColor: '#111827',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  cardRatingText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
  },
  cardMetaRow: {
    flexDirection: 'row',
    marginTop: 12,
  },
  cardMetaText: {
    fontSize: 12,
    color: '#6B7280',
  },
  cardTitle: {
    marginTop: 6,
    fontSize: 14,
    fontWeight: '700',
    color: '#111827',
  },
});

export default FavoritesDetailsScreen;


