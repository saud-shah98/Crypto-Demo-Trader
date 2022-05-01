import React from 'react-native';
import {View,Text,StyleSheet,Pressable,SafeAreaView,Image} from 'react-native';
import AppStyles from '../AppStyles'


export default function Splash({navigation}){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.splash}>
            
                <Image style={{width:'85%', height:'70%'}} source={require('../assets/splash2.jpeg')}/>

                
                <Pressable style={styles.loginBtn} onPress={()=> navigation.navigate('Login')}>
                    <Text style={styles.splashText_secondary}>Login</Text>
                </Pressable>
                <Pressable style={styles.registerBtn} onPress={()=>navigation.navigate('Register')}>
                    <Text style={styles.splashText}>Create an Account</Text>
                </Pressable>
          
            </View>
            
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container: {
        flex:1,
    },
    splash:{
        backgroundColor:'whitesmoke',
        flex:1,
        alignItems:'center',
        justifyContent:'space-evenly'


    },
    splashText:{
        color:AppStyles.theme_1.DARKGREEN,
        fontSize: 25,
    },
    splashText_secondary:{
        color:AppStyles.theme_1.WHEAT,
        fontSize: 25,
    },
    loginBtn:{
        backgroundColor:AppStyles.theme_1.GREY,
        width: '85%',
        alignItems:'center',
        height: 60,
        justifyContent:'center',
    },
    registerBtn:{
        backgroundColor:'whitesmoke',
        width: '85%',
        alignItems:'center',
        height: 60,
        justifyContent:'center',
        borderRadius:2,
        borderColor:AppStyles.theme_1.GREY,
        borderWidth: 2,
    }
    
})
