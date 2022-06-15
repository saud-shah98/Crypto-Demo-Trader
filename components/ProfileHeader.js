import { StyleSheet, View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import AppStyles from "../AppStyles";

const ProfileHeader = ({ username, roundedBalance, roundedInvestment, totalProfitLoss }) => {

  const roundedTotalProfitLoss = totalProfitLoss.toFixed(2)

  return (
    <>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.rowItemWhite}>
          <Text
            style={{
              color: 'black',
              fontSize: 25,
            }}
          >
            {username}
          </Text>

          <FontAwesome
            name="user-secret"
            size={52}
            style={{ marginVertical: 5 }}
            color='black'
          />
          <Text style={{ color:'black', fontSize: 15 }}>
            Balance:
          </Text>
          <Text style={{ color: 'black', fontSize: 20 }}>
            ${roundedBalance}
          </Text>
        </View>

        <View style={styles.rowItemWhite}>
          <Text style={{ fontSize: 22, color: "black" }}>Investment</Text>
          <MaterialIcons name="money" size={65} color="black" />
          <Text style={{ color: 'black', fontSize: 15 }}>
            Invested:
          </Text>
          <Text style={{ color: 'black', fontSize: 20 }}>
            ${roundedInvestment}
          </Text>
        </View>


        <View style={{backgroundColor: totalProfitLoss >= 0 ? 'green': 'darkred',padding:15,alignItems:'center',width:'33.3%'}}>
          <Text
            style={{
              color: AppStyles.theme_1.WHITE,
              fontSize: 18,
            }}
          >
            Performance
          </Text>

          <FontAwesome
            name="bar-chart"
            size={52}
            style={{ marginVertical: 5 }}
            color={AppStyles.theme_1.WHITE}
          />
          <Text style={{ color: AppStyles.theme_1.WHITE, fontSize: 15 }}>
            Profit/Loss:
          </Text>
          <Text style={{ color: AppStyles.theme_1.WHITE, fontSize: 20 }}>
            ${roundedTotalProfitLoss}
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
    width: "33.3%",
  },
  rowItemOrange: {
    padding: 15,
    backgroundColor: AppStyles.theme_1.ORANGE,
    alignItems: "center",
    width: "33.3%",
  },
  rowItemDark: {
    padding: 15,
    backgroundColor: AppStyles.theme_1.DARK2,
    alignItems: "center",
    width: "33.3%",
   
  },
})

export default ProfileHeader;
