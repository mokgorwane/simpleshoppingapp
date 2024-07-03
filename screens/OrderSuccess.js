import React from 'react';
import { View, Text, Button, StyleSheet,TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function OrderSuccess({ navigateBack }) {
  return (
    <View style={styles.container}>
      <View style={styles.stars}>
          <AntDesign name="star" size={54} color="gold" />
          <AntDesign name="star" size={94} color="gold" />
          <AntDesign name="star" size={54} color="gold" />
      </View>
      <Text style={styles.success}>Order Successful!</Text>
      <TouchableOpacity  onPress={navigateBack} style={styles.button}>
        <Text style={styles.backtext}>BACK TO PRODUCTS</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backtext : {
    color:  'white',
    fontSize: 20,
  },
  stars: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  success: {
   fontSize:  30,
   fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    borderColor: 'black',
  },
});
