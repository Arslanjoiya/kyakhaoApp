import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

// Reusable collection card (collage + title + recipe count)
// Image area: 163x222, card width matches 163

const CollectionCard = ({
  images = [],
  title,
  recipesCount,
  onPress,
  onToggleLike,
  liked = false,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.85} onPress={onPress} style={styles.card}>
      <View style={styles.collage}>
        {/* Left large */}
        <Image source={images[0]} style={styles.leftLarge} resizeMode="cover" />
        {/* Right column top/bottom */}
        <View style={styles.rightCol}>
          <Image source={images[1] || images[0]} style={styles.rightTop} resizeMode="cover" />
          <View style={styles.rightBottomRow}>
            <Image source={images[2] || images[0]} style={styles.rightBottomLeft} resizeMode="cover" />
            <Image source={images[3] || images[1] || images[0]} style={styles.rightBottomRight} resizeMode="cover" />
          </View>
        </View>
        <TouchableOpacity style={styles.likeBadge} onPress={onToggleLike} activeOpacity={0.8}>
          <Image
            source={liked ? require('../../assets/icons/LoveIconfilled.png') : require('../../assets/icons/Loveiconempty.png')}
            style={styles.loveIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.title} numberOfLines={1}>{title}</Text>
      <Text style={styles.subtitle}>{recipesCount} recipes</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 163,
  },
  collage: {
    width: 163,
    height: 222,
    borderRadius: 12,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  leftLarge: {
    width: 108,
    height: '100%',
  },
  rightCol: {
    flex: 1,
  },
  rightTop: {
    width: '100%',
    height: 111,
  },
  rightBottomRow: {
    flexDirection: 'row',
    width: '100%',
    height: 111,
  },
  rightBottomLeft: {
    width: '50%',
    height: '100%',
  },
  rightBottomRight: {
    width: '50%',
    height: '100%',
  },
  title: {
    width: 100,
    height: 20,
    marginTop: 8,
    fontFamily: 'SF Pro Text',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: 0,
    color: '#000',
  },
  subtitle: {
    marginTop: 4,
    fontSize: 14,
    color: '#9CA3AF',
  },
  likeBadge: {
    position: 'absolute',
    left: 10,
    bottom: 10,
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
});

export default CollectionCard;


