import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const CardField = ({ placeholder, secureTextEntry, keyboardType, style }) => (
  <TextInput
    placeholder={placeholder}
    placeholderTextColor="#9CA3AF"
    secureTextEntry={secureTextEntry}
    keyboardType={keyboardType}
    style={[styles.input, style]}
  />
);

const PaymentSetupScreen = ({ navigation, route }) => {
  const [agreed, setAgreed] = useState(false);
  const reservation = route?.params?.reservation || {};

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
            <Text style={styles.backText}>‹</Text>
          </TouchableOpacity>

          <Text style={styles.title}>Set up your credit or debit card</Text>

          <View style={styles.cardIconsRow}>
            <View style={styles.cardBadge}><Text style={styles.cardBadgeText}>VISA</Text></View>
            <View style={styles.cardBadge}><Text style={styles.cardBadgeText}>Mastercard</Text></View>
            <View style={styles.cardBadge}><Text style={styles.cardBadgeText}>AMEX</Text></View>
          </View>

          <CardField placeholder="Card number" keyboardType="number-pad" />

          <View style={styles.row}>
            <CardField placeholder="Expiry date" style={styles.halfInput} />
            <CardField placeholder="CVV" style={styles.halfInput} keyboardType="number-pad" />
          </View>

          <CardField placeholder="Name on card" />

          <View style={styles.planBox}>
            <View>
              <Text style={styles.planAmount}>PKR 1,100/month</Text>
              <Text style={styles.planLabel}>Premium</Text>
            </View>
            <TouchableOpacity hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
              <Text style={styles.planAction}>Change</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.note}>Your payments will be processed internationally. Additional bank fees may apply.</Text>

          <Text style={styles.disclaimer}>
            By ticking the tick box below, you agree to our <Text style={styles.link}>Terms of Use</Text>,{' '}
            <Text style={styles.link}>Privacy Statement</Text>, and that you are over 18. Kya Khao automatically continue your membership and charge the membership fee (currently PKR 1,100/month) to your payment method until you cancel. You may cancel at any time to avoid future charges.
          </Text>

          <TouchableOpacity style={styles.checkboxRow} onPress={() => setAgreed((prev) => !prev)} activeOpacity={0.8}>
            <View style={[styles.checkbox, agreed && styles.checkboxChecked]}>
              {agreed ? <Text style={styles.checkboxTick}>✓</Text> : null}
            </View>
            <Text style={styles.checkboxLabel}>I agree.</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.primaryBtn}
            activeOpacity={0.85}
            onPress={() =>
              navigation.navigate('ReservationReceipt', {
                reservation: {
                  restaurantName: reservation.restaurantName,
                  dateText: reservation.dateText,
                  time: reservation.timeText,
                  guests: reservation.guestsText || reservation.guests,
                  id: reservation.reservationId,
                },
              })
            }
          >
            <Text style={styles.primaryBtnText}>Start Membership</Text>
          </TouchableOpacity>

          <Text style={styles.recaptcha}>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#FFFFFF' },
  container: { alignItems: 'center', paddingBottom: 40, paddingHorizontal: 24 },
  content: { width: '100%', maxWidth: 512, paddingTop: 12 },
  back: { marginBottom: 16 },
  backText: { fontSize: 28, color: '#1F2937' },
  title: {
    fontFamily: 'Segoe UI',
    fontSize: 32,
    lineHeight: 40,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 24,
  },
  cardIconsRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  cardBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginRight: 10,
  },
  cardBadgeText: { fontSize: 12, fontWeight: '600', color: '#374151' },
  input: {
    width: '100%',
    maxWidth: 440,
    height: 56,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    paddingHorizontal: 16,
    fontSize: 15,
    color: '#111827',
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
  },
  row: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', maxWidth: 440 },
  halfInput: { maxWidth: '48%' },
  planBox: {
    width: '100%',
    maxWidth: 440,
    borderRadius: 12,
    backgroundColor: '#F3F4F6',
    paddingVertical: 16,
    paddingHorizontal: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },
  planAmount: { fontSize: 16, fontWeight: '700', color: '#111827' },
  planLabel: { fontSize: 13, color: '#6B7280', marginTop: 4 },
  planAction: { fontSize: 13, color: '#DC2626', fontWeight: '600' },
  note: {
    fontSize: 13,
    color: '#6B7280',
    lineHeight: 20,
    width: '100%',
    maxWidth: 440,
    marginBottom: 16,
  },
  disclaimer: {
    fontSize: 13,
    color: '#6B7280',
    lineHeight: 21,
    width: '100%',
    maxWidth: 440,
    marginBottom: 20,
  },
  link: { color: '#DC2626', fontWeight: '600' },
  checkboxRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 24, width: '100%', maxWidth: 440 },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#9CA3AF',
    borderRadius: 4,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  checkboxChecked: { borderColor: '#DC2626', backgroundColor: '#DC2626' },
  checkboxTick: { color: '#FFFFFF', fontSize: 14, fontWeight: '700' },
  checkboxLabel: { fontSize: 14, color: '#374151' },
  primaryBtn: {
    width: '100%',
    maxWidth: 440,
    height: 56,
    borderRadius: 4,
    backgroundColor: '#D6281F',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  primaryBtnText: { color: '#FFFFFF', fontSize: 16, fontWeight: '700' },
  recaptcha: {
    width: '100%',
    maxWidth: 440,
    fontSize: 12,
    color: '#6B7280',
    lineHeight: 18,
  },
});

export default PaymentSetupScreen;

