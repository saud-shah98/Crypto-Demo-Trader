import React, { createContext, useState } from "react";
import {db} from '../firebase';
import { doc, getDoc, onSnapshot } from "firebase/firestore";

export const BalanceContext = createContext({});

export const BalanceProvider = ({children}) =>{
    const [balance,setBalance] = useState(null)
    return(
        <BalanceContext.Provider value={{
            balance,
            setBalance,
            getBalance: async(user) => {
                try{
                    const getBalance = async () => {
                        const docRef = onSnapshot(doc(db, "users", user.uid), (doc) => {
                          setBalance(doc.data().balance);
                        });
                      };
                      getBalance(user)
                    
                }
                catch(e){
                    console.log(e)
                }
            }
        }}>
            {children}
        </BalanceContext.Provider>
    )
}