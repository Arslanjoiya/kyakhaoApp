import React from 'react';
import { Switch } from 'react-native';

const ToggleField = ({ value = false, onChange }) => {
  return <Switch value={!!value} onValueChange={onChange} trackColor={{ false: '#E5E7EB', true: '#D42814' }} />;
};

export default ToggleField;


