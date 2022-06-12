import { StyleSheet, View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import AppStyles from "../AppStyles";

const ProfileHeader = ({ username, roundedBalance, roundedInvestment }) => {
  return (
    <>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.rowItemOrange}>
          <Text
            style={{
              color: AppStyles.theme_1.WHITE,
              fontSize: 25,
            }}
          >
            {username}
          </Text>

          <FontAwesome
            name="user-secret"
            size={52}
            style={{ marginVertical: 5 }}
            color={AppStyles.theme_1.WHITE}
          />
          <Text style={{ color: AppStyles.theme_1.WHITE, fontSize: 15 }}>
            Balance:
          </Text>
          <Text style={{ color: AppStyles.theme_1.WHITE, fontSize: 20 }}>
            ${roundedBalance}
          </Text>
        </View>

        <View style={styles.rowItemWhite}>
          <Text style={{ fontSize: 25, color: "black" }}>Investment</Text>
          <MaterialIcons name="money" size={65} color="black" />
          <Text style={{ color: AppStyles.theme_1.DARK, fontSize: 15 }}>
            Invested:
          </Text>
          <Text style={{ color: AppStyles.theme_1.DARK, fontSize: 20 }}>
            ${roundedInvestment}
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  rowItemWhite: {
    padding: 15,
    backgroundColor: AppStyles.theme_1.WHITE,
    alignItems: "center",
    width: "50%",
  },
  rowItemOrange: {
    padding: 15,
    backgroundColor: AppStyles.theme_1.ORANGE,
    alignItems: "center",
    width: "50%",
  },
})

export default ProfileHeader;
