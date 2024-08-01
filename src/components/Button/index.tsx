import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
  TouchableOpacityProps,
  ActivityIndicator,
} from 'react-native';
import {styles} from './styles';
import {perfectSize} from '@globalStyles/index';
import {RightArrow} from '@assets/Svg';
import {Colors} from '@constants/colors';

interface ButtonProps extends TouchableOpacityProps {
  labelText: string;
  disabled?: boolean;
  onPress: () => void;
  buttonType?: 'outLine' | 'textBtn' | 'background';
  style?: ViewStyle;
  rightIcon?: boolean;
  isLoading?: boolean
}

const Button: React.FC<ButtonProps> = ({
  labelText,
  disabled = false,
  onPress,
  buttonType,
  style,
  rightIcon,
  isLoading,
  ...props
}) => {
  const buttonStyle = () => {
    switch (buttonType) {
      case 'outLine':
        return styles.outlinedButton;
      case 'textBtn':
        return styles.textButton;
      default:
        return styles.backgroundButton;
    }
  };
  const textStyle = () => {
    switch (buttonType) {
      case 'outLine':
        return styles.outLineText;
      case 'textBtn':
        return styles.outLineText;
      default:
        return {};
    }
  };
  return (
    <View style={[style,{justifyContent:'center'}]}>
      <TouchableOpacity
        disabled={isLoading || disabled}
        onPress={onPress}
        style={[buttonStyle(),{opacity:isLoading ? 0.3:1}]}
        {...props}>
        <View style={styles.buttonMainView}>
          <Text style={[styles.touchTxt, textStyle()]}>{labelText}</Text>
          {rightIcon && (
            <View
              style={styles.rightIconStyle}>
              <RightArrow height={'100%'} width={'100%'} color={Colors.white} />
            </View>
          )}
        </View>
      </TouchableOpacity>
      {isLoading&&
      <View style={styles.loaderStyle}>
        <ActivityIndicator color={Colors.themOrange} />
      </View>}
    </View>
  );
};

export default Button;
