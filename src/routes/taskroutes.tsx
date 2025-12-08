// src/routes/taskroutes.tsx
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import TelaDeLogin from "../pages/Login";
import TelaDeCadastro from "../pages/Cadastro";
import QuoteScreen from "../pages/QuoteScreen";
import FavoritesScreen from "../pages/FavoritesScreen";
import { useAuth } from "../context/AuthContext";

const Stack = createNativeStackNavigator();

export default function TaskRoutes() {
  const { user } = useAuth();

  //Se não tiver usuário, mostra fluxo público (landing + login/cadastro)
  if (!user) {
    return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={TelaDeLogin} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastro" component={TelaDeCadastro} options={{ headerShown: false }} />
      </Stack.Navigator>
    );
  }

  //Se tiver user, mostra fluxo interno (quotes + favoritos)
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Quote"
        component={QuoteScreen}
        options={{ title: "Citação", headerShown: false }}
      />
      <Stack.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{ title: "Favoritos", headerShown: false }}
      />
    </Stack.Navigator>
  );
}
