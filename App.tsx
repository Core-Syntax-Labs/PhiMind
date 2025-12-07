import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import TaskRoutes from './src/routes/taskroutes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <TaskRoutes />
    </NavigationContainer>
  );
}