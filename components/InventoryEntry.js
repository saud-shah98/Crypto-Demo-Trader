import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Foundation } from "@expo/vector-icons";
import AppStyles from "../AppStyles";
import { AntDesign } from "@expo/vector-icons";

const options = {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
};

const InventoryEntry = ({ item, navigation }) => {
  const [current_price_usd, setCurrentPriceUSD] = useState();
  const [profitLoss, setProfitLoss] = useState();

  console.log(profitLoss);
  useEffect(() => {
    const getProfitLoss = async () => {
      const response = await fetch(
        `https://api.coinlore.net/api/ticker/?id=${item.id}`,
        options
      );
      const result = await response.json();
      setCurrentPriceUSD(result[0].price_usd);
      let change = parseFloat(result[0].price_usd).toFixed(2) - parseFloat(item.bought_price).toFixed(2)
      setProfitLoss(change.toFixed(2))};
    getProfitLoss();
  }, []);

  return (
    <View style={styles.row}>
      <View style={styles.columns}>
        <Text style={styles.labels}>Name</Text>
        <Text
          style={{
            fontSize: item.coinName.length >= 8 ? 13 : 15,
            color: AppStyles.theme_1.DARK,
          }}
        >
          {item.coinName}
        </Text>
      </View>

      <View style={styles.columns}>
        <Text style={styles.labels}>Quantity</Text>
        <Text
          style={{
           fontSize:15,
            color: AppStyles.theme_1.DARK,
          }}
        >
          {item.quantity}
        </Text>
      </View>

      <View style={styles.columns}>
        <Text style={styles.labels}>Bought Price</Text>
        <View style={styles.priceColumn}>
          <Foundation
            name="dollar"
            size={12}
            color="green"
            style={{ marginRight: 3 }}
          />
          <Text
            style={{
              fontSize: 12,
              color: AppStyles.theme_1.DARK,
            }}
          >
            {item.bought_price}
          </Text>
        </View>
      </View>

      <View style={styles.columns}>
        <Text style={styles.labels}>Current Price</Text>
        <Text style={styles.rowShortText}>
          ${parseFloat(current_price_usd).toFixed(2)}
        </Text>
      </View>

      {/* <View style={styles.columns}>
        <Text style={styles.labels}>Invested</Text>
        <Text style={styles.rowShortText}>
          ${parseFloat(item.quantity * item.bought_price).toFixed(2)}
        </Text>
      </View> */}

      <View style={styles.columns}>
        <Text style={styles.labels}>Gain/Loss</Text>
        <Text style={styles.rowShortText}>{profitLoss}</Text>
      </View>

    
    </View>
  );
};
const styles = StyleSheet.create({
  row: {
    backgroundColor: AppStyles.theme_1.WHITE,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    marginVertical: 5,
    borderRadius: 10,
    width: "98%",
    alignSelf: "center",
    paddingHorizontal:25,
  },
  rowShortText: {
    fontSize: 12,
    color: AppStyles.theme_1.DARK,
  },
  rowLongText: {
    fontSize: 18,
    color: AppStyles.theme_1.DARK,
  },
  columns: {
    alignItems: "center",
    marginHorizontal: 5,
  },
  labels: {
    color: AppStyles.theme_1.DARK,
    fontSize: 12,
  },
  priceColumn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default InventoryEntry;
