import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar, ScrollView, FlatList } from 'react-native';
import DishCard from '../../components/DishCard/DishCard';
import CollectionCard from '../../components/CollectionCard/CollectionCard';
import PhotoCard from '../../components/PhotoCard/PhotoCard';

const FollowingScreen = ({ navigation, route }) => {
  const defaultProfile = {
    name: 'Spice Route Kitchen',
    location: 'Lahore, Pakistan',
    followers: 837,
    following: 92,
    avatar: require('../../assets/images/UserPic2.png'),
  };
  const profile = { ...defaultProfile, ...(route?.params?.profile || {}) };

  const [activeTab, setActiveTab] = useState('Dishes');
  
  // Like state management for all tabs
  const [likedDishes, setLikedDishes] = useState({});
  const [likedPhotos, setLikedPhotos] = useState({});
  const [likedCollections, setLikedCollections] = useState({});

  const handleToggleLike = (tabType, itemId) => {
    switch (tabType) {
      case 'Dishes':
        setLikedDishes((prev) => ({
          ...prev,
          [itemId]: !prev[itemId],
        }));
        break;
      case 'Photos':
        setLikedPhotos((prev) => ({
          ...prev,
          [itemId]: !prev[itemId],
        }));
        break;
      case 'Collections':
        setLikedCollections((prev) => ({
          ...prev,
          [itemId]: !prev[itemId],
        }));
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.screen}>
      <StatusBar barStyle="light-content" />
      {/* Header only for this step */}
      <View style={styles.header}>
        <View style={styles.statsRowTop}>
          <View style={[styles.statBox, styles.statFollowersBox]}>
            <Text style={styles.statNumber}>{profile.followers}</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={[styles.statBox, styles.statFollowingBox]}>
            <Text style={styles.statNumber}>{profile.following}</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>
        <View style={styles.topRow}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton} hitSlop={{ top: 12, left: 12, right: 18, bottom: 12 }}>
            <Text style={styles.backIcon}>‹</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} hitSlop={{ top: 12, left: 12, right: 12, bottom: 12 }}>
            <Text style={styles.moreIcon}>⋯</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.centerBlock}>
          <View style={styles.avatarWrap}>
            <Image source={profile.avatar} style={styles.avatar} resizeMode="cover" />
          </View>
          <Text style={styles.title}>{profile.name}</Text>
          <View style={styles.locationRow}>
            <Text style={styles.locationDot}>📌</Text>
            <Text style={styles.locationText}>{profile.location}</Text>
          </View>
          <TouchableOpacity activeOpacity={0.8} style={styles.followingBtn}>
            <Text style={styles.followingBtnText}>Following</Text>
          </TouchableOpacity>
        </View>

      </View>

      {/* Segmented Tabs */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tabItem, styles.tabItemLeft, activeTab === 'Dishes' && styles.tabItemActive]}
          onPress={() => setActiveTab('Dishes')}
          activeOpacity={0.8}
        >
          <Text style={[styles.tabText, activeTab === 'Dishes' && styles.tabTextActive]}>Dishes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabItem, activeTab === 'Photos' && styles.tabItemActive]}
          onPress={() => setActiveTab('Photos')}
          activeOpacity={0.8}
        >
          <Text style={[styles.tabText, activeTab === 'Photos' && styles.tabTextActive]}>Photos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabItem, styles.tabItemRight, activeTab === 'Collections' && styles.tabItemActive]}
          onPress={() => setActiveTab('Collections')}
          activeOpacity={0.8}
        >
          <Text style={[styles.tabText, activeTab === 'Collections' && styles.tabTextActive]}>Collections</Text>
        </TouchableOpacity>
      </View>

      {/* Dishes count */}
      <View style={styles.dishesHeaderRow}>
        <Text style={[
          styles.dishesCount,
          activeTab === 'Photos' && styles.countWider,
          activeTab === 'Collections' && styles.countWidest,
        ]}>
          {activeTab === 'Dishes' ? '327 dishes' : activeTab === 'Photos' ? '238 photos' : '2 collections'}
        </Text>
      </View>

      {/* Body content for Dishes */}
      {activeTab === 'Dishes' && (
        <ScrollView contentContainerStyle={styles.dishesContainer} showsVerticalScrollIndicator={false}>
          <View style={styles.dishesGridRow}>
            <DishCard
              image={require('../../assets/images/Homeimage1.png')}
              title="Classic Spaghetti Carbonara"
              category="Breakfast"
              time="26 minutes"
              rating={4.5}
              liked={likedDishes['d1'] || false}
              onToggleLike={() => handleToggleLike('Dishes', 'd1')}
            />
            <View style={{ width: 17 }} />
            <DishCard
              image={require('../../assets/images/Homeimage2.png')}
              title="Berry Fruity Angel Cake Parfait"
              category="Snacks"
              time="50 minutes"
              rating={4.5}
              liked={likedDishes['d2'] || false}
              onToggleLike={() => handleToggleLike('Dishes', 'd2')}
            />
          </View>
          <View style={{ height: 16 }} />
          <View style={styles.dishesGridRow}>
            <DishCard
              image={require('../../assets/images/Homeimage3.png')}
              title="Classic Spaghetti Carbonara"
              category="Breakfast"
              time="26 minutes"
              rating={4.5}
              liked={likedDishes['d3'] || false}
              onToggleLike={() => handleToggleLike('Dishes', 'd3')}
            />
            <View style={{ width: 17 }} />
            <DishCard
              image={require('../../assets/images/Homeimage4.png')}
              title="Berry Fruity Angel Cake Parfait"
              category="Snacks"
              time="50 minutes"
              rating={4.5}
              liked={likedDishes['d4'] || false}
              onToggleLike={() => handleToggleLike('Dishes', 'd4')}
            />
          </View>
          <View style={{ height: 24 }} />
        </ScrollView>
      )}

      {/* Body content for Collections */}
      {activeTab === 'Collections' && (
        <ScrollView contentContainerStyle={styles.collectionsContainer} showsVerticalScrollIndicator={false}>
          <View style={styles.collectionsRow}>
            <CollectionCard
              images={[
                require('../../assets/images/Homeimage1.png'),
                require('../../assets/images/Homeimage2.png'),
                require('../../assets/images/Homeimage3.png'),
                require('../../assets/images/Homeimage4.png'),
              ]}
              title="For My Lovely"
              recipesCount={172}
              liked={likedCollections['c1'] || false}
              onToggleLike={() => handleToggleLike('Collections', 'c1')}
            />
            <View style={{ width: 17 }} />
            <CollectionCard
              images={[
                require('../../assets/images/Homeimage4.png'),
                require('../../assets/images/Homeimage3.png'),
                require('../../assets/images/Homeimage2.png'),
                require('../../assets/images/Homeimage1.png'),
              ]}
              title="Cook Fast"
              recipesCount={241}
              liked={likedCollections['c2'] || false}
              onToggleLike={() => handleToggleLike('Collections', 'c2')}
            />
          </View>
          <View style={{ height: 16 }} />
        </ScrollView>
      )}

      {/* Body content for Photos (virtualized) */}
      {activeTab === 'Photos' && (
        <FlatList
          data={[
            { id: 'p1', img: require('../../assets/images/Homeimage4.png'), caption: '2 days ago' },
            { id: 'p2', img: require('../../assets/images/Homeimage2.png'), caption: '5 days ago' },
            { id: 'p3', img: require('../../assets/images/Homeimage1.png'), caption: '3 months ago' },
            { id: 'p4', img: require('../../assets/images/Homeimage3.png'), caption: '4 months ago' },
            { id: 'p5', img: require('../../assets/images/Homeimage2.png'), caption: '6 months ago' },
            { id: 'p6', img: require('../../assets/images/Homeimage4.png'), caption: '8 months ago' },
          ]}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.photosRow}
          contentContainerStyle={styles.photosContainer}
          showsVerticalScrollIndicator={false}
          initialNumToRender={6}
          removeClippedSubviews
          renderItem={({ item }) => (
            <PhotoCard
              image={item.img}
              caption={item.caption}
              liked={likedPhotos[item.id] || false}
              onToggleLike={() => handleToggleLike('Photos', item.id)}
            />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#D42814',
    width: 375,
    height: 300,
    paddingTop: 14,
    paddingBottom: 16,
    paddingHorizontal: 16,
  },
  statsRowTop: {
    position: 'absolute',
    top: 64,
    left: 60,
    right: 0,
  },
  statBox: {
    position: 'absolute',
    width: 58,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
    top: 24,
  },
  statFollowersBox: {
    left: 16,
  },
  statFollowingBox: {
    right: 78,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconButton: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 20,
  },
  backIcon: {
    fontSize: 30,
    color: '#fff',
    fontWeight: '600',
  },
  moreIcon: {
    fontSize: 26,
    color: '#fff',
    fontWeight: '800',
  },
  centerBlock: {
    alignItems: 'center',
    marginTop: 10,
  },
  avatarWrap: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: '#fff',
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#fff',
    marginBottom: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: '#fff',
    marginTop: 4,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  locationDot: {
    fontSize: 12,
    marginRight: 4,
  },
  locationText: {
    fontSize: 13,
    color: '#fff',
    opacity: 0.95,
  },
  followingBtn: {
    marginTop: 6,
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 6,
    backgroundColor: '#D42814',
    borderWidth: 1,
    borderColor: '#fff',
  },
  followingBtnText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 12,
  },
  statItem: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  statNumber: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '800',
  },
  statLabel: {
    color: '#fff',
    fontSize: 12,
    opacity: 0.95,
  },
  tabsContainer: {
    marginTop: 6,
    alignSelf: 'center',
    width: 343,
    height: 29,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: '#fff',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  tabItem: {
    width: 113,
    height: 29,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  tabItemLeft: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  tabItemRight: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  tabItemActive: {
    backgroundColor: '#D42814',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#000',
  },
  tabTextActive: {
    color: '#fff',
  },
  tabDivider: {
    width: 1,
    backgroundColor: '#E0E0E0',
  },
  dishesContainer: {
    paddingTop: 12,
    paddingHorizontal: 16,
  },
  collectionsContainer: {
    paddingTop: 12,
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  collectionsRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
  },
  dishesHeaderRow: {
    paddingTop: 10,
    paddingHorizontal: 16,
  },
  dishesCount: {
    width: 90,
    height: 22,
    fontFamily: 'SF Pro Text',
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: 0,
    color: '#737373',
  },
  countWider: {
    width: 120,
  },
  countWidest: {
    width: 140,
  },
  dishesGridRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
  },
  photosContainer: {
    paddingTop: 12,
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  photosRow: {
    justifyContent: 'flex-start',
    marginBottom: 16,
    columnGap: 17,
  },
});

export default FollowingScreen;


