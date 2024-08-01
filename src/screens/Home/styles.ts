import {Colors} from '@constants/colors';
import {perfectSize} from '@globalStyles/index';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  safeAreaStyle: {flex: 1, backgroundColor: Colors.white},
  mainViewStyle: {
    paddingHorizontal: perfectSize(30),
    flex: 1,
    marginVertical: perfectSize(20),
  },
  flex1: {flex: 1},
});
