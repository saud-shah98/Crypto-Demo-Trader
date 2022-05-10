import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Foundation } from "@expo/vector-icons";
import AppStyles from "../AppStyles";
import { AntDesign } from "@expo/vector-icons";

const Entry = ({ item, navigation }) => {
  return (
    <View style={styles.row}>
      <View style={styles.columns}>
        <Text style={styles.labels}>Name</Text>
        <Text style={styles.rowShortText}>{item.name}</Text>
      </View>

      <View style={styles.columns}>
        <Text style={styles.labels}>Symbol</Text>
        <Text style={styles.rowShortText}>{item.symbol}</Text>
      </View>

      <View style={styles.columns}>
        <Text style={styles.labels}>Price</Text>
        <View style={styles.priceColumn}>
          <Foundation
            name="dollar"
            size={25}
            color="green"
            style={{ marginRight: 5 }}
          />
          <Text style={styles.rowLongText}>{item.price_usd}</Text>
        </View>
      </View>

      <View style={styles.columns}>
        <Text style={styles.labels}>Rank</Text>
        <Text style={styles.rowShortText}>{item.rank}</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Detail", { item: item })}
      >
        <AntDesign name="rightcircleo" size={29} color="white" />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  row: {
    backgroundColor: AppStyles.theme_1.GREY,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 100,
    marginVertical: 5,
  },
  rowShortText: {
    fontSize: 20,
    color: "white",
    fontFamily: "DMSansRegular",
  },
  rowLongText: {
    fontSize: 18,
    color: "white",
    fontFamily: "DMSansRegular",
  },
  columns: {
    alignItems: "center",
    marginHorizontal: 5,
  },
  labels: {
    color: "white",
    fontSize: 12,
  },
  priceColumn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Entry;
