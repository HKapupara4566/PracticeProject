import {Platform, StyleSheet} from 'react-native';
import {create} from 'react-native-pixel-perfect';

interface IDesignResolution {
  width: number;
  height: number;
}

const designResolution: IDesignResolution = {
  width: 375,
  height: 812,
};

export const perfectSize = create(designResolution);

export const authStyles = StyleSheet.create({});

export const shadowStyle = Platform.select({
  ios: {
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.15,
    shadowRadius: 7,
  },
  android: {
    elevation: 5,
  },
});
