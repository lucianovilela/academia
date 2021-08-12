import React from 'react'
import { View, Text } from 'react-native';
import {Overlay, Input, Button} from 'react-native-elements';

export default function ModalAtividade({navigation,  onEnd, onCancel, route}) {
    const [info, setInfo] = React.useState({nome:undefined, descricao:undefined});
    return (

        <View
            
            style={{ flex:1,alignItems: 'center', justifyContent: 'center'}}
            
        >
            <View>
                <Input
                    placeholder="Nome da Atividade"
                    onChangeText={(text) => {
                        setInfo({ ...info, nome: text });
                    }}
                    value={info.nome}
                />
                <Input
                    placeholder="Descrição da Atividade"
                    onChangeText={(text) => {
                        setInfo({ ...info, descricao: text });
                    }}
                    value={info.descricao}
                />
                <Button
                    title="Cadastrar"
                    onPress={() => {
                        if(route.params?.onEnd !== undefined ) route.params.onEnd(info);
                        setInfo({ nome: undefined, descricao: undefined });
                        navigation.goBack()
                    }}
                />
                <Button
                    title="Cancelar"
                    onPress={() => {
                        if(route.params.onCancel !== undefined ) route.params.onCancel();
                        setInfo({ nome: undefined, descricao: undefined });
                        navigation.goBack()

                    }}
                />
            </View>

        </View>

    )
}
