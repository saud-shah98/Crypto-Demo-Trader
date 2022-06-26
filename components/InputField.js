import React from 'react';
import { TextInput, Text, View } from "react-native";
import AppStyles from "../AppStyles";
const InputField = ({ title, setField,password }) => {
  return (
    <View>

  
      <Text style={{ fontSize: 15, color: AppStyles.theme_1.WHITE,paddingVertical:12}}>
        {title}
      </Text>
      <TextInput
        placeholder={`Enter your ${title}`}
        selectionColor="white"
        onChangeText={setField}
        placeholderTextColor="white"
        secureTextEntry={password ? true: false}
        style={{
            backgroundColor: AppStyles.theme_1.WHEAT,
            height: 50,
            paddingHorizontal: 25,
            color: "black",
          
        }}
      />
      </View>
  );
};

export default InputField;
