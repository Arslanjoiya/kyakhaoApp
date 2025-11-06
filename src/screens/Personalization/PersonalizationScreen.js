import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CommonButton from '../../components/CommonButton/CommonButton';

const FOOD_STYLES = ['Casual', 'Foodie', 'Gourmet'];
const EATING_PREFS = ['Vegan', 'Vegetarian', 'Pescatarian', 'Desi', 'Low-carb'];

const PersonalizationScreen = ({ navigation }) => {
  const [selectedStyle, setSelectedStyle] = useState('Casual');
  const [selectedPrefs, setSelectedPrefs] = useState(new Set(['Vegetarian', 'Desi']));

  const togglePref = (name) => {
    const next = new Set(selectedPrefs);
    if (next.has(name)) next.delete(name); else next.add(name);
    setSelectedPrefs(next);
  };

  const handleContinue = () => {
    navigation?.navigate('Home', {
      foodStyle: selectedStyle,
      eatingPreferences: Array.from(selectedPrefs),
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.topBar}>
          <TouchableOpacity
            onPress={() => navigation?.goBack()}
            style={styles.backBtn}
            hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}
          >
            <Text style={styles.backIcon}>‹</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleContinue}>
            <Text style={styles.skipText}>Do it Later</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.header}>
          <Text style={styles.title}>Personalization</Text>
        </View>

        <Text style={styles.sectionTitle}>Your Food Style</Text>
        <View style={styles.foodStyleRow}>
          {FOOD_STYLES.map((name) => {
            const active = selectedStyle === name;
            return (
              <View key={name} style={styles.styleItem}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => setSelectedStyle(name)}
                  style={[styles.styleCard, active && styles.styleCardActive]}
                >
                  <View style={styles.styleIconBox}>
                    <Text style={styles.styleIcon}>🍴</Text>
                  </View>
                </TouchableOpacity>
                <View style={styles.styleLabelRow}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => setSelectedStyle(name)}
                    style={[styles.radioOuter, active && styles.radioOuterActive]}
                  >
                    {active ? <Text style={styles.checkMark}>✓</Text> : null}
                  </TouchableOpacity>
                  <Text style={[styles.styleName, active && styles.styleNameActive]}>{name}</Text>
                </View>
              </View>
            );
          })}
        </View>

        <Text style={[styles.sectionTitle, { marginTop: 20 }]}>Your Eating Preferences</Text>
        <View style={styles.prefList}>
          {EATING_PREFS.map((name) => {
            const active = selectedPrefs.has(name);
            return (
              <TouchableOpacity
                key={name}
                activeOpacity={0.7}
                onPress={() => togglePref(name)}
                style={styles.prefRow}
              >
                <Text style={styles.prefName}>{name}</Text>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => togglePref(name)}
                  style={[styles.checkOuter, active && styles.checkOuterActive]}
                >
                  {active ? <Text style={styles.checkMarkSmall}>✓</Text> : null}
                </TouchableOpacity>
              </TouchableOpacity>
            );
          })}
        </View>

        <CommonButton title="Next" onPress={() => navigation?.navigate('ChoicesFood')} style={styles.button} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 2,
    marginBottom: 8,
  },
  backBtn: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    marginLeft: -12,
  },
  backIcon: {
    fontSize: 28,
    color: '#111',
    lineHeight: 28,
  },
  skipText: {
    color: '#111',
    fontSize: 14,
  },
  header: {
    marginTop: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111',
    marginBottom: 12,
  },
  foodStyleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  styleItem: {
    alignItems: 'center',
  },
  styleCard: {
    width: 100,
    height: 84,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    backgroundColor: '#fff',
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  styleCardActive: {
    borderColor: '#ef4444',
  },
  styleIconBox: {
    width: '100%',
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  styleIcon: {
    fontSize: 24,
    color: '#E53935',
  },
  styleLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  styleName: {
    marginLeft: 8,
    fontSize: 12,
    color: '#6b7280',
  },
  styleNameActive: {
    color: '#111',
    fontWeight: '600',
  },
  radioOuter: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '#d1d5db',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioOuterActive: {
    borderColor: '#22c55e',
    backgroundColor: '#22c55e',
  },
  // radioInner replaced by checkMark
  checkMark: {
    color: '#fff',
    fontSize: 12,
    lineHeight: 12,
  },
  prefList: {
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  prefRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 48,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  prefName: {
    fontSize: 16,
    color: '#111',
  },
  checkOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#d1d5db',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkOuterActive: {
    borderColor: '#22c55e',
    backgroundColor: '#22c55e',
  },
  // checkInner replaced by checkMarkSmall
  checkMarkSmall: {
    color: '#fff',
    fontSize: 12,
    lineHeight: 12,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#E53935',
    width: 311,
    height: 50,
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 'auto',
    marginBottom: 40,
  },
});

export default PersonalizationScreen;


