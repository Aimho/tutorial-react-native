import { StyleSheet } from 'react-native';

export const wrapperStyles = StyleSheet.create({
  fullWidth: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export const btnContainerStyles = StyleSheet.create({
  common: {
    padding: 8,
    borderRadius: 4,

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // variant
  contain: {
    backgroundColor: '#1976d2',
  },
  outlined: {
    borderColor: '#1976d2',
    borderWidth: 1,
    backgroundColor: 'transparent',
  },
  text: {
    padding: 0,
    backgroundColor: 'transparent',
  },
});

export const btnTextStyles = StyleSheet.create({
  common: {
    fontSize: 16,
  },
  // variant
  contain: {
    color: '#fff',
  },
  outlined: {
    color: '#1976d2',
  },
  text: {
    color: '#1976d2',
  },
});
