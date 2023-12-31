import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';


interface Props{
    title : string;
    onPress : () => void;
    position ?: 'br' | 'bl'; //Botom right o botom left
    //? significa que es opcional recibir esta propiedad
}

export const Fbtn = ({title, onPress, position = 'br'}: Props) => {
  return (
    <TouchableOpacity
        //Si recibe bl (botonLeft) devuelve fabLocationBL sino devuelve BR
        style={
            (position === 'bl') ? styles.fabLocationBL : styles.fabLocationBR
        }
        //Se ejecuta la función que recibe en los props
        onPress={onPress}
    >
        <View style={styles.boton}>
            <Text style={styles.btnText}>{title}</Text>
        </View>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
    fabLocationBR: {
        position: 'absolute',
        bottom: 30,
        right: 30
    },
    fabLocationBL: {
        position: 'absolute',
        bottom: 30,
        left: 30
    },
    boton: {
        backgroundColor: '#55FFCE', 
        borderRadius: 100, 
        width: 60,
        height: 60,
        justifyContent: 'center',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    btnText: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
    }
})