import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeContainer from "../../screens/Home/HomeContainer";
import DetailContainer from "../../screens/Detail/DetailContainer";
import ProfileContainer from "../../screens/Profile/ProfileContainer";
const Stack = createNativeStackNavigator();
import AppStyles from "../../AppStyles";

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: AppStyles.theme_1.WHITE,
        },
        headerTitleStyle: {
          color: AppStyles.theme_1.ORANGE,
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeContainer}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Profile" component={ProfileContainer} />
      <Stack.Screen name="Detail" component={DetailContainer} />
    </Stack.Navigator>
  );
};

export default AppStack;
