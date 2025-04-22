import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const notificacoes = [
  { id: '1', usuario: 'joao_silva' },
  { id: '2', usuario: 'maria_123' },
  { id: '3', usuario: 'lucas_dev' },
  { id: '4', usuario: 'ana.vieira' },
];

export default function Notificacoes({ navigation }) {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Ionicons name="heart" size={24} color="#e74c3c" style={styles.icone} />
      <Text style={styles.texto}>
        <Text style={styles.usuario}>{item.usuario}</Text> curtiu sua publicação.
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Notificações</Text>
      <FlatList
        data={notificacoes}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f8f8f8' },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2
  },
  icone: {
    marginRight: 15
  },
  texto: {
    fontSize: 16
  },
  usuario: {
    fontWeight: 'bold'
  }
});
