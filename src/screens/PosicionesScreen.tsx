import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export const PosicionesScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.cajaMorada}></View>
        <View style={styles.cajaNaranja}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#A7FFEC',
        flexDirection: 'row',
    },
    cajaMorada: {
        //Usando posicion absolute
        width: 100,
        height: 100,
        backgroundColor: '#E4A7FF',
        borderWidth: 10,
        borderColor: 'white',
        /*
        position: 'absolute',
        top: 0,
        left: 0,*/
    },
    cajaNaranja: {
        //Usando posicion absolute
        width: 100,
        height: 100,
        backgroundColor: '#FFCBA7',
        borderWidth: 10,
        borderColor: 'black',
        /*
        position: 'absolute',
        right: 0,
        bottom: 0,*/
    },
});