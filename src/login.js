import React, {useState,useEffect} from 'react';

import { View,
        KeyboardAvoidingView, 
        Image, 
        TextInput, 
        TouchableOpacity, 
        Text,
        Animated,
        Keyboard
      } from 'react-native';

import {css} from '../assets/css/css';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({navigation}) {

    const [display, setDisplay]=useState('none');
    const [user, setUser]=useState(null);
    const [password, setPassword]=useState(null);
    const [login, setLogin]=useState(null);

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

    //Envio de formulário
    async function sendForm()
    {
        let response = await fetch('http://192.168.15.3:3000/login', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: user,
                password: password
            })
        });
        let json = await response.json();
        if(json === 'error'){
            setDisplay('flex');
            setTimeout(() => {
                setDisplay('none');
            },5000);
            await AsyncStorage.clear();
        }else { 
            await AsyncStorage.setItem('userData', JSON.stringify(json));
            navigation.navigate('App');
        }
    }

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
                placeholder="Username"
                autoCorrect={false}
                onChangeText={text=>setUser(text)}
                />

                <TextInput
                style={css.input_login}
                placeholder="Senha"
                secureTextEntry={true}
                autoCorrect={false}
                onChangeText={text=>setPassword(text)}
                />

                <TouchableOpacity 
                    style={css.btnSubmit_login}
                    onPress={() => sendForm()}>
                    <Text style={css.submitText_login}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={css.btnRegister_login}>
                    <Text>Criar conta gratuita</Text>
                </TouchableOpacity>
            </Animated.View>
        </KeyboardAvoidingView>
    );
}

