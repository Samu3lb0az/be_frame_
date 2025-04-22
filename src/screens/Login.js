import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Tela de Login</Text>
      <Button title="Ir para Cadastro" onPress={() => navigation.navigate('Cadastro')} />
      
      <Button title="Entrar" onPress={() => navigation.replace('Postagem')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  texto: { fontSize: 24 }
});
