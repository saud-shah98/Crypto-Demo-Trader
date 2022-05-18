import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../navigation/AuthProvider";
import Home from "./Home";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

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
  const { user, logout } = useContext(AuthContext);

  useEffect(() => {
    const signalController = new AbortController();
    console.log(db);

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
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists() && mounted) {
        console.log("Document data:", docSnap.data().balance);
        setBalance(docSnap.data().balance);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
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
      user={user}
      logout={logout}
      navigation={navigation}
      clicked={clicked}
      setClicked={setClicked}
      searchPhrase={searchPhrase}
      setSearchPhrase={setSearchPhrase}
      coinData={coinData}
      setCoinData={setCoinData}
      balance={balance}
    />
  );
};

export default HomeContainer;
