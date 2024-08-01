import {StyleSheet} from 'react-native';
import {Colors} from '@constants/colors';
import {perfectSize} from '@globalStyles/index';
import {Fonts} from '@assets/Fonts';

export const styles = StyleSheet.create({
  backgroundButton: {
    borderRadius: perfectSize(8),
    justifyContent: 'center',
    alignItems: 'center',
    height: perfectSize(44),
    backgroundColor: Colors.themOrange,
  },
  outlinedButton: {
    borderRadius: perfectSize(8),
    borderWidth: perfectSize(1),
    borderColor: Colors.themOrange,
    justifyContent: 'center',
    alignItems: 'center',
    height: perfectSize(44),
  },
  textButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: perfectSize(44),
  },
  touchTxt: {
    fontSize: perfectSize(16),
    lineHeight: perfectSize(18),
    color: Colors.white,
    fontFamily: Fonts.regular,
  },
  outLineText: {
    color: Colors.themOrange,
  },
  buttonMainView: {flexDirection: 'row', alignItems: 'center'},
  rightIconStyle: {
    height: perfectSize(16),
    width: perfectSize(16),
    marginLeft: perfectSize(5),
  },
  loaderStyle: {position: 'absolute', alignSelf: 'center'},
});
