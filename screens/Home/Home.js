import React from "react";
import { StyleSheet, SafeAreaView, Pressable, Text, View } from "react-native";
import List from "../../components/List";
import SearchBar from "../../components/SearchBar";
import AppStyles from "../../AppStyles";
import { SimpleLineIcons } from "@expo/vector-icons";

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
  function BalanceHeader() {
    const roundedBalance = parseFloat(balance).toFixed(2);
    if (!balance) return 
    return (
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 15, color: "white", marginTop: 5 }}>
          Balance
        </Text>
        <Text style={{ fontSize: 15, color: "white" }}>${roundedBalance}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.root} edges={["top,left,right,bottom"]}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          paddingTop: 15,
        }}
      >
        <SimpleLineIcons
          name="user"
          color="white"
          size={30}
          onPress={() => navigation.navigate("Profile")}
        />

        

        {balance != null ? <BalanceHeader /> : <></>}
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
});
export default Home;
