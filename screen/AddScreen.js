import React from 'react';
import Timer from '../components/Timer';
import { View, FlatList, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ModalAtividade from '../components/ModalAtividade';

const Stack = createNativeStackNavigator();


const TimeScreen = ({ navigation }) => {
    const [treinos, setTreinos] = React.useState([]);
    return (
        <View style={{flex:1}}>
            
            <Timer navigation={navigation} onEnd={(info) => {
                setTreinos([...treinos, info]);
                

            }} />
        </View>
    );
};

const AddScreen = ({ navigation }) => {
    return (
        <Stack.Navigator >
            <Stack.Screen name="TimeScreen" component={TimeScreen} />
            <Stack.Screen name="Atividade" component={ModalAtividade} />
        </Stack.Navigator>
        );
};

export default AddScreen;
