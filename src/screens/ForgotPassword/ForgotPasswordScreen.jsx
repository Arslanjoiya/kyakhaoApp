import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import Input from '../../components/Input/Input';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleSend = () => {
    if (email.trim()) {
      // Navigate to OTP Verification screen with email
      navigation?.navigate('OtpVerification', { email: email.trim() });
    } else {
      // TODO: Show error message for empty email
      console.log('Please enter your email');
    }
  };

  const handleBack = () => {
    navigation?.goBack();
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Forgot Password</Text>
        </View>
        
        {/* Back Button - Absolutely Positioned */}
        <TouchableOpacity
          onPress={handleBack}
          style={styles.backButton}
          activeOpacity={0.7}
        >
          <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>

        {/* Content */}
        <View style={styles.content}>
          {/* Instructional Text */}
          <Text style={styles.instructionText}>
            Enter your email and will send you instruction on how to reset it
          </Text>

          {/* Email Input Field */}
          <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
              <View style={styles.inputWithLabel}>
                <Text style={styles.inputLabelInline}>Email</Text>
                <Input
                  placeholder="Enter your email"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  style={styles.inputField}
                />
              </View>
            </View>
          </View>

          {/* Send Button */}
          <TouchableOpacity
            style={styles.sendButton}
            onPress={handleSend}
            activeOpacity={0.8}
          >
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
    paddingTop: 20,
    paddingBottom: 40,
  },
  header: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    paddingTop: 10,
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    width: 16,
    height: 24,
    top: 30,
    left: 9,
    opacity: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  backButtonText: {
    fontSize: 22,
    color: '#000',
    fontWeight: '600',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
    flex: 1,
    textAlign: 'center',
  },
  headerSpacer: {
    width: 40,
  },
  content: {
    flex: 1,
    paddingHorizontal: 32,
    alignItems: 'center',
  },
  instructionText: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 22,
    paddingHorizontal: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 32,
    alignSelf: 'flex-start',
  },
  inputWrapper: {
    width: '100%',
  },
  inputWithLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  inputLabelInline: {
    fontSize: 16,
    color: '#000',
    fontWeight: '400',
    marginRight: 12,
    minWidth: 50,
  },
  inputField: {
    marginBottom: 0,
    flex: 1,
  },
  sendButton: {
    backgroundColor: '#E53935',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 20,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default ForgotPasswordScreen;

