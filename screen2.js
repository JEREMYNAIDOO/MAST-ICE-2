// Screen2.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Screen2({ route }) {
  const { studentNumber, name, surname } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome, {name} {surname}!</Text>
      <Text style={styles.studentNumberText}>Student Number: {studentNumber}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e6fa', // Lavender background color
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  studentNumberText: {
    fontSize: 18,
  },
});
