import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const SectionRow = ({ title, rightText = '>' , onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={styles.container}>
      <View style={styles.left}>
        {title === 'AI Picks For You' ? (
          <Image
            source={require('../../assets/icons/Aiicon.png')}
            style={styles.aiIcon}
            resizeMode="contain"
          />
        ) : (
          <Text style={styles.dot}>🔸</Text>
        )}
        <Text style={styles.title}>{title}</Text>
      </View>
      <Text style={styles.chevron}>{rightText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF5F5',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  left: { flexDirection: 'row', alignItems: 'center' },
  dot: { fontSize: 16, marginRight: 10 },
  aiIcon: { width: 20, height: 20, marginRight: 10 },
  title: { fontSize: 16, color: '#111', fontWeight: '700' },
  chevron: { fontSize: 18, color: '#EF4444' },
});

export default SectionRow;


