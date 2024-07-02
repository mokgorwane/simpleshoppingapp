import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

export default function Checkout({ checkoutItems, removeFromCheckout, navigateToOrderSuccess }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={checkoutItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text>{item.name}</Text>
            <Button title="Remove" onPress={() => removeFromCheckout(item)} />
          </View>
        )}
      />
      <Button title="Place Order" onPress={navigateToOrderSuccess} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
