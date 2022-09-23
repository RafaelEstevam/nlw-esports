import React from 'react';
import { View, Text, ViewProps } from 'react-native';
import { TitleProps } from '../../interfaces/Interfaces';
import { styles } from './styles';

export function Title({title, subtitile, align}: TitleProps) {
  return (
    <View style={styles.container}>
        <Text style={{...styles.title,...{textAlign: align}}}>{title}</Text>
        <Text style={{...styles.subtitle,...{textAlign: align}}}>{subtitile}</Text>
    </View>
  );
}