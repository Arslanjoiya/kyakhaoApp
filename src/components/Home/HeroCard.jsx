import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const HeroCard = ({ source, badgeText = 'Festive Specials', pageIndicator = '1/5' }) => {
  return (
    <View style={styles.wrapper}>
      <Image source={source} style={styles.image} />
      <View style={styles.badgeRow}>
        <Text style={styles.badgeText}>{badgeText}</Text>
        <Text style={styles.page}>{pageIndicator}</Text>
      </View>

      <View style={styles.textBlock}>
        <Text style={styles.category}>Biryani</Text>
        <Text style={styles.title}>Smoky Dum{"\n"}Biryani Fiesta</Text>
        <View style={styles.curatorRow}>
          <Image source={require('../../assets/images/UserPic1.png')} style={styles.curatorAvatar} />
          <Text style={styles.byline}>by KyaKhao Curator</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 320,
    borderRadius: 16,
    overflow: 'hidden',
    position: 'relative',
  },
  image: { width: '100%', height: '100%', resizeMode: 'cover' },
  badgeRow: {
    position: 'absolute',
    top: 17,
    left: 16,
    right: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  badgeText: {
    color: '#FF1B00',
    fontWeight: '600',
    fontSize: 17,
    lineHeight: 18,
  },
  page: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
    fontSize: 12,
    color: '#111',
  },
  textBlock: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 16,
  },
  category: { color: '#fff', fontSize: 14, marginBottom: 6 },
  title: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '800',
    lineHeight: 30,
    marginBottom: 8,
  },
  curatorRow: { flexDirection: 'row', alignItems: 'center' },
  curatorAvatar: { width: 22, height: 22, borderRadius: 11, marginRight: 8 },
  byline: { color: '#fff', fontSize: 12, opacity: 0.95 },
});

export default HeroCard;


