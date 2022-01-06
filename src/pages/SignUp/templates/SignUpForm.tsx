import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import CustomBtn from '../../../components/CustomBtn';

const SignUpForm = () => (
  <View style={styles.container}>
    <View>
      <Text style={styles.description}>Sign Up to the Cryptosx Exchange</Text>
      <TextInput style={styles.input} placeholder="Username" />
      <TextInput style={styles.input} placeholder="Full Name(Required)" />
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput
        style={styles.input}
        placeholder="Password(At Least 8 characters, 1number, 1capital letter)"
      />
      <TextInput style={styles.input} placeholder="Confirm Password" />
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>
          By Clicking Sign Up you accept our
        </Text>
        <View style={styles.policyContainer}>
          <CustomBtn variant="text" label="Terms and Conditions" />
          <Text style={styles.description}> and </Text>
          <CustomBtn variant="text" label="Privacy Policy" />
        </View>
      </View>
    </View>

    <View style={styles.submitContainer}>
      <CustomBtn
        fullWidth
        label="Create Account"
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

  descriptionContainer: {
    marginTop: 8,
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
  policyContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  submitContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  btnContainer: {
    marginTop: 8,
    backgroundColor: '#1565c0',
  },
});

export default SignUpForm;
