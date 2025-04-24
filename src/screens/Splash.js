//Andrey Montibeller e Samuel Boaz

import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Splash({ navigation }) {
  useEffect(() => {
    setTimeout(() => navigation.replace('Login'), 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/BeFrame_logo.png')} 
        style={styles.imagem} 
      />
      <Text style={styles.texto}>Bem-vindo à BeFrame</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  texto: { fontSize: 24, fontWeight: 'bold' },
  imagem: { width: 200, height: 200, marginBottom: 20 } 
});
