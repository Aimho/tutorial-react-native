import React from 'react';
import { StyleSheet, View } from 'react-native';

import Layout from '../../components/Layout';
import EndAdornment from './templates/EndAdornment';
import SignInForm from './templates/SignInForm';
import StartAdornment from './templates/StartAdornment';

const SignIn = () => (
  <Layout>
    <View style={styles.container}>
      <StartAdornment />
      <SignInForm />
      <EndAdornment />
    </View>
  </Layout>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default SignIn;
