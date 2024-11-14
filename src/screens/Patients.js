import axios from 'axios';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';


function Patients() {



  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Patients</Text>  
      <Text>Patients</Text>
    </View>
  );
}

export default Patients;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});