import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import Input from '../../components/Input/Input';
import CommonButton from '../../components/CommonButton/CommonButton';
import UserIcon from '../../components/Icons/UserIcon';
import LockIcon from '../../components/Icons/LockIcon';

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // TODO: Implement sign in logic
    console.log('Sign in with:', { email, password });
    navigation?.navigate('MainTabs');
  };

  const handleSignUp = () => {
    navigation?.navigate('SignUp');
  };

  const handleForgotPassword = () => {
    navigation?.navigate('ForgotPassword');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.backgroundContainer}>
        <Image
          source={require('../../assets/images/image3.png')}
          style={styles.backgroundImage}
          resizeMode="cover"
        />
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.content}>
            <View style={styles.header}>
              <Text style={styles.title}>Welcome back</Text>
              <Text style={styles.subtitle}>Sign in to continue</Text>
            </View>

            <View style={styles.form}>
              <Input
                placeholder="johndoe@mail.com"
                value={email}
                onChangeText={setEmail}
                icon={UserIcon}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />

              <Input
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                icon={LockIcon}
                autoCapitalize="none"
                autoCorrect={false}
              />

              <TouchableOpacity
                onPress={handleForgotPassword}
                style={styles.forgotPasswordContainer}
              >
                <Text style={styles.forgotPasswordText}>Forgot password?</Text>
              </TouchableOpacity>

              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.signInButton}
                  onPress={handleSignIn}
                  activeOpacity={0.8}
                >
                  <Text style={styles.signInButtonText}>Sign In</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.footer}>
              <Text style={styles.footerText}>
                Don't have an account?{' '}
                <Text style={styles.signUpLink} onPress={handleSignUp}>
                  Sign up
                </Text>
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundContainer: {
    flex: 1,
    position: 'relative',
  },
  backgroundImage: {
    position: 'absolute',
    width: 374.99999752688626,
    height: 352.9999976719756,
    opacity: 1,
    transform: [{ rotate: '49.66deg' }],
    top: -40,
    right: 0,
    zIndex: 0,
  },
  scrollContent: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: 160,
    paddingBottom: 40,
  },
  content: {
    width: '100%',
    paddingHorizontal: 32,
    alignItems: 'center',
    backgroundColor: 'transparent',
    zIndex: 1,
    position: 'relative',
    marginTop: 'auto',
  },
  header: {
    alignItems: 'flex-start',
    marginBottom: 40,
    width: '100%',
  },
  title: {
    width: 257,
    height: 96,
    opacity: 1,
    fontFamily: 'SF Pro Display',
    fontWeight: '700',
    fontSize: 40,
    lineHeight: 40,
    letterSpacing: 0,
    color: '#000',
    marginBottom: 4,
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    fontWeight: '400',
    textAlign: 'left',
  },
  form: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 24,
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#000',
    fontWeight: '400',
    textAlign: 'left',
  },
  buttonContainer: {
    width: '100%',
    marginTop: 12,
    marginBottom: 24,
    alignItems: 'center',
  },
  signInButton: {
    backgroundColor: '#E53935',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
  footer: {
    alignItems: 'center',
    marginTop: 80,
    width: '100%',
    paddingBottom: 60,
  },
  footerText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  signUpLink: {
    color: '#000',
    fontWeight: '600',
  },
});

export default SignInScreen;

