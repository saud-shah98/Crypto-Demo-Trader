import React, { useContext, useState,useEffect } from "react";
import Detail from "./Detail";
import { doc, runTransaction, increment } from "firebase/firestore";
import { db } from "../../firebase";
import { AuthContext } from "../../navigation/AuthProvider";
import { Alert } from "react-native";
import { BalanceContext } from "../../navigation/BalanceProvider";
import { CoinsOwnedContext } from "../../navigation/CoinsOwnedProvider";

const DetailContainer = ({ navigation, route }) => {
  const { user } = useContext(AuthContext);
  const { balance,getBalance } = useContext(BalanceContext);
  const {numCoinsOwned,getNumCoinsOwned} = useContext(CoinsOwnedContext);
  const [modalVisible, setModalVisible] = useState(false);
  
  useEffect(()=>{
    getBalance(user).then(()=>console.log('hello'))
    getNumCoinsOwned(user,details.Name).then(()=> console.log('Loaded quantity'))
  },[balance,numCoinsOwned])

  
  const { item } = route.params;

  let details = {
    Name: item.name,
    Rank: item.rank,
    "Price USD": item.price_usd,
    "Percentage Change 24hrs": item.percent_change_24h,
    "Percentage Change 1hr": item.percent_change_1h,
    "Percentage Change 7d": item.percent_change_7d,
    "Price in BTC": item.price_btc,
    "Market Cap USA": item.market_cap_usd,
  };

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
          Alert.alert(`Bought 1x ${item.name}`);
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
    <Detail
      navigation={navigation}
      item={item}
      details={details}
      Buy={Buy}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      balance={balance}
      numCoinsOwned={numCoinsOwned}
    />
  );
};

export default DetailContainer;
