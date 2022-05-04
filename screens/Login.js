import React, {useState,useContext} from 'react';
import {View,StyleSheet,Text,Button,Pressable,Image} from 'react-native';

import {AuthContext} from '../navigation/AuthProvider';


const Login = ({navigation}) => {
  const [email,setEmail] = useState('saud@test.com');
  const [password,setPassword] = useState('password')

  const { login } = useContext(AuthContext);

  return(
    <View style={{flex:1,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:40, fontFamily:'Monaco', color:'black'}}>Login UI</Text>
      <Text style={{fontSize:18, fontFamily:'Monaco', color:'black'}}>Under Development</Text>
      <Image style={styles.splashImg} source={require('../assets/splash4.jpg')}/>
      
      <Pressable  style={{backgroundColor:'firebrick', width: '85%', marginTop:10, height: 60, justifyContent:'center',alignItems:'center'}} onPress={()=>login(email,password)}>
        <Text style={{color:'white',fontSize:25}}>Test Login</Text>
      </Pressable>

    </View>
  )
}

const styles = StyleSheet.create({
  splashImg:{
    width: '85%', height:'70%', marginTop: 5,
},
})

export default Login;