import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import OTPInput from '../../components/OTPInput/OTPInput';

const OtpVerificationScreen = ({ navigation, route }) => {
  const email = route?.params?.email || 'jonathan@email.com';
  const [otp, setOtp] = useState(['', '', '', '']);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [timer, setTimer] = useState(21); // 21 seconds
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    // Auto-focus first input on mount
    inputRefs[0].current?.focus();
  }, []);

  useEffect(() => {
    // Timer countdown
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return; // Only allow single digit

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input if value entered
    if (value && index < 3) {
      setFocusedIndex(index + 1);
      inputRefs[index + 1].current?.focus();
    }

    // Auto-focus previous input if value deleted
    if (!value && index > 0) {
      setFocusedIndex(index - 1);
      inputRefs[index - 1].current?.focus();
    }
  };

  const handleKeyPress = (index, e) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
      setFocusedIndex(index - 1);
    }
  };

  const handleVerify = () => {
    const otpCode = otp.join('');
    if (otpCode.length === 4) {
      // TODO: Implement OTP verification logic
      console.log('Verifying OTP:', otpCode);
      // navigation?.navigate('ResetPassword', { email, otp: otpCode });
    }
  };

  const handleResend = () => {
    if (timer === 0) {
      // TODO: Implement resend OTP logic
      console.log('Resending OTP to:', email);
      setTimer(21); // Reset timer
    }
  };

  const formatTimer = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}.${String(secs).padStart(2, '0')}`;
  };

  const handleBack = () => {
    navigation?.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity
              onPress={handleBack}
              style={styles.backButton}
              hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}
            >
              <Text style={styles.backIcon}>{'<'}</Text>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Enter the Code</Text>
            <View style={styles.headerSpacer} />
          </View>

          {/* Content */}
          <View style={styles.content}>
            {/* Instructional Text */}
            <Text style={styles.instructionText}>
              Enter the 4 digit code that we just sent to{' '}
              <Text style={styles.emailText}>{email}</Text>
            </Text>

            {/* OTP Input Boxes */}
            <View style={styles.otpContainer}>
              {otp.map((value, index) => (
                <OTPInput
                  key={index}
                  ref={inputRefs[index]}
                  value={value}
                  onChangeText={(text) => handleOtpChange(index, text)}
                  onKeyPress={(e) => handleKeyPress(index, e)}
                  isFocused={focusedIndex === index}
                  onFocus={() => setFocusedIndex(index)}
                />
              ))}
            </View>

            {/* Timer Display */}
            <View style={styles.timerContainer}>
              <Text style={styles.timerIcon}>🕐</Text>
              <Text style={styles.timerText}>{formatTimer(timer)}</Text>
            </View>

            {/* Resend OTP */}
            <View style={styles.resendContainer}>
              <Text style={styles.resendText}>Didn't receive the OTP? </Text>
              <TouchableOpacity
                onPress={handleResend}
                disabled={timer > 0}
                activeOpacity={0.7}
              >
                <Text
                  style={[
                    styles.resendLink,
                    timer > 0 && styles.resendLinkDisabled,
                  ]}
                >
                  Resend OTP
                </Text>
              </TouchableOpacity>
            </View>

            {/* Verify Button */}
            <TouchableOpacity
              style={[
                styles.verifyButton,
                otp.join('').length !== 4 && styles.verifyButtonDisabled,
              ]}
              onPress={handleVerify}
              disabled={otp.join('').length !== 4}
              activeOpacity={0.8}
            >
              <Text
                style={[
                  styles.verifyButtonText,
                  otp.join('').length !== 4 && styles.verifyButtonTextDisabled,
                ]}
              >
                Verify
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    marginBottom: 8,
  },
  backButton: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    marginLeft: -8,
  },
  backIcon: {
    fontSize: 28,
    color: '#111',
    lineHeight: 28,
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
    color: '#4b5563',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 22,
    paddingHorizontal: 20,
  },
  emailText: {
    color: '#E53935',
    fontWeight: '500',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
  timerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 24,
  },
  timerIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  timerText: {
    fontSize: 14,
    color: '#4b5563',
    fontWeight: '500',
  },
  resendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
  },
  resendText: {
    fontSize: 14,
    color: '#4b5563',
  },
  resendLink: {
    fontSize: 14,
    color: '#000',
    fontWeight: '600',
  },
  resendLinkDisabled: {
    color: '#9CA3AF',
  },
  verifyButton: {
    backgroundColor: '#E53935',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 20,
  },
  verifyButtonDisabled: {
    backgroundColor: '#E0E0E0',
  },
  verifyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
  verifyButtonTextDisabled: {
    color: '#9CA3AF',
  },
});

export default OtpVerificationScreen;

