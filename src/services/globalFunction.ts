import {Dimensions, Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';

export const hasNotch = () => {
  const {height, width} = Dimensions.get('window');
  const aspectRatio = height / width;
  if (Platform.OS === 'ios') {
    return aspectRatio > 2.1;
  }
  if (Platform.OS === 'android') {
    return aspectRatio > 2.1 && Platform.Version >= 27;
  }
  return false;
};

export const getDeviceUniqueId = async () => {
  try {
    const deviceId = await DeviceInfo.getUniqueId();
    return deviceId;
  } catch (error) {
    console.error('Error getting device ID:', error);
  }
};

export const getDeviceName = async () => {
  try {
    const deviceName = await DeviceInfo.getDeviceName();
    return deviceName;
  } catch (error) {
    console.error('Error getting device name:', error);
  }
};

export const getOSVersion = async () => {
  try {
    const osVersion = await DeviceInfo.getSystemVersion();
    return osVersion;
  } catch (error) {
    console.error('Error getting OS version:', error);
  }
};

export const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password: string) => {
  const minLength = 10;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSymbol = /[!@#$%^&*]/.test(password);

  return (
    password.length >= minLength &&
    hasUppercase &&
    hasLowercase &&
    hasNumber &&
    hasSymbol
  );
};
