// SearchBar.js
import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import AppStyles from '../AppStyles';

const SearchBar = ({clicked, searchPhrase, setSearchPhrase, setClicked}) => {
  return (
    <View style={styles.container}>
      <View
        style={
          clicked
            ? styles.searchBar__clicked
            : styles.searchBar__unclicked
        }
      >
        {/* search Icon */}
        <Feather
          name="search"
          size={20}
          color="white"
          style={{ marginLeft: 1 }}
        />
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor='grey'
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setClicked(true);
          }}
        />
        {/* cross Icon, depending on whether the search bar is clicked or not */}
        {clicked && (
          <Entypo name="cross" size={20} color="white" style={{ padding: 1 }} onPress={() => {
              setSearchPhrase("")
          }}/>
        )}
      </View>
      {/* cancel button, depending on whether the search bar is clicked or not */}
      {clicked && (
        <View style={{marginLeft:10}}>
          <Button color='green'
            title="Cancel"
            onPress={() => {
              Keyboard.dismiss();
              setClicked(false);
            }}
          ></Button>
        </View>
      )}
    </View>
  );
};
export default SearchBar;

// styles
const styles = StyleSheet.create({
  container: {
    margin:15,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",

  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: AppStyles.theme_1.GREY,
    borderRadius: 15,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "80%",
    backgroundColor: AppStyles.theme_1.GREY,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
    color: AppStyles.theme_1.WHEAT
  },
});