import React from 'react';

import {Login,Home,Tela2,Tela3,Imc} from './src/index';

import {css} from './assets/css/css';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons'; 

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function Tabs() {
    return(
        <Tab.Navigator
            barStyle={css.area__tab}
        >
            <Tab.Screen 
                name="Home" 
                component={Home}
                /*options={{
                    tabBarIcon:()=>(
                        <Icon name="home" size={20} color="#999" />
                    )
                }}*/  
            />
            <Tab.Screen 
                name="Tela2" 
                component={Tela2}
                /*options={{
                    tabBarIcon:()=>(
                        <Icon name="hand-holding-medical" size={20} color="#999" />
                    )
                }}*/  
            /> 
            <Tab.Screen 
                name="Tela3" 
                component={Tela3}
                /*options={{
                    tabBarIcon:()=>(
                        <Icon name="ambulance" size={20} color="#999" />
                    )
                }} */
            />
            <Tab.Screen 
                name="Imc" 
                component={Imc}
                /*options={{
                    tabBarIcon:()=>(
                        <Icon name="weight" size={20} color="#999" />
                    )
                }}*/   
            />
        </Tab.Navigator>
    );
}

const App = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} options={{headerTitleStyle:{alignSelf:'center'}}} />
            <Stack.Screen name="App" component={Tabs} />
        </Stack.Navigator>

    </NavigationContainer>
);

export default App;