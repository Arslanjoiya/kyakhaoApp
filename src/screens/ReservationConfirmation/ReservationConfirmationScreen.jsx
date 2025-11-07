import React, { useMemo } from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ConfirmationHeader from '../../components/reservations/ConfirmationHeader';
import ReservationSummaryCard from '../../components/reservations/ReservationSummaryCard';
import PlanBenefitsCard from '../../components/reservations/PlanBenefitsCard';
import PrimaryButton from '../../components/reservations/PrimaryButton';

const ReservationConfirmationScreen = ({ navigation, route }) => {
  const params = route?.params || {};

  const summary = useMemo(() => {
    const reservation = params.reservation || {};
    const plan = params.plan || {};
    const formattedDate = reservation.date
      ? new Date(reservation.date).toLocaleDateString('en-US', {
          weekday: 'long',
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        })
      : undefined;

    return {
      restaurantName: reservation.restaurantName || 'Selected Restaurant',
      address: reservation.address,
      dateText: formattedDate,
      timeText: reservation.timeSlot || 'To be scheduled',
      guestsText: reservation.guests ? `${reservation.guests} ${reservation.guests > 1 ? 'Guests' : 'Guest'}` : undefined,
      guests: reservation.guests,
      tableText: reservation.table || 'Assigned on arrival',
      reservationId: reservation.id,
      plan,
    };
  }, [params]);

  const plan = params.plan || {
    title: 'Premium Dining',
    benefits: ['25+ fresh flowers', 'Rose-petal centerpiece', 'LED candle set'],
    note: 'Upgrade for exclusive benefits!',
  };

  const handleConfirm = () => {
    navigation.navigate('PaymentSetup', {
      reservation: summary,
    });
  };

  const handleChangePlan = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.stack}>
          <ConfirmationHeader
            title="Reservation Confirmed!"
            subtitle="Your dining experience is all set."
            onBack={() => navigation.goBack()}
          />

          <ReservationSummaryCard summary={summary} />
          <PlanBenefitsCard plan={plan} />

          <View style={styles.copyBlock}>
            <Text style={styles.copyText}>
              Want more? Upgrade to Premium and unlock premium décor styling, special treats, and VIP table perks.
            </Text>
          </View>

          <PrimaryButton title="Confirm Reservation" onPress={handleConfirm} style={styles.primaryBtn} />
          <TouchableOpacity style={styles.linkBtn} onPress={handleChangePlan} activeOpacity={0.8}>
            <Text style={styles.linkText}>Change Your Plan</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F9FAFB' },
  content: {
    alignItems: 'center',
    paddingVertical: 32,
    paddingHorizontal: 20,
  },
  stack: {
    width: '100%',
    maxWidth: 512,
    alignItems: 'center',
  },
  copyBlock: {
    width: '100%',
    maxWidth: 512,
    marginBottom: 32,
  },
  copyText: { color: '#4B5563', fontSize: 14, lineHeight: 22, textAlign: 'center' },
  primaryBtn: {
    width: '100%',
    maxWidth: 512,
    height: 48,
    borderRadius: 16,
    marginBottom: 18,
  },
  linkBtn: { alignItems: 'center', width: '100%', maxWidth: 512 },
  linkText: { color: '#DC2626', fontWeight: '700', fontSize: 15 },
});

export default ReservationConfirmationScreen;

