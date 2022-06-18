import { View, Text, StyleSheet } from "react-native";
import BuyModal from "../../components/BuyModal";
import AppStyles from "../../AppStyles";

const Detail = ({
  item,
  Buy,
  modalVisible,
  setModalVisible,
  balance,
  numCoinsOwned,
}) => {
  let {
    name,
    percent_change_1h,
    percent_change_24h,
    percent_change_7d,
    price_usd,
    market_cap_usd,
    csupply,
    tsupply,
    msupply,
    price_btc,
  } = item;

  // const {Name, Market}
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            fontSize: 52,
            color: "white",
            marginTop: 25,
            marginBottom: 10,
          }}
        >
          {name}
        </Text>
        <Text style={{ fontSize: 30, color: "white" }}>${price_usd}</Text>
      </View>

      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 16, color: "white" }}>
          1hr Change: {percent_change_1h}%
        </Text>
        <Text style={{ fontSize: 16, color: "white" }}>
          24hr Change: {percent_change_24h}%
        </Text>
        <Text style={{ fontSize: 16, color: "white" }}>
          7 day Change: {percent_change_7d}%
        </Text>
        <Text style={{ fontSize: 16, color: "white" }}>
          Market Cap: {market_cap_usd}
        </Text>
      </View>

      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 16, color: "white" }}>
          Available Balance: ${parseFloat(balance).toFixed(2)}
        </Text>
        {numCoinsOwned > 0 ? (
          <Text style={{ fontSize: 16, color: "white" }}>
            You currently own: {numCoinsOwned}
          </Text>
        ) : (
          <Text style={{ color: "white", fontSize: 16 }}>
            You don't own any yet, purchase below
          </Text>
        )}
      </View>

      <BuyModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        item={item}
        Buy={Buy}
        balance={parseFloat(balance).toFixed(2)}
        numCoinsOwned={parseFloat(numCoinsOwned).toFixed(2)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppStyles.theme_1.DARK2,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  idVals: {
    backgroundColor: "#1a1b1c",
    borderRadius: 3,
    borderColor: "#142e1b",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 25,
  },
  id: {
    fontSize: 20,
    color: AppStyles.theme_1.WHEAT,
  },
});

export default Detail;
