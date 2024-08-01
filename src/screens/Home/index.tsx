import Button from '@components/Button';
import {CustomHeader} from '@components/Header';
import {AuthStackParamList} from '@navigations/AuthNavigation';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ICountry, logout} from '@redux/reducer/authSlice';
import {AppDispatch, RootState} from '@redux/store';
import React from 'react';
import {Alert, SafeAreaView, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './styles';

export const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {loginData} = useSelector<RootState, ICountry>(
    state => state.authSliceReducer,
  );
  const {info} = loginData;
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const onLogout = () => {
    Alert.alert(
      'Are you sure you want to logout?',
      '',
      [
        {
          text: 'No',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            dispatch(logout());
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{name: 'stackNav'}],
              }),
            );
          },
        },
      ],
      {cancelable: true},
    );
  };

  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <View style={styles.mainViewStyle}>
        <View style={styles.flex1}>
          <CustomHeader title="Home" />
          <Text>{`You have logged in as ${info.primary_email}`}</Text>
        </View>
        <Button labelText={'Logout'} onPress={onLogout} />
      </View>
    </SafeAreaView>
  );
};
