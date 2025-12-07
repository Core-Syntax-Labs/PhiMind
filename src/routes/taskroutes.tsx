import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importação das suas páginas
import TelaDeCadastro from '../pages/Cadastro';
import TelaDeLogin from '../pages/Login';
const Stack = createNativeStackNavigator();

export default function TaskRoutes() {
  return (
    <Stack.Navigator>
      {/* A primeira tela da lista*/}
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