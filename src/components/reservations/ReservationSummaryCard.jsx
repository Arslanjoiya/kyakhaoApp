import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InfoRow = ({ icon, label, value }) => (
  <View style={styles.row}>
    <Text style={styles.rowIcon}>{icon}</Text>
    <Text style={styles.rowLabel}>{label}</Text>
    <Text style={styles.rowValue}>{value}</Text>
  </View>
);

const ReservationSummaryCard = ({ summary }) => {
  if (!summary) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.restaurant}>{summary.restaurantName}</Text>
        {summary.address ? <Text style={styles.address}>{summary.address}</Text> : null}
      </View>
      <View style={styles.divider} />
      <InfoRow icon="📅" label="Date" value={summary.dateText || 'TBD'} />
      <InfoRow icon="⏰" label="Time" value={summary.timeText || 'TBD'} />
      <InfoRow icon="👥" label="Guests" value={summary.guestsText || '—'} />
      <InfoRow icon="🍽" label="Table" value={summary.tableText || 'Assigned on arrival'} />
      <InfoRow icon="#" label="Reservation ID" value={summary.reservationId || 'Pending'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 512,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#F87171',
    backgroundColor: '#FFF6F6',
    paddingHorizontal: 28,
    paddingVertical: 24,
    marginBottom: 32,
  },
  header: { marginBottom: 16 },
  restaurant: {
    fontSize: 20,
    fontWeight: '800',
    color: '#DC2626',
    marginBottom: 6,
  },
  address: { color: '#6B7280', fontSize: 14, lineHeight: 20 },
  divider: { height: 1, backgroundColor: '#FECACA', marginVertical: 16 },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  rowIcon: { fontSize: 18, width: 28 },
  rowLabel: { fontSize: 14, color: '#6B7280', width: 120 },
  rowValue: { fontSize: 15, fontWeight: '600', color: '#111', flex: 1 },
});

export default ReservationSummaryCard;

