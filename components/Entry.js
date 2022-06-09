import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Foundation } from "@expo/vector-icons";
import AppStyles from "../AppStyles";
import { AntDesign } from "@expo/vector-icons";

const Entry = ({ item, navigation }) => {
  return (
    <View style={styles.row}>
      <View style={styles.columns}>
        <Text style={styles.labels}>Name</Text>
        <Text style={{fontSize: item.name.length >= 8? 13:18, color:'white'}}>{item.name}</Text>
      </View>

      <View style={styles.columns}>
        <Text style={styles.labels}>Symbol</Text>
        <Text style={{fontSize: item.symbol.length >= 3? 12:18, color:'white'}}>{item.symbol}</Text>
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
          <Text style={{fontSize: item.price_usd.length >= 4? 12:18, color:'white'}}>{item.price_usd}</Text>
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
    backgroundColor: AppStyles.theme_1.ORANGE,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 80,
    marginVertical: 5,
    borderRadius:50,
    width:'90%',
    alignSelf:'center'
  },
  rowShortText: {
    fontSize: 20,
    color: "white",
  },
  rowLongText: {
    fontSize: 18,
    color: "white",
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
