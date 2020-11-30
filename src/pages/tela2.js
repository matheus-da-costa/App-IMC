import React, {useState, useEffect} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
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

    return (
        <View style = {styles.container}>
            <Text>Peso Ideal</Text>
            <Image style={styles.imagem} source={require('./assets/img/table.png')} />
        </View>
        
        
    );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    

  },
  imagem: {
    width: 300,
    height: 300,
  }
}) 