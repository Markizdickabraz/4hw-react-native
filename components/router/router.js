import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from '../../Screens/LoginScreen';
import RegistrationScreen from '../../Screens/RegistrationScreen';
import PostScreen from '../../Screens/PostsScreen';
import AddPost from '../../Screens/CreatePostsScreen';
import { Image } from 'react-native';
import UsersPost from '../../Screens/ProfileScreen';

  const AuthStack = createStackNavigator();
  const MainTab = createBottomTabNavigator();
  
  export function useRoute (isAuth) {
  if (!isAuth) {
   return  <AuthStack.Navigator>
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
      return <MainTab.Navigator
            screenOptions={{
            tabBarShowLabel: false, 
            abBarStyle: { backgroundColor: 'transparent' }, 
            headerShown: false,
      }}
>
      <MainTab.Screen
          options={{
            tabBarIcon: ({size,focused,color}) => {
              return (
                  <Image
                    fadeDuration={0}
                    style={{width: 40, height: 40}} source={require('../../assets/images/grid.png')} />
              );
            },
          }}
          name='post'
          component={PostScreen}>
          </MainTab.Screen>
      <MainTab.Screen
          options={{
            tabBarIcon: ({size,focused,color}) => {
                  return (
                           <Image
                    fadeDuration={0}
                    style={{width: 70, height: 40}} source={require('../../assets/images/new.png')} />
              );
            },
          }}
          name='addPost'
          component={AddPost}>
          </MainTab.Screen>
      <MainTab.Screen
          options={{
            tabBarIcon: ({size,focused,color}) => {
              return (
                  <Image
                    fadeDuration={0}
                    style={{width: 40, height: 40}} source={require('../../assets/images/user.png')} />
              );
            },
          }}
          name='user'
          component={UsersPost}></MainTab.Screen>
    </MainTab.Navigator>
}

