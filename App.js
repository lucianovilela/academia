import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screen/HomeScreen';

import Constants from 'expo-constants';
import firebase from 'firebase';
import firebaseConfig from './firebaseConfig';
import { AuthProvider } from './components/InfoProvider';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'react-native-elements';


export default function App() {

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);

  }

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AuthProvider>
          <NavigationContainer>
            <HomeScreen />
          </NavigationContainer>
        </AuthProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
