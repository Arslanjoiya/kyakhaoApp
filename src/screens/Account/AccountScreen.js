import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, StatusBar } from 'react-native';

const AccountScreen = ({ navigation }) => {
  const [activeContentTab, setActiveContentTab] = useState('Collections');

  const collections = [
    { id: '1', title: 'For My Lovely', recipeCount: 172 },
    { id: '2', title: 'Cook Fast', recipeCount: 241 },
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
                <View style={styles.statItem}>
                  <Text style={styles.statNumber}>258</Text>
                  <Text style={styles.statLabel}>Followers</Text>
                </View>
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
                <View style={styles.statItem}>
                  <Text style={styles.statNumber}>79</Text>
                  <Text style={styles.statLabel}>Favorites</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Content Area */}
        <View style={styles.contentArea}>
          {/* Tab Bar */}
          <View style={styles.tabBar}>
            <TouchableOpacity
              style={[styles.tab, activeContentTab === 'Recipes' && styles.tabActive]}
              onPress={() => setActiveContentTab('Recipes')}
              activeOpacity={0.8}
            >
              <Text style={[styles.tabText, activeContentTab === 'Recipes' && styles.tabTextActive]}>Recipes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, activeContentTab === 'Photos' && styles.tabActive]}
              onPress={() => setActiveContentTab('Photos')}
              activeOpacity={0.8}
            >
              <Text style={[styles.tabText, activeContentTab === 'Photos' && styles.tabTextActive]}>Photos</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, activeContentTab === 'Collections' && styles.tabActive, styles.tabLast]}
              onPress={() => setActiveContentTab('Collections')}
              activeOpacity={0.8}
            >
              <Text style={[styles.tabText, activeContentTab === 'Collections' && styles.tabTextActive]}>Collections</Text>
            </TouchableOpacity>
          </View>

          {/* Collections Content */}
          {activeContentTab === 'Collections' && (
            <View style={styles.collectionsContainer}>
              <Text style={styles.collectionsCount}>{collections.length} collections</Text>
              <View style={styles.collectionsGrid}>
                {collections.map((collection) => (
                  <View key={collection.id} style={styles.collectionCard}>
                    <View style={styles.collectionImageContainer}>
                      <View style={styles.collectionImageLeft} />
                      <View style={styles.collectionImageRight}>
                        <View style={styles.collectionImageRightTop} />
                        <View style={styles.collectionImageRightBottom} />
                      </View>
                    </View>
                    <Text style={styles.collectionTitle}>{collection.title}</Text>
                    <Text style={styles.collectionRecipeCount}>{collection.recipeCount} recipes</Text>
                  </View>
                ))}
                <TouchableOpacity style={styles.createCollectionCard} activeOpacity={0.8}>
                  <View style={styles.createIconContainer}>
                    <Text style={styles.createIcon}>+</Text>
                  </View>
                  <Text style={styles.createText}>Create New{'\n'}Collection</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}

          {/* Recipes Content Placeholder */}
          {activeContentTab === 'Recipes' && (
            <View style={styles.emptyContent}>
              <Text style={styles.emptyText}>Recipes content coming soon</Text>
            </View>
          )}

          {/* Photos Content Placeholder */}
          {activeContentTab === 'Photos' && (
            <View style={styles.emptyContent}>
              <Text style={styles.emptyText}>Photos content coming soon</Text>
            </View>
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
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingLeft: 16,
    paddingRight: 0,
  },
  tab: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginRight: 8,
  },
  tabActive: {
    backgroundColor: '#E53935',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  tabLast: {
    flex: 1,
    marginRight: 0,
    marginLeft: 0,
    paddingRight: 16,
  },
  tabText: {
    fontSize: 14,
    color: '#000',
    fontWeight: '600',
  },
  tabTextActive: {
    color: '#fff',
  },
  collectionsContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  collectionsCount: {
    fontSize: 14,
    color: '#000',
    marginBottom: 16,
  },
  collectionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  collectionCard: {
    width: '48%',
    marginBottom: 16,
  },
  collectionImageContainer: {
    flexDirection: 'row',
    height: 140,
    marginBottom: 12,
    borderRadius: 8,
    overflow: 'hidden',
  },
  collectionImageLeft: {
    flex: 2,
    backgroundColor: '#E0E0E0',
  },
  collectionImageRight: {
    flex: 1,
    marginLeft: 2,
  },
  collectionImageRightTop: {
    flex: 1,
    backgroundColor: '#D0D0D0',
    marginBottom: 2,
  },
  collectionImageRightBottom: {
    flex: 1,
    backgroundColor: '#D0D0D0',
  },
  collectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  collectionRecipeCount: {
    fontSize: 12,
    color: '#888',
  },
  createCollectionCard: {
    width: '48%',
    height: 140,
    borderWidth: 1,
    borderColor: '#E53935',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginBottom: 16,
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
  emptyContent: {
    padding: 32,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 200,
  },
  emptyText: {
    fontSize: 14,
    color: '#888',
  },
  bottomSpacer: {
    height: 88,
  },
});

export default AccountScreen;

