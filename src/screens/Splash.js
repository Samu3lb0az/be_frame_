import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Splash({ navigation }) {
  useEffect(() => {
    setTimeout(() => navigation.replace('Login'), 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Bem-vindo à Rede Social</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  texto: { fontSize: 24, fontWeight: 'bold' }
});
