import React from 'react'
import { View,Text,StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Header() {
  return (
    <View style={Styles.header}>
        <Text style={Styles.headerText}>
          <Text>Sneaker</Text>
          <AntDesign name="close" size={34} color="red" />
          <Text>Collector</Text>
        </Text>
    </View>
  )
}

const Styles = StyleSheet.create({
    header: {
        height: 80,
        flexDirection: 'row',
        backgroundColor: 'black',
        alignItems : 'center',
        justifyContent : 'flex-start',
        color: 'black',
        borderRadiusBottomLeft: 5,
        marginBottom: 7,
    },
    headerText : {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 10,
        color: 'white',
    }
})