import React from 'react';
import { View,
        KeyboardAvoidingView, 
        Image, 
        TextInput, 
        TouchableOpacity, 
        Text,
        StyleSheet 
    } from 'react-native';

export default function Login(props) {
    return (
        <KeyboardAvoidingView style={styles.background}>
            <View style={styles.containerLogo}>
                <Image
                source={require('../assets/img/logo.png')}
                />
            </View>

            <View style={styles.container}>
                <TextInput 
                style={styles.input}
                placeholder="Username"
                autoCorrect={false}
                onChangeText={()=> {}}
                />

                <TextInput
                style={styles.input}
                placeholder="Senha"
                autoCorrect={false}
                onChangeText={()=> {}}
                />

                <TouchableOpacity 
                    style={styles.btnSubmit}
                    onPress={() => props.navigation.navigate("App")}>
                    <Text style={styles.submitText}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnRegister}>
                    <Text>Criar conta gratuita</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF'
    },
    containerLogo: {
        flex: 1,
        justifyContent: 'center',
    },
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        paddingBottom: 50
    },
    input: {
        backgroundColor: '#FFF',
        width: '90%',
        marginBottom: 15,
        color: '#222',
        fontSize: 17,
        borderRadius: 7,
        padding: 10,
    },
    btnSubmit: {
        backgroundColor: '#87cefa',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7
    }, 
    submitText:{
        fontSize: 18
    },
    btnRegister: {
      marginTop: 10,  
    },
});