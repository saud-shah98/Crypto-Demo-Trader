import { View, Text, Pressable, FlatList, StyleSheet } from "react-native";
import React from "react";
import AppStyles from "../../AppStyles";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import InventoryEntry from "../../components/InventoryEntry";

export default function Profile({
  balance,
  username,
  navigation,
  user,
  logout,
  inventory,
  totalInvested,
}) {
  const roundedBalance = parseFloat(balance).toFixed(2);
  const roundedInvestment = parseFloat(totalInvested).toFixed(2);
  return (
    <View style={{ flex: 1, backgroundColor: AppStyles.theme_1.DARK }}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.rowItemOrange}>
          <Text
            style={{
              color: AppStyles.theme_1.WHITE,
              fontSize: 25,
            }}
          >
            {username}
          </Text>

          <FontAwesome
            name="user-secret"
            size={52}
            style={{ marginVertical: 5 }}
            color={AppStyles.theme_1.WHITE}
          />
          <Text style={{ color: AppStyles.theme_1.WHITE, fontSize: 15 }}>
            Balance:
          </Text>
          <Text style={{ color: AppStyles.theme_1.WHITE, fontSize: 20 }}>
            ${roundedBalance}
          </Text>
        </View>

        <View style={styles.rowItemWhite}>
          <Text style={{ fontSize: 25, color: "black" }}>Investment</Text>
          <MaterialIcons name="money" size={65} color="black" />
          <Text style={{ color: AppStyles.theme_1.DARK, fontSize: 15 }}>
            Invested:
          </Text>
          <Text style={{ color: AppStyles.theme_1.DARK, fontSize: 20 }}>
            ${roundedInvestment}
          </Text>
        </View>
      </View>

      <View
        style={{
          width: "100%",
          height: 60,
          backgroundColor: "black",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Entypo name="wallet" size={52} color="white" />
      </View>

      <FlatList
        data={inventory}
        style={{ marginTop: 5 }}
        keyExtractor={(item, index) => index}
        renderItem={({item, index}) => <InventoryEntry item={item} key={index} />}
      />

      <View style={{ padding: 10, alignItems: "center" }}>
        <Text style={{ color: AppStyles.theme_1.WHITE, fontSize: 24 }}>
          Signout
        </Text>
        <AntDesign
          name="lock"
          size={52}
          color={AppStyles.theme_1.WHITE}
          onPress={() => logout()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rowItemWhite: {
    padding: 15,
    backgroundColor: AppStyles.theme_1.WHITE,
    alignItems: "center",
    width: "50%",
  },
  rowItemOrange: {
    padding: 15,
    backgroundColor: AppStyles.theme_1.ORANGE,
    alignItems: "center",
    width: "50%",
  },
});
