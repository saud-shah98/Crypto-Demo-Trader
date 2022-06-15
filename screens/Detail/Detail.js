import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import BuyModal from '../../components/BuyModal';
import AppStyles from "../../AppStyles";

const Detail = ({ item, Buy,modalVisible,setModalVisible }) => {
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
      <Text style={{ fontSize: 52, color: "white" }}>{name}</Text>
      <Text style={{ fontSize: 16, color: "white" }}>Price: ${price_usd}</Text>
      <Text style={{ fontSize: 16, color: "white" }}>
        Price: {price_btc} BTC
      </Text>
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

      
      <BuyModal modalVisible={modalVisible} setModalVisible={setModalVisible} item={item} Buy={Buy} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppStyles.theme_1.DARK,
    alignItems: "center",
    justifyContent: "space-around",
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
