import {RukkorLogoRound} from '@assets/Svg';
import Button from '@components/Button';
import {CustomHeader} from '@components/Header';
import InputComponent from '@components/Input';
import {AuthStackParamList} from '@navigations/AuthNavigation';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {createAccountAction} from '@redux/actions/authActions';
import {AppDispatch} from '@redux/store';
import {isValidEmail, validatePassword} from '@services/globalFunction';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import {useDispatch} from 'react-redux';
import { styles } from './styles';

interface accountDataParams {
  email: string;
  password: string;
  confirmPassword: string;
}

export const CreateNewAccount = () => {
  const [accountData, setAccountData] = useState<accountDataParams>({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const dispatch = useDispatch<AppDispatch>();

  const onPressCancelAccountCreation = () => {
    navigation.goBack();
  };

  const onPressNext = async () => {
    if (!accountData.email) {
      Toast.show({
        type: 'error',
        text1: 'Please enter email.',
      });
      return;
    }

    if (!accountData.password) {
      Toast.show({
        type: 'error',
        text1: 'Please enter password.',
      });
      return;
    }

    if (!accountData.confirmPassword) {
      Toast.show({
        type: 'error',
        text1: 'Please enter confirm password.',
      });
      return;
    }

    if (!isValidEmail(accountData.email)) {
      Toast.show({
        type: 'error',
        text1: 'Please enter valid email.',
      });
      return;
    }
    if (!validatePassword(accountData.password)) {
      Toast.show({
        type: 'error',
        text1: 'Please enter valid or strong password.',
      });
      return;
    }

    if (accountData.password !== accountData.confirmPassword) {
      Toast.show({
        type: 'error',
        text1: 'Password and confirm password does not match.',
      });
      return;
    }

    let createAccountResponse = await dispatch(
      createAccountAction({
        email: accountData.email,
        password: accountData.password,
      }),
    );
    if (createAccountResponse.payload.status == 1) {
      Toast.show({
        type: `success`,
        text1: createAccountResponse.payload.message,
      });
    } else {
      Toast.show({
        type: 'error',
        text1: createAccountResponse.payload,
      });
    }
  };

  return (
    <SafeAreaView style={styles.mainView}>
      <CustomHeader title="Create new account" />
      <View
        style={styles.subMainView}>
        <InputComponent
          leftIconName="email"
          value={accountData.email}
          onChangeText={(text: string) => {
            setAccountData({...accountData, email: text});
          }}
          style={styles.inputStyle}
          title="E-mail*"
          placeholder={'Enter your e-mail'}
          keyboardType='email-address'
        />
        <InputComponent
          leftIconName="lock"
          secureTextEntry
          value={accountData.password}
          onChangeText={(text: string) => {
            setAccountData({...accountData, password: text});
          }}
          style={styles.inputStyle}
          title="Password*"
          placeholder={'Enter your password'}
        />
        <InputComponent
          leftIconName="lock"
          secureTextEntry
          value={accountData.confirmPassword}
          onChangeText={(text: string) => {
            setAccountData({...accountData, confirmPassword: text});
          }}
          title="Confirm Password*"
          placeholder={'Confirm your password'}
        />

        <View style={styles.passwordDetailTextView}>
          <View
            style={styles.passwordDetailTextSubView}>
            <Text
              style={styles.passwordDetailTextStyle}>
              Pick a strong password, requirements are at least one of each,
              minimum 10 characters.
              {`\n\u2022 Uppercase letter ( A-Z )\n\u2022 Lowercase letter ( a-z )\n\u2022 Number ( 0-9 )\n\u2022 Symbol ( !@#$%^&* )`}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonsView}>
        <Button labelText={'Next'} rightIcon onPress={onPressNext} />
        <Button
          labelText={'Cancel account creation'}
          onPress={onPressCancelAccountCreation}
          buttonType="textBtn"
          style={styles.createAccountButtonStyle}
        />
        <View
          style={styles.logoStyle}>
          <RukkorLogoRound height={'100%'} width={'100%'} />
        </View>
      </View>
    </SafeAreaView>
  );
};
