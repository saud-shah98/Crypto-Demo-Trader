import React, { createContext, useState } from "react";
import { auth, db } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

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
            await signInWithEmailAndPassword(auth, email, password);
          } catch (e) {
            console.log(e);
            alert(e);
          }
        },
        register: async (email, password, username, difficulty) => {
          try {
            await createUserWithEmailAndPassword(auth, email, password).then(
              (creds) => {
                const userRef = doc(db, "users", creds.user.uid);
                setDoc(
                  userRef,
                  {
                    username: username,
                    email: email,
                    difficulty: difficulty,
                  },
                  { merge: true }
                );
              }
            );

          } catch (e) {
            console.log(e);
            alert(e);
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
