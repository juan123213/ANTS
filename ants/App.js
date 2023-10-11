import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, Button, Image } from 'react-native';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implementa la lógica de inicio de sesión aquí
    console.log('Usuario:', username);
    console.log('Contraseña:', password);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./recursos/Logo.jpeg')} // Ruta de la imagen en tu proyecto
        style={styles.logo} // Estilo para el tamaño de la imagen
      />
      <Text style={styles.projectName}>ANTS</Text>
      <TextInput
        style={styles.input}
        placeholder="Usuario"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
        value={password}
      />
      <Button title="Iniciar Sesión" onPress={handleLogin} style={styles.button} />
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
