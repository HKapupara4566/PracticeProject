import {DownIcon, LanguageIcon} from '@assets/Svg';
import {Colors} from '@constants/colors';
import React, {useEffect} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';
import {styles} from './styles';
import {ScrollView} from 'react-native-gesture-handler';
import {AppDispatch, RootState} from '@redux/store';
import {useDispatch, useSelector} from 'react-redux';
import {getCountyDataAction, Info} from '@redux/actions/authActions';
import {ICountry} from '@redux/reducer/authSlice';

interface CountryPickerProps {
  onSelectCountry: (item: Info) => void;
  selectedCountryData: Info;
}

export const CountryPicker = ({
  onSelectCountry = () => {},
  selectedCountryData,
}: CountryPickerProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const {countries} = useSelector<RootState, ICountry>(
    state => state.authSliceReducer,
  );

  let {info} = countries;

  const getCountryData = async () => {
    await dispatch(getCountyDataAction());
  };

  useEffect(() => {
    getCountryData();
  }, []);

  return (
    <View>
      <Text style={styles.countryTextStyle}>Country</Text>

      <TouchableOpacity style={styles.pickerMainView} activeOpacity={1}>
        <View style={styles.liftIconStyle}>
          <LanguageIcon
            width={'100%'}
            height={'100%'}
            color={Colors.textColor}
          />
        </View>
        <View style={styles.marginLeft5}>
          <Text
            style={[
              styles.countryTextStyle,
              {
                color: selectedCountryData?.callingCodes
                  ? Colors?.black
                  : Colors.grayIcon,
              },
            ]}>
            {selectedCountryData?.callingCodes
              ? `+${selectedCountryData?.callingCodes}`
              : '+##'}
          </Text>
        </View>
        <Menu>
          <MenuTrigger>
            <View style={styles.downIconStyle}>
              <DownIcon
                width={'100%'}
                height={'100%'}
                color={Colors.textColor}
              />
            </View>
          </MenuTrigger>
          <MenuOptions
            customStyles={{
              optionsContainer: styles.optionContainerStyle,
              optionsWrapper: styles.optionsWrapperStyle,
              optionWrapper: styles.optionWrapperStyle,
              optionText: styles.optionTextStyle,
            }}>
            <ScrollView style={styles.height180}>
              <FlatList
                data={info}
                scrollEnabled={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => {
                  return (
                    <MenuOption onSelect={() => onSelectCountry(item)}>
                      <View
                        key={item.alpha2Code}
                        style={styles.countryFlagView}>
                        <Image
                          source={{uri: item?.flags.png}}
                          style={styles.countryFlagIcon}
                        />
                        <Text style={styles.codeTextStyle}>
                          {item.alpha2Code}
                        </Text>
                        <Text>+{item.callingCodes}</Text>
                      </View>
                    </MenuOption>
                  );
                }}
              />
            </ScrollView>
          </MenuOptions>
        </Menu>
      </TouchableOpacity>
    </View>
  );
};
