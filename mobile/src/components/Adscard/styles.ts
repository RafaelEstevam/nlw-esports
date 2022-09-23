import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: THEME.COLORS.SHAPE,
    padding: 16,
    borderRadius: 8,
    minHeight: 292,
    maxHeight: 300,
    width: 180,
    marginRight: 24,
    // flex: 0
  },
  wrapper: {
    marginBottom: 20
  },
  text:{
    fontSize: THEME.FONT_SIZE.SM,
    color:  THEME.COLORS.CAPTION_300
  },
  label: {
    fontWeight: 'bold',
    color:  THEME.COLORS.TEXT
  },
  button:{
    backgroundColor: THEME.COLORS.PRIMARY,
    padding: 8,
    borderRadius: 4,
    width: '100%',
    display:'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  }
});