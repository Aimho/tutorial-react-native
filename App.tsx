/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ForgotPassword from './src/pages/ForgotPassword';
import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';

const Stack = createNativeStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Group screenOptions={{ presentation: 'transparentModal' }}>
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Password" component={ForgotPassword} />
      </Stack.Group>
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
