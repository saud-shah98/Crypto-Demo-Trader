import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginContainer from "../../screens/Login/LoginContainer";
import RegisterContainer from "../../screens/Register/RegisterContainer";
import Splash from "../../screens/Splash";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Lotello"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Login" component={LoginContainer} />
      <Stack.Screen name="Register" component={RegisterContainer} />
    </Stack.Navigator>
  );
};

export default AppStack;
