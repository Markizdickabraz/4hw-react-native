import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
// import { NavigationContainer } from '@react-navigation/native';
import Header from "../components/Posts/header";
// import { inAddScreen } from "../components/router/router";

export default function PostScreen({route}) {
console.log('route.params',route.params)

    // const addPost = ({navigation}) => {
    //     navigation.navigate('CreatePostsScreen')
    // }


    return (
        <View style={styles.body} >
            <Header />
            {/* <TouchableOpacity activeOpacity={0.7}
          name='addPost'
          component={addPosts}>
                <Image
                    fadeDuration={0}
                    style={{width: 70, height: 40}} source={require('../assets/images/new.png')} />
                    </TouchableOpacity> */}
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between',
    }
})