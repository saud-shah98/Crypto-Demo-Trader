import React, { createContext, useState } from "react";
import {db} from '../firebase';
import { doc, onSnapshot } from "firebase/firestore";

export const CoinsOwnedContext = createContext({});

export const CoinsOwnedProvider = ({children}) =>{
    const [numCoinsOwned,setNumCoinsOwned] = useState(null);
    return(
        <CoinsOwnedContext.Provider value={{numCoinsOwned,setNumCoinsOwned,getNumCoinsOwned: async(user,coinName) => {
            try{
                const getNumCoinsOwned = async() => {
                    const docRef = onSnapshot(doc(db,"users",user.uid,"inventory",coinName), (doc)=>{
                        console.log(doc.data())
                        setNumCoinsOwned(doc.data().quantity);
                    })
                }
                getNumCoinsOwned(user,coinName)
            }
            catch(e){
                console.log(e)
            }
        }}}>
            {children}
        </CoinsOwnedContext.Provider>
    )
}