import React, { useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, PanResponder, Animated } from 'react-native';
import BottomTabBar from '../../components/Home/BottomTabBar';

const AiPickScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('AiPick');

  const handlePressTab = (key) => {
    setActiveTab(key);
    if (key === 'Home') navigation.navigate('Home');
    if (key === 'Reservation') navigation.navigate('Reservation');
    if (key === 'Notifications') navigation.navigate('Notifications');
    if (key === 'Account') navigation.navigate('Account');
  };

  const [price, setPrice] = useState(0.35); // 0..1
  const [spice, setSpice] = useState(0.2); // 0..1

  const priceValue = Math.round(5 + price * (100 - 5));
  const spiceValue = Math.round(spice * 5);

  return (
    <SafeAreaView style={styles.screen}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 8, left: 8, right: 8, bottom: 8 }}>
          <Text style={styles.backIcon}>‹</Text>
        </TouchableOpacity>
        <TouchableOpacity hitSlop={{ top: 8, left: 8, right: 8, bottom: 8 }}>
          <Text style={styles.moreIcon}>⋯</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Ai Pick</Text>

      {/* Filters */}
      <View style={styles.filters}>
        <FilterButton label="All Cuisines" />
        <FilterButton label="All Meal Types" />
        <FilterButton label="All Dietary" />
      </View>

      {/* Price Range */}
      <View style={styles.section}>
        <Text style={styles.sectionLabel}>Price Range: ${priceValue} - $100</Text>
        <SimpleSlider value={price} onChange={setPrice} />
      </View>

      {/* Spice Level */}
      <View style={styles.section}>
        <Text style={styles.sectionLabel}>Spice Level: {spiceValue} / 5</Text>
        <SimpleSlider value={spice} onChange={setSpice} />
      </View>

      {/* Actions */}
      <View style={styles.actionsRow}>
        <TouchableOpacity style={[styles.button, styles.buttonGhost]} activeOpacity={0.8}>
          <Text style={[styles.buttonText, styles.buttonGhostText]}>Clear Filters</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonPrimary]} activeOpacity={0.8}>
          <Text style={[styles.buttonText, styles.buttonPrimaryText]}>Apply Filters</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Tab Bar */}
      <View style={styles.tabBarContainer}>
        <BottomTabBar activeKey={activeTab} onPressTab={handlePressTab} />
      </View>
    </SafeAreaView>
  );
};

const FilterButton = ({ label }) => (
  <TouchableOpacity activeOpacity={0.8} style={styles.filterButton}>
    <Text style={styles.filterLabel}>{label}</Text>
    <Text style={styles.chevron}>▾</Text>
  </TouchableOpacity>
);

const SimpleSlider = ({ value, onChange }) => {
  const trackWidthRef = useRef(0);
  const animatedX = useRef(new Animated.Value(0)).current;

  // Sync animated value when external value changes
  useMemo(() => {
    const x = trackWidthRef.current * Math.max(0, Math.min(1, value));
    animatedX.setValue(x);
  }, [value]);

  const clamp = (x, min, max) => Math.max(min, Math.min(max, x));

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: (evt) => {
          const x = clamp(evt.nativeEvent.locationX, 0, trackWidthRef.current);
          Animated.spring(animatedX, {
            toValue: x,
            useNativeDriver: false,
            bounciness: 0,
            speed: 20,
          }).start();
          const v = trackWidthRef.current ? x / trackWidthRef.current : 0;
          onChange?.(v);
        },
        onPanResponderMove: (evt) => {
          const x = clamp(evt.nativeEvent.locationX, 0, trackWidthRef.current);
          animatedX.setValue(x);
          const v = trackWidthRef.current ? x / trackWidthRef.current : 0;
          onChange?.(v);
        },
        onPanResponderRelease: (evt) => {
          const x = clamp(evt.nativeEvent.locationX, 0, trackWidthRef.current);
          Animated.spring(animatedX, {
            toValue: x,
            useNativeDriver: false,
            bounciness: 0,
            speed: 20,
          }).start();
          const v = trackWidthRef.current ? x / trackWidthRef.current : 0;
          onChange?.(v);
        },
      }),
    [onChange]
  );

  const handleLayout = (e) => {
    trackWidthRef.current = e.nativeEvent.layout.width;
    const x = trackWidthRef.current * Math.max(0, Math.min(1, value));
    animatedX.setValue(x);
  };

  const trackActiveStyle = {
    width: animatedX.interpolate({
      inputRange: [0, Math.max(1, trackWidthRef.current)],
      outputRange: ['0%', '100%'],
      extrapolate: 'clamp',
    }),
  };

  const thumbStyle = {
    transform: [
      {
        translateX: Animated.add(animatedX, new Animated.Value(-8)), // center thumb
      },
    ],
  };

  return (
    <View onLayout={handleLayout} {...panResponder.panHandlers} style={styles.sliderTrackOuter}>
      <Animated.View style={[styles.sliderTrackInner, trackActiveStyle]} />
      <Animated.View pointerEvents="none" style={[styles.sliderThumb, thumbStyle]} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  backIcon: { fontSize: 24, color: '#111' },
  moreIcon: { fontSize: 24, color: '#111' },
  title: { fontSize: 32, fontWeight: '800', color: '#111', paddingHorizontal: 16, marginTop: 8 },
  filters: { paddingHorizontal: 16, marginTop: 16, gap: 12 },
  filterButton: {
    height: 44,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E7E7E7',
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  filterLabel: { fontSize: 14, color: '#111' },
  chevron: { fontSize: 16, color: '#999' },

  section: { paddingHorizontal: 16, marginTop: 20 },
  sectionLabel: { fontSize: 13, color: '#666', marginBottom: 8 },
  sliderTrackOuter: { height: 10, backgroundColor: '#fdecec', borderRadius: 8, justifyContent: 'center' },
  sliderTrackInner: { position: 'absolute', left: 0, height: 3, backgroundColor: '#EF4444', marginLeft: 16, borderRadius: 2 },
  sliderThumb: {
    position: 'absolute',
    width: 16,
    height: 16,
    borderRadius: 16,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#EF4444',
  },

  actionsRow: { flexDirection: 'row', paddingHorizontal: 16, marginTop: 24, gap: 12 },
  button: { flex: 1, height: 44, borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
  buttonGhost: { borderWidth: 1, borderColor: '#E7E7E7', backgroundColor: '#fff' },
  buttonGhostText: { color: '#111', fontWeight: '600' },
  buttonPrimary: { backgroundColor: '#E53935' },
  buttonPrimaryText: { color: '#fff', fontWeight: '700' },

  tabBarContainer: { position: 'absolute', left: 0, right: 0, bottom: 0 },
});

export default AiPickScreen;


