import React,{useContext} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Button} from 'react-native';
import Home from '../../screens/Home';
import Detail from '../../screens/Detail';
import { AuthContext } from '../AuthProvider';

const Stack = createNativeStackNavigator();


const AppStack = () => {
   
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
            <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
    )
}

export default AppStack;