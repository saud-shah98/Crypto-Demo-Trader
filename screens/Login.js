import React, {useState,useContext} from 'react';
import {View,StyleSheet,Text,Button,Pressable} from 'react-native';

import {AuthContext} from '../navigation/AuthProvider';


const Login = ({navigation}) => {
  const [email,setEmail] = useState('saud@test.com');
  const [password,setPassword] = useState('password')

  const { login } = useContext(AuthContext);

  return(
    <View style={{flex:1,backgroundColor:'black',justifyContent:'center',alignItems:'center'}}>

      <Text style={{fontSize:52, fontFamily:'Monaco', color:'whitesmoke'}}>Login UI</Text>
      <Text style={{fontSize:25, fontFamily:'Monaco', color:'whitesmoke'}}>Under Development</Text>
      <Pressable  style={{backgroundColor:'whitesmoke', marginTop:25, width: '60%', height: 60, justifyContent:'center',alignItems:'center'}} onPress={()=>login(email,password)}>
        <Text>Test Login</Text>
      </Pressable>

    </View>
  )
}

export default Login;