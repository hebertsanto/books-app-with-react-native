import { View, Text, SafeAreaView , ScrollView} from 'react-native';
import Header from './components/header';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './screens/home';



export default function App() {
  return (
    <ScrollView>
     <View>
       <Header />
       <Home />
     </View>
     </ScrollView>
  );
}

