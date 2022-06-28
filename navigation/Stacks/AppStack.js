import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeContainer from "../../screens/Home/HomeContainer";
import DetailContainer from "../../screens/Detail/DetailContainer";
import ProfileContainer from "../../screens/Profile/ProfileContainer";
const Stack = createNativeStackNavigator();
import AppStyles from "../../AppStyles";
import Logout from "../../components/Logout";
import { AuthContext } from "../../navigation/AuthProvider";



const AppStack = () => {
  const { user,logout } = useContext(AuthContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: AppStyles.theme_1.WHITE,
        },
        headerTitleStyle: {
          color: AppStyles.theme_1.DARK,
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeContainer}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Profile" component={ProfileContainer}  />
      <Stack.Screen name="Detail" component={DetailContainer} />
    </Stack.Navigator>
  );
};

export default AppStack;
