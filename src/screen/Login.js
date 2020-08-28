import React, { useState } from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {TextInput, Button, Avatar} from 'react-native-paper';
import * as firebase from '../provider/firebase'



const Login = (props)=>{
    const [info, setInfo] = useState({});
    const loginEmail = ()=>{
        firebase.loginEmail(info)
        .then(result =>{
            console.log(result);
        });

    }
    const loginGoogle = ()=>{
        firebase.loginGoogle()
        .then(result =>{
            console.log(result);
        });

    }
    const loginFacebook = ()=>{
        firebase.loginFacebook()
        .then(result =>{
            console.log(result);
        });

    }

    return(
        <View style={ styles.container }>
                <Avatar.Text size={50} label="US"/>
                <TextInput style={styles.input} label="email" 
                    placeholder="email"  onChangeText={(text)=>{setInfo({...info, email:text})}} />

                <TextInput style={styles.input} label="password" 
                    placeholder="password"  secureTextEntry 
                    onChangeText={(text)=>{setInfo({...info, password:text})}}/>
            <View >
                <Button style={{marginBottom:'10px'}} mode="contained" onPress={loginEmail}>Login</Button>
                <Button style={{marginBottom:'10px'}} mode="contained" onPress={loginGoogle}>Google</Button>
                <Button style={{marginBottom:'10px'}} mode="contained" onPress={loginFacebook}>Facebook</Button>
                <Button>Cadastrar</Button>
            </View>

        </View>


    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input:{
        marginBottom:'10px',
    }

  });

export default Login;