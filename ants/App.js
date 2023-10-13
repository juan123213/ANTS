import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MenuScreen from './menu/menu'; // Importa la pantalla del menú
import { Alert } from 'react-native';
import GastoHormigaScreen from './menu/gastoHormiga'; // Importa la pantalla de "Ingresar Gasto Hormiga"


const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Principal' }}
        />
        <Stack.Screen
          name="Menu"
          component={MenuScreen}
          options={{ title: 'Menú' }}
        />
        <Stack.Screen
         name="GastoHormiga"
         component={GastoHormigaScreen}
         options={{ title: 'Ingresar Gasto Hormiga' }}
  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function LoginScreen({ navigation }) {
  const [username, setUsername] = useState(''); // Define username aquí

  const handleLogin = () => {
    // Implementa la lógica de inicio de sesión aquí
    console.log('Usuario:', username);
    console.log('Contraseña:'); // Agrega la lógica que necesites

    // Redirige a la pantalla del menú después del inicio de sesión
    navigation.navigate('Menu');
  };

  const handleCancel  = () => {
    console.log('Botón de cancelar presionado');
    Alert.alert('Muchas gracias', '¡Gracias por visitar nuestra aplicación!', [
    { text: 'OK', onPress: () => console.log('Mensaje de agradecimiento cerrado') },
  ]);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./recursos/Logo.jpeg')}
        style={styles.logo}
      />
      <Text style={styles.projectName}>ANTS</Text>
      <TextInput
        style={styles.input}
        placeholder="Usuario"
        onChangeText={(text) => setUsername(text)} // Actualiza el estado de username
        value={username} // Utiliza el valor de username
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry={true}
      />
      <Button title="Iniciar Sesión" onPress={handleLogin} style={styles.button} />
      <View style={{ marginTop: 10 }} /> {/* Espacio entre los botones */}
      <Button title="Cancelar" onPress={handleCancel} style={styles.button} />
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA500',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200, // Establece el ancho deseado
    height: 200, // Establece la altura deseada
  },
  projectName: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  button: {
    marginTop: 10,
    marginBottom: 10,
  },
});
