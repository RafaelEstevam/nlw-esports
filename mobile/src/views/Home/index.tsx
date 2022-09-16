import React from 'react';
import { View, Image, FlatList } from 'react-native';
import logo from '../../assets/logo-nlw-esports.png';
import { Gamecard, GamecardProps } from '../../components/Gamecard';
import { Title } from '../../components/Title';

import {GAMES} from '../../utils/games';

import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <View style={styles.wrapper}>
            <Title title={'Encontre seu duo!'} subtitile={'Selecione o game que deseja jogar...'} align={'left'}/>
        </View>
        <View style={styles.container}>
            <FlatList
                data={GAMES}
                keyExtractor={item=> item.id}
                renderItem={({item}) => (
                    <Gamecard
                        data={item}
                    />
                )}
                horizontal
                contentContainerStyle={styles.contentList}
            />
        </View>
    </View>
  );
}