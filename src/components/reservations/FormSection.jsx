import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FormSection = ({ title, children }) => (
  <View style={styles.wrap}>
    {!!title && <Text style={styles.title}>{title}</Text>}
    {children}
  </View>
);

const styles = StyleSheet.create({
  wrap: { marginBottom: 16 },
  title: { fontSize: 13, color: '#4B5563', marginBottom: 8 },
});

export default FormSection;


