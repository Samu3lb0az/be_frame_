import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function BottomTabs({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
        <Text style={styles.icone}>👤</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Publicar')}>
        <Text style={styles.icone}>➕</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Notificacoes')}>
        <Text style={styles.icone}>🔔</Text>
      </TouchableOpacity>
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
  },
  icone: {
    fontSize: 28,
  }
});
