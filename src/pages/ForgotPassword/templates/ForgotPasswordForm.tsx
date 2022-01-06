import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import CustomBtn from '../../../components/CustomBtn';

const SignUpForm = () => (
  <View style={styles.container}>
    <View>
      <Text style={styles.description}>Please enter your username below</Text>
      <Text style={styles.description}>
        Password reset email will be sent to you.
      </Text>
      <TextInput style={styles.input} placeholder="Username" />
    </View>

    <View style={styles.submitContainer}>
      <CustomBtn
        fullWidth
        label="SEND EMAIL"
        overrideStyle={{ btnContainer: styles.btnContainer }}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

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

  submitContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  btnContainer: {
    backgroundColor: '#1565c0',
  },
});

export default SignUpForm;
