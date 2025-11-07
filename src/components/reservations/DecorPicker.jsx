import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ToggleField from './ToggleField';

const decorPlans = {
  Starter: [
    '25+ fresh flowers',
    'LED candle set',
    '3-color theme arrangement',
    'Rose-petal centerpiece',
    'Custom name banner/message',
  ],
  Plus: [
    'Everything in Starter',
    'Premium flower arrangements',
    'Ambient lighting setup',
    'Personalized table settings',
    'Photo backdrop',
  ],
  Premium: [
    'Everything in Plus',
    'Luxury flower arrangements',
    'Professional photography',
    'Live music setup',
    'Champagne service',
  ],
};

const DecorPicker = ({ value, onChange }) => {
  // value can be false or a plan string ('Starter' | 'Plus' | 'Premium')
  const [selectedPlan, setSelectedPlan] = useState(typeof value === 'string' ? value : 'Starter');

  useEffect(() => {
    if (typeof value === 'string') setSelectedPlan(value);
  }, [value]);

  const handleToggle = (enabled) => {
    if (enabled) {
      setSelectedPlan((p) => p || 'Starter');
      onChange && onChange('Starter');
    } else {
      onChange && onChange(false);
    }
  };

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    onChange && onChange(plan);
  };

  const enabled = !!value;

  return (
    <View>
      <ToggleField value={enabled} onChange={handleToggle} />

      {enabled && (
        <View style={styles.inlineBox}>
          <Text style={styles.inlineTitle}>Choose a décor level to match your table style.</Text>

          <View style={styles.planButtons}>
            {['Starter', 'Plus', 'Premium'].map((plan) => (
              <TouchableOpacity
                key={plan}
                style={[styles.planBtn, selectedPlan === plan && styles.planBtnActive]}
                onPress={() => handleSelectPlan(plan)}
                activeOpacity={0.85}
              >
                <Text style={[styles.planBtnText, selectedPlan === plan && styles.planBtnTextActive]}>
                  {plan}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.inclusionsBox}>
            <Text style={styles.inclusionsTitle}>{selectedPlan} Plan Inclusions</Text>
            {decorPlans[selectedPlan].map((item, idx) => (
              <Text key={idx} style={styles.inclusionItem}>• {item}</Text>
            ))}
          </View>

          <Text style={styles.disclaimer}>
            Décor is arranged by the restaurant based on availability.
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inlineBox: { marginTop: 12, borderWidth: 1, borderColor: '#E5E7EB', borderRadius: 12, padding: 16, backgroundColor: '#fff' },
  inlineTitle: { fontSize: 14, color: '#6B7280', marginBottom: 12 },
  planButtons: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  planBtn: {
    width: '32%',
    height: 36,
    borderRadius: 8,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  planBtnActive: {
    backgroundColor: '#D42814',
    borderColor: '#D42814',
  },
  planBtnText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111',
  },
  planBtnTextActive: {
    color: '#fff',
  },
  inclusionsBox: {
    backgroundColor: '#FDF2F8',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  inclusionsTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111',
    marginBottom: 12,
  },
  inclusionItem: {
    fontSize: 14,
    color: '#4B5563',
    marginBottom: 8,
    lineHeight: 20,
  },
  disclaimer: {
    fontSize: 12,
    color: '#9CA3AF',
    textAlign: 'center',
    marginBottom: 16,
  },
  actionRow: {
    flexDirection: 'row',
    gap: 12,
  },
  cancelBtn: {
    flex: 1,
    height: 44,
    borderRadius: 8,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#111',
  },
  confirmBtn: {
    flex: 1,
    height: 44,
    borderRadius: 8,
    backgroundColor: '#D42814',
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirmText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#fff',
  },
});

export default DecorPicker;

