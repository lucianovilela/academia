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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App({ navigation }) {
  
  //console.debug(ContextAuth.userToken);
  return (
    <NavigationContainer>
      <AuthProvider >
        
        <Tab.Navigator initialRouteName="home">
          <Tab.Screen name="home" component={Home} options={{ tabBarIcon:()=>(<FontAwesome5 name="home"  color="black" />) }}/>
          <Tab.Screen name="login" component={AuthScreen} options={{ headerShown: false }}/>
        </Tab.Navigator>
        
      
      </AuthProvider>
    </NavigationContainer>
  );
}
