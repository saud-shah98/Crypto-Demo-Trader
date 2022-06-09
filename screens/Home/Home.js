import React from "react";
import { StyleSheet, SafeAreaView, Pressable, Text,View } from "react-native";
import List from "../../components/List";
import SearchBar from "../../components/SearchBar";
import { SimpleLineIcons } from "@expo/vector-icons";
import AppStyles from "../../AppStyles";



const Home = ({
  coinData,
  searchPhrase,
  setSearchPhrase,
  clicked,
  setClicked,
  logout,
  navigation,
  user,
  balance,
}) => {

  function BalanceHeader(){
    return(
      <View style={{alignItems:'center'}}>
    
    <Text style={{ fontSize: 15, color: "white",marginTop:5}}>
          Balance
        </Text>
      <Text style={{ fontSize: 15, color: "white"}}>
          ${balance}
        </Text>

   
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.root} edges={["top,left,right,bottom"]}>
       
       <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around',paddingTop:15}}>
       <SimpleLineIcons name="user" color="white" size={30} />
       { balance!=null?<BalanceHeader />: <></>}
      
      
     
      <Pressable
        onPress={() => {
          logout();
        }}
        style={styles.logoutBtn}
      >
        <SimpleLineIcons name="logout" color="white" size={35} />
      </Pressable>
      
      
     
      
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
        navigation={navigation}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    // Controls Background For Search Bar + Remainder of the Page after Search
    backgroundColor: AppStyles.theme_1.DARK,
  },
  logoutBtn: {


  },
});
export default Home;
