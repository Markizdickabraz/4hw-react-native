// import { StatusBar } from 'expo-status-bar';
import { NavigationContainer} from '@react-navigation/native';
import { useRoute } from './components/router/router'

export default function App() {

const routing = useRoute(true)
  
  return (
    <NavigationContainer>
      {routing}
    </NavigationContainer>
  );
}

