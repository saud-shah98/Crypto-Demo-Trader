import { View, Text } from "react-native";
import React from "react";
import { SimpleLineIcons } from "@expo/vector-icons";

export default function HomeHeader({ balance, navigation }) {
  function BalanceHeader() {
    const roundedBalance = parseFloat(balance).toFixed(2);
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
  );
}
