import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Notificacoes() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Notificações</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  texto: { fontSize: 24 }
});
