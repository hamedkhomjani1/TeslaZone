import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, View } from 'react-native';
import CarItem from './components/CarItem/carItem';
import CarList from './components/CarsList/carList';


export default function App() {
  return (
    <View style={styles.container}>

      <CarList />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
