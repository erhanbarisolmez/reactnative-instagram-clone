import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Screen from './Screens';
export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
    <StatusBar style='dark'  />
    <NavigationContainer>
      <Screen/>
    </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
})


