import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    zIndex: 100,
    height: '100%',
    width: '100%',
    backgroundColor: '#00000060',
    alignItems: 'center',
    justifyContent:'center',
    flexDirection: 'row',
    padding: 32
  },
  axiosButton: {
    width: '100%',
    padding: 16,
    backgroundColor: THEME.COLORS.ALERT,
    borderRadius: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  axiosButtonLabel: {
    color: THEME.COLORS.TEXT,
    fontWeight: '900'
  }
});