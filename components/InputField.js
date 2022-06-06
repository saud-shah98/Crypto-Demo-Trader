import { TextInput, Text, View } from "react-native";

const InputField = ({ title, setField }) => {
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
