import {Colors} from '@constants/colors';
import {perfectSize} from '@globalStyles/index';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  safeAreaStyle: {backgroundColor: Colors.white},
  mainViewStyle: {flex: 1, backgroundColor: Colors.white},
  flex1: {flex: 1},
  imageMainView: {
    width: perfectSize(126),
    height: perfectSize(126),
    borderRadius: perfectSize(80),
    backgroundColor: Colors.inputGrayBG,
    alignSelf: 'center',
    marginTop: perfectSize(30),
  },
  imageStyle: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    borderRadius: perfectSize(80),
  },
  userIconStyle: {flex: 1, padding: perfectSize(35)},
  prefixIconStyle: {
    height: perfectSize(24),
    width: perfectSize(24),
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  allInputsViewStyle: {
    paddingHorizontal: perfectSize(30),
    marginTop: perfectSize(10),
  },
  inputStyle: {marginBottom: perfectSize(15)},
  flexDirectionRow: {flexDirection: 'row'},
  buttonViewStyle: {
    paddingHorizontal: perfectSize(35),
    marginTop: perfectSize(20),
  },
  logoIconStyle: {
    width: perfectSize(40),
    height: perfectSize(40),
    alignSelf: 'center',
    marginVertical: perfectSize(10),
  },
});
