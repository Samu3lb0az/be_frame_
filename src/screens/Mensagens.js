import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Mensagens() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Mensagens Privadas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  texto: { fontSize: 24 }
});
