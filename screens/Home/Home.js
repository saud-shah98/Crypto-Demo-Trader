import React from "react";
import { StyleSheet, SafeAreaView, Pressable } from "react-native";
import List from "../../components/List";
import SearchBar from "../../components/SearchBar";
import { SimpleLineIcons } from "@expo/vector-icons";

const Home = ({
  coinData,
  searchPhrase,
  setSearchPhrase,
  clicked,
  setClicked,
  logout,
  navigation,
}) => {
  return (
    <SafeAreaView style={styles.root} edges={["top,left,right,bottom"]}>
      <Pressable
        onPress={() => {
          logout();
        }}
        style={styles.logoutBtn}
      >
        <SimpleLineIcons name="logout" color="white" size={35} />
      </Pressable>

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
    backgroundColor: "grey",
  },
  logoutBtn: {
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
});
export default Home;