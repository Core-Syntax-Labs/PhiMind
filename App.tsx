import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import TaskRoutes from './src/routes/taskroutes';
import * as SplashScreen from 'expo-splash-screen'; 
import { useCallback, useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'; 

// Tenta impedir o hide automático. 
// Se isso falhar, o app abre direto.
SplashScreen.preventAutoHideAsync().catch(console.warn);

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        console.log("Iniciando carregamento...");
        // FORÇANDO 1 segundo de espera
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
    if (appIsReady) {
      console.log("Escondendo Splash Screen...");
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    
    return (
      <View style={{ 
        flex: 1, 
        backgroundColor: '#ffffff', 
        justifyContent: 'center', 
        alignItems: 'center' }}>
        <Text style={styles.splashTitle}>phiMind.</Text>
        <ActivityIndicator 
          size="large" color="#6200EE"/>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#000000' }} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <StatusBar style="light" translucent backgroundColor="transparent" />
        <TaskRoutes />
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
    fontSize: 40, 
    fontWeight: 'bold',
    color: '#6200EE', 
  },
  splashSubtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20
  }
});