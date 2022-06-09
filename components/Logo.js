import { View, Text } from "react-native";
import React from "react";
import AppStyles from "../AppStyles";

export default function Logo() {
  return (
    <View
      style={{
        backgroundColor: AppStyles.theme_1.ORANGE,
        height: 80,
       width: 240,
        marginVertical:10,
        alignItems: "center",
        borderRadius: 50,
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 38, color: AppStyles.theme_1.WHITE }}>
        Lotello
      </Text>
      <Text
        style={{
          fontSize: 12,
          color: AppStyles.theme_1.WHITE,
          paddingBottom: 10,
        }}
      >
        sharpen your trading skills
      </Text>
    </View>
  );
}
