import React, { useState } from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {TextInput, Button, Avatar} from 'react-native-paper';
import * as firebase from '../provider/firebase'



const Logon = ({navigation})=>{
    const [info, setInfo] = useState({});
    const loginEmail = ()=>{
        firebase.createUser(info)
        .then(result =>{
            console.log(result);
        });

    }

    return(
        <View style={ styles.container }>
                <TextInput label="email" 
                    placeholder="email"  onChangeText={(text)=>{setInfo({...info, email:text})}} />

                <TextInput label="password" 
                    placeholder="password"  secureTextEntry 
                    onChangeText={(text)=>{setInfo({...info, password:text})}}/>
            <View >
                <Button  mode="contained" onPress={loginEmail}>Cadastrar</Button>
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

  });

export default Logon;