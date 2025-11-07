import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BenefitItem = ({ text }) => (
  <View style={styles.benefitRow}>
    <Text style={styles.bullet}>✔</Text>
    <Text style={styles.benefitText}>{text}</Text>
  </View>
);

const PlanBenefitsCard = ({ plan }) => {
  if (!plan) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.planTitle}>Your Current Plan: {plan.title}</Text>
      <View style={styles.benefitsList}>
        {(plan.benefits || []).map((benefit) => (
          <BenefitItem key={benefit} text={benefit} />
        ))}
      </View>
      {plan.note ? <Text style={styles.note}>{plan.note}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 512,
    borderRadius: 16,
    backgroundColor: '#FEF2F2',
    paddingHorizontal: 24,
    paddingVertical: 24,
    marginBottom: 32,
  },
  planTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#DC2626',
    marginBottom: 16,
  },
  benefitsList: { marginBottom: 16 },
  benefitRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  bullet: { color: '#DC2626', fontSize: 16, marginRight: 10 },
  benefitText: { color: '#374151', fontSize: 14, flex: 1, lineHeight: 20 },
  note: { color: '#DC2626', fontSize: 13, fontWeight: '600' },
});

export default PlanBenefitsCard;

