import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Switch } from 'react-native';

const SettingsScreen = ({ navigation }) => {
  const [newsletterEnabled, setNewsletterEnabled] = useState(true);

  const accountItems = [
    { id: '1', title: 'Change Password', icon: require('../../assets/icons/icon1.png') },
    { id: '2', title: 'Notifications', icon: require('../../assets/icons/icon2.png') },
    { id: '3', title: 'Privacy Settings', icon: require('../../assets/icons/icon3.png') },
    { id: '4', title: 'Sign Out', icon: require('../../assets/icons/icon4.png') },
  ];

  return (
    <View style={styles.screen}>
      <ScrollView style={styles.container} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 8, left: 8, right: 8, bottom: 8 }}>
            <Image source={require('../../assets/icons/Arrow.png')} style={styles.backIcon} resizeMode="contain" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Settings</Text>
          <View style={styles.headerSpacer} />
        </View>

        {/* Account Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>
          {accountItems.map((item, index) => (
            <TouchableOpacity
              key={item.id}
              style={[styles.listItem, index === accountItems.length - 1 && styles.listItemLast]}
              activeOpacity={0.7}
              onPress={() => {
                if (item.title === 'Sign Out') {
                  // Handle sign out
                  console.log('Sign Out pressed');
                }
              }}
            >
              <Image source={item.icon} style={styles.iconImage} resizeMode="contain" />
              <Text style={styles.itemText}>{item.title}</Text>
              <Text style={styles.chevron}>›</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* More Options Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>More Options</Text>
          
          {/* Newsletter */}
          <View style={styles.listItem}>
            <Text style={styles.itemText}>Newsletter</Text>
            <Switch
              value={newsletterEnabled}
              onValueChange={setNewsletterEnabled}
              trackColor={{ false: '#E5E5E5', true: '#E53935' }}
              thumbColor="#FFFFFF"
              ios_backgroundColor="#E5E5E5"
            />
          </View>

          {/* Languages */}
          <TouchableOpacity style={styles.listItem} activeOpacity={0.7}>
            <Text style={styles.itemText}>Languages</Text>
            <View style={styles.rightContent}>
              <Text style={styles.rightText}>English</Text>
              <Text style={styles.chevron}>›</Text>
            </View>
          </TouchableOpacity>

          {/* Linked Accounts */}
          <TouchableOpacity style={[styles.listItem, styles.listItemLast]} activeOpacity={0.7}>
            <Text style={styles.itemText}>Linked Accounts</Text>
            <View style={styles.rightContent}>
              <Text style={styles.rightText}>Facebook, Google</Text>
              <Text style={styles.chevron}>›</Text>
            </View>
          </TouchableOpacity>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 20,
  },
  backIcon: {
    width: 20,
    height: 20,
    tintColor: '#000',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#000',
  },
  headerSpacer: {
    width: 20,
  },
  section: {
    paddingTop: 8,
    paddingBottom: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#000',
    paddingHorizontal: 16,
    paddingBottom: 12,
    paddingTop: 8,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  listItemLast: {
    borderBottomWidth: 0,
  },
  iconImage: {
    width: 28,
    height: 28,
    marginRight: 12,
  },
  itemText: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    fontWeight: '400',
  },
  rightContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightText: {
    fontSize: 16,
    color: '#888',
    marginRight: 8,
  },
  chevron: {
    fontSize: 24,
    color: '#C8C7CC',
    fontWeight: '300',
  },
});

export default SettingsScreen;

