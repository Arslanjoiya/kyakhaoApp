import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

// Reusable image-only card
// - Image area: 163x222 (same as DishCard image)
// - Optional bottom-right caption (e.g., "2 days ago") and bottom-left heart icon

const PhotoCard = ({ image, caption, liked = false, onPress, onToggleLike }) => {
  return (
    <TouchableOpacity activeOpacity={0.85} onPress={onPress} style={styles.wrap}>
      <Image source={image} style={styles.image} resizeMode="cover" />

      <TouchableOpacity style={styles.likeBadge} onPress={onToggleLike} activeOpacity={0.8}>
        <Image
          source={liked ? require('../../assets/icons/LoveIconfilled.png') : require('../../assets/icons/Loveiconempty.png')}
          style={styles.loveIcon}
          resizeMode="contain"
        />
      </TouchableOpacity>

      {!!caption && (
        <View style={styles.captionBadge}>
          <Text style={styles.captionText}>{caption}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrap: {
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
  captionBadge: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  captionText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },
});

export default PhotoCard;


