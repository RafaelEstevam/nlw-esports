import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: THEME.COLORS.OVERLAY,
  },
  modalView: {
    margin: 20,
    backgroundColor: THEME.COLORS.SHAPE,
    borderRadius: 8,
    padding: 32,
    paddingTop: 20,
    alignItems: "center",
    width: '85%'
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  title:{
    fontSize: THEME.FONT_SIZE.LG,
    color: THEME.COLORS.TEXT,
    fontWeight: '900'
  },
  subtitle:{
    fontSize: THEME.FONT_SIZE.SM,
    color: THEME.COLORS.CAPTION_300
  },
  closeButton:{
    padding: 8
  },
  discord: {
    backgroundColor: THEME.COLORS.BACKGROUND_800,
    alignItems: 'center',
    flexDirection: 'column',
    width: '80%',
    padding: 16,
    borderRadius: 8,
    marginTop: 8
  },

  discordSub: {
    color: THEME.COLORS.CAPTION_500
  }
  
  
});