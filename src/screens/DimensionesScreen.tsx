import React from 'react'
import { Text, View, StyleSheet, useWindowDimensions } from 'react-native';


//Desestrucutrar lo que devuelve Dimensions.get (width y height)
//Poco eficiente porque no se actualiza cuando se da la vuelta al dispositivo
//const {width, height} = Dimensions.get('window');

export const DimensionesScreen = () => {

    //Mejor usar la API de useWindowDimensions();
    const {width, height} = useWindowDimensions();

  return (
    <View>
        <View style={styles.container}>
            <Text>DimensionesScreen</Text>
            <View style={{
                //Desestructurar styles.cajaMorada y asi accedemos a las propiedades del estilo
                ...styles.cajaMorada,
                width: width * .20,
                height: height * .80,
                }}>
            </View>
            <View style={styles.cajaNaranja}></View>
        </View>
        <Text style={styles.title}>W: {width}, H: {height}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        width: '100%',
        height: '50%',
        backgroundColor: 'red',
    },
    cajaMorada : {
        //width : 50,
        //height : 50,
        backgroundColor: '#F555FF',
    },
    cajaNaranja : {
        width : 50,
        height : 50,
        backgroundColor: '#FFA555',
    },
    title: {
        textAlign: 'center',
    },
});
