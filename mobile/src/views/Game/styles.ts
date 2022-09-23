import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  banner:{
    width: '100%',
    height: 160,
    borderRadius: 8
  },
  wrapper: {
    width: '100%',
    padding: 32,
  },
  contentList:{
    paddingLeft: 32,
    paddingRight: 64
  },
  header:{
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 32,
    justifyContent: 'space-between'
  }
});