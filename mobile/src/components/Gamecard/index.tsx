import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, ImageBackground, ImageSourcePropType } from 'react-native';
import { THEME } from '../../theme';
import { styles } from './styles';
import {GameInterface} from '../../interfaces/Game.interface';
import { GameCardProps } from '../../interfaces/Interfaces';

export function Gamecard({data, ...rest}:GameCardProps) {
    const navigation = useNavigation();
    const handleOpenGame = ({id, name, thumbnail}: GameInterface) => {
        navigation.navigate(`game`, {id, name, thumbnail});
    }

  return (
    <TouchableOpacity style={styles.container} {...rest} onPress={() => handleOpenGame(data)}>
        <ImageBackground style={styles.wrapper} source={{uri: data.thumbnail}}>
            <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
                <Text style={styles.name}>
                    {data.name}
                </Text>
                <Text style={styles.ads}>
                    {data?.adsCount} anúncio(s)
                </Text>
            </LinearGradient>
        </ImageBackground>
    </TouchableOpacity>
  );
}