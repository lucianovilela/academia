import React, { useContext, useState, useEffect, useRef } from "react";
import { View, ScrollView } from "react-native";
import { Button, Divider, ListItem, Text, Avatar } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import styles from './AppStyle';

//function to format the time hh:mm:ss
function formatTime(time) {
    let h = Math.floor(time / 3600);
    let m = Math.floor((time - h * 3600) / 60);
    let s = time - h * 3600 - m * 60;
    return (h > 0 ? h + ":" : "") + (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
}


let inicio = 0;
let timer = 0;
let fim = 0;
let iniciado = false;



const Timer = ({ navigation, onEnd }) => {
    const interval = 100;
    const [info, setInfo] = useState({
        iniciado: false,
        timer: 0,
        inicio: 0,
        fim: 0,
        showAtividade: false
    });
    const [atividade, setAtividade] = useState([]);
   
    const t = useRef();
    const doTime = () => {
        if (iniciado) {
            timer = timer + Date.now() - inicio;
            inicio = Date.now();
            setInfo(info => ({ ...info, timer: timer }));
        }
        setTimeout(doTime, interval);
    }

    useEffect(() => {
        console.log(info, Date.now());
        t.current = setTimeout(() => {
            //if (info.iniciado) {
            doTime();

            //}
        }, interval);
        return () => {
            clearTimeout(t.current);
        }
    }, []);

    return (
        <View style={{ justifyContent: 'center' }} >

            <View style={{ alignItems: 'center' }}>
                <Text h1>{formatTime(Math.floor(info.timer / 1000))}</Text>
            </View>
            <Divider style={styles.divider} />

            <View style={{ justifyContent: 'center', flexDirection: 'row', margin: 30 }}>
                <View style={{ display: info.iniciado ? 'none' : 'flex' }}>
                    <Button onPress={() => {
                        inicio = Date.now();
                        fim = 0;
                        iniciado = true;
                        setInfo({ ...info, iniciado: true });

                    }}
                        icon={{ name: 'play-circle', type: 'font-awesome-5', color: '#FFF' }}
                        title="">Iniciar</Button>
                </View>
                <View style={{ display: info.iniciado ? 'flex' : 'none' }} >
                    <Button onPress={() => {
                        iniciado = false;
                        fim = Date.now();
                        setInfo({ ...info, iniciado: iniciado });

                    }}
                        icon={{ name: 'pause-circle', type: 'font-awesome-5', color: '#FFF' }}
                        title="">Pausar</Button>
                </View>
                <View style={{ display: info.timer > 0 ? 'flex' : 'none' }}>
                    <Button onPress={() => {
                        iniciado = false;
                        setInfo({ ...info, iniciado: false, timer: 0, fim: Date.now() });
                        if (onEnd !== undefined) onEnd(info);

                    }}
                        icon={{ name: 'stop-circle', type: 'font-awesome-5', color: '#FFF' }}
                        title="">Finalizar</Button>
                </View>
            </View>
            <View style={{ marginBottom: 20 }}>
                <Button onPress={() => {
                    navigation.navigate('Atividade', {
                        onEnd: (ativ) => {
                            console.log("retorno atividade", ativ);
                            setAtividade([...atividade, ativ]);
                        }
                    });

                }}
                    icon={{ name: 'plus-circle', type: 'font-awesome-5', color: '#FFF' }}
                    title="Atividade">
                    
                </Button>
                <Button onPress={() => {
                


                }}
                    icon={{ name: 'save', type: 'font-awesome-5', color: '#FFF' }}
                    title="Save"></Button>

            </View>


            <ScrollView >
                <FlatList
                    data={atividade}
                    renderItem={({ item, index, key }) => (
                        <ListItem.Swipeable
                            rightContent={
                                <Button
                                    title="Delete"
                                    icon={{ name: 'delete', color: 'white' }}
                                    buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                                    onPress={() => {
                                        setAtividade([...atividade.slice(0, index), ...atividade.slice(index + 1)]);

                                    }}
                                />
                            }

                            bottomDivider>
                            <ListItem.Content>

                                <Avatar rounded title={index + 1} />
                                <ListItem.Title >
                                    {item.nome}
                                </ListItem.Title>
                                <ListItem.Subtitle>{item.descricao}</ListItem.Subtitle>
                            </ListItem.Content>
                            <ListItem.Chevron />
                        </ListItem.Swipeable>
                    )}
                    keyExtractor={(item, index) => `${index}`}
                />


            </ScrollView>
        </View>
    );
}

export default Timer;
