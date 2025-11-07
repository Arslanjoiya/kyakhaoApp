import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const TABS = [
  { key: 'Home', icon: '⌂', label: 'Home' },
  { key: 'Reservation', icon: '≣', label: 'Reservation' },
  { key: 'AiPick', icon: '◎', label: 'Ai Pick' },
  { key: 'Notifications', icon: '⍟', label: 'Notifications' },
  { key: 'Account', icon: '👤', label: 'Account' },
];

const BottomTabBar = ({ activeKey = 'Home', onPressTab = () => {} }) => {

  return (
    <View style={styles.wrapper}>
      <View style={styles.row}>
        {TABS.map((t) => {
          const isActive = t.key === activeKey;
          const labelColorStyle = isActive ? styles.labelActive : styles.labelInactive;
          const iconStyle = t.key === 'Home' ? styles.iconImageLarge : t.key === 'AiPick' ? styles.iconImageAiPick : styles.iconImageSmall;
          return (
            <TouchableOpacity key={t.key} onPress={() => onPressTab(t.key)} style={styles.item} activeOpacity={0.8}>
              {t.key === 'AiPick' ? (
                <Image
                  source={require('../../assets/icons/Aipickicon.png')}
                  style={iconStyle}
                  resizeMode="contain"
                />
              ) : (
                <Image
                  source={
                    t.key === 'Home' ? require('../../assets/icons/Homeicon.png') :
                    t.key === 'Reservation' ? require('../../assets/icons/Reservationicon.png') :
                    t.key === 'Notifications' ? require('../../assets/icons/Notificationicon.png') :
                    require('../../assets/icons/Accounticon.png')
                  }
                  style={[iconStyle, { tintColor: isActive ? '#E53935' : '#C8C7CC' }]}
                  resizeMode="contain"
                />
              )}
              <Text style={[styles.label, labelColorStyle]}>{t.label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.indicatorContainer}>
        <View style={styles.indicator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    borderTopColor: '#E0E0E0',
    borderTopWidth: 1,
    paddingTop: 8,
    paddingBottom: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  item: { alignItems: 'center', justifyContent: 'center', flex: 1, paddingVertical: 8 },
  iconImageLarge: { width: 20, height: 20, marginBottom: 4, marginTop: 8, opacity: 1 },
  iconImageAiPick: { 
    width: 22,
    height: 22,
    marginBottom: 4,
    marginTop: 8,
    opacity: 1,
  },
  aiPickIconOverride: {
    width: 24,
    height: 24,
  },
  iconImageSmall: { width: 20, height: 20, marginBottom: 4, marginTop: 8, opacity: 1 },
  label: { fontSize: 12 },
  labelActive: { color: '#E53935' },
  labelInactive: { color: '#C8C7CC' },
  indicatorContainer: { alignItems: 'center', marginTop: 6 },
  indicator: { width: 140, height: 4, borderRadius: 4, backgroundColor: '#000' },
});

export default BottomTabBar;


