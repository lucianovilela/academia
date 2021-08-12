import React from 'react';
import Timer from '../components/Timer';
import { View, FlatList, Text } from 'react-native';

const HistoricoScreen = ({ navigation, treinos }) => {
    return (
        <View>
            <FlatList
                data={treinos}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.timer}</Text>
                        <Text>{item.inicio+""}</Text>

                    </View>
                )}
                ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#ccc' }} />}  
                
                keyExtractor={(item, index) => index}
            />

        </View>
    );
};

export default HistoricoScreen;
