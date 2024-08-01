import {Fonts} from '@assets/Fonts';
import {Colors} from '@constants/colors';
import {perfectSize} from '@globalStyles/index';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  marginBottom15: {marginBottom: perfectSize(10)},
  cardMainView: {
    backgroundColor: Colors.inputGrayBG,
    flexDirection: 'row',
    padding: perfectSize(10),
    borderRadius: perfectSize(16),
    marginTop: perfectSize(15),
  },
  cardSubView: {
    alignItems: 'center',
    marginLeft: perfectSize(5),
    marginRight: perfectSize(10),
    justifyContent: 'space-evenly',
  },
  cardTitleText: {
    fontSize: perfectSize(24),
    lineHeight: perfectSize(36),
    fontFamily: Fonts.regular,
  },
  cardIconStyle: {
    height: perfectSize(60),
    width: perfectSize(60),
    padding: perfectSize(10),
    borderRadius: perfectSize(40),
    backgroundColor: Colors.white,
  },
  flex1: {flex: 1},
  detailTextStyle: {
    fontSize: perfectSize(14),
    lineHeight: perfectSize(21),
    marginLeft: perfectSize(5),
    fontFamily: Fonts.regular,
  },
  safeAreaViewStyle: {flex: 1, backgroundColor: Colors.white},
  mainViewStyle: {flex: 1, paddingHorizontal: perfectSize(30)},
  accountDetailTextStyle: {
    fontSize: perfectSize(14),
    lineHeight: perfectSize(21),
    color: Colors.black,
    fontFamily: Fonts.regular,
  },
  buttonsViewStyle: {paddingHorizontal: perfectSize(35)},
  logoStyle: {
    width: perfectSize(40),
    height: perfectSize(40),
    alignSelf: 'center',
    marginVertical: perfectSize(10),
  },
});
