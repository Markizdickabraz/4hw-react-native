import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from '../../Screens/LoginScreen';
import RegistrationScreen from '../../Screens/RegistrationScreen';
import Home from '../../Screens/Home';


const AuthStack = createStackNavigator();
  
export function useRoute(isAuth) {
  if (!isAuth) {
    return <AuthStack.Navigator>
      <AuthStack.Screen
        options={{
          headerTransparent: true,
          headerTitleStyle: {
            color: 'transparent',
          }
        }}
        name="login"
        component={LoginScreen} />
      <AuthStack.Screen
        options={{
          headerTransparent: true,
          headerTitleStyle: {
            color: 'transparent',
          }
        }}
        name="registr"
        component={RegistrationScreen} />
    </AuthStack.Navigator>
  }
  return <Home></Home>
}