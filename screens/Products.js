import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

const products = [
  { id: '1', name: 'Product 1' },
  { id: '2', name: 'Product 2' },
  { id: '3', name: 'Product 3' },
  { id: '4', name: 'Product 4' },
  { id: '5', name: 'Product 5' },
  { id: '6', name: 'Product 6' },
];

export default function Products({ addToCheckout }) {
  return (
    <View style={styles.container}>
        <Text style={styles.heading}>Select a product:</Text>
        <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <View style={styles.itemContainer}>
            <Text>{item.name}</Text>
            <Button title="Add to Checkout" onPress={() => addToCheckout(item)} />
            </View>
        )}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    heading: {
        marginTop : 10,
        marginBottom: 10,
        fontSize: 20,
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
  },
});
