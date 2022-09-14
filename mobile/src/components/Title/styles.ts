import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {},
  title:{
    color: THEME.COLORS.TEXT,
    fontWeight: '900',
    fontSize: THEME.FONT_SIZE.LG
  },
  subtitle:{
    color: THEME.COLORS.CAPTION_400,
    fontWeight: 'normal',
    fontSize: THEME.FONT_SIZE.SM
  }
});