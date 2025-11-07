import React, { useMemo, useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, FlatList, Image, StatusBar } from 'react-native';

const useFollowersData = () =>
  useMemo(
    () => (
      [
        { id: 'f1', name: 'Lahore Grill House', recipes: 203, isFollowing: false },
        { id: 'f2', name: 'Spice Route Kitchen', recipes: 746, isFollowing: true },
        { id: 'f3', name: 'Sweet Indulgence', recipes: 203, isFollowing: false },
        { id: 'f4', name: 'Seoul Corner BBQ', recipes: 109, isFollowing: false },
        { id: 'f5', name: 'Daniel Santio', recipes: 457, isFollowing: true },
        { id: 'f6', name: 'Satriani Moonwalk', recipes: 56, isFollowing: true },
        { id: 'f7', name: 'Emma Savanah', recipes: 462, isFollowing: false },
        { id: 'f8', name: 'Mark Rafael', recipes: 349, isFollowing: true },
        { id: 'f9', name: 'Angelina Lee', recipes: 671, isFollowing: true },
      ]
    ),
    []
  );

const FollowersScreen = ({ navigation }) => {
  const data = useFollowersData();
  const [followingState, setFollowingState] = useState(() =>
    data.reduce((acc, item) => ({ ...acc, [item.id]: item.isFollowing }), {})
  );

  const handleToggleFollow = (id) => {
    setFollowingState((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const renderFollower = ({ item }) => {
    const isFollowing = followingState[item.id];
    return (
      <View style={styles.row}>
        <View style={styles.avatarPlaceholder}>
          <Image
            source={require('../assets/icons/Userprofile.png')}
            style={styles.avatarIcon}
            resizeMode="contain"
          />
        </View>
        <View style={styles.rowTextContainer}>
          <Text style={styles.rowTitle}>{item.name}</Text>
          <Text style={styles.rowSubtitle}>{item.recipes} recipes</Text>
        </View>
        <TouchableOpacity
          style={[styles.followButton, isFollowing && styles.followingButton]}
          activeOpacity={0.85}
          onPress={() => handleToggleFollow(item.id)}
        >
          <Text style={[styles.followButtonText, isFollowing && styles.followingButtonText]}>
            {isFollowing ? 'Following' : 'Follow'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.headerRow}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.iconButton}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          activeOpacity={0.8}
        >
          <Text style={styles.iconText}>‹</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} activeOpacity={0.8}>
          <Image
            source={require('../assets/icons/IconSearch.png')}
            style={styles.searchIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Followers</Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderFollower}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        showsVerticalScrollIndicator={false}
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
    fontWeight: '600',
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
  listContent: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    paddingBottom: 32,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#E5E7EB',
    marginVertical: 14,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarPlaceholder: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#D1D5DB',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarIcon: {
    width: 24,
    height: 24,
    tintColor: '#9CA3AF',
  },
  rowTextContainer: {
    flex: 1,
  },
  rowTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
  rowSubtitle: {
    marginTop: 2,
    fontSize: 13,
    color: '#6B7280',
  },
  followButton: {
    minWidth: 92,
    height: 34,
    borderRadius: 8,
    backgroundColor: '#E53935',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  followButtonText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '700',
  },
  followingButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#D1D5DB',
  },
  followingButtonText: {
    color: '#111827',
  },
});

export default FollowersScreen;


