import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


export default function Checkout({ checkoutItems, removeFromCheckout, navigateToOrderSuccess }) {
  return (
    checkoutItems.length === 0 ?  
      (
        <View style={styles.empty}>
          <AntDesign name="tag" size={54} color="black" />
          <Text style={styles.emptytext}>Your shopping basket is empty</Text>
        </View>
      ) : (
        <View style={styles.container}>
          <FlatList
            data={checkoutItems}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <Image
                  source={{ uri: item.image }}
                  style={styles.image}
                />
                <View style={styles.price}>
                  <Text>{item.name}</Text>
                  <Text>{item.price}</Text>
                </View>
                <TouchableOpacity onPress={() => removeFromCheckout(item)} style={styles.button}>
                  <AntDesign name="delete" size={16} color="white" />
                  <Text style={styles.buttontext}>REMOVE</Text>
                </TouchableOpacity>
              </View>
            )}
          />
          <TouchableOpacity onPress={navigateToOrderSuccess} style={styles.Checkoutbutton}>
            <Text style={styles.Checkouttext}>CheckOut Now</Text>
          </TouchableOpacity>
        </View>
      )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptytext: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  Checkouttext: {
    color: 'white',
    fontSize: 20,
    margin: 10,
  },
  buttontext: {
    color: 'white',
    fontSize: 10,
    margin: 5,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    gap: 4,
    marginRight: 2,
    backgroundColor: 'black',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 5,
  },
  Checkoutbutton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: 'black',
    borderRadius: 5,
    color: 'white',
    width: 200,
    alignSelf: 'center',
    marginBottom: 20,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 5,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
