import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screens/Login';
import Register from '../../screens/Register';
import Splash from '../../screens/Splash'

const Stack = createNativeStackNavigator();


const AppStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    )
}

export default AppStack;