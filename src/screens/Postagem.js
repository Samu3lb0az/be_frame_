import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import BottomTabs from '../components/BottomTabs';
import { Ionicons } from '@expo/vector-icons';

const postsFalsos = [
  {
    id: '1',
    usuario: 'maria_123',
    texto: 'Aproveitando o dia!',
    imagem: 'https://via.placeholder.com/300x300.png?text=Post+1'
  },
  {
    id: '2',
    usuario: 'lucas_dev',
    texto: 'Trabalhando no novo projeto 🚀',
    imagem: 'https://via.placeholder.com/300x300.png?text=Post+2'
  },
  {
    id: '3',
    usuario: 'joao_silva',
    texto: 'Café e código ☕💻',
    imagem: 'https://via.placeholder.com/300x300.png?text=Post+3'
  }
];

export default function Postagem({ navigation }) {
  const handleSair = () => {
    navigation.replace('Login');
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.usuario}>{item.usuario}</Text>
      <Image source={{ uri: item.imagem }} style={styles.imagem} />
      <Text style={styles.textoPost}>{item.texto}</Text>
      <View style={styles.acoes}>
        <TouchableOpacity>
          <Ionicons name="heart-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: 10 }}>
          <Ionicons name="chatbubble-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.topo}>
        <Text style={styles.titulo}>Feed de Postagens</Text>
        <TouchableOpacity onPress={handleSair}>
          <Text style={styles.sair}>Sair</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={postsFalsos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 70 }}
      />

      <BottomTabs navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f8f8' },
  topo: {
    paddingTop: 50,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  titulo: { fontSize: 22, fontWeight: 'bold' },
  sair: { color: 'red', fontSize: 16 },
  card: {
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 10,
    padding: 10,
    elevation: 2
  },
  usuario: { fontWeight: 'bold', fontSize: 16, marginBottom: 5 },
  imagem: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 10
  },
  textoPost: { marginBottom: 10, fontSize: 15 },
  acoes: {
    flexDirection: 'row',
  }
});
