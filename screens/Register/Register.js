import {
  StyleSheet,
  Text,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import InputField from "../../components/InputField";
import AppStyles from "../../AppStyles";

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
      <Picker
        selectedValue={difficulty}
        onValueChange={(itemValue, itemIndex) => setDifficulty(itemValue)}
        style={{ width: 350 }}
      >
        <Picker.Item color="black" label="Casual: $50,0000" value="casual" />
        <Picker.Item color="black" label="Seasoned: $10,000" value="seasoned" />
        <Picker.Item color="black" label="Ironman: $500" value="ironman" />
      </Picker>

      <InputField title="User ID" setField={setUsername} />
      <InputField title="Email" setField={setEmail} />
      <InputField title="Password" password setField={setPassword} />

      {!(Platform.OS === "web") ? (
        <>
          <Text style={{ color: "black", fontSize: 15, marginTop: 15 }}>
            Date of Birth
          </Text>
          <DateTimePicker
            mode="date"
            value={dob}
            onChange={(event, selectedDate) => setDob(selectedDate)}
            style={{
              marginTop: 5,
              backgroundColor: "white",
              width: 75,
            }}
          />
        </>
      ) : (
        <Text>Web Version Incoming..</Text>
      )}

      <Pressable
        style={styles.loginBtn}
        onPress={() => register(email, password,username,difficulty)}
      >
        <Text style={styles.loginBtnText}>Register</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
    alignItems: "center",
    paddingVertical: 50,
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
