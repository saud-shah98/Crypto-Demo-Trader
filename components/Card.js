import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function Entry({item}) {
  return (
   
      <View style={styles.rect}>
        <View style={styles.bitcoin1Row}>
          <Text style={styles.bitcoin1}>{item.rank}</Text>
          <View style={styles.bitcoinColumn}>
            <Text style={styles.bitcoin}>{item.name}</Text>
            <Text style={styles.btc}>{item.symbol}</Text>
          </View>
        </View>
        <Text style={styles.price1000230}>{item.price_usd}</Text>
      </View>

  );
}

const styles = StyleSheet.create({
  container: {},
  rect: {
    height: 211,
    backgroundColor: "rgba(45,0,0,1)",
    margin:10,
  },
  bitcoin1: {
    fontFamily: "roboto-regular",
    color: "rgba(232,220,220,1)",
    fontSize: 80,
    marginTop: 18
  },
  bitcoin: {
    fontFamily: "roboto-regular",
    color: "rgba(232,220,220,1)",
    fontSize: 25,
    width: '100%'
  },
  btc: {
    fontFamily: "roboto-regular",
    color: "rgba(232,220,220,1)",
    height: 67,
    width: 105,
    fontSize: 45,
  },
  bitcoinColumn: {
    width: '100%',
    marginLeft: 7,
    justifyContent:'center',
  },
  bitcoin1Row: {
    height: 116,
    flexDirection: "row",
    alignItems:'center',
  },
  price1000230: {
    fontFamily: "roboto-regular",
    color: "rgba(232,220,220,1)",
    height: 30,
    width: 182,
    fontSize: 36,
    marginTop: 9,
    marginLeft: 78
  }
});

export default Entry;
