import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default ({label, placeholder, value, type, onChange, height = 40}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={{...styles.input, height: height}}
        placeholder={placeholder}
        value={value}
        onChangeText={(text) => onChange(type, text)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
    width: '100%'
  },
  label: {
    fontSize: 12,
    fontWeight: 500,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#627BBB',
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 8,
    width: '100%',
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.5)',
    height: 40
  },
});