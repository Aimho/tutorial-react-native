import { StyleSheet } from 'react-native';

export const safeAreaViewStyles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#fff',
  },
});

export const headerViewStyles = StyleSheet.create({
  container: {
    height: 44,
    padding: 12,
    width: '100%',
    backgroundColor: '#01579b',
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  backBtnView: {
    left: 12,
    bottom: 2,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
  },
  backBtnText: {
    color: '#fff',
  },
});

export const bodyViewStyles = StyleSheet.create({
  container: {
    height: '100%',
  },
});
