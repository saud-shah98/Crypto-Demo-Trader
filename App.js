import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import Entry from './components/Entry';
import Columns from './components/Columns';
import axios from 'axios';

export default function App() {

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
      console.log(coinsJson)
      setCoinData(...coinData, coinsJson.data)
      
  };

  useEffect(() => {
    getCoins()
    setLoading(false)

    const interval = setInterval(() => {
      getCoins()

    },10000)

    return()=>clearInterval(interval)

   
},[]);
   
    
    return(
      <View style={styles.container}>
        

        {loading ? <Text style={{fontSize:100,alignSelf:'center',}}>Loading</Text>: (
           <View style={styles.card}>
           <Columns />
           <FlatList data={coinData} keyExtractor={(item) => item.id} renderItem={Entry} />
         </View>

        )}
        
     </View>

    )
  };


const styles = StyleSheet.create({

  container:{
    flex:1,
    padding: 25,
    backgroundColor:'white',
  },
  card: {
    width:'100%'
  },
});
