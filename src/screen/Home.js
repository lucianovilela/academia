import React, { useContext } from "react";
import { View, SafeAreaView, Image } from "react-native";
import { Card, TextInput, Text,  } from "react-native-paper";
import ContextAuth from "../provider/AuthProvider";

const Home = ({ navigator} ) => {
  const authContext = useContext(ContextAuth);
  const user = authContext.state.user;

  return (
    <SafeAreaView
      style={{ flex: 1, alignContent: "center", justifyContent: "center"}}

    >
      <View>
        <Text>Home</Text>
        <Text>{user.displayName}</Text>
        <Text>{user.email}</Text>
        <Image source={{uri:user.photoURL}} width={50}></Image>
      </View>
    </SafeAreaView>
  );
};

export default Home;
