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
        <Text style={[styles.texto]}>BOTÃO</Text>
      </View>

      <Text>Open up App.tsx to start working on your app!</Text>
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
  texto: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'yellow',
    padding: 25,
    borderRadius: 15,
    borderWidth: 1,
    marginBottom: 15,
  },
});
