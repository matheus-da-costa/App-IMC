import React from 'react';

import {Login,Tela1,Tela3,Imc} from './src/index';

import {css} from './assets/css/css';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackground } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';


const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function Tabs() {
    return(
        <Tab.Navigator
            barStyle={css.area__tab}
        >
            <Tab.Screen 
                name="Imc" 
                component={Imc}
                options={{
                    tabBarIcon:()=>(
                        <Icon name="heartbeat" size={20} color="#1C1C1C" />
                    )
                }}   
            />
            <Tab.Screen 
                name="Corrida" 
                component={Tela1}
                options={{
                    tabBarIcon:()=>(
                        <Icon name="hourglass-start" size={20} color="#1C1C1C" />
                    )
                }}  
            /> 
            <Tab.Screen 
                name="qtd de água" 
                component={Tela3}
                options={{
                    tabBarIcon:()=>(
                        <Icon name="tint" size={20} color="#1C1C1C" />
                    )
                }}
            />
            
        </Tab.Navigator>
    );
}

const App = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login}  options={{headerShown: false}}/>
            <Stack.Screen name="App" component={Tabs} options={({}) => {
            return {headerTitleStyle:{alignSelf:'center'},
            headerLeft:null,
            headerStyle: css.headerStyle}}}/>
        </Stack.Navigator>

    </NavigationContainer>
);

export default App;