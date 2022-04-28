import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import {useFonts} from 'expo-font';
import Entry from './components/Entry';
import Columns from './components/Columns';
import AppLoading from 'expo-app-loading';

const customFonts = {
  DMSansRegular: require('./assets/fonts/DMSans-Regular.ttf')
}

export default function App() {
  const[fontsLoaded] = useFonts(customFonts);
  const [loading, setLoading] = useState(true);
  const [coinData, setCoinData] = useState([]);

  const getCoins = async () =>{
    const options = {
      method:'GET',
      headers: {
        Accept: "application/json",
      }
    }
      const coins = await fetch('https://api.coinlore.net/api/tickers/', options)
      const coinsJson = await coins.json()
      setCoinData(...coinData, coinsJson.data)
      
  };

  useEffect(() => {
    getCoins()
    setLoading(false)

    const interval = setInterval(() => {
      getCoins()

    },1500)

    return()=>clearInterval(interval)

   
},[]);
   
    return(
    
      
        <>
        {loading ? <AppLoading />: (
           <View style={styles.card}>
           <Columns />
           <FlatList data={coinData} keyExtractor={(item) => item.id} renderItem={Entry} />
         </View>

        )}
        </>

     
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
