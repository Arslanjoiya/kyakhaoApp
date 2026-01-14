import React, { useMemo } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ReservationReceiptScreen = ({ navigation, route }) => {
  const reservation = useMemo(() => route?.params?.reservation || {}, [route?.params]);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.wrapper}>
        <View style={styles.card}>
          <Text style={styles.title}>{'Reservation\nConfirmed'}</Text>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Restaurant</Text>
            <Text style={styles.value}>{reservation.restaurantName || 'The Grand Feast'}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Date</Text>
            <Text style={styles.value}>{reservation.dateText || 'Friday, July 26, 2024'}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Time</Text>
            <Text style={styles.value}>{reservation.time || '8:00 PM'}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Guests</Text>
            <Text style={styles.value}>{reservation.guests || 4}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Confirmation ID</Text>
            <Text style={styles.value}>{reservation.id || 'KYK-001234567'}</Text>
          </View>

          <TouchableOpacity
            style={styles.primaryBtn}
            activeOpacity={0.85}
            onPress={() => navigation.navigate('MainTabs')}
          >
            <Text style={styles.primaryText}>View My Reservations</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryBtn} activeOpacity={0.85}>
            <Text style={styles.secondaryText}>Add to Calendar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryBtn} activeOpacity={0.85}>
            <Text style={styles.secondaryText}>Book Another Table</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#E5F0FF' },
  wrapper: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
  card: {
    width: '100%',
    maxWidth: 432,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 32,
    paddingVertical: 36,
    borderWidth: 1,
    borderColor: '#60A5FA',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },
  title: {
    fontFamily: 'Manrope-Bold',
    fontWeight: '700',
    fontSize: 36,
    lineHeight: 40,
    letterSpacing: -0.9,
    textAlign: 'center',
    color: '#DC2626',
    marginBottom: 32,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  label: { fontSize: 14, color: '#6B7280' },
  value: { fontSize: 16, fontWeight: '600', color: '#1F2937', textAlign: 'right', flexShrink: 1 },
  primaryBtn: {
    width: 318,
    height: 40,
    borderRadius: 6,
    backgroundColor: '#D42814',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  primaryText: { color: '#FFFFFF', fontSize: 15, fontWeight: '600' },
  secondaryBtn: {
    width: 318,
    height: 40,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 12,
  },
  secondaryText: { color: '#1F2937', fontSize: 14, fontWeight: '600' },
});

export default ReservationReceiptScreen;

