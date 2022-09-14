import { View, Text, ViewProps } from 'react-native';
import { styles } from './styles';

interface TitleProps extends ViewProps {
    title: String,
    subtitile: String,
    align: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined;
}

export function Title({title, subtitile, align}: TitleProps) {
  return (
    <View style={styles.container}>
        <Text style={{...styles.title,...{textAlign: align}}}>{title}</Text>
        <Text style={{...styles.subtitle,...{textAlign: align}}}>{subtitile}</Text>
    </View>
  );
}