import React, { useContext, useState, useEffect, useRef } from "react";
import { View, Text } from "react-native";
import { Input, Button, SocialIcon, Divider, Avatar, Image } from "react-native-elements";
import styles from './AppStyle';

const Timer = ({onEnd}) => {
    const interval = 500;
    const [info, setInfo] = useState({ iniciado: false, timer: 0, inicio: undefined, fim: undefined });
    const t = useRef();

    useEffect(() => {
        t.current = setInterval(() => {
            if (info.iniciado) {
                setInfo({ ...info, timer: info.timer + interval });
            }
        }, interval);
        return () => {
            clearInterval(t.current);
        }
    }, [info]);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={styles.text}>{info.timer/1000}</Text>
            </View>
            <Divider style={styles.divider} />


            <View style={{ marginBottom: 20, display: info.iniciado ? 'none' : 'flex' }}>
                <Button onPress={() => {

                    setInfo({ ...info, iniciado: true, inicio: new Date(), fim: undefined });

                }} title="iniciar">Iniciar</Button>
            </View>
            <View style={{ marginBottom: 20, display: info.iniciado ? 'flex' : 'none' }} >
                <Button onPress={() => {
                    setInfo({ ...info, iniciado: false });

                }} title="pausar">Pausar</Button>
            </View>
            <View style={{ display: info.timer > 0 ? 'flex' : 'none' }}>
                <Button onPress={() => {
                    setInfo({ ...info, iniciado: false, timer: 0, fim: new Date() });
                    if(onEnd !== undefined) onEnd(info);

                }} title="finalizar">Finalizar</Button>
            </View>

        </View>
    );
}

export default Timer;
