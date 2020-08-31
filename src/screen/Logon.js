import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import { TextInput, Button, Avatar } from "react-native-paper";
import * as firebase from "../provider/firebase";

const Logon = ({ navigation }) => {
  const [info, setInfo] = useState({});
  const loginEmail = () => {
    firebase.createUser(info).then((result) => {
      console.log(result);
    });
  };

  return (
    <SafeAreaView
      style={{ flex: 1, alignContent: "center", justifyContent: "center" }}
    >
      <View>
        <TextInput
          label="email"
          placeholder="email"
          onChangeText={(text) => {
            setInfo({ ...info, email: text });
          }}
        />

        <TextInput
          label="password"
          placeholder="password"
          secureTextEntry
          onChangeText={(text) => {
            setInfo({ ...info, password: text });
          }}
        />
        <View>
          <Button mode="contained" onPress={loginEmail}>
            Cadastrar
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Logon;
