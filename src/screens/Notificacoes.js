import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Perfil({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Perfil do Usuário</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  texto: { fontSize: 24 }
});
