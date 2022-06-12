import { View, Text } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Profile from "./Profile";
import { AuthContext } from "../../navigation/AuthProvider";
import { db } from "../../firebase";
import {
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  collection,
  query,
} from "firebase/firestore";

export default function ProfileContainer({ navigation }) {
  const { user, logout } = useContext(AuthContext);
  const [balance, setBalance] = useState(null);
  const [username, setUsername] = useState("");
  const [inventory, setInventory] = useState([]);
  const [totalInvested, setTotalInvested] = useState(null);

  useEffect(() => {
    const initialize = async () => {
      const docRef = onSnapshot(doc(db, "users", user.uid), (person) => {
        console.log("Current data: ", person.data().balance);
        setBalance(person.data().balance);
        setUsername(person.data().username);
      });

      const querySnapshot = await getDocs(
        query(collection(db, `users/${user.uid}/inventory`))
      );
      const newData = [];
      let invested = 0;
      querySnapshot.forEach((queryDocumentSnapshot) => {
        let { coinName, quantity, bought_price, id} = queryDocumentSnapshot.data();
        invested += (quantity * bought_price)
        newData.push({ coinName, quantity, bought_price,id });
      });
      setInventory(newData);
      setTotalInvested(invested)
    };

    initialize();
  }, [user]);

  return (
    <Profile
      navigation={navigation}
      username={username}
      logout={logout}
      balance={balance}
      inventory={inventory}
      totalInvested={totalInvested}
    />
  );
}
