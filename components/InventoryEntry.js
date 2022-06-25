import { View, StyleSheet, Text, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import SellModal from "../components/SellModal";
import { doc, runTransaction, increment } from "firebase/firestore";
import { db } from "../firebase";
import AppStyles from "../AppStyles";

const windowWidth = Dimensions.get("window").width;

const InventoryEntry = ({ item, user, inventory, setTotalProfitLoss }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [profitLoss, setProfitLoss] = useState();
  const [current_price_usd, setCurrentPriceUSD] = useState();

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    };


    const getProfitLoss = async () => {
      const response = await fetch(
        `https://api.coinlore.net/api/ticker/?id=${item.id}`,
        options
      );
      const result = await response.json();
      let change =
        item.quantity * parseFloat(result[0].price_usd).toFixed(2) -
        item.quantity * parseFloat(item.bought_price).toFixed(2);
      console.log(change);

      setProfitLoss(parseFloat(change).toFixed(2));
      setCurrentPriceUSD(parseFloat(result[0].price_usd).toFixed(2));
      setTotalProfitLoss((prev) => prev + change);
    };

    getProfitLoss();
  }, []);

  async function Sell(item, shares) {
    if (shares < 0 || shares > item.quantity) return;
    console.log(item)
    try {
      const userRef = doc(db, "users", user.uid);

      const sellCoin = await runTransaction(db, async (transaction) => {
        const userDoc = await transaction.get(userRef);
        if (!userDoc.exists()) {
          throw "Document does not exist!";
        }
        const inventoryRef = doc(
          db,
          "users",
          user.uid,
          "inventory",
          item.coinName
        );
        const inventoryDoc = await transaction.get(inventoryRef);
        if (!inventoryDoc.exists()) {
          throw "Document does not exist";
        }
        const newBalance =
          parseFloat(userDoc.data().balance) + current_price_usd * shares;
        if (!newBalance || !current_price_usd) return

        transaction.update(inventoryRef, {
          quantity:
            shares > 0 ? increment(parseFloat(-shares)) : quantity,
        });
        transaction.update(userRef, {
          balance: shares > 0 ? newBalance : balance,
        });

        return newBalance;
      });

      console.log("Balance decreased to ", sellCoin);
    } catch (e) {
      // This will be a "population is too big" error.
      console.error(e);
    }
  }

  async function SellAll(item) {
    if (item.quantity <= 0) return
    console.log(item)
    try {
      const userRef = doc(db, "users", user.uid);

      const sellCoin = await runTransaction(db, async (transaction) => {
        const userDoc = await transaction.get(userRef);
        if (!userDoc.exists()) {
          throw "Document does not exist!";
        }
        const inventoryRef = doc(
          db,
          "users",
          user.uid,
          "inventory",
          item.coinName
        );
        const inventoryDoc = await transaction.get(inventoryRef);
        if (!inventoryDoc.exists()) {
          throw "Document does not exist";
        }

        const newBalance =
          parseFloat(userDoc.data().balance) + current_price_usd * item.quantity;

        transaction.update(inventoryRef, {
          quantity: 0
        });
        transaction.update(userRef, {
          balance: newBalance
        });
        return newBalance;
      });

      console.log("Balance decreased to ", sellCoin);
    } catch (e) {
      // This will be a "population is too big" error.
      console.error(e);
    }
  }

  if (item.quantity <= 0) return <></>;
  return (
    <View
      style={[
        styles.row,
        { backgroundColor: profitLoss >= 0 ? "green" : "darkred" },
      ]}
    >
      <View style={styles.columns}>
        <Text style={styles.labels}>Name</Text>
        <Text
          style={{
            fontSize: item.coinName.length >= 8 ? 13 : 15,
            color: AppStyles.theme_1.WHITE,
          }}
        >
          {item.coinName}
        </Text>
      </View>

      <View style={styles.columns}>
        <Text style={styles.labels}>Quantity</Text>
        <Text
          style={{
            fontSize: 12,
            color: AppStyles.theme_1.WHITE,
          }}
        >
          {parseFloat(item.quantity).toFixed(2)}
        </Text>
      </View>

      {/* /*  <View style={styles.columns}>
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
          </View> */}

      <View style={styles.columns}>
        <Text style={styles.labels}>Price</Text>

        {current_price_usd != null ? (
          <Text style={styles.rowShortText}>
            ${parseFloat(current_price_usd).toFixed(2)}
          </Text>
        ) : (
          <Text style={styles.rowShortText}>Loading</Text>
        )}
      </View>

      <View style={styles.columns}>
        <Text style={styles.labels}>Invested</Text>
        <Text style={styles.rowShortText}>
          ${parseFloat(item.quantity * item.bought_price).toFixed(2)}
        </Text>
      </View>

      <View style={styles.columns}>
        <Text style={styles.labels}>Gain/Loss</Text>
        {profitLoss != null ? (
          <Text style={styles.rowShortText}>
            ${parseFloat(profitLoss).toFixed(2)}
          </Text>
        ) : (
          <Text style={styles.rowShortText}>Loading</Text>
        )}
      </View>

      <SellModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        Sell={Sell}
        item={item}
        current_price_usd={current_price_usd}
        inventory={inventory}
        SellAll={SellAll}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    backgroundColor: AppStyles.theme_1.WHITE,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 65,
    marginVertical: 5,
    borderRadius: 10,
    width: windowWidth,
    alignSelf: "center",
  },
  rowShortText: {
    fontSize: 12,
    color: AppStyles.theme_1.WHITE,
  },
  rowLongText: {
    fontSize: 18,
    color: AppStyles.theme_1.WHITE,
  },
  columns: {
    marginHorizontal: 1,
  },
  labels: {
    color: AppStyles.theme_1.WHITE,
    fontSize: 12,
  },
  priceColumn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default InventoryEntry;
