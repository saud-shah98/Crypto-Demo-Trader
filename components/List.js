import React from "react";
import { FlatList, View, Text } from "react-native";
import Entry from "./Entry";

const List = ({ data, navigation, searchPhrase,balance }) => {
  const renderItem = ({ item }) => {
    if (searchPhrase === "") {
      return <Entry item={item} balance={balance} navigation={navigation} />;
    }

    if (
      item.name
        .toUpperCase()
        .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))
    ) {
      return <Entry item={item} balance={balance} navigation={navigation} />;
    }
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default List;
