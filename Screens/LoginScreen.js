import { useEffect, useState } from "react"
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Platform,
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback,
    Dimensions,
    ImageBackground,
    Button
} from "react-native"


export default function LoginScreen({navigation}) {
    // console.log(Platform.OS)
    const width = Dimensions.get('window').width;

    const [isShowKeyboard, setIsShowKeyboard] = useState(false)

    const intialRegistration = {
        email: '', 
        pass: '',
    }

        const [activeInput,setActiveInput]=useState('');

    const [registration, setRegistration] = useState(intialRegistration);
    
    useEffect(() => {
        setIsShowKeyboard(false)
    }, [submit])

    const [seePass, useSeePass] = useState(true);

    const closeKeyboard = () => {
        Keyboard.dismiss();
        setIsShowKeyboard(false)
    }

    const submit = () => {
        Keyboard.dismiss()
        setIsShowKeyboard(false)
        console.log(registration)
        setRegistration(intialRegistration)
     }
    return (
        <TouchableWithoutFeedback onPress={closeKeyboard}>
            <ImageBackground style={styles.image} source={require('../assets/images/PhotoBG.jpg')} >
        <View style={{...styles.container, flex: isShowKeyboard ? 0.65 : 0.6}}>
            <View style={styles.divText}><Text style={styles.text}>Війти</Text></View>
            <KeyboardAvoidingView style={{...styles.inputContainer}}
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
                    <View>
                            <TextInput style={{ ...styles.input,borderColor:activeInput==='email'?'#FF6C00':'#f6f6f6' }}
                        value={registration.email}
                        placeholder='Адреса електронної пошти'
                        onChangeText={(value) => setRegistration((prevState) => ({ ...prevState, email: value }))}
                               onFocus={() => {
                                        setActiveInput('email');
                                        setIsShowKeyboard(true)
                                }}
                                placeholderTextColor ='#BDBDBD'  
                />
            </View>
             <View>
                            <TextInput style={{ ...styles.input, borderColor:activeInput==='pass'?'#FF6C00':'#f6f6f6'}}
                    value={registration.pass}
                    placeholder='Пароль'  
                    onChangeText={(value) => setRegistration((prevState) =>({...prevState, pass: value})) }
                    secureTextEntry={seePass}
                                onFocus={() => {
                                        setActiveInput('pass');
                                        setIsShowKeyboard(true)
                                }}
                                placeholderTextColor ='#BDBDBD'  
                            />
                    <Text style={{ ...styles.seePass, right :32}} onPress ={()=> useSeePass(false)} >Показати</Text>
            </View>
                </KeyboardAvoidingView>
            <TouchableOpacity style={{...styles.submitBtn, width: width -32}} activeOpacity={0.7} onPress ={submit}>
                <Text style={styles.submitTitle}>Зареєструватися</Text>
            </TouchableOpacity>
                 <View>
                        <Text onPress={() => { navigation.navigate('registr') }} style={styles.askLogo}>Нема аккаунта? Зереєструватись  </Text>
                    </View>
                </View>
                </ImageBackground>
            </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        position: 'relative',
        borderTopLeftRadius: 25,
        borderTopRightRadius:25,
    },
    divText: {
        paddingTop :32,
    },
    text: {
        textAlign:'center',
        color: '#212121',
        fontSize: 30,
    },
    inputContainer: {
        paddingRight: 16,
        paddingLeft: 16,
        paddingTop: 32,
        paddingBottom:43,
        gap:16,
    },
    input: {
        marginTop:16,
        backgroundColor: '#e8e8e8',
        height: 50,
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 16,
    },

    submitBtn: {
        marginTop:43,
        marginRight: 16,
        marginLeft: 16,
        height:51,
        backgroundColor: '#FF6C00',
        justifyContent: 'center',
        alignItems: 'center', 
        borderRadius: 100,
    },
    submitTitle: {
        color: '#FFFFFF',
        textAlign: 'center',
    }, 
    askLogo: {
        paddingTop: 16,
        textAlign: 'center',
        color: '#1B4371',
    },
    seePass: {
        position: 'absolute',
        top:30,
    }, 
    image: {
        flex: 1,
      justifyContent: 'center',
      resizeMode: 'cover',
      justifyContent:'flex-end'
  },
})