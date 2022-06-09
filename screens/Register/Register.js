import {
  StyleSheet,
  Text,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  View,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import InputField from "../../components/InputField";
import Date from "../../components/Date";
import Button from "../../components/Button";
import AppStyles from "../../AppStyles";
import Logo from "../../components/Logo";

const Register = ({
  register,
  email,
  setEmail,
  password,
  setPassword,
  username,
  setUsername,
  dob,
  setDob,
  difficulty,
  setDifficulty,
}) => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "position" : "height"}
    >
      <InputField title="User ID" setField={setUsername} />
      <InputField title="Email" setField={setEmail} />
      <InputField title="Password" password setField={setPassword} />

      <Date dob={dob} setDob={setDob} spacing={15} />

      <Text style={{ fontSize: 18, color: "white", marginTop: 15 }}>
        Starting Balance
      </Text>
      <Picker
        selectedValue={difficulty}
        onValueChange={(itemValue, itemIndex) => setDifficulty(itemValue)}
        style={{ width: 350, marginTop: 5 }}
      >
        <Picker.Item
          color={AppStyles.theme_1.WHITE}
          label="Casual: $50,0000"
          value="casual"
        />
        <Picker.Item
          color={AppStyles.theme_1.WHITE}
          label="Seasoned: $10,000"
          value="seasoned"
        />
        <Picker.Item
          color={AppStyles.theme_1.WHITE}
          label="Ironman: $500"
          value="ironman"
        />
      </Picker>
      <View style={{ alignItems: "center" }}>
        <Button title="Register" />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppStyles.theme_1.DARK,
    alignItems: "center",
    justifyContent: "center",
  },

  loginBtn: {
    backgroundColor: "black",
    width: 350,
    height: 60,
    justifyContent: "center",
    marginTop: 20,
    alignItems: "center",
  },
  loginBtnText: {
    color: "white",
    fontSize: 25,
  },
});

export default Register;
