import React from 'react'
import { View, Text } from 'react-native';
import {Overlay, Input, Button, CheckBox, Slider} from 'react-native-elements';
import  NumericInput  from 'react-native-numeric-input';



export default function ModalAtividade({navigation,  onEnd, onCancel, route}) {
    const [info, setInfo] = React.useState({nome:undefined, descricao:undefined, tempo:0});
    return (

        <View>
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
                <View style={{flexDirection:'row'}}>
                    <CheckBox 
                        title="Contar Tempo"
                        checked={info.contarTempo}
                        onPress={() => {
                            setInfo({ ...info, contarTempo: !info.contarTempo });
                        }}
                    />
                    <NumericInput
                        type="up-down"
                        value={info.tempo}
                        totalHeight={50}
                        onChange={(value) => {
                            setInfo({ ...info, tempo: value });
                        }}
                    />
                </View>
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
