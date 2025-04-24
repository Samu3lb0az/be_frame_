import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Button, TouchableOpacity, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign } from '@expo/vector-icons'; // ← Ícone da seta

export default function Perfil({ navigation }) {
  const [nome, setNome] = useState('');
  const [username, setUsername] = useState('');
  const [imagemPerfil, setImagemPerfil] = useState('https://via.placeholder.com/100');

  useEffect(() => {
    const carregarUsuario = async () => {
      const usuarioJson = await AsyncStorage.getItem('usuarioLogado');
      if (usuarioJson) {
        const usuario = JSON.parse(usuarioJson);
        setNome(usuario.nome);
        setUsername(usuario.username);
      }
    };

    carregarUsuario();
  }, []);

  const editarFotoPerfil = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Desculpe, precisamos da permissão para acessar suas fotos!');
        return;
      }
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setImagemPerfil(uri);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.voltarButton} onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={24} color="#000" />
        <Text style={styles.voltarText}>Voltar</Text>
      </TouchableOpacity>

      <View style={styles.cardPerfil}>
        <TouchableOpacity style={styles.fotoContainer} onPress={editarFotoPerfil}>
          <Image
            source={{ uri: imagemPerfil }}
            style={styles.fotoPerfil}
          />
        </TouchableOpacity>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.username}>@{username}</Text>
      </View>

      <View style={styles.cardPost}>
        <Text style={styles.textoPost}>🖼️ Aqui vai a imagem da postagem</Text>
      </View>
      <View style={styles.cardPost}>
        <Text style={styles.textoPost}>🖼️ Outra imagem da postagem</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    position: 'relative',
  },
  voltarButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  voltarText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  cardPerfil: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    width: '90%',
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3,
    marginTop: 50, 
  },
  fotoContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#007bff'
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
