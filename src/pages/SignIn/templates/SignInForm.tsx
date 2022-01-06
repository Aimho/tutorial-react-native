import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import CustomBtn from '../../../components/CustomBtn';

const SignInForm = () => (
  <View>
    <Text style={styles.description}>Login to continue</Text>
    <TextInput style={styles.input} placeholder="Username" />
    <TextInput style={styles.input} placeholder="Password" />
    <CustomBtn
      fullWidth
      label="LOG IN"
      overrideStyle={{ btnContainer: styles.btnContainer }}
    />
  </View>
);

const styles = StyleSheet.create({
  description: {
    fontSize: 16,
    color: 'gray',
    fontWeight: '600',
  },
  input: {
    color: '#666',
    backgroundColor: '#eee',
    borderRadius: 4,
    marginTop: 8,
  },
  btnContainer: {
    marginTop: 8,
    backgroundColor: '#1565c0',
  },
});

export default SignInForm;
