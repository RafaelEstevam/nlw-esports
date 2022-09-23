import React from 'react';
import { View, Image } from 'react-native';
import { BannerInterface } from '../../interfaces/Interfaces';
import { styles } from './styles';

export function Banner({id, name, thumbnail}:BannerInterface) {
  return (
    <View style={{...styles.wrapper, ...{paddingBottom: 0}}}>
        <Image source={{uri:thumbnail}} style={styles.banner} />
    </View>
  );
}