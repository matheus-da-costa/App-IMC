import React, {useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Tela2() {

    const [user, setUser]=useState(null);

    useEffect(() => {
        async function getUser()
        {
            let response = await AsyncStorage.getItem('userData');
            let json = JSON.parse(response);
            setUser(json.name);
        }
        getUser();
    },[])

    return(
        <View>
            <Text>Segunda Tela</Text>
            <Text>Dados do {user} </Text>
        </View>
    );
} 