import React, {useState} from 'react';
import {LanguageIcon, RukkorLogoRound} from '@assets/Svg';
import {Colors} from '@constants/colors';
import {SafeAreaView, Text, View} from 'react-native';
import InputComponent from '@components/Input';
import Button from '@components/Button';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackParamList} from '@navigations/AuthNavigation';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '@redux/store';
import {loginAction} from '@redux/actions/authActions';
import {ICountry} from '@redux/reducer/authSlice';
import Toast from 'react-native-toast-message';
import { Strings } from "@constants/string";
import { isValidEmail } from '@services/globalFunction';

export const Login = () => {
  const [email, setEmail] = useState<string>('test098@gmail.com');
  const [password, setPassword] = useState<string>('Test@12345');
  const {isLoading} = useSelector<RootState, ICountry>(
    state => state.authSliceReducer,
  );

  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const dispatch = useDispatch<AppDispatch>();

  const createNewAccountPress = () => {
    navigation?.navigate('createNewAccount');
  };

  const onLoginPress = async () => {
    if(!email)
    {
      Toast.show({
        type: 'error',
        text1: Strings.en.pleaseEnterEmail,
      })
      return
    }

    if(!isValidEmail(email))
      {
        Toast.show({
          type: 'error',
          text1: Strings.en.pleaseEnterValidEmail,
        })
        return
      }

    if(!password)
      {
        Toast.show({
          type: 'error',
          text1: Strings.en.pleaseEnterPassword,
        })
        return
      }

    let loginResponse =await dispatch(loginAction({email, password}));
    if(loginResponse?.payload?.status == 1)
    {
      Toast.show({
        type: `success`,
        text1: loginResponse?.payload.message,
      })
    }else{
      Toast.show({
        type: 'error',
        text1: loginResponse?.payload ?? Strings.en.someThingWrong,
      })
    }
    
  };
  return (
    <SafeAreaView style={styles.mainViewStyle}>
      <View style={styles.logoViewStyle}>
        <RukkorLogoRound height={'100%'} width={'100%'} />
      </View>
      <View style={styles.subMainViewStyle}>
        <InputComponent
          leftIconName="user"
          value={email}
          onChangeText={(text: string) => {
            setEmail(text);
          }}
          style={styles.inputStyle}
          title={Strings.en.eEmail}
          placeholder={Strings.en.enterEmail}
        />
        <InputComponent
          leftIconName="lock"
          secureTextEntry
          value={password}
          style={styles.inputStyle}
          onChangeText={(text: string) => {
            setPassword(text);
          }}
          rightTitle={Strings.en.forgotPassword}
          title={Strings.en.password}
          placeholder={Strings.en.enterPassword}
        />

        <Text style={styles.languageTextStyle}>{Strings.en.language}</Text>
        <View style={styles.languageMainView}>
          <View style={styles.languageSubView}>
            <LanguageIcon
              width={'100%'}
              height={'100%'}
              color={Colors.textColor}
            />
          </View>
          <Text style={styles.languageTextSubStyle}>{Strings.en.english}</Text>
        </View>
      </View>
      <View style={styles.loginAndCreateButtonView}>
        <Button labelText={Strings.en.login} isLoading={isLoading} onPress={onLoginPress} />
        <Button
          labelText={Strings.en.createNewAccount}
          onPress={createNewAccountPress}
          buttonType="outLine"
          style={styles.createButtonStyle}
        />
      </View>
    </SafeAreaView>
  );
};
