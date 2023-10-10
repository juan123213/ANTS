import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const CreateUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const createUser = async () => {
    // Crea un objeto de user con los datos ingresados por el user
    const user = {
      name: name,
      email: email,
      password: password,
    };

    // Realiza una solicitud POST a tu API de FastAPI para registrar al user
    try {
      const response = await fetch('http://localhost:8000/usuario/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      // Verifica si la solicitud fue exitosa
      if (response.ok) {
        // El usuario se registró correctamente
        // Puedes redirigir al usuario o mostrar un mensaje de éxito
        console.log('usuario registrado exitosamente');
      } else {
        // Maneja errores de registro aquí
        console.error('Error al registrar usuario');
      }
    } catch (error) {
      console.error('Error de red al registrar usuario:', error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        placeholder="Correo Electrónico"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Button title="Registrar" onPress={createUser} />
    </View>
  );
};

export default CreateUser;
