import React, { useContext, useState, useEffect } from "react";
import { View, SafeAreaView, Image } from "react-native";

const AddScreen = ({ navigation }) => {
  const [info, setInfo] = useState({ iniciado: false, timer: 0, inicio:undefined, fim:undefined });

  useEffect(() => {
    const timerHandler = setInterval(() => {
      if (info.iniciado) {
        setInfo({ ...info, timer: info.timer + 500 });
      }
    }, 500);
    return () => {
      clearInterval(timerHandler);
    }
  }, [info]);
  return (
    <View>
      <View style={{ marginBottom: '50px' }}>
        <Text>{info.timer}</Text>
        <Text>Inicio: {info.inicio+""}</Text>
        <Text>Fim: {info.fim+""}</Text>
      </View>

      <View style={{ display: info.iniciado ? 'none' : 'flex' }}>
        <Button icon="play" mode="outlined" onPress={() => {

          setInfo({ ...info, iniciado: true,inicio:new Date(), fim:undefined });

        }}>Iniciar</Button>
      </View>
      <View style={{ display: info.iniciado ? 'flex' : 'none' }} >
        <Button icon="pause" mode="outlined" onPress={() => {
          setInfo({ ...info, iniciado: false});

        }}>Pausar</Button>
      </View>
      <View style={{ display: info.timer>0  ? 'flex' : 'none' }}>
        <Button icon="stop" mode="outlined" onPress={() => {
          setInfo({ ...info, iniciado: false, timer: 0, fim:new Date()});

        }}>Finalizar</Button>
      </View>

    </View>
  );
};

export default AddScreen;
