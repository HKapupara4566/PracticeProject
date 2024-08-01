import {PrefixIcon, RukkorLogoRound, UserCircle} from '@assets/Svg';
import Button from '@components/Button';
import {CustomHeader} from '@components/Header';
import InputComponent from '@components/Input';
import {Colors} from '@constants/colors';
import {perfectSize} from '@globalStyles/index';
import React, {useEffect, useState} from 'react';
import ActionSheet from 'react-native-action-sheet';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {CountryPicker} from '@components/CountryPicker';

import {
  Asset,
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '@redux/store';
import {ICountry} from '@redux/reducer/authSlice';
import {Info, updateProfileAction, UserInfo} from '@redux/actions/authActions';
import Toast from 'react-native-toast-message';
import {styles} from './styles';

export const Profile = () => {
  const insets = useSafeAreaInsets();
  const [selectedCountryData, setSelectedCountryData] = useState({});

  const [profileData, setProfileData] = useState<UserInfo>({} as UserInfo);
  const {loginData} = useSelector<RootState, ICountry>(
    state => state.authSliceReducer,
  );
  const dispatch = useDispatch<AppDispatch>();

  const {info} = loginData;

  useEffect(() => {
    setProfileData(info);
  }, [info]);

  const handleChoosePhoto = () => {
    const options = {
      mediaType: 'photo' as const,
      includeBase64: false,
    };

    launchImageLibrary(options, (response: ImagePickerResponse) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        Toast.show({
          type: 'error',
          text1: response.errorMessage ?? 'Something went wrong.',
        });
      } else {
        let image = (response.assets && (response.assets[0]?.uri ?? '')) ?? '';
        setProfileData({...profileData, user_picture: image});
      }
    });
  };

  const handleTakePhoto = () => {
    const options = {
      mediaType: 'photo' as const,
      includeBase64: false,
    };

    launchCamera(options, (response: ImagePickerResponse) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        Toast.show({
          type: 'error',
          text1: response.errorMessage ?? 'Something went wrong.',
        });
      } else {
        let image = (response.assets && (response.assets[0]?.uri ?? '')) ?? '';

        setProfileData({...profileData, user_picture: image});
      }
    });
  };

  const actionPickerSheet = () => {
    const BUTTONSandroid = ['Choose Photo', 'Take Photo', 'Close'];

    ActionSheet.showActionSheetWithOptions(
      {
        options: BUTTONSandroid,
        cancelButtonIndex: 2,
        destructiveButtonIndex: -1,
        tintColor: Colors.lightSky,
      },
      buttonIndex => {
        if (buttonIndex === 0) {
          handleChoosePhoto();
        } else if (buttonIndex === 1) {
          handleTakePhoto();
        }
      },
    );
  };

  const onPressSaveAndContinue = async () => {
    let updatedProfileData = {
      ...profileData,
      alias: 'alias',
      alias_picture: 'alias_picture',
      status: 'Online',
      organization: 'organization',
      profile: 'profile',
      work_place: 'Dignizant Tech.',
      work_role: 'Backend dev',
      dob: 20220515,
      language: 'english',
    };
    if (!updatedProfileData?.user_picture) {
      Toast.show({
        type: 'error',
        text1: 'Please select image.',
      });
      return;
    }
    if (!updatedProfileData?.username) {
      Toast.show({
        type: 'error',
        text1: 'Please enter username.',
      });
      return;
    }
    if (!updatedProfileData?.first_name) {
      Toast.show({
        type: 'error',
        text1: 'Please enter first name.',
      });
      return;
    }
    if (!updatedProfileData?.last_name) {
      Toast.show({
        type: 'error',
        text1: 'Please enter last name.',
      });
      return;
    }
    if (!updatedProfileData?.phone_country) {
      Toast.show({
        type: 'error',
        text1: 'Please select county code.',
      });
      return;
    }
    if (!updatedProfileData?.phone) {
      Toast.show({
        type: 'error',
        text1: 'Please enter phone number.',
      });
      return;
    }
    if (updatedProfileData?.phone?.length != 10) {
      Toast.show({
        type: 'error',
        text1: 'Please enter valid phone number.',
      });
      return;
    }

    let updateResponse = await dispatch(
      updateProfileAction({profileData: updatedProfileData}),
    );

    if (updateResponse.payload.status == 1) {
      Toast.show({
        type: `success`,
        text1: updateResponse.payload.message,
      });
    } else {
      Toast.show({
        type: 'error',
        text1: updateResponse.payload,
      });
    }
  };

  return (
    <>
      <SafeAreaView style={styles.safeAreaStyle} />
      <View style={styles.mainViewStyle}>
        <CustomHeader title="Real ID" />
     
        <KeyboardAwareScrollView style={styles.flex1}>
          <View style={styles.flex1}>
            <View style={styles.imageMainView}>
              {profileData?.user_picture ? (
                <Image
                  source={{uri: profileData?.user_picture}}
                  style={styles.imageStyle}
                />
              ) : (
                <View style={styles.userIconStyle}>
                  <UserCircle
                    width={'100%'}
                    height={'100%'}
                    color={Colors.grayIcon}
                  />
                </View>
              )}
              <TouchableOpacity
                onPress={actionPickerSheet}
                style={styles.prefixIconStyle}>
                <PrefixIcon
                  width={'100%'}
                  height={'100%'}
                  color={Colors.darkGray}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.allInputsViewStyle}>
              <InputComponent
                leftIconName="email"
                value={profileData.primary_email}
                onChangeText={(text: string) => {}}
                style={styles.inputStyle}
                title="E-mail"
                disable
                placeholder={'Enter your e-mail'}
                keyboardType="email-address"
              />
              <InputComponent
                leftIconName="atTheRate"
                value={profileData.username}
                onChangeText={(text: string) => {
                  setProfileData({
                    ...profileData,
                    username: text,
                    alias_name: text,
                  });
                }}
                style={styles.inputStyle}
                title="Username*"
                placeholder={'Username'}
              />
              <InputComponent
                leftIconName="user"
                value={profileData.first_name}
                onChangeText={(text: string) => {
                  setProfileData({...profileData, first_name: text});
                }}
                style={styles.inputStyle}
                title="First name *"
                placeholder={'First name'}
              />
              <InputComponent
                leftIconName="user"
                value={profileData.last_name}
                onChangeText={(text: string) => {
                  setProfileData({...profileData, last_name: text});
                }}
                style={styles.inputStyle}
                title="Last name *"
                placeholder={'Last name'}
              />
              <View style={styles.flexDirectionRow}>
                <CountryPicker
                  selectedCountryData={selectedCountryData as Info}
                  onSelectCountry={data => {
                    setSelectedCountryData(data);
                    let countryCode = `+${data.callingCodes[0]}`;
                    setProfileData({
                      ...profileData,
                      phone_country: countryCode,
                      mobile_country: countryCode,
                    });
                  }}
                />
                <View style={{flex: 1, marginLeft: perfectSize(10)}}>
                  <InputComponent
                    leftIconName="phone"
                    value={profileData.phone}
                    onChangeText={(text: string) => {
                      setProfileData({
                        ...profileData,
                        phone: text,
                        mobile: text,
                      });
                    }}
                    keyboardType="phone-pad"
                    style={styles.inputStyle}
                    title="Mobile"
                    maxLength={10}
                    placeholder={'xxx - xx xx xxx'}
                  />
                </View>
              </View>
            </View>
          </View>
          <View
            style={[
              styles.buttonViewStyle,
              {
                marginBottom: insets.bottom ?? 0,
              },
            ]}>
            <Button
              labelText={'Save and continue'}
              rightIcon
              onPress={onPressSaveAndContinue}
            />
            <View
              style={styles.logoIconStyle}>
              <RukkorLogoRound height={'100%'} width={'100%'} />
            </View>
          </View>
        </KeyboardAwareScrollView>

      </View>
    </>
  );
};
