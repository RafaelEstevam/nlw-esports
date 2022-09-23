import React, { Dispatch, SetStateAction } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {CheckCircle} from 'phosphor-react-native';

import { styles } from './styles';
import { THEME } from '../../theme';
import { ModalContentInterface } from '../../interfaces/Interfaces';

export function ModalContent({action, discord}:ModalContentInterface) {

  return (
    <View style={styles.centeredView}>
        <View style={styles.modalView}>
            <View style={{...styles.container, ...{alignItems: 'flex-end'}}}>
                <TouchableOpacity style={styles.closeButton} onPress={() => action(false)}>
                    <Text style={{...styles.subtitle, ...{fontSize: 20}}}>
                        X
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <CheckCircle size={60} color={THEME.COLORS.SUCCESS} />
                <View style={{...styles.container, ...{marginTop: 24}}}>
                    <Text style={styles.title}>Let's play</Text>
                    <Text style={styles.subtitle}>Agora é só começar a jogar</Text>
                </View>
            </View>

            <View style={{...styles.container, ...{marginTop: 24}}}>
                <Text style={styles.subtitle}>Adicione no discord</Text>
                <View style={styles.discord}>
                    <Text style={styles.discordSub}>{discord}</Text>
                </View>
            </View>

            {/* <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => action(false)}
            >
            <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable> */}
        </View>
    </View>
  );
}