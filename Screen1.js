// Screen1.js

import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function Screen1({ navigation }) {
  const [studentNumber, setStudentNumber] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const handleSubmit = () => {
    navigation.navigate('Screen2', { studentNumber, name, surname });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Student Number"
        value={studentNumber}
        onChangeText={setStudentNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Surname"
        value={surname}
        onChangeText={setSurname}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5dc', // Beige background color
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
});
