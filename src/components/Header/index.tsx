import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {styles} from './styles';

interface CustomHeaderProps {
  title: string;
}

export const CustomHeader = ({title}: CustomHeaderProps) => {
  return (
    <SafeAreaView>
      <Text style={styles.titleStyle}>{title}</Text>
    </SafeAreaView>
  );
};
