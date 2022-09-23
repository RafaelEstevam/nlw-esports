import React,  {Dispatch, SetStateAction} from 'react';
import { GameController } from "phosphor-react-native";
import { Text, TouchableOpacityProps, View, TouchableOpacity } from 'react-native';

import {AdsInterface} from '../../interfaces/Ads.interface';
import { styles } from './styles';
import { THEME } from '../../theme';
import { AdsPropsInterface } from '../../interfaces/Interfaces';

export function Adscard({data, action, setDiscord, ...rest}:AdsPropsInterface) {

  return (
    <View style={styles.card}>
        <View style={styles.wrapper}>
            <Text style={{...styles.text}}>Nome</Text>
            <Text style={{...styles.text, ...styles.label}}>{data.nameNickName}</Text>
        </View>
        <View style={styles.wrapper}>
            <Text style={{...styles.text}}>Tempo de jogo</Text>
            <Text style={{...styles.text, ...styles.label}}>{data.xyYears}</Text>
        </View>
        <View style={styles.wrapper}>
            <Text style={{...styles.text}}>Disponibilidade</Text>
            <View>
              <Text style={{...styles.text, ...styles.label}}>{data.daysToPlay.length} dias</Text>
            </View>
        </View>
        <View style={styles.wrapper}>
            <Text style={{...styles.text}}>Chamada de áudio</Text>
            <Text style={{...styles.text, ...styles.label, ...{color: data.connectToTalk ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}}}>
              {data.connectToTalk ? 'Sim' : 'Não'}
            </Text>
        </View>
        
        <View>
          <TouchableOpacity style={styles.button} onPress={() => {
            action(true);
            setDiscord(data.discord);
          }}>
            <GameController color={THEME.COLORS.TEXT} size={20} />
            <Text style={{...styles.text, ...styles.label}}>Conectar</Text>
          </TouchableOpacity>
        </View>
        
    </View>
  );
}