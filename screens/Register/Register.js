import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";
import InputField from "../../components/InputField";
import AppStyles from "../../AppStyles";

const Register = ({
  email,
  password,
  setEmail,
  setPassword,
  setUserName,
  register,
}) => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.registerBox}>
        <InputField title="User Name" setField={setUserName} />
        <InputField title="Email" setField={setEmail} />
        <InputField title="Password" setField={setPassword} />
      </View>

      <Pressable
        style={styles.loginBtn}
        onPress={() => register(email, password)}
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
    justifyContent: "center",
    alignItems: "center",
  },
  registerBox: {
    marginTop: 15,
    backgroundColor: AppStyles.theme_1.GREY,
    margin: 10,
    padding: 20,
    width: "85%",
    justifyContent: "space-between",
  },
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
