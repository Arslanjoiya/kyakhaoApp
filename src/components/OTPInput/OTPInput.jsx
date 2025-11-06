import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const OTPInput = React.forwardRef(({ value, onChangeText, onKeyPress, isFocused, onFocus, ...props }, ref) => {
  return (
    <View style={styles.container}>
      <TextInput
        ref={ref}
        style={[styles.input, isFocused && styles.inputFocused]}
        value={value}
        onChangeText={onChangeText}
        onKeyPress={onKeyPress}
        onFocus={onFocus}
        keyboardType="number-pad"
        maxLength={1}
        textAlign="center"
        {...props}
      />
    </View>
  );
});

OTPInput.displayName = 'OTPInput';

const styles = StyleSheet.create({
  container: {
    width: 56,
    height: 56,
    marginHorizontal: 8,
  },
  input: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  inputFocused: {
    borderColor: '#E53935',
    backgroundColor: '#fff',
  },
});

export default OTPInput;

