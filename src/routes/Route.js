import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from '../screens/Splash';
import Login from '../screens/Login';
import Cadastro from '../screens/Cadastro';
import Perfil from '../screens/Perfil';
import Postagem from '../screens/Postagem';
import Notificacoes from '../screens/Notificacoes';
import Mensagens from '../screens/Mensagens';
import Publicar from '../screens/Publicar'; // 👈 adicionando

const Stack = createNativeStackNavigator();

export default function Route() {
  return (
    <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Perfil" component={Perfil} />
      <Stack.Screen name="Postagem" component={Postagem} />
      <Stack.Screen name="Notificacoes" component={Notificacoes} />
      <Stack.Screen name="Mensagens" component={Mensagens} />
      <Stack.Screen name="Publicar" component={Publicar} /> 
    </Stack.Navigator>
  );
}
