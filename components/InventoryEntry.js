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
      setProfitLoss(parseFloat(parseFloat(item.bought_price).toFixed(2) - parseFloat(result[0].price_usd).toFixed(2)).toFixed(2));
    };
    getProfitLoss();
  }, []);

  return (
    <View style={styles.row}>
      <View style={styles.columns}>
        <Text style={styles.labels}>Name</Text>
        <Text
          style={{
            fontSize: item.coinName.length >= 8 ? 13 : 18,
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
            fontSize: item.quantity >= 3 ? 12 : 18,
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
            size={25}
            color="green"
            style={{ marginRight: 5 }}
          />
          <Text
            style={{
              fontSize: item.bought_at >= 4 ? 12 : 18,
              color: AppStyles.theme_1.DARK,
            }}
          >
            {item.bought_price}
          </Text>
        </View>
      </View>

      <View style={styles.columns}>
        <Text style={styles.labels}>Invested</Text>
        <Text style={styles.rowShortText}>
          ${parseFloat(item.quantity * item.bought_price).toFixed(2)}
        </Text>
      </View>

      <View style={styles.columns}>
        <Text style={styles.labels}>Gain/Loss</Text>
        <Text style={styles.rowShortText}>{profitLoss}</Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("Home", { item: item })}
      >
        <AntDesign
          name="rightcircleo"
          size={29}
          color={AppStyles.theme_1.DARK}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  row: {
    backgroundColor: AppStyles.theme_1.WHITE,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 80,
    marginVertical: 5,
    borderRadius: 50,
    width: "98%",
    alignSelf: "center",
  },
  rowShortText: {
    fontSize: 20,
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
