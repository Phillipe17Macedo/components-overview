import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View 
        onTouchStart={(event)=>{
          Alert.alert('Clicando...', "Toque iniciado")
        }}
        onTouchEnd={(evento)=>{
          Alert.alert("CLICK!!", "Toque Finalizado")
        }}
      >
        <Text>BOTÃO</Text>
      </View>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
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
});
