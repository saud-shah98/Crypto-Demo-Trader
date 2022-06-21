import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../navigation/AuthProvider";
import Home from "./Home";
import { db } from "../../firebase";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
const options = {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
};
const HomeContainer = ({ navigation }) => {
  const [coinData, setCoinData] = useState([]);
  const [balance, setBalance] = useState(null);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const signalController = new AbortController();

    let mounted = true;
    const getCoins = async () => {
      const coins = await fetch(
        "https://api.coinlore.net/api/tickers/",
        options
      );
      const coinsJson = await coins.json();
      if (mounted) {
        setCoinData(...coinData, coinsJson.data);
      }
    };

    const getBalance = async () => {
      const docRef = onSnapshot(doc(db, "users", user.uid), (doc) => {
        setBalance(doc.data().balance);
      });
    };

    getCoins();
    getBalance();
    const interval = setInterval(() => {
      getCoins();
    }, 2000);

    return () => {
      mounted = false;
      signalController.abort();
      clearInterval(interval);
    };
  }, []);

  return (
    <Home
      navigation={navigation}
      coinData={coinData}
      setCoinData={setCoinData}
      balance={balance}
      clicked={clicked}
      setClicked={setClicked}
      searchPhrase={searchPhrase}
      setSearchPhrase={setSearchPhrase}
    />
  );
};

export default HomeContainer;
