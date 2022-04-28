import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import {useFonts} from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Detail from './screens/Detail';



const Stack = createNativeStackNavigator();

const customFonts = {
  DMSansRegular: require('./assets/fonts/DMSans-Regular.ttf')
}

export default function App() {
  const[fontsLoaded] = useFonts(customFonts);

    return(
    
      
      <NavigationContainer>
         <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
       </NavigationContainer>  

     
    )
  };



  

const styles = StyleSheet.create({

  container:{
    flex:1,
    padding: 10,
    backgroundColor:'#e8ddcd',
  },
  card: {
    width:'100%'
  },
});
