import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const RestaurantFeature = ({ image, title, chef, likes = 347, rating = 4.5, category = 'Breakfast', time = '26 minutes' }) => {
  return (
    <View style={styles.wrapper}>
      <Image source={image} style={styles.image} />
      <View style={styles.playCircle}>
        <Text style={styles.playIcon}>▶</Text>
      </View>
      <View style={styles.metaRowOuter}>
        <Text style={styles.meta}>{category} · {time}</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.footerRow}>
        <View style={styles.userRow}>
          <Image source={require('../../assets/images/UserPic2.png')} style={styles.avatar} />
          <Text style={styles.user}>{chef}</Text>
        </View>
        <View style={styles.statsRow}>
          <Text style={styles.stat}>❤ {likes}</Text>
          <Text style={styles.stat}>⭐ {rating}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  image: { width: '100%', height: 180, borderRadius: 12 },
  playCircle: {
    position: 'absolute',
    top: 120,
    left: '50%',
    marginLeft: -24,
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playIcon: { color: '#fff', fontSize: 18 },
  metaRowOuter: { marginTop: 8 },
  meta: { color: '#6B7280', fontSize: 12 },
  title: { fontSize: 16, fontWeight: '700', color: '#111', marginTop: 8 },
  footerRow: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userRow: { flexDirection: 'row', alignItems: 'center' },
  avatar: { width: 20, height: 20, borderRadius: 10, marginRight: 6 },
  user: { color: '#6B7280', fontSize: 12 },
  statsRow: { flexDirection: 'row' },
  stat: { color: '#6B7280', fontSize: 12, marginLeft: 10 },
});

export default RestaurantFeature;


