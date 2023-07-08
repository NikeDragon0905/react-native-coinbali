import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Facebook_Img from "../../assets/images/Facebook.png";
import Google_Img from "../../assets/images/Google.png";
import Twitter_Img from "../../assets/images/Twitter.png";
import CustomInput from '../../components/CustomInput';

import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { login } from '../../actions/authActions';

export default () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigateToHome = () => {
    navigation.navigate('CheckEmail');
  }

  const onLogIn = () => {
    const userData = { email, password };
    dispatch(login(userData, navigateToHome));
  }

  const inputHandle = (type, text) => {
    switch (type) {
      case 'email':
        setEmail(text);
        break;
      case 'password':
        setPassword(text);
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}> 
      <View style={styles.topbar}>
      </View>
      <Text style={styles.title}>Login to your account</Text>
      <CustomInput label='Username or Email' placeholder='Username or Email' value={email} type='email' onChange={inputHandle} />
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} secureTextEntry={true} value={password} onChangeText={(text) => inputHandle('password', text)} />
        <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={onLogIn}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.orLoginWithContainer}>
        <View style={styles.divider} />
        <Text style={styles.orLoginWith}>Or login with</Text>
        <View style={styles.divider} />
      </View>
      <View style={styles.socialLoginContainer}>
        <TouchableOpacity style={styles.socialLoginButton}>
          <Image source={Google_Img} style={styles.socialImg} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialLoginButton}>
          <Image source={Facebook_Img} style={styles.socialImg} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialLoginButton}>
          <Image source={Twitter_Img} style={styles.socialImg} />
        </TouchableOpacity>
      </View>
      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Don't have an account yet?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signUpLink}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 44,
    paddingLeft: 24,
    paddingRight: 24,
    // fontFamily: 'Montserrat'
  },
  topbar: {
    height: 24,
    marginTop: 16
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: 34,
    color: '#365195',
    alignSelf: 'flex-start'
  },
  inputContainer: {
    marginBottom: 10,
    width: '100%'
  },
  label: {
    fontSize: 12,
    fontWeight: 500,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#627BBB',
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 8,
    width: '100%',
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.5)',
    height: 40
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: 8,
    color: 'rgba(98, 123, 187, 0.8)',
    fontSize: 12,
  },
  loginButton: {
    backgroundColor: '#627BBB',
    padding: 10,
    borderRadius: 5,
    marginTop: 21,
    width: '100%',
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orLoginWithContainer: {
    marginVertical: 23,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  divider: {
    borderBottomColor: 'rgba(98, 123, 187, 0.5)',
    borderBottomWidth: 1,
    height: 7.5,
    width: '37%',
  },
  orLoginWith: {
    marginHorizontal: 15,
    fontSize: 12,
    fontWeight: 300,
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 24,
    width: '100%',
  },
  socialLoginButton: {
    borderColor: '#1877F2',
    borderWidth: 1,
    padding: 14,
    borderRadius: 4,
    width: 52,
    height: 48,
    alignItems: 'center',
    marginHorizontal: 16,
  },
  socialImg: {
    width: 20,
    height: 20
  },
  signUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signUpText: {
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.5)',
    fontWeight: 600
  },
  signUpLink: {
    marginLeft: 5,
    color: '#627BBB',
    fontWeight: 600,
    fontSize: 12,
  },
});