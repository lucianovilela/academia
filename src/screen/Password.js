import React, { useState } from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {TextInput, Button, Avatar} from 'react-native-paper';
import * as firebase from '../provider/firebase'



const Login = ({navigation})=>{
    const [info, setInfo] = useState({});
    const loginEmail = ()=>{
        firebase.passwordRecovery(info)
        .then(result =>{
            console.log(result);
        });

    }

    return(
        <View style={ styles.container }>
                <TextInput style={styles.input} label="email" 
                    placeholder="email"  onChangeText={(text)=>{setInfo({...info, email:text})}} />

            <View >
                <Button  mode="contained" onPress={loginEmail}>Recuperar</Button>
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
    
    }

  });

export default Login;