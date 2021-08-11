import React from 'react';
import Timer from '../components/Timer';
import { View, FlatList, Text } from 'react-native';

const AddScreen = ({ navigation }) => {
    const [treinos, setTreinos] = React.useState([]);
    return (
        <View>
            
            <Timer onEnd={(info) => {
                setTreinos([...treinos, info]);

            }} />
        </View>
    );
};

export default AddScreen;
