import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '@screens/Home';
import {useSelector} from 'react-redux';
import {RootState} from '@redux/store';
import {ICountry} from '@redux/reducer/authSlice';
import {SetUpProfile} from '@screens/SetUpProfile';
import {Profile} from '@screens/Profile';

export type AppStackParamList = {
  home: undefined;
  setUpProfile: undefined;
  profile: undefined;
};
const Stack = createNativeStackNavigator<AppStackParamList>();

const AppNav = () => {
  const {loginData} = useSelector<RootState, ICountry>(
    state => state.authSliceReducer,
  );
  const {info} = loginData;

  const appNavInitialRoute: keyof AppStackParamList =
    info.username && info.first_name && info.last_name
      ? 'home'
      : 'setUpProfile';

  return (
    <Stack.Navigator
      initialRouteName={appNavInitialRoute}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'home'} component={Home} />
      <Stack.Screen name={'setUpProfile'} component={SetUpProfile} />
      <Stack.Screen name={'profile'} component={Profile} />
    </Stack.Navigator>
  );
};

export default AppNav;
