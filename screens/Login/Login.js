import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import AppStyles from "../../AppStyles";

const Login = ({ login, email, setEmail, password, setPassword }) => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.loginForms}>
        <TextInput
          style={styles.textInput}
          onChangeText={setEmail}
          placeholder="Email"
          placeholderTextColor="white"
          value={email}
        />

        <TextInput
          style={styles.textInput}
          onChangeText={setPassword}
          placeholder="Password"
          placeholderTextColor="white"
          value={password}
          secureTextEntry={true}
        />

        <Pressable
          style={styles.loginBtn}
          onPress={() => login(email, password)}
        >
          <Text style={styles.loginBtnText}>Login</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppStyles.theme_1.DARK,
    justifyContent: "center",
    alignItems: "center",
  },
  welecomeHeader: {
    fontSize: 40,
    color: "black",
    marginBottom: 20,
  },
  loginForms: {
    height: 200,
    width: "80%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textInput: {
    width: 300,
    backgroundColor: AppStyles.theme_1.WHEAT,
    height: 50,
    paddingHorizontal: 25,
    color: "black",
  },
  loginBtn: {
    backgroundColor: AppStyles.theme_1.ORANGE,
    width: 300,
    marginTop: 5,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  loginBtnText: {
    color: "white",
    fontSize: 25,
  },
});

export default Login;
