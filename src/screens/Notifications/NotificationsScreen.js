import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import BottomTabBar from '../../components/Home/BottomTabBar';

// Mock notification data based on the design
const NOTIFICATIONS = [
  {
    id: '1',
    userName: 'Barbara Michelle',
    action: 'comments on the',
    recipeName: 'Sweet and Sour Pork recipe.',
    timestamp: '10:00 PM',
    type: 'comment',
  },
  {
    id: '2',
    userName: 'Nicole Foster',
    action: 'started following you.',
    timestamp: '9:00 PM',
    type: 'follow',
    isFollowing: false,
  },
  {
    id: '3',
    userName: 'Daniela Marwa',
    action: 'started following you.',
    timestamp: '7:00 PM',
    type: 'follow',
    isFollowing: false,
  },
  {
    id: '4',
    userName: 'Amber Julia',
    action: 'love your',
    recipeName: 'Berry Fruity Angel Cake Parfait recipe.',
    timestamp: 'Yesterday',
    type: 'like',
  },
  {
    id: '5',
    userName: 'Richard Moors',
    action: 'started following you.',
    timestamp: 'Tuesday',
    type: 'follow',
    isFollowing: true,
  },
  {
    id: '6',
    userName: 'Kristina Clark',
    action: 'love your',
    recipeName: 'Blueberry and Mint Ice Cream recipe.',
    timestamp: 'Monday',
    type: 'like',
  },
  {
    id: '7',
    userName: 'Patricia Kennedy',
    action: 'comments on the',
    recipeName: 'Hawaiian Chicken Burger recipe.',
    timestamp: '4/25/18',
    type: 'comment',
  },
];

const NotificationsScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Notifications');
  const [followingUsers, setFollowingUsers] = useState(
    NOTIFICATIONS.filter(n => n.type === 'follow' && n.isFollowing).map(n => n.id)
  );

  const handlePressTab = (key) => {
    setActiveTab(key);
    if (key === 'Home') {
      navigation.navigate('Home');
    } else if (key === 'Reservation') {
      navigation.navigate('Reservation');
    } else if (key === 'Notifications') {
      return; // Already on this screen
    } else if (key === 'Account') {
      navigation.navigate('Account');
    }
  };

  const handleFollow = (userId) => {
    if (followingUsers.includes(userId)) {
      setFollowingUsers(followingUsers.filter(id => id !== userId));
    } else {
      setFollowingUsers([...followingUsers, userId]);
    }
  };

  const renderNotificationItem = (notification) => {
    const isFollowing = followingUsers.includes(notification.id);
    const showFollowButton = notification.type === 'follow';
    const showThumbnail = notification.type === 'comment' || notification.type === 'like';

    return (
      <View key={notification.id} style={styles.notificationItem}>
        {/* Avatar placeholder */}
        <View style={styles.avatarPlaceholder} />

        {/* Content */}
        <View style={styles.contentContainer}>
          <View style={styles.textRow}>
            <Text style={styles.notificationText}>
              <Text style={styles.userName}>{notification.userName} </Text>
              <Text style={styles.actionText}>{notification.action} </Text>
              {notification.recipeName && (
                <Text style={styles.recipeName}>{notification.recipeName}</Text>
              )}
            </Text>
            <Text style={styles.timestamp}>{notification.timestamp}</Text>
          </View>
        </View>

        {/* Right side - Button or Thumbnail */}
        {showFollowButton ? (
          <TouchableOpacity
            style={[styles.followButton, isFollowing && styles.followingButton]}
            onPress={() => handleFollow(notification.id)}
            activeOpacity={0.8}
          >
            <Text style={[styles.followButtonText, isFollowing && styles.followingButtonText]}>
              {isFollowing ? 'Following' : 'Follow'}
            </Text>
          </TouchableOpacity>
        ) : showThumbnail ? (
          <View style={styles.thumbnailPlaceholder} />
        ) : null}
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTopRow}>
          <TouchableOpacity hitSlop={{ top: 8, left: 8, right: 8, bottom: 8 }}>
            <Image
              source={require('../../assets/icons/IconFilter.png')}
              style={styles.filterImg}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity hitSlop={{ top: 8, left: 8, right: 8, bottom: 8 }}>
            <Text style={styles.headerMoreIcon}>⋯</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>

      {/* Notifications List */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {NOTIFICATIONS.map(renderNotificationItem)}
        <View style={styles.bottomSpacer} />
      </ScrollView>

      {/* Bottom Tab Bar */}
      <View style={styles.tabBarContainer}>
        <BottomTabBar activeKey={activeTab} onPressTab={handlePressTab} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 12,
    backgroundColor: '#FFFFFF',
  },
  headerTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  filterIcon: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  filterIconText: {
    fontSize: 12,
    color: '#000000',
    transform: [{ rotate: '180deg' }],
  },
  filterLine: {
    position: 'absolute',
    bottom: 4,
    width: 16,
    height: 2,
    backgroundColor: '#000000',
  },
  headerTitleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#000000',
    marginTop: 10,
  },
  filterImg: {
    width: 20,
    height: 20,
  },
  headerMoreIcon: {
    fontSize: 26,
    color: '#000000',
    fontWeight: '800',
    lineHeight: 26,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 128,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  avatarPlaceholder: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#DDDDDD',
    marginRight: 12,
  },
  contentContainer: {
    flex: 1,
    marginRight: 8,
  },
  textRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flex: 1,
  },
  notificationText: {
    flex: 1,
    fontSize: 14,
    color: '#000000',
    lineHeight: 20,
    paddingRight: 12,
  },
  userName: {
    fontWeight: '700',
    color: '#000000',
  },
  actionText: {
    fontWeight: '400',
    color: '#000000',
  },
  recipeName: {
    fontWeight: '700',
    color: '#000000',
  },
  timestamp: {
    fontSize: 12,
    color: '#888888',
    alignSelf: 'flex-start',
    marginTop: 2,
  },
  followButton: {
    backgroundColor: '#E53935',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 6,
    marginLeft: 8,
    minWidth: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  followingButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DDDDDD',
  },
  followButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
  },
  followingButtonText: {
    color: '#000000',
  },
  thumbnailPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 4,
    backgroundColor: '#DDDDDD',
    marginLeft: 8,
  },
  bottomSpacer: {
    height: 128,
  },
  tabBarContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default NotificationsScreen;

