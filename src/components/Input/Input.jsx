import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const Input = ({ 
  placeholder, 
  value, 
  onChangeText, 
  secureTextEntry = false,
  icon: Icon,
  style,
  ...props 
}) => {
  return (
    <View style={[styles.container, style]}>
      {Icon && (
        <View style={styles.iconContainer}>
          <Icon width={20} height={20} fill="#999" />
        </View>
      )}
      <TextInput
        style={[styles.input, Icon && styles.inputWithIcon]}
        placeholder={placeholder}
        placeholderTextColor="#999"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        {...props}
      />
      <View style={styles.underline} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
    width: '100%',
  },
  iconContainer: {
    position: 'absolute',
    left: 0,
    top: 12,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    fontSize: 16,
    color: '#000',
    paddingVertical: 12,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  inputWithIcon: {
    paddingLeft: 32,
  },
  underline: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginTop: -1,
  },
});

export default Input;

