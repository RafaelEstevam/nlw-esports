import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo:{
    width: 100,
    height: 60
  },
  wrapper: {
    width: '100%',
    padding: 32,
    paddingBottom: 0
  },
  header:{
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between'
  },
  headerButton: {
    padding: 4
  }
});