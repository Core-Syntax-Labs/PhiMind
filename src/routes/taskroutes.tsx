// src/routes/taskroutes.tsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaDeCadastro from '../pages/Cadastro';
import TelaDeLogin from '../pages/Login';
import Home from '../pages/Home';

import { useAuth } from '../context/AuthContext';
// Pega user do contexto

import QuoteScreen from '../pages/QuoteScreen';
import FavoritesScreen from '../pages/FavoritesScreen';

const Stack = createNativeStackNavigator();

export default function TaskRoutes() {
  const { user } = useAuth();

  return (
    <Stack.Navigator>
      {user ? (
        // ============================
        //   ROTAS DE USUÁRIO LOGADO
        // ============================
        <>
          <Stack.Screen
            name="Quote"
            component={QuoteScreen}
            options={{ title: 'Citação do dia', headerShown: false }}
          />

          <Stack.Screen
            name="Favorites"
            component={FavoritesScreen}
            options={{ title: 'Favoritos' }}
          />
        </>
      ) : (
        // ============================
        //   ROTAS DE NÃO LOGADO
        // ============================
        <>
          <Stack.Screen 
            name="Home" 
            component={Home} 
            options={{ headerShown: false }} 
          />

          <Stack.Screen 
            name="Login"
            component={TelaDeLogin} 
            options={{ headerShown: false }} 
          />
          
          <Stack.Screen 
            name="Cadastro" 
            component={TelaDeCadastro} 
            options={{ title: 'Criar Conta' }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
