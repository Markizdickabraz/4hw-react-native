import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PostScreen from '../Screens/PostsScreen';
import AddPost from '../Screens/CreatePostsScreen';
import { Image} from 'react-native';
import UsersPost from '../Screens/ProfileScreen';

const MainTab = createBottomTabNavigator();

export default function Home() {
    return (
        <MainTab.Navigator
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
                    style={{width: 40, height: 40}} source={require('../assets/images/grid.png')} />
              );
            },
          }}
          name='post'
          component={PostScreen}>
          </MainTab.Screen>
        <MainTab.Screen 
          options={{
            tabBarIcon: ({ size, focused, color }) => {
                  return (
                           <Image
                    fadeDuration={0}
                    style={{width: 70, height: 40}} source={require('../assets/images/new.png')} />
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
                    style={{width: 40, height: 40}} source={require('../assets/images/user.png')} />
              );
            },
          }}
          name='user'
          component={UsersPost}></MainTab.Screen>
        </MainTab.Navigator>
    )
}

// export function inAddScreen() {
//   return (
//     <AddScreenPage.Navigator>
//       <AddScreenPage.Screen>
//         <TouchableOpacity activeOpacity={0.7}
//         options={{
//             tabBarIcon: ({size,focused,color}) => {
//                   return (
//                         <Image
//                     fadeDuration={0}
//                     style={{width: 70, height: 40}} source={require('../../assets/images/new.png')} />
//               );
//             },
//           }}
//           name='addPost'
//           component={AddPost}>
//                 {/* <Image
//                     fadeDuration={0}
//                     style={{width: 70, height: 40}} source={require('../assets/images/new.png')} /> */}
//                     </TouchableOpacity>
//       </AddScreenPage.Screen>
//       </AddScreenPage.Navigator>
