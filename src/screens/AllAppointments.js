import axios from 'axios';
import {  useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';


function AllAppointments() {


  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>All Appointments</Text>  
      <Text>All Appointments</Text>
    </View>
  );
}

export default AllAppointments;

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