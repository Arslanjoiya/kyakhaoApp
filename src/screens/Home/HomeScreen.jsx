import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import HomeHeader from '../../components/Home/HomeHeader';
import HeroCard from '../../components/Home/HeroCard';
import SectionRow from '../../components/Home/SectionRow';
import SmallCard from '../../components/Home/SmallCard';
import RestaurantFeature from '../../components/Home/RestaurantFeature';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <HomeHeader onPressSearch={() => navigation.navigate('Search')} />

        <View style={styles.heroContainer}>
          <HeroCard source={require('../../assets/images/Homeimage.png.png')} />
        </View>

        <View style={styles.sectionBlock}>
          <SectionRow title="AI Picks For You" />
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalList}
        >
          <SmallCard
            image={require('../../assets/images/Homeimage1.png')}
            title="Spice Route Kitchen House"
            subtitle="by Annie Jordan"
          />
          <SmallCard
            image={require('../../assets/images/Homeimage2.png')}
            title="The Italian Table Eatery"
            subtitle="by Reika Fabio"
          />
          <SmallCard
            image={require('../../assets/images/Homeimage3.png')}
            title="Sushi Zen Art Dining Spot"
            subtitle="by Ella Carisma"
          />
        </ScrollView>

        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>Top Restaurant</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SeeAll')} activeOpacity={0.7}>
            <Text style={styles.seeAll}>See all ›</Text>
          </TouchableOpacity>
        </View>

        <RestaurantFeature
          image={require('../../assets/images/Homeimage4.png')}
          title="The All-American Breakfast Muffin"
          chef="by Amanda Lockwood"
        />

        <View style={styles.bottomSpacer} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#fff' },
  container: { flex: 1, backgroundColor: '#fff' },
  content: { paddingBottom: 24 },
  heroContainer: { paddingHorizontal: 16, marginTop: 16 },
  sectionBlock: { paddingHorizontal: 16, marginTop: 16 },
  horizontalList: { paddingHorizontal: 16, paddingVertical: 16 },
  sectionHeaderRow: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
    marginBottom: 8,
  },
  sectionTitle: { fontSize: 16, color: '#111', fontWeight: '700' },
  seeAll: { fontSize: 12, color: '#EF4444' },
  bottomSpacer: { height: 88 },
});

export default HomeScreen;
