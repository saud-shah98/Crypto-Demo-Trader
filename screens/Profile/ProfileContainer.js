import React, { useContext, useEffect, useState } from "react";
import Profile from "./Profile";
import { AuthContext } from "../../navigation/AuthProvider";
import { db } from "../../firebase";
import {
  doc,
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
  const [totalProfitLoss, setTotalProfitLoss] = useState(0.0);

  useEffect(() => {
    const initialize = async () => {
      // Set User Balance and Username -- Top Level Users Collection
      const docRef = onSnapshot(doc(db, "users", user.uid), (person) => {
        setBalance(person.data().balance);
        setUsername(person.data().username);
      });

      // Set User Inventory -- Inventory Sub Collection
      let invested = 0;
      const q =  query(collection(db, `users/${user.uid}/inventory`))
      const unsub = onSnapshot(q,(querySnapshot) => {
        const inventory = []
        querySnapshot.forEach((docItem)=>{
          let {
            coinName,
            quantity,
            bought_price,
            id,
          } = docItem.data();
          invested += quantity * bought_price;
          inventory.push({id,coinName,bought_price,quantity})
        })
        setTotalInvested(invested);
        setInventory(inventory);
      })

      
    };

    initialize();
  }, [user, balance]);

  return (
    <Profile
      navigation={navigation}
      username={username}
      user={user}
      logout={logout}
      balance={balance}
      inventory={inventory}
      totalInvested={totalInvested}
      totalProfitLoss={totalProfitLoss}
      setTotalProfitLoss={setTotalProfitLoss}
    />
  );
}
