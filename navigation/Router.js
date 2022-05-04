
import React, {useState, useContext,useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { AuthContext } from './AuthProvider';
import AppStack from './Stacks/AppStack';
import AuthStack from './Stacks/AuthStack';
import {auth,db} from '../firebase';
import { onAuthStateChanged } from "firebase/auth";
import {Text} from 'react-native';



const Router = () => {
    const {user, setUser} = useContext(AuthContext);
    const [loading,setLoading] = useState(true);
    const [initializing,setInitializing] = useState(true);

    function userChange(user){
        setUser(user);
        if(initializing) setInitializing(false);
        setLoading(false);
    }

    useEffect(()=>{
        const subscriber = auth.onAuthStateChanged(userChange)
        return subscriber;
    },[]);

    if (loading){
        return <Text>Loading</Text>
    }

    return(
        <NavigationContainer>
            {user ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    )
}

export default Router;
