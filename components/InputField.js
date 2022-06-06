import { TextInput, Text, View } from "react-native";

const InputField = ({ title, setField,password }) => {
  return (
    <>
      <Text style={{ fontSize: 12, color: "black", marginTop: 15 }}>
        {title}
      </Text>
      <TextInput
        placeholder={`Enter your ${title}`}
        selectionColor="white"
        onChangeText={setField}
        placeholderTextColor="white"
        secureTextEntry={password ? true: false}
        style={{
          color: "white",
          height: 50,
          borderRadius: 3,
          paddingHorizontal: 10,
          marginTop: 5,
          width: 330,
          backgroundColor: "black",
        }}
      />
    </>
  );
};

export default InputField;
