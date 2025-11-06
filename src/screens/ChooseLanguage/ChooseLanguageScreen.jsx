import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import CommonButton from '../../components/CommonButton/CommonButton';

const LANGUAGES = [
  'English',
  'Chinese',
  'Portuguese',
  'Spanish',
  'Hindi',
  'Arabic',
  'Russian',
  'Bulgarian',
  'Lithuanian',
];

const ChooseLanguageScreen = ({ route, navigation }) => {
  const username = useMemo(() => route?.params?.username || 'Tamara', [route?.params?.username]);
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const handleSelect = () => {
    navigation?.navigate('Personalization', { language: selectedLanguage });
  };

  return (
    <SafeAreaView style={styles.safeArea}> 
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerSection}>
          <Image
            source={require('../../assets/images/UserPic1.png')}
            style={styles.avatar}
          />
          <Text style={styles.title}>{`Hi, ${username}`}</Text>
          <Text style={styles.subtitle}>
            Please select your preferred language to facilitate communication
          </Text>
        </View>

        <View style={styles.listWrapper}>
          {LANGUAGES.map((lang, index) => {
            const active = selectedLanguage === lang;
            return (
              <TouchableOpacity
                key={lang}
                style={[
                  styles.languageRow,
                  // remove right margin for right column items
                  index % 2 === 1 && styles.languageRowRight,
                ]}
                onPress={() => setSelectedLanguage(lang)}
                activeOpacity={0.7}
              >
                <View style={[styles.radioOuter, active && styles.radioOuterActive]}>
                  {active ? <View style={styles.radioInner} /> : null}
                </View>
                <Text style={[styles.languageText, active && styles.languageTextActive]}>
                  {lang}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <CommonButton
          title="Select"
          onPress={handleSelect}
          style={styles.selectButton}
        />
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
    paddingBottom: 32,
  },
  headerSection: {
    alignItems: 'flex-start',
    marginTop: 12,
    marginBottom: 24,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginBottom: 16,
  },
  title: {
    fontSize: 40,
    lineHeight: 40,
    fontWeight: '700',
    color: '#000',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  listWrapper: {
    width: '100%',
    opacity: 1,
    marginTop: 16,
    alignSelf: 'stretch',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  languageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    width: '48%',
    marginRight: '4%',
    marginBottom: 12,
  },
  languageRowRight: {
    marginRight: 0,
  },
  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#d1d5db',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  radioOuterActive: {
    borderColor: '#22c55e',
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#22c55e',
  },
  languageText: {
    fontSize: 16,
    color: '#4b5563',
  },
  languageTextActive: {
    color: '#000',
    fontWeight: '600',
  },
  selectButton: {
    backgroundColor: '#E53935',
    marginTop: 'auto',
    width: 311,
    height: 50,
    borderRadius: 8,
    alignSelf: 'center',
    marginBottom: 40,
  },
});

export default ChooseLanguageScreen;


