import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Alert } from 'react-native';
import { db } from '../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

export default function Cadastro({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [username, setUsername] = useState('');

  const handleCadastro = async () => {
    if (!nome || !email || !senha || !username) {
      Alert.alert('Atenção', 'Preencha todos os campos!');
      return;
    }

    try {
      await addDoc(collection(db, 'usuarios'), {
        nome,
        email,
        senha,
        username
      });
      Alert.alert('Sucesso', `Bem-vindo, ${nome}!`);
      navigation.replace('Postagem');
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível cadastrar. Tente novamente.');
      console.error("Erro ao cadastrar:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Criar Conta</Text>

      <TextInput style={styles.input} placeholder="Nome completo" placeholderTextColor="#999" value={nome} onChangeText={setNome} />
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#999" keyboardType="email-address" autoCapitalize="none" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#999" secureTextEntry value={senha} onChangeText={setSenha} />
      <TextInput style={styles.input} placeholder="Username" placeholderTextColor="#999" autoCapitalize="none" value={username} onChangeText={setUsername} />

      <Button title="Cadastrar e Entrar" onPress={handleCadastro} />
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
  }
});
