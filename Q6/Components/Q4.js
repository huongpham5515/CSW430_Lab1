import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, ScrollView } from 'react-native';

export default function Hailstone() {
  const [number, setNumber] = useState('');
  const [sequence, setSequence] = useState([]);

  const hailstoneSequence = () => {
    let n = parseInt(number, 10);
    if (isNaN(n) || n <= 0) {
      Alert.alert('Error', 'Please enter a positive number');
      return;
    }

    const newArray = [n];
    while (n !== 1) {
      if (n % 2 === 0) {
        n = n / 2;
      } else {
        n = n * 3 + 1;
      }
      newArray.push(n);
    }
    setSequence(newArray);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Hailstone Sequence</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter a positive number"
        keyboardType="numeric"
        value={number}
        onChangeText={setNumber}
      />

      <Button title="Generate" onPress={hailstoneSequence} />

      {sequence.length > 0 && (
        <Text style={styles.result}>
          Sequence: {sequence.join(', ')}
        </Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
    fontSize: 16,
    lineHeight: 22,
  },
});
