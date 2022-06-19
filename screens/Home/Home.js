import React from "react";
import { StyleSheet, SafeAreaView, Pressable, Text, View } from "react-native";
import HomeHeader from "../../components/HomeHeader";
import List from "../../components/List";
import SearchBar from "../../components/SearchBar";
import AppStyles from "../../AppStyles";

const Home = ({
  coinData,
  balance,
  searchPhrase,
  setSearchPhrase,
  clicked,
  setClicked,
  navigation,
}) => {
  return (
    <SafeAreaView style={styles.root} edges={["top,left,right,bottom"]}>
      <HomeHeader balance={balance} navigation={navigation} />
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
      <List
        searchPhrase={searchPhrase}
        data={coinData}
        balance={balance}
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
