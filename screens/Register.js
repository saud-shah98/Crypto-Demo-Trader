import React, { useState, useContext } from "react";
import { View, StyleSheet, Text, TextInput, Pressable } from "react-native";
import { AuthContext } from "../navigation/AuthProvider";

import AppStyles from "../AppStyles";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { register } = useContext(AuthContext);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "whitesmoke",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          marginTop: 15,
          width: "80%",
          backgroundColor: AppStyles.theme_1.GREY,
          margin: 10,
          padding: 20,
          height: 300,
          justifyContent: "space-around",
        }}
      >
        <View>
          <Text style={{ fontSize: 18, color: "white" }}>Email</Text>
          <TextInput
            placeholder="email"
            selectionColor="white"
            onChangeText={setEmail}
            placeholderTextColor="gray"
            style={{
              color: "whitesmoke",
              height: 50,
              borderRadius: 3,
              borderWidth: 3,
              borderColor: "whitesmoke",
              paddingHorizontal: 10,
              marginTop: 15,
            }}
          />
        </View>

        <View>
          <Text style={{ fontSize: 18, color: "white" }}>Password</Text>
          <TextInput
            placeholder="password"
            placeholderTextColor="gray"
            onChangeText={setPassword}
            secureTextEntry
            style={{
              color: "whitesmoke",
              height: 50,
              borderRadius: 3,
              borderWidth: 3,
              borderColor: "whitesmoke",
              paddingHorizontal: 10,
              marginTop: 15,
            }}
          />
        </View>
      </View>

      <Pressable
        style={styles.loginBtn}
        onPress={() => register(email, password)}
      >
        <Text style={styles.loginBtnText}>Register</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  loginBtn: {
    backgroundColor: "darkgreen",
    width: "60%",
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

export default Register;
