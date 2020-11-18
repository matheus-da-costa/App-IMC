import React, {useState,useEffect} from 'react';

import { View,
        KeyboardAvoidingView, 
        Image, 
        TextInput, 
        TouchableOpacity, 
        Text
    } from 'react-native';

import {css} from '../assets/css/css';

export default function Login(props) {

    const [display, setDisplay]=useState('none');

    return (
        <KeyboardAvoidingView style={css.tela_login}>
            <View style={css.containerLogo}>
                <Image
                source={require('../assets/img/logo.png')}
                />
            </View>

            <View>
                <Text style={css.msg_login(display)}>Usuário ou senha inválidos!</Text>
            </View>

            <View style={css.form_login}>
                <TextInput 
                style={css.input_login}
                placeholder="Username"
                autoCorrect={false}
                onChangeText={()=> {}}
                />

                <TextInput
                style={css.input_login}
                placeholder="Senha"
                secureTextEntry={true}
                autoCorrect={false}
                onChangeText={()=> {}}
                />

                <TouchableOpacity 
                    style={css.btnSubmit_login}
                    onPress={() => props.navigation.navigate("App")}>
                    //onPress={()=>setDisplay('flex')}
                    <Text style={css.submitText_login}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={css.btnRegister_login}>
                    <Text>Criar conta gratuita</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

