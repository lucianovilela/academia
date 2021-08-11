import * as React from "react";
import { useState, useContext } from "react";

import { View, SafeAreaView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon, ThemeProvider } from 'react-native-elements';

import ContextAuth from "./InfoProvider";
import LoginScreen from "../screen/LoginScreen";
import AddScreen from "../screen/AddScreen";


import style from "../components/AppStyle";

import {
  AdMobBanner,
} from 'expo-ads-admob';



const Tab = createBottomTabNavigator();

function HomeScreen({ navigation, route }) {
  const authContext = useContext(ContextAuth);

  return (
    <ThemeProvider >
      <SafeAreaView style={style.container}>
        <Tab.Navigator>
          
          <Tab.Screen

            name="Add"
            component={AddScreen}

            options={{
              title: "Add",
              tabBarIcon: () => (<Icon type="material" name="add-circle" size={20} />)
            }}
          />
          <Tab.Screen
            name="Login"
            component={LoginScreen}

            options={{
              title: "Login",
              tabBarIcon: () => (<Icon type="material" name="add-circle" size={20} />)
            }}
          />
        </Tab.Navigator>
        <AdMobBanner
          bannerSize="smartBannerPortrait"
          adUnitID="ca-app-pub-3940256099942544/6300978111"
          servePersonalizedAds // true or false
        //onDidFailToReceiveAdWithError={this.bannerError} 
        />
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default HomeScreen;
