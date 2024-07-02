import React from 'react'
import { View,Text,StyleSheet } from 'react-native'

export default function Header() {
  return (
    <View style={Styles.header}>
        <Text style={Styles.headerText}>Simple Shopping App</Text>
    </View>
  )
}

const Styles = StyleSheet.create({
    header: {
        marginTop: 20,
        padding: 10,
        backgroundColor: 'coral',
        alignItems : 'center',
        justifyContent : 'center',
        color: 'white'
    },
    headerText : {
        fontSize: 18,
    }
})