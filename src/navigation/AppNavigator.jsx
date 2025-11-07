import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

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
import ReserveTableScreen from '../screens/ReserveTable/ReserveTableScreen';
import ReservationConfirmationScreen from '../screens/ReservationConfirmation/ReservationConfirmationScreen';
import PaymentSetupScreen from '../screens/Payment/PaymentSetupScreen';
import ReservationReceiptScreen from '../screens/ReservationReceipt/ReservationReceiptScreen';
import NotificationsScreen from '../screens/Notifications/NotificationsScreen';
import AccountScreen from '../screens/Account/AccountScreen';
import SettingsScreen from '../screens/Settings/SettingsScreen';
import AllDishesScreen from '../screens/AllDishes/AllDishesScreen';
import AiPickScreen from '../screens/AiPick/AiPickScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import FollowingScreen from '../screens/Following/FollowingScreen';
import FavoritesDetailsScreen from '../screens/FavoritesDetailsScreen';
import FollowersScreen from '../screens/FollowersScreen';

// NOTE: This file assumes you have installed @react-navigation/native and related packages.
// If not, keep this as a scaffold or replace with your own navigator.

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Main Tab Navigator for bottom tabs
const MainTabs = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: '#fff',
        borderTopColor: '#E0E0E0',
        borderTopWidth: 1,
        paddingTop: 8,
        paddingBottom: 8,
        height: 88,
        elevation: 0,
        shadowOpacity: 0,
      },
      tabBarActiveTintColor: '#E53935',
      tabBarInactiveTintColor: '#C8C7CC',
      tabBarLabelStyle: {
        fontSize: 12,
        marginTop: 4,
        fontWeight: '400',
      },
      tabBarIconStyle: {
        marginTop: 8,
      },
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <Image
            source={require('../assets/icons/Homeicon.png')}
            style={{ width: 20, height: 20, tintColor: color }}
            resizeMode="contain"
          />
        ),
      }}
    />
    <Tab.Screen
      name="Reservation"
      component={ReservationScreen}
      options={{
        tabBarLabel: 'Reservation',
        tabBarIcon: ({ color, size }) => (
          <Image
            source={require('../assets/icons/Reservationicon.png')}
            style={{ width: 20, height: 20, tintColor: color }}
            resizeMode="contain"
          />
        ),
      }}
    />
    <Tab.Screen
      name="AiPick"
      component={AiPickScreen}
      options={{
        tabBarLabel: 'Ai Pick',
        tabBarIcon: ({ color, size }) => (
          <Image
            source={require('../assets/icons/Aipickicon.png')}
            style={{ width: 24, height: 24, tintColor: color }}
            resizeMode="contain"
          />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={NotificationsScreen}
      options={{
        tabBarLabel: 'Notifications',
        tabBarIcon: ({ color, size }) => (
          <Image
            source={require('../assets/icons/Notificationicon.png')}
            style={{ width: 20, height: 20, tintColor: color }}
            resizeMode="contain"
          />
        ),
      }}
    />
    <Tab.Screen
      name="Account"
      component={AccountScreen}
      options={{
        tabBarLabel: 'Account',
        tabBarIcon: ({ color, size }) => (
          <Image
            source={require('../assets/icons/Accounticon.png')}
            style={{ width: 20, height: 20, tintColor: color }}
            resizeMode="contain"
          />
        ),
      }}
    />
  </Tab.Navigator>
);

// Main App Navigator with nested structure
const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false, animation: 'fade' }}>
      {/* Auth & Onboarding Stack */}
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
      
      {/* Main App with Tabs */}
      <Stack.Screen name="MainTabs" component={MainTabs} />
      
      {/* Nested screens (accessible from tabs) */}
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="SeeAll" component={AllDishesScreen} />
      <Stack.Screen name="AiPick" component={AiPickScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Following" component={FollowingScreen} />
      <Stack.Screen name="FavoritesDetails" component={FavoritesDetailsScreen} />
      <Stack.Screen name="Followers" component={FollowersScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
