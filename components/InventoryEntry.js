import { View, StyleSheet, Text, Pressable, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import SellModal from "../components/SellModal";
import { doc, runTransaction, increment } from "firebase/firestore";
import { db } from "../firebase";
import AppStyles from "../AppStyles";

const options = {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const InventoryEntry = ({
  item,
  navigation,
  totalProfitLoss,
  setTotalProfitLoss,
  user,
  inventory,
}) => {
  const [current_price_usd, setCurrentPriceUSD] = useState();
  const [profitLoss, setProfitLoss] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const getProfitLoss = async () => {
      const response = await fetch(
        `https://api.coinlore.net/api/ticker/?id=${item.id}`,
        options
      );
      const result = await response.json();
      setCurrentPriceUSD(result[0].price_usd);

      let change =
        parseFloat(result[0].price_usd).toFixed(2) -
        parseFloat(item.bought_price).toFixed(2);
      let changeRounded = parseFloat(change.toFixed(2));
      let totalProfitLossRounded = parseFloat(totalProfitLoss).toFixed(2);
      setProfitLoss(changeRounded);
      setTotalProfitLoss((prev) => prev + changeRounded);
    };

    item.quantity > 0 ? getProfitLoss() : <></>;
  }, [profitLoss]);

  async function Sell(item, shares) {
    if (shares < 0 || shares > item.quantity) return
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

        console.log(inventoryDoc.data());

        const newBalance =
          parseFloat(userDoc.data().balance) + current_price_usd * shares;

        transaction.update(inventoryRef, {
          quantity: shares > 0 ? increment(parseFloat(-shares).toFixed(2)): quantity,
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
             fontSize: 15,
             color: AppStyles.theme_1.WHITE,
          }}
         >
           {item.quantity}
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
          </View> */ }
      
      <View style={styles.columns}>
        <Text style={styles.labels}>Price</Text>
        <Text style={styles.rowShortText}>
          ${parseFloat(current_price_usd).toFixed(2)}
        </Text>
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


      <SellModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        Sell={Sell}
        item={item}
        current_price_usd={current_price_usd}
        inventory={inventory}
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
    height: 80,
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
