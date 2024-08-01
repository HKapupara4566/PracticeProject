import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthNav from './AuthNavigation';
import AppNav from './AppNavigation';
import {useSelector} from 'react-redux';
import {RootState} from '@redux/store';
import {ICountry} from '@redux/reducer/authSlice';

export type RootStackParamList = {
  home: undefined;
  stackNav: undefined;
};

function MainNav() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const {loginData} = useSelector<RootState, ICountry>(
    state => state.authSliceReducer,
  );

  let Navigator = AuthNav;
  if (loginData?.jwt_token) {
    Navigator = AppNav;
  }

  return (
    <Stack.Navigator
      initialRouteName="stackNav"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={'stackNav'} component={Navigator} />
    </Stack.Navigator>
  );
}

function Navigation() {
  return <NavigationContainer>{MainNav()}</NavigationContainer>;
}

export default Navigation;
