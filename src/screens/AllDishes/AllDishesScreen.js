import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import BottomTabBar from '../../components/Home/BottomTabBar';

const AllDishesScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Home');

  const dishes = [
    { id: '1', name: 'Signature Chicken Biryani', ingredients: 17 },
    { id: '2', name: 'Falooda Royal Dessert Bowl', ingredients: 29 },
    { id: '3', name: 'Smoky Tikka Wrap', ingredients: 12 },
    { id: '4', name: 'Korean BBQ Crunch Bites', ingredients: 7 },
    { id: '5', name: 'Avocado Veggie Rainbow Rolls', ingredients: 11 },
    { id: '6', name: 'Blueberry and Mint Ice Cream', ingredients: 9 },
    { id: '7', name: 'Sweet and Sour Pork', ingredients: 12 },
  ];

  const handlePressTab = (key) => {
    setActiveTab(key);
    if (key === 'Home') navigation.navigate('Home');
    if (key === 'Reservation') navigation.navigate('Reservation');
    if (key === 'Notifications') navigation.navigate('Notifications');
    if (key === 'Account') navigation.navigate('Account');
  };

  return (
    <View style={styles.screen}>
      <ScrollView style={styles.container} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View style={styles.headerTop}>
          <Text style={styles.headerLabel}>All ingredients</Text>
          <TouchableOpacity hitSlop={{ top: 8, left: 8, right: 8, bottom: 8 }}>
            <Text style={styles.searchIcon}>🔍</Text>
          </TouchableOpacity>
        </View>

        {/* Title */}
        <Text style={styles.title}>All dishes</Text>

        {/* Dishes List */}
        <View style={styles.dishesList}>
          {dishes.map((dish, index) => (
            <View key={dish.id}>
              <TouchableOpacity style={styles.dishItem} activeOpacity={0.7}>
                <View style={styles.imagePlaceholder}>
                  {/* Placeholder for dish image */}
                </View>
                <View style={styles.dishInfo}>
                  <Text style={styles.dishName}>{dish.name}</Text>
                  <Text style={styles.ingredientCount}>{dish.ingredients} ingredients</Text>
                </View>
              </TouchableOpacity>
              {index < dishes.length - 1 && <View style={styles.separator} />}
            </View>
          ))}
        </View>

        <View style={styles.bottomSpacer} />
      </ScrollView>

      <View style={styles.tabBarContainer}>
        <BottomTabBar activeKey={activeTab} onPressTab={handlePressTab} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    paddingBottom: 24,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 8,
  },
  headerLabel: {
    fontSize: 14,
    color: '#888',
    fontWeight: '400',
  },
  searchIcon: {
    fontSize: 20,
    color: '#000',
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#000',
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 16,
  },
  dishesList: {
    paddingHorizontal: 16,
  },
  dishItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },
  imagePlaceholder: {
    width: 80,
    height: 80,
    backgroundColor: '#E5E5E5',
    borderRadius: 8,
    marginRight: 16,
  },
  dishInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  dishName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  ingredientCount: {
    fontSize: 14,
    color: '#888',
    fontWeight: '400',
  },
  separator: {
    height: 1,
    backgroundColor: '#E5E5E5',
    marginLeft: 96,
  },
  bottomSpacer: {
    height: 88,
  },
  tabBarContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default AllDishesScreen;

