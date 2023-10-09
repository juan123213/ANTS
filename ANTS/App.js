import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack=createNativeStackNavigator()

import UsersList from './screens/UsersList';

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="UsersList" component={UsersList} />
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
