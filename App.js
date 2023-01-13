import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AnaSayfa from './screens/AnaSayfa';
import QrTarayici from './screens/QrTarayici';
const Stack = createStackNavigator();
function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Ana Sayfa" component={AnaSayfa} />
      <Stack.Screen name="QR Tarayıcı" component={QrTarayici} />
    </Stack.Navigator>
  );
}
export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}
