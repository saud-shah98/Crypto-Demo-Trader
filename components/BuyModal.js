import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Modal,
  Alert,
  Pressable,
  StyleSheet,
  TextInput,
  Platform,
} from "react-native";
import AppStyles from "../AppStyles";
import Button from "../components/Button";
import { AntDesign } from "@expo/vector-icons";

const BuyModal = ({
  modalVisible,
  setModalVisible,
  item,
  Buy,
  balance,
  numCoinsOwned,
}) => {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    console.log(item)
  }, [quantity]);

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: AppStyles.theme_1.DARK2,
          }}
        >
          <AntDesign
            name="leftcircle"
            size={45}
            color="white"
            style={{ alignSelf: "'flex-start'" }}
            onPress={() => setModalVisible(false)}
          />
          <Text style={{ color: AppStyles.theme_1.WHITE, fontSize: 65 }}>
            {item.name}
          </Text>

          <Text style={{ color: AppStyles.theme_1.WHITE, fontSize: 52 }}>
            ${parseFloat(item.price_usd * quantity).toFixed(2)}
          </Text>

          <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 16, color: "white" }}>
          1hr Change: {item.percent_change_1h}%
        </Text>
        <Text style={{ fontSize: 16, color: "white" }}>
          24hr Change: {item.percent_change_24h}%
        </Text>
        <Text style={{ fontSize: 16, color: "white" }}>
          7 day Change: {item.percent_change_7d}%
        </Text>
        <Text style={{ fontSize: 16, color: "white" }}>
          Market Cap: {item.market_cap_usd}
        </Text>
      </View>

          <Text style={{ color: AppStyles.theme_1.WHITE, fontSize: 16 }}>
            Available Balance: ${balance}
          </Text>
          <Text style={{ color: AppStyles.theme_1.WHITE, fontSize: 16 }}>
            You currently own: {numCoinsOwned}
          </Text>

          <TextInput
            onChangeText={(item) => setQuantity(item)}
            placeholder="Enter Quantity"
            style={{
              padding: 10,
              fontSize: 32,
              color: "white",
              backgroundColor: AppStyles.theme_1.DARK,
              height: 52,
              alignItems: "center",
              marginTop: 30,
            }}
          />

          <Button
            action={() => {
              Buy(item, quantity);
              setModalVisible(false);
            }}
            title="Buy"
          />
        </View>
      </Modal>
      <AntDesign name="rightcircleo" size={29} color="white" onPress={()=>setModalVisible(!modalVisible)} />
    </View>
  );
};

export default BuyModal;
