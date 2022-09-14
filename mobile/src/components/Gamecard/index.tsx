import { LinearGradient } from 'expo-linear-gradient';
import { Text, TouchableOpacity, TouchableOpacityProps, ImageBackground, ImageSourcePropType } from 'react-native';
import { THEME } from '../../theme';
import { styles } from './styles';

export interface GamecardProps {
    id: string;
    name: string;
    ads: string;
    cover: ImageSourcePropType
}

interface Props extends TouchableOpacityProps {
    data: GamecardProps
}

export function Gamecard({data, ...rest}:Props) {
    console.log(data);
  return (
    <TouchableOpacity style={styles.container} {...rest}>
        <ImageBackground style={styles.wrapper} source={data.cover}>
            <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
                <Text style={styles.name}>
                    {data.name}
                </Text>
                <Text style={styles.ads}>
                    {data.ads} anúncios
                </Text>
            </LinearGradient>
        </ImageBackground>
    </TouchableOpacity>
  );
}