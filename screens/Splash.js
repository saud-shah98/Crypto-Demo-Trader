import React from "react-native";
import {

  StyleSheet,
  SafeAreaView,
  Image,
} from "react-native";
import Logo from "../components/Logo";
import Button from "../components/Button";
import ButtonBox from "../components/ButtonBox";

export default function Splash({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <Image
        style={styles.splashImg}
        source={require("../assets/splash1.jpg")}
      />
      <ButtonBox>
        <Button
          title="Login"
          action={() => navigation.navigate("Login")}
          color="DARK"
        />
        <Button
          title="Register"
          action={() => navigation.navigate("Register")}
          spacing={25}
        />
      </ButtonBox>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  splashImg: {
    width: "80%",
    height: "60%",
  },
});
