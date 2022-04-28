import React, {useState,useEffect} from 'react'
import {Text,StyleSheet, ActivityIndicator,SafeAreaView,View} from 'react-native';
import Columns from '../components/Columns';
import Entry from '../components/Entry';
import List from '../components/List';
import SearchBar from '../components/SearchBar';


const Home = ({navigation}) =>{
  
    const [coinData, setCoinData] = useState([]);

    const [searchPhrase,setSearchPhrase] = useState('');
    const [clicked,setClicked] = useState(false);
  
    useEffect(() => {
      getCoins()
  
      const interval = setInterval(() => {
        getCoins()
  
      },1500)

      return()=>clearInterval(interval)   

  },[]);

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


    return(
        
      <SafeAreaView style={styles.root} edges={['bottom','left','right']}>

        <SearchBar
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
          clicked={clicked}
          setClicked={setClicked}/>

        { !coinData? (
          <ActivityIndicator size="large" />
        ) : (
          
            <List
              searchPhrase={searchPhrase}
              data={coinData}
              setClicked={setClicked}
              navigation={navigation}
            />
            

        )}
    </SafeAreaView>
        
    
    )
}

const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "center",
    flex:1
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  titleContainer:{
    backgroundColor:'darkred',
    width:'100%',
    height: 80,
    alignItems:'center',
  }
});
export default Home;