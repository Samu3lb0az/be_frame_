import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function BottomTabs({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title="Perfil" onPress={() => navigation.navigate('Perfil')} />
      <Button title="Publicar" onPress={() => navigation.navigate('Postagem')} />
      <Button title="Notificações" onPress={() => navigation.navigate('Notificacoes')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff'
  }
});
