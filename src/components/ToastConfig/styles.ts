import {Fonts} from '@assets/Fonts';
import {Colors} from '@constants/colors';
import {StyleSheet, TextStyle} from 'react-native';

const text: TextStyle = {
  fontSize: 14,
  color: Colors.grey,
};

export const styles = StyleSheet.create({
  transparentContainer: {
    marginTop: 20,
    width: '100%',
    backgroundColor: Colors.transparent,
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: Colors.white,
    borderRadius: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    height: 24,
    width: 24,
    marginRight: 10,
  },
  text,
  highlightedText: {
    ...text,
    borderBottomWidth: 1,
    borderColor: Colors.grey,
    fontFamily: Fonts.regular,
  },
  flexDirectionRow: {flexDirection: 'row'},
});
