import React, {useEffect, useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {useRoute} from '@react-navigation/native'

import { View, FlatList, Modal, Text, Pressable, Alert } from 'react-native';
import { Title } from '../../components/Title';
import { styles } from './styles';
import { Header } from '../../components/Header';
import { Banner } from '../../components/Banner';
import { Adscard } from '../../components/Adscard';
import { api } from '../../services/api';
import {AdsInterface} from '../../interfaces/Ads.interface';
import { ModalContent } from '../../components/ModalContent';
import { Ads, GameParams } from '../../interfaces/Interfaces';

export function Game() {

    const routes = useRoute();
    const params = routes.params as GameParams;
    const [ads, setAds] = useState<AdsInterface[]>([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [discord, setDiscord] = useState('');
    
    const handleGetGame = async ({name}:Ads) => {
        const response = await api.post<AdsInterface[]>('/ads/game', {game: name});
        setAds(response.data);
    }

    useEffect(() => {
        handleGetGame({name: params?.name})
    }, [params])

  return (
    <SafeAreaView style={styles.container}>
        <Header />
        <Banner thumbnail={params?.thumbnail} />
        <View style={styles.wrapper}>
            <Title subtitile={`${ads.length} anuncio(s)`} title={`${params?.name}`} align={'left'}/>
        </View>
        <View style={styles.container}>
            <FlatList
                data={ads}
                keyExtractor={item=> item._id}
                renderItem={({item}) => (
                    <>
                        <Adscard
                            data={item}
                            action={setModalVisible}
                            setDiscord={setDiscord}
                        />
                    </>
                )}
                horizontal
                contentContainerStyle={styles.contentList}
            />
        </View>

        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
        >
            <ModalContent
                action={setModalVisible}
                discord={discord}
            />
        </Modal>

    </SafeAreaView>
  );
}