import React, { useContext } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./Login";
import Logon from "./Logon";
import Password from "./Password";
import Home from "./Home";

const Stack = createStackNavigator();

export default function App({ navigation }) {
  
  return (
        <Stack.Navigator initialRouteName="login">
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="logon" component={Logon} />
          <Stack.Screen name="password" component={Password} />
          <Stack.Screen name="home" component={Home} />
        </Stack.Navigator>
  );
}
