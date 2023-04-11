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
    Image,
    ImageBackground,
} from "react-native"
import * as ImagePicker from 'expo-image-picker';

const deleteAvatar = null;

export default function RegistrationScreen({navigation}) {
    const [image, setImage] = useState(deleteAvatar)
    
    const pickImage = async (e) => {
            // No permissions request is necessary for launching the image library
        if (!image) {
                let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
    
            console.log(result);
    
            if (!result.canceled) {
                setImage(result.assets[0].uri);
            }
        }
        else {
            setImage(deleteAvatar)
        }
        }
    
    const width = Dimensions.get('window').width;

    const [isShowKeyboard, setIsShowKeyboard] = useState(false)

    const intialRegistration = {
        login: '',
        email: '', 
        pass: '',
    }
    
    const [registration, setRegistration] = useState(intialRegistration);
    
    const [activeInput,setActiveInput]=useState('');

    
    useEffect(() => {
        setIsShowKeyboard(false)
    }, [submit])

    const [seePass, useSeePass] = useState(true);

    const closeKeyboard = (e) => {
        Keyboard.dismiss();
        setIsShowKeyboard(false)
    }

    const submit = () => {
        setActiveInput('')
        Keyboard.dismiss()
        setIsShowKeyboard(false)
        console.log(registration)
        setRegistration({
        login: '',
        email: '', 
        pass: '',})
    }
 
    return (
        <TouchableWithoutFeedback onPress={() => { closeKeyboard() }}>
      <ImageBackground style={styles.image} source={require('../assets/images/PhotoBG.jpg')} >
        <View style={{...styles.container, flex: isShowKeyboard ? 0.8 : 0.67}}>
                <View style={{ ...styles.photoContainer, left: (width - 120) / 2 }}>
                    <TouchableOpacity  onPress={pickImage} style={styles.iconContainer}>
                    {image && <Image source={{ uri: image }} style={{ width: 120, height: 120, borderRadius:16 }} />}
                        {!image && <Image
                            fadeDuration={0}
                            style={styles.iconAdd} source={require('../assets/images/add.png')} />}
                        {image && <Image
                            fadeDuration={0}
                            style={{...styles.iconDelete}} source={require('../assets/images/delete.png')} />}
                    </TouchableOpacity>           
            </View>
            <Text style={styles.text}>Регистрація</Text>
            <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
            <View style={{...styles.inputContainer}}>
                 <View >
                            <TextInput style={{ ...styles.input, borderColor:activeInput==='login'?'#FF6C00':'#f6f6f6'}}
                            value={registration.login}
                            placeholder='Логін'  
                            onChangeText={(value) => setRegistration((prevState) =>({...prevState, login: value})) }
                                onFocus={() => {
                                        setActiveInput('login');
                                        setIsShowKeyboard(true)
                                }}
                                placeholderTextColor='#BDBDBD'
                            />
            </View>
             <View >
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
             <View >
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
                </View>
                </KeyboardAvoidingView>
            <TouchableOpacity style={{...styles.submitBtn, width: width -32}} activeOpacity={0.7} onPress ={submit}>
                <Text style={styles.submitTitle}>Зареєструватися</Text>
                    </TouchableOpacity>
                    <View>
                        <Text onPress={() => { navigation.navigate('login') }} style={styles.askLogo}>Вже є акаунт. Увійти </Text>
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
    // height: 549,
        flex: 0.67,
        borderTopLeftRadius: 25,
        borderTopRightRadius:25,
    },
    text: {
        textAlign:'center',
        color: '#212121',
        paddingTop: 92,
        fontSize: 30,
    },
    photoContainer: {
        position: 'absolute',
        top: -60,
        borderRadius:16,
        width: 120,
        height: 120,
        backgroundColor: '#F6F6F6',
        zIndex:1,
    },
    inputContainer: {
        display:"flex",
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
        // borderColor: '#f6f6f6',
        borderRadius: 8,
        paddingLeft: 16,
        zIndex:666,
    },

    submitBtn: {
        // paddingTop:43,
        marginRight: 16,
        marginLeft: 16,
        height:51,
        backgroundColor: '#FF6C00',
        justifyContent: 'center',
        alignItems: 'center', 
        borderRadius: 100,
    },
    submitTitle: {
        // flex:1,
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
        top: 30,
        zIndex: 999
    }, 
    iconContainer: {
        zIndex: 999,
    },
    iconAdd: {
        position: 'absolute',
        top: 90,
        right: -10,
        width: 25,
        height: 25,
        resizeMode: 'cover'
    },
    iconDelete: {
        position: 'absolute',
        top: 86,
        right: -17,
        width: 37,
        height: 37,
        resizeMode: 'cover'
    },
    image: {
        flex: 1,
      justifyContent: 'center',
      resizeMode: 'cover',
      justifyContent:'flex-end'
  },
})