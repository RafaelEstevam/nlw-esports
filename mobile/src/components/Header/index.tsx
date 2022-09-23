import React from 'react';
import {useNavigation} from '@react-navigation/native'
import { View, TouchableOpacity, Image } from 'react-native';
import logo from '../../assets/logo-nlw-esports.png';
import { Entypo } from "@expo/vector-icons";
import { THEME } from '../../theme';

import { styles } from './styles';

export function Header() {

  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  }

  return (
    <View style={{...styles.header, ...styles.wrapper}}>
        <TouchableOpacity style={styles.headerButton} onPress={handleGoBack}>
            <Entypo
                name="chevron-thin-left"
                color={THEME.COLORS.CAPTION_300}
                size={20}
            />
        </TouchableOpacity>
        <Image source={logo} style={styles.logo} />
        <View></View>
    </View>
  );
}