import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
