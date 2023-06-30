/* eslint-disable no-trailing-spaces */
import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Fbtn } from '../components/Fbtn';

export const ContadorScreen = () => {
    const [contador, setcontador] = useState(0);

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Contador: {contador}</Text>
        <Fbtn
            title='+1'
            onPress = { () => setcontador( contador + 1)}
        />
        <Fbtn
            title='-1'
            onPress = { () => setcontador( contador - 1)}
            position = 'bl'
        />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
        color: 'black'
    },
})
