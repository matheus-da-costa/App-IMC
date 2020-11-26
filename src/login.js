import React, {useState, useEffect} from 'react';

import { View,
    KeyboardAvoidingView, 
    Image, 
    TextInput, 
    TouchableOpacity, 
    Text,
    Animated,
    Keyboard
  } from 'react-native';

import firebase from '../firebaseConfig'; 

import {css} from '../assets/css/css';

export default function Login({navigation}) {

    // Autenticação de Login
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [display, setDisplay]=useState('none');

    function logar() {
        firebase.auth().signInWithEmailAndPassword(email, senha).then(()=>{
            navigation.navigate('App');
        }).catch((error)=> {

            setDisplay('flex');
            setTimeout(() => {
                setDisplay('none');
            },5000);
        });
    }

    //Efeito animado do Login
    const [offset] = useState(new Animated.ValueXY({x: 0, y: 95}));
    const [opacity] = useState(new Animated.Value(0));
    const [logo] = useState(new Animated.ValueXY({x: 200, y:200}));

    useEffect(()=> {
        KeyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
        KeyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

        Animated.parallel([
            Animated.spring(offset.y, {
                toValue: 0,
                speed: 4,
                bounciness: 20    
            }),
            Animated.timing(opacity, {
                toValue: 1,
                duration: 200,
            })
        ]).start();

        function keyboardDidShow(){
            Animated.parallel([
                Animated.timing(logo.x, {
                    toValue: 55,
                    duration: 500,
                }),
                Animated.timing(logo.y, {
                    toValue: 65,
                    duration: 500,
                }),
            ]).start();
        }

        function keyboardDidHide() {
            Animated.parallel([
                Animated.timing(logo.x, {
                    toValue: 200,
                    duration: 500,
                }),
                Animated.timing(logo.y, {
                    toValue: 200,
                    duration: 500,
                }),
            ]).start();
        }
    }, []);    

    return (
        <KeyboardAvoidingView style={css.tela_login}>
            <View style={css.containerLogo}>
                <Animated.Image 
                    style={{
                        width: logo.x,
                        height: logo.y, 
                    }}
                    source={require('../assets/img/logo.png')}/>
            </View>

            <Animated.View style={[
                css.form_login,
                {
                    opacity: opacity,
                    transform: [
                        { translateY: offset.y}
                    ]
                }
            ]}>
            
            <Text style={css.msg_login(display)}>Usuário ou senha inválidos!</Text>
            
            <TextInput 
            style={css.input_login}
            placeholder="Email"
            onChangeText={email => setEmail(email)}
            value={email}
            autoCorrect={false}
            />

            <TextInput
            style={css.input_login}
            placeholder="Senha"
            secureTextEntry={true}
            onChangeText={senha => setSenha(senha)}
            value={senha}
            autoCorrect={false}
            />

            <TouchableOpacity 
                style={css.btnSubmit_login}
                onPress={() => logar()}>
                <Text style={css.submitText_login}>Entrar</Text>
            </TouchableOpacity>

            </Animated.View>
        </KeyboardAvoidingView>
    );
}