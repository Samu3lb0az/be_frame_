import React from 'react';
import { View, Text, Button, StyleSheet, TextInput, Image } from 'react-native';

export default function Publicar({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Nova Publicação</Text>

      <View style={styles.cardImagem}>
        <Image
          source={{ uri: 'https://via.placeholder.com/300x200' }}
          style={styles.imagem}
        />
        <Text style={styles.textoImagem}>Prévia da imagem escolhida</Text>
      </View>

      <TextInput
        style={styles.inputLegenda}
        placeholder="Escreva uma legenda..."
        placeholderTextColor="#999"
        multiline
      />

      <View style={styles.botoes}>
        <Button title="Publicar" onPress={() => alert('Publicação feita!')} />
        <Button title="Voltar" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    alignItems: 'center'
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  cardImagem: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    marginBottom: 20,
    alignItems: 'center',
    padding: 10
  },
  imagem: {
    width: 300,
    height: 200,
    borderRadius: 10
  },
  textoImagem: {
    marginTop: 10,
    fontSize: 14,
    color: '#555'
  },
  inputLegenda: {
    width: '100%',
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    textAlignVertical: 'top',
    fontSize: 16,
    elevation: 2,
    marginBottom: 20
  },
  botoes: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});
