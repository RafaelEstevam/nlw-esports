import React, { useState } from 'react';
import { View, ActivityIndicator, TouchableOpacity, Text } from 'react-native';
import {X} from 'phosphor-react-native'
import parseErrorStack from 'react-native/Libraries/Core/Devtools/parseErrorStack';
import { api } from '../../services/api';
import { THEME } from '../../theme';

import { styles } from './styles';

export function Loading() {
    const [load, setLoad] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [buttonMessage, setButtonMessage] = useState('');

    api.interceptors.request.use((config) => {
        setLoad(true);
        setLoaded(true);
        return config;
    }, (error) => {
        setLoad(true);
        setLoaded(false);
        setButtonMessage(error.response.data.message);
        return Promise.reject(error);
    })
  
    api.interceptors.response.use((config) => {
        setLoad(false);
        setLoaded(false);
        return config;
    }, (error) => {
        setLoad(true);
        setLoaded(false);
        setButtonMessage(error.response.data.message);   
        return Promise.reject(error);
    });
  
    return (
        <>
            {load && (
                <View style={styles.container}>
                    {loaded ? (
                        <ActivityIndicator animating={true} size={60} color={THEME.COLORS.PRIMARY} />
                    ) : (
                        <TouchableOpacity style={styles.axiosButton} onPress={() => setLoad(false)}>
                            <Text style={styles.axiosButtonLabel}>{buttonMessage}</Text>
                            <X color="#ffffff" />
                        </TouchableOpacity>
                    )}
                </View>
            )}
            
        </>
    )
}