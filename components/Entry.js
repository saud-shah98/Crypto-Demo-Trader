import { View, StyleSheet, Text, Alert } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import BuyModal from "./BuyModal";
import { Foundation } from "@expo/vector-icons";
import AppStyles from "../AppStyles";
import { CoinsOwnedContext } from "../navigation/CoinsOwnedProvider";
import { AuthContext } from "../navigation/AuthProvider";

import { doc, runTransaction, increment, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const Entry = ({ item, balance }) => {
  const { user } = useContext(AuthContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [numCoinsOwned, setNumCoinsOwned] = useState();
  useEffect(() => {
    const initialize = async () => {
      const unsub = onSnapshot(
        doc(db, `users/${user.uid}/inventory`, item.name),
        (doc) => {
          !doc.exists()
            ? setNumCoinsOwned(0)
            : setNumCoinsOwned(doc.data().quantity);
        }
      );
    };
    initialize();
  }, []);

  async function Buy(item, quantity) {
    const priceCoin = parseFloat(item.price_usd);
    const userRef = doc(db, "users", user.uid);
    try {
      const buyCoin = await runTransaction(db, async (transaction) => {
        const userDoc = await transaction.get(userRef);
        if (!userDoc.exists()) {
          throw "Document does not exist!";
        }

        const newBalance =
          parseFloat(userDoc.data().balance) - priceCoin * quantity;

        if (newBalance > 0) {
          transaction.update(userRef, {
            balance: newBalance,
          });
          const inventoryRef = doc(
            db,
            "users",
            user.uid,
            "inventory",
            item.name
          );

          transaction.set(
            inventoryRef,
            {
              id: item.id,
              coinName: item.name,
              bought_price: item.price_usd,
            },
            { merge: true }
          );

          transaction.update(inventoryRef, {
            quantity: increment(quantity),
          });

          console.log("Updated");
          Alert.alert(`Bought ${quantity}x ${item.name}`);
          return newBalance;
        } else {
          return Promise.reject("Sorry! Population is too big");
        }
      });

      console.log("Balance decreased to ", buyCoin);
    } catch (e) {
      // This will be a "population is too big" error.
      console.error(e);
    }
  }

  return (
    <View style={styles.row}>
      <View style={styles.columns}>
        <Text style={styles.labels}>Symbol</Text>
        <Text
          style={{
            fontSize: item.symbol.length >= 3 ? 12 : 18,
            color: "white",
          }}
        >
          {item.symbol}
        </Text>
      </View>

      <View style={styles.columns}>
        <Text style={styles.labels}>Price</Text>
        <View style={styles.priceColumn}>
          <Foundation
            name="dollar"
            size={25}
            color="green"
            style={{ marginRight: 5 }}
          />
          <Text
            style={{
              fontSize: item.price_usd.length >= 4 ? 12 : 18,
              color: "white",
            }}
          >
            {item.price_usd}
          </Text>
        </View>
      </View>

      <View style={styles.columns}>
        <Text style={styles.labels}>Rank</Text>
        <Text style={styles.rowShortText}>{item.rank}</Text>
      </View>
      {/* <TouchableOpacity
        onPress={() => navigation.navigate("Detail", { item: item })}
      >
        <AntDesign name="rightcircleo" size={29} color="white" />
      </TouchableOpacity> */}
      <BuyModal
        Buy={Buy}
        balance={parseFloat(balance).toFixed(2)}
        numCoinsOwned={parseFloat(numCoinsOwned).toFixed(2)}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        item={item}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  row: {
    backgroundColor: AppStyles.theme_1.ORANGE,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 80,
    marginVertical: 5,
    borderRadius: 50,
    width: "90%",
    alignSelf: "center",
  },
  rowShortText: {
    fontSize: 20,
    color: "white",
  },
  rowLongText: {
    fontSize: 18,
    color: "white",
  },
  columns: {
    alignItems: "center",
    marginHorizontal: 5,
  },
  labels: {
    color: "white",
    fontSize: 12,
  },
  priceColumn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Entry;
