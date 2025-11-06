import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import RestaurantPicker from '../../components/reservations/RestaurantPicker';
import DatePickerField from '../../components/reservations/DatePickerField';
import TimeSlotGrid from '../../components/reservations/TimeSlotGrid';
import GuestStepper from '../../components/reservations/GuestStepper';
import OccasionPicker from '../../components/reservations/OccasionPicker';
import DecorPicker from '../../components/reservations/DecorPicker';
import PrimaryButton from '../../components/reservations/PrimaryButton';
import SecondaryButton from '../../components/reservations/SecondaryButton';
import FormSection from '../../components/reservations/FormSection';
import useReservationForm from '../../state/reservations/useReservationForm';

const ReserveTableScreen = ({ navigation, route }) => {
  const { form, handlers, slots, restaurants, submit, submitting } = useReservationForm(route?.params || {});

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Reserve Your Table</Text>
        <Text style={styles.subtitle}>Book a premium dining experience with ease.</Text>

        <FormSection title="Restaurant">
          <RestaurantPicker
            value={form.restaurantId}
            options={restaurants}
            onChange={handlers.setRestaurant}
          />
        </FormSection>

        <FormSection title="Date">
          <DatePickerField value={form.date} onChange={handlers.setDate} />
        </FormSection>

        <FormSection title="Time Slot">
          <TimeSlotGrid
            slots={slots}
            value={form.timeSlotId}
            onChange={handlers.setTimeSlot}
          />
        </FormSection>

        <FormSection title="Guests">
          <GuestStepper value={form.guests} onChange={handlers.setGuests} />
        </FormSection>

        <FormSection title="Occasion (Optional)">
          <OccasionPicker value={form.occasion} onChange={handlers.setOccasion} />
        </FormSection>

        <FormSection title="Add table décor">
          <DecorPicker value={form.addDecor} onChange={handlers.setAddDecor} />
        </FormSection>

        <PrimaryButton title="Reserve Table" onPress={submit} loading={submitting} style={{ marginTop: 12 }} />
        <SecondaryButton title="Cancel" onPress={() => navigation.goBack()} style={{ marginTop: 12 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  container: { padding: 16, paddingBottom: 32 },
  title: { fontSize: 24, fontWeight: '800', color: '#111', marginBottom: 4 },
  subtitle: { fontSize: 13, color: '#6B7280', marginBottom: 16 },
});

export default ReserveTableScreen;


