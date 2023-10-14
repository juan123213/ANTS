import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack=createNativeStackNavigator()

import ListaUsuariosScreen from './screens/Usuario/ListaUsuariosScreen';
import CrearUsuarioFormulario from './screens/Usuario/CrearUsuarioScreen';
import RegistrarGastoFormulario from './screens/Gasto/RegistrarGastoScreen';

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="RegistrarGastoFormulario" component={RegistrarGastoFormulario} />
      <Stack.Screen name="CrearUsuarioFormulario" component={CrearUsuarioFormulario} />
      <Stack.Screen name="ListaUsuariosScreen" component={ListaUsuariosScreen} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
   <NavigationContainer>
      <MyStack />
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
