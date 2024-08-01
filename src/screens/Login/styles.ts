import {Fonts} from '@assets/Fonts';
import {Colors} from '@constants/colors';
import {perfectSize} from '@globalStyles/index';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainViewStyle: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  logoViewStyle: {
    width: perfectSize(120),
    height: perfectSize(120),
    alignSelf: 'center',
    marginVertical: perfectSize(30),
  },
  subMainViewStyle: {flex: 1, paddingHorizontal: perfectSize(30)},
  inputStyle: {marginBottom: perfectSize(15)},
  languageTextStyle: {
    fontSize: perfectSize(14),
    lineHeight: perfectSize(16),
    color: Colors.textColor,
    fontFamily: Fonts.regular,
  },
  languageMainView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: perfectSize(44),
    borderRadius: perfectSize(4),
    marginTop: perfectSize(10),
    backgroundColor: Colors.inputGrayBG,
  },
  languageSubView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: perfectSize(18),
    aspectRatio: 1,
    marginLeft: perfectSize(15),
  },
  languageTextSubStyle: {
    fontSize: perfectSize(14),
    lineHeight: perfectSize(16),
    color: Colors.textColor,
    marginLeft: perfectSize(10),
    fontFamily: Fonts.regular,
  },
  loginAndCreateButtonView: {
    marginBottom: perfectSize(10),
    paddingHorizontal: perfectSize(35),
  },
  createButtonStyle: {marginTop: perfectSize(15)},
});
