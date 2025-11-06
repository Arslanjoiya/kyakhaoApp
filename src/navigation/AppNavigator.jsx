import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '../screens/SplashScreen/SplashScreen';
import OnboardingScreen from '../screens/Onboarding/OnboardingScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import SignInScreen from '../screens/SignIn/SignInScreen';
import SignUpScreen from '../screens/SignUp/SignUpScreen';
import ForgotPasswordScreen from '../screens/ForgotPassword/ForgotPasswordScreen';
import OtpVerificationScreen from '../screens/OtpVerification/OtpVerificationScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import MaskScreen from '../screens/Mask/MaskScreen';
import Mask2Screen from '../screens/Mask2/Mask2Screen';
import ChooseLanguageScreen from '../screens/ChooseLanguage/ChooseLanguageScreen';
import PersonalizationScreen from '../screens/Personalization/PersonalizationScreen';
import ChoicesFoodScreen from '../screens/ChoicesFood/ChoicesFoodScreen';
import ReservationScreen from '../screens/Reservation/ReservationScreen';
import NotificationsScreen from '../screens/Notifications/NotificationsScreen';
import AccountScreen from '../screens/Account/AccountScreen';
import SettingsScreen from '../screens/Settings/SettingsScreen';
import AllDishesScreen from '../screens/AllDishes/AllDishesScreen';

// NOTE: This file assumes you have installed @react-navigation/native and related packages.
// If not, keep this as a scaffold or replace with your own navigator.

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="OtpVerification" component={OtpVerificationScreen} />
      <Stack.Screen name="Mask" component={MaskScreen} />
      <Stack.Screen name="Mask2" component={Mask2Screen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ChooseLanguage" component={ChooseLanguageScreen} />
      <Stack.Screen name="Personalization" component={PersonalizationScreen} />
      <Stack.Screen name="ChoicesFood" component={ChoicesFoodScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Reservation" component={ReservationScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="SeeAll" component={AllDishesScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
