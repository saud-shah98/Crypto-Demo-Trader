import React, { useState, useEffect,useContext }  from 'react';
import {AuthContext} from '../../navigation/AuthProvider';
import Home from './Home'

const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  }

const HomeContainer = ({navigation}) => {
  const [coinData, setCoinData] = useState([])
  const [searchPhrase, setSearchPhrase] = useState('')
  const [clicked, setClicked] = useState(false)
  const { user, logout } = useContext(AuthContext);

  useEffect(() => {
    const signalController = new AbortController();

    let mounted = true
    const getCoins = async () => {
      
      const coins = await fetch('https://api.coinlore.net/api/tickers/', options)
      const coinsJson = await coins.json()
      if (mounted){
      setCoinData(...coinData, coinsJson.data)
      }}
  
    const interval = setInterval(() => {
         getCoins()
    }, 2000)

    return () => {
      mounted=false
      signalController.abort()
      clearInterval(interval)
    }
  }, [])

    return (
        <Home 
            user={user} 
            logout={logout}
            navigation={navigation}
            clicked={clicked} 
            setClicked={setClicked} 
            searchPhrase={searchPhrase} 
            setSearchPhrase={setSearchPhrase} 
            coinData={coinData} 
            setCoinData={setCoinData}  
        />
    )

}
     

export default HomeContainer;
