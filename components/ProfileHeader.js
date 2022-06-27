import React from 'react';
import { StyleSheet, View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import AppStyles from "../AppStyles";

const ProfileHeader = ({
  username,
  roundedBalance,
  roundedInvestment,
  totalProfitLoss,
}) => {
  const roundedTotalProfitLoss = totalProfitLoss.toFixed(2);

  return (
    <>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.rowItemDark}>
          <Text
            style={{
              color: "white",
              fontSize: 25,
            }}
          >
            {username}
          </Text>

          <FontAwesome
            name="user-secret"
            size={52}
            style={{ marginVertical: 5 }}
            color="white"
          />
          <Text style={{ color: "white", fontSize: 15 }}>Balance:</Text>
          <Text style={{ color: "white", fontSize: 16 }}>
            ${roundedBalance}
          </Text>
        </View>

        <View style={styles.rowItemOrange}>
          <Text style={{ fontSize: 20, color: "white" }}>Investment</Text>
          <MaterialIcons name="book" size={65} color="white" />
          <Text style={{ color: "white", fontSize: 15 }}>Invested:</Text>
          <Text style={{ color: "white", fontSize: 16 }}>
            ${roundedInvestment}
          </Text>
        </View>

        <View
          style={{
            backgroundColor: totalProfitLoss >= 0 ? "green" : "darkred",
            padding: 15,
            alignItems: "center",
            width: "33.3%",
          }}
        >
          <Text
            style={{
              color: AppStyles.theme_1.WHITE,
              fontSize: 18,
            }}
          >
            Performance
          </Text>

          <FontAwesome
            name="bar-chart"
            size={52}
            style={{ marginVertical: 5 }}
            color={AppStyles.theme_1.WHITE}
          />
          <Text style={{ color: AppStyles.theme_1.WHITE, fontSize: 15 }}>
            Profit/Loss:
          </Text>
          <Text style={{ color: AppStyles.theme_1.WHITE, fontSize: 20 }}>
            ${roundedTotalProfitLoss}
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  rowItemWhite: {
    padding: 15,
    backgroundColor: AppStyles.theme_1.WHITE,
    alignItems: "center",
    width: "33.3%",
  },
  rowItemOrange: {
    padding: 15,
    backgroundColor: AppStyles.theme_1.ORANGE,
    alignItems: "center",
    width: "33.3%",
  },
  rowItemDark: {
    backgroundColor: 'gray',
    alignItems: "center",
    width: "33.3%",
    padding:15
  },
});

export default ProfileHeader;
