import React from 'react';
import { ImageBackground } from 'react-native';
import { styles } from './styles';
import backgroundImg from '../../assets/background-galaxy.png';
import { BackgroundInterface } from '../../interfaces/Interfaces';

export function Background({children}:BackgroundInterface) {
  return (
    <ImageBackground
        source={backgroundImg}
        style={styles.container}
        defaultSource={backgroundImg}
    >
        {children}
    </ImageBackground>
  );
}