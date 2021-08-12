import React, { useContext, useState, useEffect, useRef } from "react";
import { View, Text } from "react-native";
import { Input, Button, SocialIcon, Divider, ListItem } from "react-native-elements";
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
        <View >

            <View >
                <Text style={styles.text}>{info.timer}</Text>
            </View>
            <Divider style={styles.divider} />


            <View style={{ marginBottom: 20, display: info.iniciado ? 'none' : 'flex' }}>
                <Button onPress={() => {

                    setInfo({ ...info, iniciado: true, inicio: Date.now(), fim: undefined });

                }} title="iniciar">Iniciar</Button>
            </View>
            <View style={{ marginBottom: 20, display: info.iniciado ? 'flex' : 'none' }} >
                <Button onPress={() => {
                    setInfo({ ...info, iniciado: false });

                }} title="pausar">Pausar</Button>
            </View>
            <View style={{ marginBottom: 20, display: info.timer > 0 ? 'flex' : 'none' }}>
                <Button onLongPress={() => {
                    setInfo({ ...info, iniciado: false, timer: 0, fim: Date.now() });
                    if (onEnd !== undefined) onEnd(info);

                }} title="finalizar">Finalizar</Button>
            </View>
            <View style={{ marginBottom: 20, display: info.iniciado ? 'flex' : 'none' }} >
                <Button onPress={() => {
                    setInfo({ ...info, showAtividade: !info.showAtividade });
                    navigation.navigate('Atividade',{
                        onEnd: (atividade) => {
                            console.log("retorno atividade", atividade);
                            setInfo({ ...info,  atividade: [...info.atividade, atividade] });
                        }
                    } );

                }}
                    icon={{ name: 'plus-circle', type: 'font-awesome' }}
                    title="Inserir Atividade">Inserir Atividade</Button>
            </View>

         
            <View>
                <FlatList
                    data={info.atividade}
                    renderItem={({ item }) => (
                        <ListItem bottomDivider>
                            <ListItem.Content>

                                <ListItem.Title >{item.nome}</ListItem.Title>
                                <ListItem.Subtitle>{item.descricao}</ListItem.Subtitle>
                            </ListItem.Content>
                            <ListItem.Chevron/>
                        </ListItem>
                    )}
                    keyExtractor={(item, index) => index}
                />


            </View>
        </View>
    );
}

export default Timer;
