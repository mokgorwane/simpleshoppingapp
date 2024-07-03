import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function Navigation({ setCurrentScreen }) {
  return (
    <View style={styles.navContainer}>
      <Pressable onPress={() => setCurrentScreen('Products')} style={styles.nav}>
        <Entypo name="home" size={24} color="black" />
        <Text style={styles.navItem}>Products</Text>
      </Pressable>
      <Pressable onPress={() => setCurrentScreen('Checkout')} style={styles.nav}>
        <Entypo name="shop" size={24} color="black" />
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
  nav: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  navItem: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});
