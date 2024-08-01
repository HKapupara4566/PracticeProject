import {Fonts} from '@assets/Fonts';
import {Colors} from '@constants/colors';
import {perfectSize} from '@globalStyles/index';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  optionContainerStyle: {
    backgroundColor: Colors.white,
    paddingHorizontal: perfectSize(10),
    paddingVertical: perfectSize(6),
    borderRadius: perfectSize(8),
    marginTop: perfectSize(25),
    width: perfectSize(150),
  },
  optionsWrapperStyle: {
    backgroundColor: Colors.white,
  },
  optionWrapperStyle: {
    marginTop: perfectSize(-5),
  },
  optionTextStyle: {
    color: Colors.black,
  },
  countryTextStyle: {
    fontSize: perfectSize(14),
    lineHeight: perfectSize(16),
    color: Colors.textColor,
    fontFamily: Fonts.regular,
  },
  pickerMainView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: perfectSize(44),
    backgroundColor: Colors.inputGrayBG,
    borderRadius: perfectSize(4),
    marginTop: perfectSize(10),
  },
  liftIconStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: perfectSize(18),
    aspectRatio: 1,
    marginLeft: perfectSize(15),
  },
  marginLeft5: {marginLeft: perfectSize(5)},
  downIconStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: perfectSize(14),
    aspectRatio: 1,
    marginLeft: perfectSize(5),
    marginRight: perfectSize(10),
  },
  height180: {height: perfectSize(180)},
  countryFlagView: {
    height: perfectSize(35),
    borderBottomWidth: perfectSize(1),
    borderBottomColor: Colors.grayIcon,
    flexDirection: 'row',
    alignItems: 'center',
  },
  countryFlagIcon: {
    height: perfectSize(24),
    width: perfectSize(30),
    resizeMode: 'contain',
    marginLeft: perfectSize(5),
  },
  codeTextStyle: {
    flex: 1,
    marginLeft: perfectSize(20),
    fontFamily: Fonts.regular,
  },
});
