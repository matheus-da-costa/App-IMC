import React from 'react';

import Imc from './src/pages/imc';
import Login from './src/login';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Imc" component={Imc} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default App;