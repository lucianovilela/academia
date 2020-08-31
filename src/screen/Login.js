import React, { useState } from "react";
import { View, SafeAreaView } from "react-native";
import { TextInput, Button, Avatar } from "react-native-paper";
import * as firebase from "../provider/firebase";

const Login = ({ navigation }) => {
  const [info, setInfo] = useState({});
  const loginEmail = () => {
    firebase.loginEmail(info).then((result) => {
      console.log(result);
    });
  };
  const loginGoogle = () => {
    firebase.loginGoogle().then((result) => {
      console.log(result);
    });
  };
  const loginFacebook = () => {
    firebase.loginFacebook().then((result) => {
      console.log(result);
    });
  };

  return (
    <SafeAreaView
      style={{ flex: 1, alignContent: "center", justifyContent: "center" }}
    >
      <View style>
        <View style={{ alignItems: "center" }}>
          <Avatar.Text size={50} label="US" />
        </View>
        <View >
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
        </View>
        <View>
          <Button mode="contained" onPress={loginEmail}>
            Login
          </Button>
          {
            // <Button  mode="contained" onPress={loginGoogle}>Google</Button>
            //<Button  mode="contained" onPress={loginFacebook}>Facebook</Button>
          }
        </View>

        <Button
          onPress={() => {
            navigation.navigate("logon");
          }}
        >
          Cadastrar
        </Button>
        <Button
          onPress={() => {
            navigation.navigate("password");
          }}
        >
          Esqueci a senha
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Login;
