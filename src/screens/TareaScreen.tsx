import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export const TareaScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.cajaMorada}/>
        <View style={styles.cajaNaranja}/>
        <View style={styles.cajaAzul}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#43456F',
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center'
    },
    cajaMorada : {
        //flex : 1,
        width: 100,
        height: 100,
        backgroundColor: '#E890FF',
        border : 10,
        borderColor : 'white',
        borderWidth : 10,
        // alignSelf : 'flex-end',
    },
    cajaNaranja : {
        //flex : 1,
        width: 100,
        height: 100,
        backgroundColor: '#FFC290',
        border : 10,
        borderColor : 'white',
        borderWidth : 10,
        alignSelf : 'flex-end',
    },
    cajaAzul : {
        //flex : 2,
        width: 100,
        height: 100,
        backgroundColor: '#90E6FF',
        border : 10,
        borderColor : 'white',
        borderWidth : 10,
        // alignSelf : 'flex-start',
    },
});
