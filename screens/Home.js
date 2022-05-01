import React, { useState, useEffect,useContext } from 'react'
import { StyleSheet, ActivityIndicator, SafeAreaView,Button,Text,View} from 'react-native'
import {AuthContext} from '../navigation/AuthProvider';
import List from '../components/List'
import SearchBar from '../components/SearchBar'



const Home = ({ navigation }) => {
  const [coinData, setCoinData] = useState([])

  const [searchPhrase, setSearchPhrase] = useState('')
  const [clicked, setClicked] = useState(false)
  const [disable,setDisable] = useState(false)

  const { user, logout } = useContext(AuthContext);

  const [wantsLogOut,setLogOut]= useState(false)

  


  useEffect(() => {
    let abort = new AbortController()
    const interval = setInterval(() => {
      getCoins()
      
    }, 1500)

    return () => {
      abort.abort();
      clearInterval(interval)
    }
  }, [])


  const getCoins = async () => {
    
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    }
    const coins = await fetch('https://api.coinlore.net/api/tickers/', options)
    const coinsJson = await coins.json()
    setCoinData(...coinData, coinsJson.data)
    console.log(coinsJson.data)

  }

  return (

    <SafeAreaView style={styles.root} edges={['bottom', 'left', 'right']}>

       <View style={{marginTop: 15, backgroundColor:'darkred',flexDirection:'row',justifyContent:'center',alignItems:'center'}} >
    
        <Text style={{color:'white'}}>{user.uid}</Text>
        <Button title="Logout" disabled={disable} onPress={()=>{logout() }}color='black'/>
      </View>
      
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />

      
        <List
          searchPhrase={searchPhrase}
          data={coinData}
          setClicked={setClicked}
          navigation={navigation}
        />
  

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    // Controls Background For Search Bar + Remainder of the Page after Search
    backgroundColor: '#303133'
  }
})
export default Home
