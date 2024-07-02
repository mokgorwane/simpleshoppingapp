import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function OrderSuccess({ navigateBack }) {
  return (
    <View style={styles.container}>
      <Text>Order Successful!</Text>
      <Button title="Back to Products" onPress={navigateBack} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
