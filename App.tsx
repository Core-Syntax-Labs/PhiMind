import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import TaskRoutes from './src/routes/taskroutes';
import * as SplashScreen from 'expo-splash-screen'; 
import { useCallback, useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'; 

import { AuthProvider } from './src/context/AuthContext';
import { FavoritesProvider } from './src/context/FavoriteContext';

import { 
  useFonts, 
  Montserrat_400Regular, 
  Montserrat_700Bold,
  Montserrat_900Black 
} from '@expo-google-fonts/montserrat';

import { 
  LobsterTwo_400Regular, 
  LobsterTwo_700Bold,
  LobsterTwo_400Regular_Italic 
} from '@expo-google-fonts/lobster-two';

// Impede o hide automático
SplashScreen.preventAutoHideAsync().catch(console.warn);

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
    LobsterTwo_400Regular,
    LobsterTwo_700Bold,
    Montserrat_900Black,
    LobsterTwo_400Regular_Italic
  });

  useEffect(() => {
    async function prepare() {
      try {
        console.log("Iniciando carregamento...");
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      } finally {
        console.log("App pronto!");
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    // Só esconde a splash quando:
    // - fontsLoaded for true
    // - appIsReady for true
    if (fontsLoaded && appIsReady) {
      console.log("Escondendo Splash Screen...");
      await SplashScreen.hideAsync();
    }
  }, [appIsReady, fontsLoaded]);

  // Enquanto fontes ou app não estiverem prontos → Splash custom
  if (!fontsLoaded || !appIsReady) {
    return (
      <View style={styles.splashContainer}>
        <Text style={styles.splashTitle}>phiMind.</Text>
        <ActivityIndicator size="large" color="#6200EE"/>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#000000' }} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <StatusBar style="light" translucent backgroundColor="transparent" />
        
        {/* 🔹 Providers do app inteiro */}
        <AuthProvider>
          <FavoritesProvider>
            <TaskRoutes />
          </FavoritesProvider>
        </AuthProvider>
      </NavigationContainer>
    </View>
  );
}

// Estilos organizados
const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: '#ffffff', 
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20 
  },
  splashTitle: {
    fontFamily: 'Montserrat_900Black',
    textShadowColor: 'rgba(0, 0, 0, 0.3)', 
    textShadowOffset: { width: 2, height: 2 }, 
    textShadowRadius: 4, 
    fontSize: 40,
    color: '#6200EE', 
  },
});
