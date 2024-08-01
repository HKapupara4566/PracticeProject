import React from 'react';
import {CustomHeader} from '@components/Header';
import {Colors} from '@constants/colors';
import {SafeAreaView, Text, View} from 'react-native';
import {RukkorLogoRound, UserShield} from '@assets/Svg';
import Button from '@components/Button';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {styles} from './styles';
import {AppStackParamList} from '@navigations/AppNavigation';

interface IdCardContainerProps {
  title: string;
  detailText: string;
  cardIcon: React.JSX.Element;
}

const IdCardContainer = ({
  title,
  detailText,
  cardIcon,
}: IdCardContainerProps) => (
  <View style={styles.cardMainView}>
    <View style={styles.cardSubView}>
      <Text style={styles.cardTitleText}>{title}</Text>
      <View style={styles.cardIconStyle}>{cardIcon}</View>
    </View>
    <View style={styles.flex1}>
      <Text style={styles.detailTextStyle}>{detailText}</Text>
    </View>
  </View>
);

export const SetUpProfile = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackParamList>>();

  const onPressNext = () => {
    navigation.navigate('profile');
  };

  const onPressGoHome = () => {
    navigation.navigate('home');
  };
  return (
    <SafeAreaView style={styles.safeAreaViewStyle}>
      <CustomHeader title="Set up your profiles" />
      <View style={styles.mainViewStyle}>
        <Text style={styles.accountDetailTextStyle}>
          A Rukkor account is associated with two profiles, one which we call
          Real ID and one which is your Alias. You choose in which settings you
          wish to expose your true identity and in which you wish to use an
          alias.
        </Text>
        <IdCardContainer
          title={'Real ID'}
          detailText={
            'With Real ID you can disclose your personal details like name, phone number, birthday, e-mail and more. Use your Real ID when interacting with trusted family, friends and colleagues.'
          }
          cardIcon={
            <UserShield
              height={'100%'}
              width={'100%'}
              color={Colors.themOrange}
            />
          }
        />
        <IdCardContainer
          title={'Alias'}
          detailText={
            'Using your Alias you can choose an additional @alias with which you can join Spaces and interact with other users in communities where you’re not comfortable sharing your personal details.'
          }
          cardIcon={
            <UserShield
              height={'100%'}
              width={'100%'}
              color={Colors.themOrange}
            />
          }
        />
      </View>
      <View style={styles.buttonsViewStyle}>
        <Button
          labelText={'Next'}
          rightIcon
          onPress={onPressNext}
          style={styles.marginBottom15}
        />
        <Button labelText={'Go to Home'} rightIcon onPress={onPressGoHome} />
        <View style={styles.logoStyle}>
          <RukkorLogoRound height={'100%'} width={'100%'} />
        </View>
      </View>
    </SafeAreaView>
  );
};
