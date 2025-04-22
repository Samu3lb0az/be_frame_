import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import BottomTabs from '../components/BottomTabs';

export default function Postagem({ navigation }) {
  const handleSair = () => {
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Feed de Postagens</Text>
      <View style={styles.sair}>
        <Button title="Sair" onPress={handleSair} />
      </View>
      <BottomTabs navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'space-between', paddingTop: 50 },
  texto: { fontSize: 24, textAlign: 'center' },
  sair: { alignItems: 'center', marginVertical: 20 }
});
