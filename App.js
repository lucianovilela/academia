import React, { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";

import { StyleSheet, View, SafeAreaView, Platform } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';

import AuthScreen from "./src/screen/AuthScreen";
import { AuthProvider } from "./src/provider/AuthProvider";
import Home from "./src/screen/Home";

const Drawer = createDrawerNavigator();

export default function App({ navigation }) {
  
  //console.debug(ContextAuth.userToken);
  return (
    <NavigationContainer>
      <AuthProvider >
        
        <Drawer.Navigator initialRouteName="home">
          <Drawer.Screen name="login" component={AuthScreen} options={{ headerShown: false }}/>
          <Drawer.Screen name="home" component={Home} />
        </Drawer.Navigator>
        
      
      </AuthProvider>
    </NavigationContainer>
  );
}
