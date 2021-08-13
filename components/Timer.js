import React, { useContext, useState, useEffect, useRef } from "react";
import { View, ScrollView } from "react-native";
import { Input, Button, Divider, ListItem, Text } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import styles from './AppStyle';
import ModalAtividade from "./ModalAtividade";

const Timer = ({ navigation, onEnd }) => {
    const interval = 100;
    const [info, setInfo] = useState({
        iniciado: false,
        timer: 0,
        inicio: undefined,
        fim: undefined,
        showAtividade: false,
        atividade: []
    });
    const t = useRef();

    useEffect(() => {
        t.current = setInterval(() => {
            if (info.iniciado) {
                setInfo({ ...info, timer: Date.now() - info.inicio });
            }
        }, interval);
        return () => {
            clearInterval(t.current);
        }
    }, [info]);

    return (
        <View style={{ justifyContent: 'center' }} >

            <View style={{ alignItems: 'center' }}>
                <Text h1>{Math.trunc(info.timer / 1000)}</Text>
            </View>
            <Divider style={styles.divider} />

            <View style={{flex:1, justifyContent:'center', flexDirection:'row', margin:25}}>
                <View style={{  display: info.iniciado ? 'none' : 'flex' }}>
                    <Button onPress={() => {

                        setInfo({ ...info, iniciado: true, inicio: Date.now(), fim: undefined });

                    }}
                        icon={{ name: 'play', type: 'font-awesome', color: '#FFF' }}
                        title="">Iniciar</Button>
                </View>
                <View style={{  display: info.iniciado ? 'flex' : 'none' }} >
                    <Button onPress={() => {
                        setInfo({ ...info, iniciado: false });
                        
                    }}
                        icon={{ name: 'pause', type: 'font-awesome', color: '#FFF' }}
                        title="">Pausar</Button>
                </View>
                <View style={{  display: info.timer > 0 ? 'flex' : 'none' }}>
                    <Button onLongPress={() => {
                        setInfo({ ...info, iniciado: false, timer: 0, fim: Date.now() });
                        if (onEnd !== undefined) onEnd(info);

                    }}
                        icon={{ name: 'stop', type: 'font-awesome', color: '#FFF' }}
                        title="">Finalizar</Button>
                </View>
            </View>
            <View style={{ marginBottom: 20 }}>
                <Button onPress={() => {
                    setInfo({ ...info, showAtividade: !info.showAtividade });
                    navigation.navigate('Atividade', {
                        onEnd: (atividade) => {
                            console.log("retorno atividade", atividade);
                            setInfo({ ...info, atividade: [...info.atividade, atividade] });
                        }
                    });

                }}
                    icon={{ name: 'plus-circle', type: 'font-awesome', color: '#FFF' }}
                    title="Atividade">Inserir Atividade</Button>
            </View>


            <ScrollView >
                <FlatList
                    data={info.atividade}
                    renderItem={({ item }) => (
                        <ListItem bottomDivider>
                            <ListItem.Content>

                                <ListItem.Title >{item.nome}</ListItem.Title>
                                <ListItem.Subtitle>{item.descricao}</ListItem.Subtitle>
                            </ListItem.Content>
                            <ListItem.Chevron />
                        </ListItem>
                    )}
                    keyExtractor={(item, index) => index}
                />


            </ScrollView>
        </View>
    );
}

export default Timer;
