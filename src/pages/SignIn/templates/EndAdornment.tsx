import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomBtn from '../../../components/CustomBtn';

const EndAdornment = () => {
  const { navigate } = useNavigation();
  const onPressPassword = () => navigate('Password' as any);
  const onPressSignUp = () => navigate('SignUp' as any);

  return (
    <View style={styles.container}>
      <CustomBtn
        variant="text"
        label="forgot Password ?"
        onPress={onPressPassword}
      />
      <CustomBtn
        fullWidth
        label="Sign Up"
        overrideStyle={{
          btnContainer: styles.signUpBtn,
        }}
        onPress={onPressSignUp}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 8,
  },
  signUpBtn: {
    marginTop: 8,
    backgroundColor: '#42a5f5',
  },
});

export default EndAdornment;
