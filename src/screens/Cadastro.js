import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Cadastro({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Tela de Cadastro</Text>
      <Button title="Cadastrar e Entrar" onPress={() => navigation.navigate('Perfil')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  texto: { fontSize: 24 }
});
