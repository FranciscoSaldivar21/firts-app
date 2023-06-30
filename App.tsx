import React from 'react';
import { SafeAreaView } from 'react-native';
import { FlexScren } from './src/screens/FlexScren';
import { TareaScreen } from './src/screens/TareaScreen';
//import { PosicionesScreen } from './src/screens/PosicionesScreen';
//import { ContadorScreen } from './src/screens/ContadorScreen';
//import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
//import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
//import { DimensionesScreen } from './src/screens/DimensionesScreen';

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#43456F'}}>
      <TareaScreen/>
    </SafeAreaView>
    //<FlexScren/>
    //<DimensionesScreen/>
    //<PosicionesScreen/>
    //<BoxObjectModelScreen/>
    /*<ContadorScreen/>*/
    //<HolaMundoScreen/>
  );
};

//Se usa en caso de que se quite la palabra export de la funcion del App
//export default App;
