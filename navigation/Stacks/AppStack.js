import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeContainer from "../../screens/Home/HomeContainer";
import DetailContainer from "../../screens/Detail/DetailContainer";
import { AuthContext } from "../AuthProvider";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeContainer}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Detail" component={DetailContainer} />
    </Stack.Navigator>
  );
};

export default AppStack;
