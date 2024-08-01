import React from 'react'

import { shadowStyle } from '@globalStyles/index'
import { ActivityIndicator, Text, TextStyle, View } from 'react-native'
import Toast, { ToastConfig, ToastConfigParams, ToastProps } from 'react-native-toast-message'

import { styles } from './styles'
import { Colors } from '@constants/colors'
import { AlertTriangle, CheckRight, XClose } from '@assets/Svg'

interface ToastTextProps {
  text: string
  highlightedText?: string
  highlightedStyle?: TextStyle
  onPress?: () => void
}

const ToastText = ({ text, highlightedText, highlightedStyle, onPress }: ToastTextProps) => {
  if (!highlightedText) {
    return (
      <Text onPress={onPress} disabled={!onPress}>
        {text}
      </Text>
    )
  }

  const index = text.toLowerCase().search(highlightedText.toLowerCase())
  const firstHalf = text.slice(0, index)
  const match = text.slice(index, index + highlightedText.length)
  const secondHalf = text.slice(index + highlightedText.length, text.length)

  const handlePress = () => {
    Toast.hide()
    if (onPress) {
      onPress()
    }
  }

  return (
    <View style={styles.flexDirectionRow}>
      <Text style={styles.text}>{firstHalf}</Text>
      <View style={highlightedStyle}>
        <Text onPress={handlePress} disabled={!onPress} style={[styles.highlightedText, highlightedStyle]}>
          {match}
        </Text>
      </View>
      <Text style={styles.text}>{secondHalf}</Text>
    </View>
  )
}

interface CustomToastProps extends ToastProps {
  text1?: string
  icon: JSX.Element
  highlightedText?: string
  highlightedStyle?: TextStyle
  onPress?: () => void
}

const CustomToast = ({ text1, icon, highlightedText, highlightedStyle, onPress }: CustomToastProps) => {
  return (
    <View style={styles.transparentContainer}>
      <View style={[styles.container, shadowStyle]}>
        <View style={styles.row}>
          {icon && <View style={styles.iconContainer}>{icon}</View>}
          {!!text1 && (
            <ToastText
              onPress={onPress}
              text={text1}
              highlightedText={highlightedText}
              highlightedStyle={highlightedStyle}
            />
          )}
        </View>
      </View>
    </View>
  )
}

export const toastConfig: ToastConfig = {
  error: (props: ToastConfigParams<CustomToastProps>) => (
    <CustomToast
      {...props}
      text1={props.text1}
      icon={<XClose color={Colors.error} height={'100%'} width={'100%'} />}
      highlightedText={props.props.highlightedText}
      highlightedStyle={props.props.highlightedStyle}
      onPress={props.props.onPress}
    />
  ),
  success: (props: ToastConfigParams<CustomToastProps>) => (
    <CustomToast
      {...props}
      text1={props.text1}
      icon={<CheckRight color={Colors.liteGreen} height={'100%'} width={'100%'} />}
      highlightedText={props.props.highlightedText}
      highlightedStyle={props.props.highlightedStyle}
      onPress={props.props.onPress}
    />
  ),
  warning: (props: ToastConfigParams<CustomToastProps>) => (
    <CustomToast
      {...props}
      text1={props.text1}
      icon={<AlertTriangle color={Colors.warning} height={'100%'} width={'100%'} />}
      highlightedText={props.props.highlightedText}
      highlightedStyle={props.props.highlightedStyle}
      onPress={props.props.onPress}
    />
  ),
  loading: (props: ToastConfigParams<CustomToastProps>) => (
    <CustomToast
      {...props}
      autoHide={false}
      text1={props.text1}
      icon={<ActivityIndicator animating size="small" />}
      highlightedText={props.props.highlightedText}
      highlightedStyle={props.props.highlightedStyle}
      onPress={props.props.onPress}
    />
  ),
}
