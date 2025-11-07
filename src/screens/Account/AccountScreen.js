import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, StatusBar, FlatList } from 'react-native';
import DishCard from '../../components/DishCard/DishCard';
import CollectionCard from '../../components/CollectionCard/CollectionCard';
import PhotoCard from '../../components/PhotoCard/PhotoCard';

const AccountScreen = ({ navigation }) => {
  const [activeContentTab, setActiveContentTab] = useState('Recipes');
  const [likedDishes, setLikedDishes] = useState({});
  const [likedPhotos, setLikedPhotos] = useState({});
  const [likedCollections, setLikedCollections] = useState({});

  const dishes = useMemo(
    () => [
      {
        id: 'd1',
        image: require('../../assets/images/Homeimage1.png'),
        title: 'Classic Spaghetti Carbonara',
        category: 'Breakfast',
        time: '26 minutes',
        rating: 4.5,
      },
      {
        id: 'd2',
        image: require('../../assets/images/Homeimage2.png'),
        title: 'Berry Fruity Angel Cake Parfait',
        category: 'Snacks',
        time: '50 minutes',
        rating: 4.5,
      },
      {
        id: 'd3',
        image: require('../../assets/images/Homeimage3.png'),
        title: 'Classic Spaghetti Carbonara',
        category: 'Breakfast',
        time: '26 minutes',
        rating: 4.5,
      },
      {
        id: 'd4',
        image: require('../../assets/images/Homeimage4.png'),
        title: 'Berry Fruity Angel Cake Parfait',
        category: 'Snacks',
        time: '50 minutes',
        rating: 4.5,
      },
    ],
    []
  );

  const photos = useMemo(
    () => [
      { id: 'p1', img: require('../../assets/images/Homeimage4.png'), caption: '2 days ago' },
      { id: 'p2', img: require('../../assets/images/Homeimage2.png'), caption: '5 days ago' },
      { id: 'p3', img: require('../../assets/images/Homeimage1.png'), caption: '3 months ago' },
      { id: 'p4', img: require('../../assets/images/Homeimage3.png'), caption: '4 months ago' },
      { id: 'p5', img: require('../../assets/images/Homeimage2.png'), caption: '6 months ago' },
      { id: 'p6', img: require('../../assets/images/Homeimage4.png'), caption: '8 months ago' },
    ],
    []
  );

  const handleToggleLike = (tab, id) => {
    if (tab === 'Recipes') {
      setLikedDishes((prev) => ({ ...prev, [id]: !prev[id] }));
    } else if (tab === 'Photos') {
      setLikedPhotos((prev) => ({ ...prev, [id]: !prev[id] }));
    } else if (tab === 'Collections') {
      setLikedCollections((prev) => ({ ...prev, [id]: !prev[id] }));
    }
  };

  const collections = [
    {
      id: '1',
      title: 'For My Lovely',
      recipeCount: 172,
      images: [
        require('../../assets/images/Homeimage1.png'),
        require('../../assets/images/Homeimage2.png'),
        require('../../assets/images/Homeimage3.png'),
        require('../../assets/images/Homeimage4.png'),
      ],
    },
    {
      id: '2',
      title: 'Cook Fast',
      recipeCount: 241,
      images: [
        require('../../assets/images/Homeimage4.png'),
        require('../../assets/images/Homeimage3.png'),
        require('../../assets/images/Homeimage2.png'),
        require('../../assets/images/Homeimage1.png'),
      ],
    },
  ];

  return (
    <View style={styles.screen}>
      <StatusBar barStyle="light-content" />
      <ScrollView style={styles.container} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {/* Red Header Section */}
        <View style={styles.header}>
          <View style={styles.headerTopRow}>
            <TouchableOpacity 
              hitSlop={{ top: 8, left: 8, right: 8, bottom: 8 }}
              onPress={() => navigation.navigate('Settings')}
            >
              <Text style={styles.settingsIcon}>⚙</Text>
            </TouchableOpacity>
            <TouchableOpacity hitSlop={{ top: 8, left: 8, right: 8, bottom: 8 }}>
              <Text style={styles.moreIcon}>⋯</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.profileSection}>
            <View style={styles.profileImageContainer}>
              <View style={styles.profileImage}>
                <Image
                  source={require('../../assets/icons/Userprofile.png')}
                  style={styles.profileImageInner}
                  resizeMode="contain"
                />
              </View>
            </View>

            <View style={styles.profileInfo}>
              <Text style={styles.name}>Sofia Belle</Text>
              <View style={styles.locationRow}>
                <Text style={styles.locationIcon}>📍</Text>
                <Text style={styles.location}>Sydney, Australia</Text>
              </View>
              <View style={styles.statsRow}>
                <TouchableOpacity
                  style={styles.statItem}
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate('Followers')}
                >
                  <Text style={styles.statNumber}>258</Text>
                  <Text style={styles.statLabel}>Followers</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.statItem}
                  activeOpacity={0.8}
                  onPress={() =>
                    navigation.navigate('Following', {
                      profile: {
                        name: 'Spice Route Kitchen',
                        location: 'Lahore, Pakistan',
                        followers: 837,
                        following: 92,
                      },
                    })
                  }
                >
                  <Text style={styles.statNumber}>83</Text>
                  <Text style={styles.statLabel}>Following</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.statItem}
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate('FavoritesDetails')}
                >
                  <Text style={styles.statNumber}>79</Text>
                  <Text style={styles.statLabel}>Favorites</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        {/* Content Area */}
        <View style={styles.contentArea}>
          {/* Tab Bar */}
          <View style={styles.tabsContainer}>
            <TouchableOpacity
              style={[styles.tabItem, styles.tabItemLeft, activeContentTab === 'Recipes' && styles.tabItemActive]}
              onPress={() => setActiveContentTab('Recipes')}
              activeOpacity={0.8}
            >
              <Text style={[styles.tabText, activeContentTab === 'Recipes' && styles.tabTextActive]}>Recipes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tabItem, activeContentTab === 'Photos' && styles.tabItemActive]}
              onPress={() => setActiveContentTab('Photos')}
              activeOpacity={0.8}
            >
              <Text style={[styles.tabText, activeContentTab === 'Photos' && styles.tabTextActive]}>Photos</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tabItem, styles.tabItemRight, activeContentTab === 'Collections' && styles.tabItemActive]}
              onPress={() => setActiveContentTab('Collections')}
              activeOpacity={0.8}
            >
              <Text style={[styles.tabText, activeContentTab === 'Collections' && styles.tabTextActive]}>Collections</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.dishesHeaderRow}>
            <Text
              style={[
                styles.dishesCount,
                activeContentTab === 'Photos' && styles.countWider,
                activeContentTab === 'Collections' && styles.countWidest,
              ]}
            >
              {activeContentTab === 'Recipes'
                ? `${dishes.length} recipes`
                : activeContentTab === 'Photos'
                ? `${photos.length} photos`
                : `${collections.length} collections`}
            </Text>
          </View>

          {activeContentTab === 'Recipes' && (
            <View style={styles.dishesContainer}>
              {dishes.reduce((rows, dish, index) => {
                if (index % 2 === 0) {
                  rows.push([dish]);
                } else {
                  rows[rows.length - 1].push(dish);
                }
                return rows;
              }, []).map((row, rowIndex) => (
                <View key={`row-${rowIndex}`} style={[styles.dishesGridRow, rowIndex > 0 && { marginTop: 16 }]}>
                  {row.map((dish) => (
                    <View key={dish.id} style={styles.dishCardWrapper}>
                      <DishCard
                        image={dish.image}
                        title={dish.title}
                        category={dish.category}
                        time={dish.time}
                        rating={dish.rating}
                        liked={likedDishes[dish.id] || false}
                        onToggleLike={() => handleToggleLike('Recipes', dish.id)}
                      />
                    </View>
                  ))}
                  {row.length === 1 && <View style={styles.dishCardWrapper} />}
                </View>
              ))}
            </View>
          )}

          {activeContentTab === 'Collections' && (
            <View style={styles.collectionsContent}>
              <View style={styles.collectionsRow}>
                {collections.map((collection) => (
                  <View key={collection.id} style={styles.collectionWrapper}>
                    <CollectionCard
                      images={collection.images}
                      title={collection.title}
                      recipesCount={collection.recipeCount}
                      liked={likedCollections[collection.id] || false}
                      onToggleLike={() => handleToggleLike('Collections', collection.id)}
                    />
                  </View>
                ))}
              </View>
              <TouchableOpacity style={styles.createCollectionCard} activeOpacity={0.8}>
                <View style={styles.createIconContainer}>
                  <Text style={styles.createIcon}>+</Text>
                </View>
                <Text style={styles.createText}>Create New{'\n'}Collection</Text>
              </TouchableOpacity>
            </View>
          )}

          {activeContentTab === 'Photos' && (
            <FlatList
              data={photos}
              keyExtractor={(item) => item.id}
              numColumns={2}
              columnWrapperStyle={styles.photosRow}
              contentContainerStyle={styles.photosContainer}
              showsVerticalScrollIndicator={false}
              scrollEnabled={false}
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

          <View style={styles.bottomSpacer} />
        </View>
      </ScrollView>
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
  },
  content: {
    paddingBottom: 24,
  },
  header: {
    backgroundColor: '#E53935',
    paddingTop: 32,
    paddingBottom: 24,
    paddingHorizontal: 16,
  },
  headerTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  settingsIcon: {
    fontSize: 22,
    color: '#fff',
  },
  moreIcon: {
    fontSize: 26,
    color: '#fff',
    fontWeight: '800',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  profileImageContainer: {
    position: 'relative',
    marginRight: 16,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#fff',
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#fff',
  },
  profileImageInner: {
    width: '100%',
    height: '100%',
  },
  profileInfo: {
    flex: 1,
    paddingTop: 8,
  },
  name: {
    fontSize: 24,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 6,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  locationIcon: {
    fontSize: 12,
    marginRight: 4,
  },
  location: {
    fontSize: 14,
    color: '#fff',
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  statItem: {
    marginRight: 20,
  },
  statNumber: {
    fontSize: 16,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 2,
  },
  statLabel: {
    fontSize: 12,
    color: '#fff',
    opacity: 0.9,
  },
  contentArea: {
    backgroundColor: '#fff',
    flex: 1,
  },
  tabText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#000',
  },
  tabTextActive: {
    color: '#fff',
  },
  tabsContainer: {
    marginTop: 16,
    alignSelf: 'center',
    width: 343,
    height: 36,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: '#fff',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabItemLeft: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  tabItemRight: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  tabItemActive: {
    backgroundColor: '#E53935',
  },
  dishesHeaderRow: {
    paddingTop: 18,
    paddingHorizontal: 16,
  },
  dishesCount: {
    fontSize: 16,
    fontWeight: '600',
    color: '#737373',
  },
  countWider: {
    width: 120,
  },
  countWidest: {
    width: 140,
  },
  dishesContainer: {
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  dishesGridRow: {
    flexDirection: 'row',
    columnGap: 17,
  },
  dishCardWrapper: {
    flex: 1,
  },
  collectionsContent: {
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  collectionsRow: {
    flexDirection: 'row',
    columnGap: 17,
    paddingBottom: 16,
  },
  collectionWrapper: {
    flex: 1,
  },
  createCollectionCard: {
    marginTop: 8,
    height: 140,
    borderWidth: 1,
    borderColor: '#E53935',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  createIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E53935',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  createIcon: {
    fontSize: 32,
    color: '#fff',
    fontWeight: '300',
  },
  createText: {
    fontSize: 12,
    color: '#E53935',
    textAlign: 'center',
    fontWeight: '600',
    lineHeight: 16,
  },
  photosContainer: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 16,
  },
  photosRow: {
    justifyContent: 'flex-start',
    columnGap: 17,
    marginBottom: 16,
  },
  bottomSpacer: {
    height: 88,
  },
});

export default AccountScreen;

