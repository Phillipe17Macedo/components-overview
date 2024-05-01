import React,{ useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, Image, TextInput, Button, Switch } from 'react-native';

import ImageReact from './assets/logo-react.png';

export default function App() {
  const [usuario, setUsuario] = useState('')
  const [ligado, setLigado] = useState(true)

function handleSwtich(){
  setLigado(!ligado)
}

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Switch 
        value={ligado}
        onValueChange={handleSwtich}
        >
      </Switch>
      <Image
        source={ImageReact}
        style={{display: ligado ? "flex" : "none"}}
      />

      <TextInput
        style={[styles.input]}
        onChange={(text)=>setUsuario(text.nativeEvent.text)}
        keyboardType='phone-pad'
        placeholder='Digite o Numero'
        value={usuario}
      />

      <Button
        title='Clicar'
        onPress={()=> {Alert.alert('valor atual ', usuario)}}
      />

      <View 
        onTouchStart={(event)=>{
          Alert.alert('Clicando...', "Toque iniciado")
        }}
        onTouchEnd={(evento)=>{
          Alert.alert("CLICK!!", "Toque Finalizado")
        }}
      >
        <Text style={[styles.texto, styles.border]}>BOTÃO</Text>
      </View>

      <Text
        selectable={true} 
        onPress={()=>{console.log("Pressionado")}}
        onLongPress={()=>{console.log("Pressionamento Longo")}}
      >Open up App.tsx to start working on your app!</Text>
      
      <Text>
        <Text>Olá</Text>
        <Text> Mundo</Text>
      </Text>

      <View>
        <Text>Olá</Text>
        <Text>Mundo</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 5,
    backgroundColor: '#fff'
  },
  border: {
    borderColor: 'blue',
    borderWidth: 3,
    borderRadius:20,
  },
  texto: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'yellow',
    padding: 25,
    marginBottom: 15,
    textAlign: 'center',
  },
});
