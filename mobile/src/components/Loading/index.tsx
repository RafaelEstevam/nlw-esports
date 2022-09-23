import React, { useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { api } from '../../services/api';
import { THEME } from '../../theme';

import { styles } from './styles';

export function Loading() {
    const [load, setLoad] = useState(false);

    api.interceptors.request.use((config) => {
        setLoad(true);
        return config;
    }, () => {
        setLoad(false);
    })
  
    api.interceptors.response.use((config) => {
        setLoad(false);
        return config;
    }, () => {
        setLoad(false);
    });
  
    return (
        <>
            {load && (
                <View style={styles.container}>
                    <ActivityIndicator animating={true} size={60} color={THEME.COLORS.PRIMARY} />
                </View>
            )}
        </>
    )
}