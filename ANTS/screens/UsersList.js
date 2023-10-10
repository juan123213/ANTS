import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

const UsersScreen = () => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/usuarios');
        const jsonData = await response.json();

        // Extrae los atributos 'name' y 'email' de cada usuario
        const formattedData = Object.values(jsonData).map((user) => ({
          name: user.name,
          email: user.email,
        }));

        setUsersData(formattedData);
      } catch (error) {
        console.error('Error al obtener la lista de usuarios:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      <Text>Lista de Usuarios:</Text>
      <FlatList
        data={usersData}
        keyExtractor={(user) => user.email}
        renderItem={({ item }) => (
          <View>
            <Text>Nombre: {item.name}</Text>
            <Text>Email: {item.email}</Text>
            {/* Puedes agregar más campos aquí si es necesario */}
          </View>
        )}
      />
    </View>
  );
};

export default UsersScreen;
