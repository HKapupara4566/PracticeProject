import {Fonts} from '@assets/Fonts';
import {Colors} from '@constants/colors';
import {perfectSize} from '@globalStyles/index';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  titleStyle: {
    fontSize: perfectSize(24),
    lineHeight: perfectSize(36),
    color: Colors.textColor,
    textAlign: 'center',
    marginVertical: perfectSize(10),
    fontFamily: Fonts.regular,
  },
});
