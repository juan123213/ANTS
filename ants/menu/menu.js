// menu.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import GastoHormigaScreen from './gastoHormiga'; // Importa la pantalla de "Ingresar Gasto Hormiga"
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

function MenuScreen() {
  const navigation = useNavigation(); // Obtén la instancia de navegación

  const handleIngresarGasto = () => {
    //Logica del gasto hormiga
    navigation.navigate('GastoHormiga'); // Navega a la pantalla "GastoHormiga"
  };

  const handleAgregarPresupuesto = () => {
    //Logica del presupuesto mensual
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hola mundo</Text>
      <Button title="Ingresar Gasto Hormiga" onPress={handleIngresarGasto}/>
      <View style={{ marginTop: 50 }} /> {/* Espacio entre los botones */}
      <Button title="Ingresar Presupuesto" onPress={handleAgregarPresupuesto}/>
    </View>
  );
}

export default MenuScreen;
