import axios from 'axios';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Reports() {

  

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Reports</Text>  
      <Text>Reports</Text>
    </View>
  );
}

export default Reports;

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