import {StyleSheet} from 'react-native';
import {Colors} from '@constants/colors';
import {perfectSize} from '@globalStyles/index';
import {Fonts} from '@assets/Fonts';

export const styles = StyleSheet.create({
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: perfectSize(44),
    borderRadius: perfectSize(4),
    marginTop: perfectSize(10),
  },
  inputContainer: {flex: 1, justifyContent: 'center'},
  input: {
    flex: 1,
    paddingLeft: perfectSize(10),
    fontSize: perfectSize(14),
    lineHeight: perfectSize(16),
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 20,
    aspectRatio: 1,
    marginRight: perfectSize(15),
  },
  leftIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: perfectSize(18),
    aspectRatio: 1,
    marginLeft: perfectSize(15),
  },
  titleTextSTyle: {
    fontSize: perfectSize(14),
    lineHeight: perfectSize(16),
    color: Colors.textColor,
    fontFamily: Fonts.regular,
  },
  flexDirectionRow: {flexDirection: 'row'},
});
