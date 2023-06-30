/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';

export const HolaMundoScreen = () => {
  return (
    //El view es como un div
    <View style={{
      flex: 1,
      justifyContent: 'center',
    }}>
      <Text style={{
        fontSize: 45,
        textAlign: 'center',
      }}>Hola Mundo!!</Text>
    </View>
  );
};
