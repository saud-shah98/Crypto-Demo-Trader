import { View, Text } from "react-native";
import React from "react";
import AppStyles from "../AppStyles";

export default function Logo() {
  return (
    <View
      style={{
        backgroundColor: AppStyles.theme_1.ORANGE,
        height: 110,
        width: '70%',
        alignItems: "center",
        borderRadius: 50,
        justifyContent: "center",
        marginTop: 30,
      }}
    >
      <Text style={{ fontSize: 60, color: AppStyles.theme_1.WHITE }}>
        Lotello
      </Text>
      <Text
        style={{
          fontSize: 15,
          color: AppStyles.theme_1.WHITE,
          paddingBottom: 10,
        }}
      >
        sharpen your trading skills
      </Text>
    </View>
  );
}
