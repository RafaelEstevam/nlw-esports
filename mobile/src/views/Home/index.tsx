import React, {useEffect, useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { api } from '../../services/api';
import { View, Image, FlatList, ActivityIndicator } from 'react-native';
import { GameInterface } from '../../interfaces/Game.interface';
import logo from '../../assets/logo-nlw-esports.png';
import { Gamecard } from '../../components/Gamecard';
import { Title } from '../../components/Title';

import { styles } from './styles';

export function Home() {

    const [games, setGames] = useState<GameInterface[]>([]);

    const handleFetchGames = async () => {
        const response = await api.get<GameInterface[]>('/games');
        const gamesFormatted = response.data.map((game) => ({
            ...game,
            adsCount: game.ads?.length ?? 0,
            id: game._id
        }));
        setGames(gamesFormatted);
    }

    useEffect(() => {
        handleFetchGames();
    }, [])

  return (
    <SafeAreaView style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <View style={styles.wrapper}>
            <Title title={'Encontre seu duo!'} subtitile={'Selecione o game que deseja jogar...'} align={'left'}/>
        </View>
        <View style={styles.container}>
            <FlatList
                data={games}
                keyExtractor={item => `${item?.id}${item?.name}` }
                renderItem={({item}) => (
                    <>
                        <Gamecard
                            data={item}
                        />
                    </>
                )}
                horizontal
                contentContainerStyle={styles.contentList}
            />
        </View>
    </SafeAreaView>
  );
}