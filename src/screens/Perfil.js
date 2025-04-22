import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Perfil({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Perfil do Usuário</Text>
      <Button title="Ver Postagens" onPress={() => navigation.navigate('Postagem')} />
      <Button title="Notificações" onPress={() => navigation.navigate('Notificacoes')} />
      <Button title="Mensagens" onPress={() => navigation.navigate('Mensagens')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  texto: { fontSize: 24 }
});
