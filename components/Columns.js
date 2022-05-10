import { View, StyleSheet, Text } from "react-native";

const Columns = () => {
  return (
    <View style={styles.columns}>
      <Text style={styles.columnHeaderText}>Crypto</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  columns: {
    justifyContent: "center",
    backgroundColor: "#142e1b",
    height: 90,
    alignItems: "center",
    paddingHorizontal: 30,
  },
  columnHeaderText: {
    color: "#e8ddcd",
    fontSize: 30,
    fontFamily: "DMSansRegular",
  },
});

export default Columns;
