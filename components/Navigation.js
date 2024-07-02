import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function Navigation({ setCurrentScreen }) {
  return (
    <View style={styles.navContainer}>
      <Pressable onPress={() => setCurrentScreen('Products')}>
        <Text style={styles.navItem}>Products</Text>
      </Pressable>
      <Pressable onPress={() => setCurrentScreen('Checkout')}>
        <Text style={styles.navItem}>Checkout</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#ccc',
    padding: 10,
  },
  navItem: {
    fontSize: 18,
  },
});
