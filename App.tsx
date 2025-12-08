import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import TaskRoutes from './src/routes/taskroutes';
import * as SplashScreen from 'expo-splash-screen'; 
import { useCallback, useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Image } from 'react-native'; 

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
import { QuoteIcon } from './src/pages/Home/styles';

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
        <QuoteIcon name="quote-left" size={24} color="#6200EE" />
        <Text style={styles.splashText}>PhiMind</Text>
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
   splashText: {
    fontFamily: 'LobsterTwo_400Regular_Italic',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    marginTop: -15,
    fontSize: 40,
    color: '#6200EE',
  }
});
