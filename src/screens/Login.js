import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { db } from '../../firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    if (!email || !senha) {
      Alert.alert('Atenção', 'Preencha todos os campos!');
      return;
    }

    try {
      const q = query(collection(db, 'usuarios'), where('email', '==', email), where('senha', '==', senha));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        navigation.replace('Postagem');
      } else {
        Alert.alert('Erro', 'Email ou senha incorretos!');
      }
    } catch (error) {
      Alert.alert('Erro', 'Problema ao fazer login. Tente novamente.');
      console.error("Erro no login:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Entrar na Conta</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#999"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#999"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <Button title="Entrar" onPress={handleLogin} />

      <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.linkCadastro}>Não tem conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5'
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
    elevation: 2
  },
  linkCadastro: {
    marginTop: 15,
    color: '#007bff',
    textAlign: 'center',
    fontSize: 16
  }
});
