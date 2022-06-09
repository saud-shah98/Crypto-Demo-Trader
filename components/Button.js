import { View, Text, Pressable } from "react-native";
import React from "react";
import AppStyles from "../AppStyles";

export default function Button({ title, color, spacing, action }) {
  return (
    <Pressable
      style={{
        backgroundColor:
          color == "DARK" ? AppStyles.theme_1.DARK : AppStyles.theme_1.ORANGE,
        alignItems: "center",
        height: 60,
        width: 300,
        marginVertical:5,
        justifyContent: "center",
        
      }}
      onPress={action}
    >
      <Text style={{ color: AppStyles.theme_1.WHITE, fontSize: 25 }}>
        {title}
      </Text>
    </Pressable>
  );
}
