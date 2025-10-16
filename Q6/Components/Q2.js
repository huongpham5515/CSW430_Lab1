import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

export default function SumDigitDisplay() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState(null);

  const calculateSum = () => {
    if (number && !isNaN(number) && String(number).length > 0) {
      const num = String(number);
      const first = parseInt(num[0], 10);
      const last = parseInt(num[num.length - 1], 10);
      setResult(first + last);
    } else {
      Alert.alert('Error', 'Please enter a valid number');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sum of First and Last Digit</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter a number"
        keyboardType="numeric"
        value={number}
        onChangeText={setNumber}
      />

      <Button title="Sum" onPress={calculateSum} />

      {result !== null && <Text style={styles.result}>Result: {result}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: '500',
  },
});
