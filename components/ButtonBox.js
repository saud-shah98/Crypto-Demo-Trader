import { View, Text } from "react-native";
import React from "react";

export default function ButtonBox({ children, spacing }) {
  return (
    <View
      style={{
        height: 50,
        width: "100%",
        paddingVertical: 10,
        alignItems: "center",
      }}
    >
      {children}
    </View>
  );
}
