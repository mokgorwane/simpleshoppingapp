import React from 'react';
import { View, Text, FlatList, Alert, StyleSheet,Image ,TouchableOpacity} from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';

const products = [
  { id: '1', name: 'Nike Air Force 1' , price: 'R 1,899.95' , image :'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c3e76e1a-901f-42a4-b42f-e74db52f322d/air-force-1-older-shoes-bm0wQG.png'},
  { id: '2', name: 'Jordan Stadium 90' , price: 'R 2,799.95' , image :'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/62f45ace-c852-414b-9989-3afc7b6a2e92/jordan-stadium-90-shoes-qT0NdR.png'},
  { id: '3', name: 'Jordan Stadium 90' , price: 'R 2,599.95' , image :'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/33f80c80-f5d8-47a9-8039-9f93c144ebd2/jordan-stadium-90-shoes-qT0NdR.png'},
  { id: '4', name: 'Air Jordan 1 Low' , price: 'R 2,599.95' , image :'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/fe0a757d-6982-44e0-988f-99ccf35a71e5/air-jordan-1-low-shoes-mP4JvT.png'},
  { id: '5', name: 'Jordan Spizike Low' , price: 'R 3,199.95' , image :'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3d66b7e3-9da2-4ccc-bf4c-f9231ebfaaa6/jordan-spizike-low-shoes-lGNCtG.png'},
  { id: '6', name: 'Jordan True Flight' , price: 'R 2,799.95' , image :'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/95b79b5e-e4e5-42a2-bec1-0be3de0dcb95/jordan-true-flight-shoes-mbgz7G.png'},

  { id: '7', name: 'Nike Air Max 90' , price: 'R 2,999.95' , image :'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/314b78ca-1829-475e-8276-92a706ea9613/air-max-90-shoes-kSkVjL.png'},

  { id: '8', name: 'Nike Air Max 90 EasyOn' , price: 'R 1,699.95' , image :'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a8ef7523-22e1-4980-bb0b-b1c7c77fd7a7/air-max-90-easyon-younger-shoes-cfGsf7.png'},

  { id: '9', name: 'Nike Air Max INTRLK Lite' , price: 'R 1,499.95' , image :'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c28779d6-b220-4c82-b390-f2bb0a9c3831/air-max-intrlk-lite-older-shoes-cV2zWX.png'},

  { id: '10', name: 'Nike Air Max 1' , price: 'R 2,799.95' , image :'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c5ff2a6b-579f-4271-85ea-0cd5131691fa/air-max-1-shoes-D0zBzs.png'}, 
];

export default function Products({ addToCheckout }) {

  function handlePress(item) {
    addToCheckout(item)
    Alert.alert(item.name, ' Added to the checkout.')
  }
  return (
    <View style={styles.container}>
        <FlatList
          numColumns={2}
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
                <Image
                  source={{ uri: `${item.image}` }}
                  style={styles.image}
                />
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>{item.price}</Text>
              <TouchableOpacity 
                style={styles.button}
                onPress={() => handlePress(item)}
              ><Entypo name="shopping-cart" size={18} color="white" />
                <Text style={styles.buy}>Buy</Text>
              </TouchableOpacity>
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

    button: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 5,
      fontSize: 16,
      borderColor: '#ddd',
      borderStyle: 'solid',
      borderWidth: 1,
      backgroundColor: 'black',
      borderRadius: 10,
      width: '100%',
    },
    buy: { 
      fontSize: 20,
      color: 'white',
      margin: 2,
      fontWeight: 'bold',
    },

    name: { 
      fontSize: 16,
      fontWeight: 'bold',
      alignSelf: 'flex-start',
    },
    price: { 
      marginTop: 10,
      fontSize: 16,
      marginBottom: 5,
      fontWeight: 'bold',
      alignSelf: 'flex-start',
    },
    itemContainer: {
      backgroundColor: 'white',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      borderColor: 'black',
      borderStyle: 'solid',
      margin: 4,
      borderRadius: 5,
      shadowColor: '#000',
      shadowOffset: { width: 2, height: 2 }, 
      shadowOpacity: 0.3,
      shadowRadius: 5,
      elevation: 5,
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 5,
},
});
