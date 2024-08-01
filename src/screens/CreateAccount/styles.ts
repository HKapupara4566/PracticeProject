import {Colors} from '@constants/colors';
import {perfectSize} from '@globalStyles/index';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainView: {flex: 1, backgroundColor: Colors.white},
  subMainView: {
    flex: 1,
    paddingHorizontal: perfectSize(30),
    marginTop: perfectSize(30),
  },
  inputStyle: {marginBottom: perfectSize(15)},
  passwordDetailTextView: {flex: 1, justifyContent: 'center'},
  passwordDetailTextSubView: {
    padding: perfectSize(8),
    backgroundColor: Colors.themLightOrange,
    borderRadius: perfectSize(8),
  },
  passwordDetailTextStyle: {
    fontSize: perfectSize(14),
    lineHeight: perfectSize(21),
    color: Colors.black,
  },
  buttonsView: {paddingHorizontal: perfectSize(35)},
  createAccountButtonStyle: {marginTop: perfectSize(10)},
  logoStyle: {
    width: perfectSize(40),
    height: perfectSize(40),
    alignSelf: 'center',
    marginVertical: perfectSize(10),
  },
});
