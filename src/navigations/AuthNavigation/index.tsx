import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from '@screens/Login';
import {CreateNewAccount} from '@screens/CreateAccount';

export type AuthStackParamList = {
  login: undefined;
  createNewAccount: undefined;
  
};
const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNav = () => {
  return (
    <Stack.Navigator
      initialRouteName={'login'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'login'} component={Login} />
      <Stack.Screen name={'createNewAccount'} component={CreateNewAccount} />
    </Stack.Navigator>
  );
};

export default AuthNav;
