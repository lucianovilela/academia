import React, { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";

import { StyleSheet, View, SafeAreaView, Platform } from "react-native";
import { Drawer } from "react-native-paper";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import AuthScreen from "./src/screen/AuthScreen";
import { AuthProvider } from "./src/provider/AuthProvider";
import Home from "./src/screen/Home";

const DrawerNavigate = createDrawerNavigator();

export default function App({ navigation }) {
  const [active, setActive] = React.useState("");

  //console.debug(ContextAuth.userToken);
  return (
    <NavigationContainer>
      <AuthProvider>
        <DrawerNavigate.Navigator
          initialRouteName="home"
          drawerContent={({navigation}) => (
            <View>
              <Drawer.Section title="Teplate de login">
                <Drawer.Item
                  label="Login"
                  active={active === "first"}
                  onPress={() => {
                    navigation.navigate("login");
                    setActive("first");
                  }}
                />
                <Drawer.Item
                  label="Home"
                  active={active === "second"}
                  onPress={() => {navigation.navigate("home");setActive("second");}}
                />
              </Drawer.Section>
            </View>
          )}
        >
          <DrawerNavigate.Screen
            name="login"
            component={AuthScreen}
            options={{ headerShown: false }}
          />
          <DrawerNavigate.Screen name="home" component={Home} />
        </DrawerNavigate.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}
