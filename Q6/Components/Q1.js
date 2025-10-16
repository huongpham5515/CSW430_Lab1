import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

function EmployeeAlertScreen(props) {
  return (
    <View style={styles.alertBox}>
      <Text style={styles.title}>Updated Information:</Text>
      <Text>Full Name: {props.name}</Text>
      <Text>Age: {props.age}</Text>
      <Text>Occupation: {props.occupation}</Text>
    </View>
  );
}

export default function EmployeeScreen() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [occupation, setOccupation] = useState('');
  const [updatedData, setUpdatedData] = useState(null);

  const handleUpdate = () => {
    if (name && age && occupation) {
      setUpdatedData({ name, age, occupation });
      Alert.alert('Success', 'Update successfully');
    } else {
      Alert.alert('Error', 'Please fill in all fields');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Employee Information</Text>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />
      <TextInput
        style={styles.input}
        placeholder="Occupation"
        value={occupation}
        onChangeText={setOccupation}
      />

      <Button title="Update" onPress={handleUpdate} />

      {updatedData && (
        <EmployeeAlertScreen
          name={updatedData.name}
          age={updatedData.age}
          occupation={updatedData.occupation}
        />
      )}
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
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },
  alertBox: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 15,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
