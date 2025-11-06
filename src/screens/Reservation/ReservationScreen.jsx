import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import BottomTabBar from '../../components/Home/BottomTabBar';

const ReservationScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Reservation');

  const handlePressTab = (key) => {
    setActiveTab(key);
    if (key === 'Home') navigation.navigate('Home');
    if (key === 'Reservation') return;
    if (key === 'Notifications') navigation.navigate('Notifications');
    if (key === 'Account') navigation.navigate('Account');
  };

  return (
    <View style={styles.screen}>
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 8, left: 8, right: 8, bottom: 8 }}>
            <Image source={require('../../assets/icons/Arrow.png')} style={styles.headerBackIcon} resizeMode="contain" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Reserve a Table</Text>
          <TouchableOpacity hitSlop={{ top: 8, left: 8, right: 8, bottom: 8 }}>
            <Text style={styles.headerIcon}>⋯</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image source={require('../../assets/images/topimage.png')} style={styles.heroImage} resizeMode="cover" />
          <View style={styles.pill}><Text style={styles.pillText}>Premium Table Available</Text></View>
          <View style={styles.cardBody}>
            <Text style={styles.restaurantTitle}>Sakura Sushi Bar</Text>
            <Text style={styles.metaText}>Japanese • Clifton</Text>
            <View style={styles.ratingRow}>
              <Text style={styles.star}>⭐</Text>
              <Text style={styles.ratingText}>4.8</Text>
              <Text style={styles.reviews}>(317 reviews)</Text>
            </View>
            <View style={styles.timeRow}>
              <View style={styles.timeChip}><Text style={styles.timeText}>7:30 PM</Text></View>
              <View style={styles.timeChip}><Text style={styles.timeText}>8:30 PM</Text></View>
              <View style={styles.timeChip}><Text style={styles.timeText}>9:30 PM</Text></View>
            </View>
            <View style={styles.buttonsRow}>
              <TouchableOpacity
                style={styles.primaryBtn}
                activeOpacity={0.9}
                onPress={() => navigation.navigate('ReserveTable', { restaurantId: 'r1' })}
              >
                <Text style={styles.primaryBtnText}>Reserve Now</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.secondaryBtn}
                activeOpacity={0.9}
                onPress={() => {}}
              >
                <Text style={styles.secondaryBtnText}>View Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <Image source={require('../../assets/images/topimage1.png')} style={styles.imageLarge} resizeMode="cover" />
        <View style={styles.bottomSpacer} />
      </ScrollView>

      <View style={styles.tabBarContainer}>
        <BottomTabBar activeKey={activeTab} onPressTab={handlePressTab} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#fff' },
  container: { flex: 1, backgroundColor: '#fff' },
  content: { paddingBottom: 24 },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 12,
  },
  headerIcon: { fontSize: 26, color: '#111', fontWeight: '800' },
  headerBackIcon: { width: 20, height: 20 },
  headerTitle: { fontSize: 28, color: '#111', fontWeight: '800' },

  card: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    borderRadius: 16,
    overflow: 'hidden',
    borderColor: '#eee',
    borderWidth: 1,
  },
  heroImage: { width: '100%', height: 210 },
  pill: {
    position: 'absolute',
    left: 28,
    top: 14,
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  pillText: { fontSize: 12, color: '#111', fontWeight: '700' },
  cardBody: { padding: 16 },
  restaurantTitle: { fontSize: 18, fontWeight: '800', color: '#111', marginBottom: 6 },
  metaText: { fontSize: 12, color: '#6B7280', marginBottom: 10 },
  ratingRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  star: { fontSize: 14, color: '#F59E0B', marginRight: 6 },
  ratingText: { fontSize: 12, color: '#111', marginRight: 6 },
  reviews: { fontSize: 12, color: '#6B7280' },
  timeRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  timeChip: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 24,
    paddingVertical: 8,
    paddingHorizontal: 14,
    marginRight: 12,
    backgroundColor: '#fff',
  },
  timeText: { fontSize: 12, color: '#111' },
  buttonsRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  primaryBtn: {
    backgroundColor: '#EF4444',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
  },
  primaryBtnText: { color: '#fff', fontSize: 14, fontWeight: '700' },
  secondaryBtn: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
  },
  secondaryBtnText: { color: '#EF4444', fontSize: 14, fontWeight: '700' },

  imageLarge: { width: '92%', height: 220, borderRadius: 12, alignSelf: 'center', marginTop: 16 },
  bottomSpacer: { height: 88 },
  tabBarContainer: { position: 'absolute', left: 0, right: 0, bottom: 0 },
});

export default ReservationScreen;


