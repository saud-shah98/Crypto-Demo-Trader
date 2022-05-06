import React, {useState,useContext} from 'react';
import {View,StyleSheet,Text,Button,Pressable,Image, TextInput, Alert} from 'react-native';
import AppStyles from '../AppStyles'
import {AuthContext} from '../navigation/AuthProvider';


const Login = ({navigation}) => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('')

  const { login } = useContext(AuthContext);

  return(
    <View style={{flex:1,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:40, color:'black', marginBottom:20}}>Welcome</Text>
      {/* <Image style={styles.splashImg} source={require('../assets/splash4.jpg')}/> */}

      <View style={{height: 200,width: '80%', alignItems:'center', justifyContent:'space-between'}}>
        <TextInput style={styles.textInput} color='white' onChangeText={setEmail} placeholder="Email" placeholderTextColor='white'  value={email} />
        <TextInput  style={styles.textInput} onChangeText={setPassword} placeholder="Password" placeholderTextColor='white'  value={password} secureTextEntry={true} />
     
        <Pressable  style={{backgroundColor:'darkgreen', width: '60%', marginTop:5, height: 60, justifyContent:'center',alignItems:'center'}} onPress={()=>{
  
          login(email,password)
          }}>
        <Text style={{color:'white',fontSize:25}}>Login</Text>
      </Pressable>
      </View>      
     

    </View>
  )
}

const styles = StyleSheet.create({
  splashImg:{
    width: '85%', height:'70%',
},
  loginForms:{
    flexDirection:'column',
    justifyContent:'space-between'
  },
  textInput:{
    width: '65%',
    backgroundColor:AppStyles.theme_1.GREY,
    height :50,
    paddingHorizontal:25,
    color:'white'
  }

})

export default Login;