import { Text, StyleSheet, View, Dimensions } from "react-native"

export default function Header() {

    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;

    return (
        <View style={{...styles.header,shadowOffset:{width: 0, height:0.5}, shadowColor: '#000'}}>
            <Text style={{...styles.text, paddingTop: (height / 100 * 5.6)}}>Створити публікацію</Text>
            {/* <Image fadeDuration={0} style={{...styles.logOutIcon, top: (height / 100 * 5.5), right: (width / 100 *10) }} source={require('../../assets/images/log-out.png')} ></Image> */}
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        position: 'relative',      
        borderBottomColor: '#E8E8E8',
        borderBottomWidth: 1,
    },
    logOutIcon: {
        width: 24,
        height: 24,
        color: '#BDBDBD',
        resizeMode: 'cover',
        position:'absolute'
    },
    text: {
        color: '#212121',
        fontSize: 17,
        textAlign: "center",
        paddingBottom: 11,
    }
})  
