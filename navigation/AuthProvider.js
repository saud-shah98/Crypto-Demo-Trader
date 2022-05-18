import React, { createContext, useState } from "react";
import { Alert } from "react-native";
import { auth, db } from "../firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

async function saveUserDetails(cred) {
  const docRef = await setDoc(doc(db, "users", cred.user.uid), {
    balance: 0.0,
  });
}

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await signInWithEmailAndPassword(auth, email, password).then(
              (cred) => {
                console.log(cred.user.uid);
              }
            );
          } catch (e) {
            console.log(e);
          }
        },
        register: async (email, password) => {
          try {
            const user = await createUserWithEmailAndPassword(
              auth,
              email,
              password
            );
            await saveUserDetails(user);
          } catch (e) {
            console.log(e);
          }
        },
        logout: async () => {
          try {
            await signOut(auth);
          } catch (e) {
            console.error(e);
          }
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
