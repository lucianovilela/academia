import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider as PaperProvider } from "react-native-paper";

import { StyleSheet, View, SafeAreaView, Platform } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./src/screen/Login";
import Logon from "./src/screen/Logon";
import Password from "./src/screen/Password";
import Home from "./src/screen/Home";

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      {Platform.OS === "ios" && <StatusBar barStyle="default" />}

      <NavigationContainer>
        <PaperProvider>
          <Stack.Navigator initialRouteName={"login"}>
            <Stack.Screen name="login" component={Login} options={{headerShown:false}}/>
            <Stack.Screen name="logon" component={Logon} />
            <Stack.Screen name="password" component={Password} />
            <Stack.Screen name="home" component={Home} />
          </Stack.Navigator>
        </PaperProvider>
      </NavigationContainer>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});