import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

// Reusable dish card
// Layout spec:
// - Card: width 163, height 292
// - Image: width 163, height 222
// Consumers can pass any children for badges if needed

const DishCard = ({
  image,
  title,
  category,
  time,
  rating,
  onPress,
  onToggleLike,
  liked = false,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.85} onPress={onPress} style={styles.card}>
      <View style={styles.imageWrap}>
        <Image source={image} style={styles.image} resizeMode="cover" />
        <TouchableOpacity style={styles.cornerIcon} onPress={onToggleLike} activeOpacity={0.8}>
          <Image
            source={liked ? require('../../assets/icons/LoveIconfilled.png') : require('../../assets/icons/Loveiconempty.png')}
            style={styles.loveIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        {typeof rating !== 'undefined' && (
          <View style={styles.ratingBadge}>
            <Text style={styles.ratingText}>★ {rating}</Text>
          </View>
        )}
      </View>

      <View style={styles.metaRow}>
        {!!category && <Text style={styles.metaText}>{category}</Text>}
        {!!time && (
          <Text style={[styles.metaText, styles.metaDot]}> • {time}</Text>
        )}
      </View>
      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 163,
    height: 292,
  },
  imageWrap: {
    width: 163,
    height: 222,
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  cornerIcon: {
    position: 'absolute',
    left: 8,
    bottom: 8,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(255,255,255,0.9)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loveIcon: {
    width: 18,
    height: 18,
  },
  ratingBadge: {
    position: 'absolute',
    right: 8,
    bottom: 8,
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
  },
  ratingText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
  },
  metaRow: {
    flexDirection: 'row',
    marginTop: 8,
  },
  metaText: {
    fontSize: 12,
    color: '#6B7280',
  },
  metaDot: {
    color: '#6B7280',
  },
  title: {
    marginTop: 6,
    fontSize: 14,
    fontWeight: '700',
    color: '#111827',
  },
});

export default DishCard;


