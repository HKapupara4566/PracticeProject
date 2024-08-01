import React, {useState} from 'react';
import {
  TextInput,
  View,
  TextInputProps,
  DimensionValue,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {
  AtTheRate,
  EmailIcon,
  Eye,
  HideEye,
  LanguageIcon,
  LockIcon,
  PhoneIcon,
  UserIcon,
} from '@assets/Svg';
import {styles} from './styles';
import {Colors} from '@constants/colors';

interface InputComponentProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  placeholderTextColor?: string;
  svgWidth?: DimensionValue | number | undefined;
  svgHeight?: DimensionValue | number | undefined;
  leftIconName?: 'user' | 'lock' | 'language' | 'email' | 'atTheRate' | 'phone';
  marginTop?: number;
  title?: string;
  secureTextEntry?: boolean;
  style?: ViewStyle;
  disable?: boolean;
  rightTitle?: string;
}

const InputComponent: React.FC<InputComponentProps> = ({
  value,
  onChangeText,
  placeholder,
  placeholderTextColor,
  leftIconName,
  title,
  secureTextEntry,
  style,
  disable,
  rightTitle,
  ...props
}) => {
  const [isSecureText, setIsSecureText] = useState<boolean>(true);
  const renderIcon = () => {
    switch (leftIconName) {
      case 'user':
        return (
          <UserIcon width={'100%'} height={'100%'} color={Colors.textColor} />
        );
      case 'lock':
        return (
          <LockIcon width={'100%'} height={'100%'} color={Colors.textColor} />
        );
      case 'email':
        return (
          <EmailIcon
            width={'100%'}
            height={'100%'}
            color={disable ? Colors.white : Colors.textColor}
          />
        );
      case 'atTheRate':
        return (
          <AtTheRate width={'100%'} height={'100%'} color={Colors.textColor} />
        );
      case 'phone':
        return (
          <PhoneIcon width={'100%'} height={'100%'} color={Colors.textColor} />
        );
      case 'language':
        return (
          <LanguageIcon
            width={'100%'}
            height={'100%'}
            color={Colors.textColor}
          />
        );
      default:
        return null;
    }
  };
  return (
    <View style={style}>
      <View style={styles.flexDirectionRow}>
        <Text style={[styles.titleTextSTyle, {flex: 1}]}>{title}</Text>
        {rightTitle && (
          <TouchableOpacity>
            <Text style={[styles.titleTextSTyle, {color: Colors.themOrange}]}>
              {rightTitle}
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <View
        style={[
          styles.subContainer,
          {
            backgroundColor: disable ? Colors.grayIcon : Colors.inputGrayBG,
          },
        ]}>
        {leftIconName && (
          <View style={styles.leftIconContainer}>{renderIcon()}</View>
        )}

        <View style={styles.inputContainer}>
          <TextInput
            editable={!disable}
            style={[
              styles.input,
              {
                color: disable ? Colors.white : Colors.black,
              },
            ]}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            secureTextEntry={secureTextEntry && isSecureText}
            {...props}
          />
        </View>

        {secureTextEntry && (
          <TouchableOpacity
            onPress={() => setIsSecureText(!isSecureText)}
            style={styles.iconContainer}>
            {!isSecureText ? (
              <Eye height={'100%'} width={'100%'} color={Colors.textColor} />
            ) : (
              <HideEye
                height={'100%'}
                width={'100%'}
                color={Colors.textColor}
              />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default InputComponent;
