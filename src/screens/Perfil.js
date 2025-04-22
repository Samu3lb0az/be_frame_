import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Button } from 'react-native';

export default function Perfil({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.cardPerfil}>
        {/* Simulação da foto de perfil */}
        <View style={styles.fotoContainer}>
          <Image
            source={{ uri: 'https://via.placeholder.com/100' }}
            style={styles.fotoPerfil}
          />
        </View>
        <Text style={styles.nome}>João da Silva</Text>
        <Text style={styles.username}>@joaosilva</Text>
      </View>

      {/* Simulação das postagens */}
      <View style={styles.cardPost}>
        <Text style={styles.textoPost}>🖼️ Aqui vai a imagem da postagem</Text>
      </View>
      <View style={styles.cardPost}>
        <Text style={styles.textoPost}>🖼️ Outra imagem da postagem</Text>
      </View>

      {/* Botão de voltar */}
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    alignItems: 'center',
    backgroundColor: '#f5f5f5'
  },
  cardPerfil: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    width: '90%',
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3
  },
  fotoContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    marginBottom: 10
  },
  fotoPerfil: {
    width: '100%',
    height: '100%'
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  username: {
    fontSize: 16,
    color: 'gray'
  },
  cardPost: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 2
  },
  textoPost: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center'
  }
});
