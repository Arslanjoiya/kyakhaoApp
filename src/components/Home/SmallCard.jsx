import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const SmallCard = ({ image, title, subtitle }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title} numberOfLines={2}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 160,
    marginRight: 12,
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 12,
    marginBottom: 8,
  },
  title: { fontSize: 13, fontWeight: '700', color: '#111' },
  subtitle: { fontSize: 12, color: '#6B7280' },
});

export default SmallCard;


