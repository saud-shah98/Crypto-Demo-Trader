import React, { useState, useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import { AuthContext } from "./AuthProvider";
import AppStack from "./Stacks/AppStack";
import AuthStack from "./Stacks/AuthStack";
import { auth, db } from "../firebase";

const Router = () => {
  const { user, setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [initializing, setInitializing] = useState(true);

  function userChange(user) {
    setUser(user);
    
    if (initializing) setInitializing(false);
    setLoading(false);
  }

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(userChange);
    return subscriber;
  }, []);

  if (loading) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Router;
