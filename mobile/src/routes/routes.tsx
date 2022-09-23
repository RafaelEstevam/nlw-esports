
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../views/Home";
import { Game } from "../views/Game";

import { Background } from "../components/Background";

const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes(){

    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="home" component={() => (
                <Background>
                    <Home/>
                </Background>
            )} />

            <Screen name="game" component={() => (
                <Background>
                    <Game/>
                </Background>
            )} />
        </Navigator>
    )
}