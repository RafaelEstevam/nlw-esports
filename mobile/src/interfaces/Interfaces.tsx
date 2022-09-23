import { Dispatch, SetStateAction } from "react"
import { TouchableOpacityProps, ViewProps } from "react-native";
import { AdsInterface } from "./Ads.interface";
import { GameInterface } from "./Game.interface";

export interface GameParams {
    name?: string,
    id?: string, 
    thumbnail?: string
}

export interface Ads {
    name: string | undefined
}

export interface ModalContentInterface {
    action: Dispatch<SetStateAction<boolean>>,
    discord?: String
}

export interface TitleProps extends ViewProps {
    title: String,
    subtitile: String,
    align: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined;
}

export interface AdsPropsInterface extends TouchableOpacityProps {
    data: AdsInterface,
    action: Dispatch<SetStateAction<boolean>>,
    setDiscord: Dispatch<SetStateAction<string>>,
}

export interface BackgroundInterface {
    children: React.ReactNode
}

export interface GameCardProps extends TouchableOpacityProps {
    data: GameInterface
}

export interface BannerInterface extends GameParams{}
