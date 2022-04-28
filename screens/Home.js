import React, {useState,useEffect} from 'react'
import {Text,View,StyleSheet,FlatList} from 'react-native';
import Columns from '../components/Columns';
import Entry from '../components/Entry';


const Home = ({navigation}) =>{
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
        <Columns />
        <FlatList data={coinData} keyExtractor={(item) => item.id} renderItem={({item}) => <Entry item={item} navigation={navigation} />} />
        </>
    
    )
}

export default Home;