import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet
} from 'react-native';

export default function Perfil({ navigation }) {
  const [mensagem, setMensagem] = useState('');
  const [mensagens, setMensagens] = useState([]);
  const flatListRef = useRef(null);

  const enviarMensagem = () => {
    if (mensagem.trim() === '') return;

    const novaMensagem = {
      id: Date.now().toString(),
      texto: mensagem,
      enviada: true
    };
    setMensagens([...mensagens, novaMensagem]);
    setMensagem('');
  };

  useEffect(() => {
    if (flatListRef.current && mensagens.length > 0) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  }, [mensagens]);

  const renderItem = ({ item }) => (
    <View
      style={[
        styles.bolha,
        item.enviada ? styles.enviada : styles.recebida
      ]}
    >
      <Text style={styles.textoMensagem}>{item.texto}</Text>
    </View>
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.nomeUsuario}>Perfil do Usuário</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.voltar}>Voltar</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        ref={flatListRef}
        data={mensagens}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listaMensagens}
      />

      <View style={styles.caixaInput}>
        <TextInput
          style={styles.input}
          placeholder="Digite uma mensagem..."
          placeholderTextColor="#999"
          value={mensagem}
          onChangeText={setMensagem}
        />
        <TouchableOpacity style={styles.botaoEnviar} onPress={enviarMensagem}>
          <Text style={styles.textoBotao}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECE5DD'
  },
  header: {
    backgroundColor: '#075E54',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  nomeUsuario: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  voltar: {
    color: '#fff',
    fontSize: 16
  },
  listaMensagens: {
    padding: 10
  },
  bolha: {
    maxWidth: '75%',
    marginVertical: 5,
    padding: 10,
    borderRadius: 15
  },
  enviada: {
    backgroundColor: '#DCF8C6',
    alignSelf: 'flex-end'
  },
  recebida: {
    backgroundColor: '#FFF',
    alignSelf: 'flex-start'
  },
  textoMensagem: {
    fontSize: 16,
    color: '#000'
  },
  caixaInput: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ccc'
  },
  input: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 15,
    backgroundColor: '#f0f0f0'
  },
  botaoEnviar: {
    marginLeft: 10,
    backgroundColor: '#128C7E',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold'
  }
});