import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaDeCadastro from '../pages/Cadastro';
import TelaDeLogin from '../pages/Login';
import Home from '../pages/Home';


const Stack = createNativeStackNavigator();

export default function TaskRoutes() {
  return (
    <Stack.Navigator initialRouteName="Home">
      {/* A primeira tela da lista*/}

      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{ headerShown: false }} 
      />
      
      <Stack.Screen 
        name="Login" 
        component={TelaDeLogin} 
        options={{ headerShown: false }} // Remove o cabeçalho padrão
      />
      
      <Stack.Screen 
        name="Cadastro" 
        component={TelaDeCadastro} 
        options={{ title: 'Criar Conta' }}
      />
    </Stack.Navigator>
  );
}