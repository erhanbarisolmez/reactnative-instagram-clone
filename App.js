import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Screen from './Screens';
export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
    <NavigationContainer>
      <Screen/>
    </NavigationContainer>
    </SafeAreaView>
  );
}


