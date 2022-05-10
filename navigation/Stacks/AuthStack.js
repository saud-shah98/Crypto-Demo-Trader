import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginContainer from "../../screens/Login/LoginContainer";
import Register from "../../screens/Register";
import Splash from "../../screens/Splash";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Login" component={LoginContainer} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default AppStack;
