import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

export default function MinNumber() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [num3, setNum3] = useState('');
  const [min, setMin] = useState(null);

  const findMinNumber = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    const n3 = parseFloat(num3);

    if (!isNaN(n1) && !isNaN(n2) && !isNaN(n3)) {
      setMin(Math.min(n1, n2, n3));
    } else {
      Alert.alert('Error', 'Please enter valid numbers');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Find Minimum Number</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter first number"
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter second number"
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter third number"
        keyboardType="numeric"
        value={num3}
        onChangeText={setNum3}
      />

      <Button title="Find" onPress={findMinNumber} />

      {min !== null && <Text style={styles.result}>Result: {min}</Text>}
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
