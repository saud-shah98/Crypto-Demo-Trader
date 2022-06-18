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


const SellModal = ({
  modalVisible,
  setModalVisible,
  current_price_usd,
  Sell,
  item,
  user,
  inventory,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState();
  const [amountOwned, setAmountOwned] = useState();

  useEffect(() => {
    setAmountOwned(item.quantity);
  }, [inventory]);

  console.log(item);
  return (
    <>
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
          <Text style={{ fontSize: 45, color: "white" }}>{item.coinName}</Text>
          <Text style={{ fontSize: 34, color: "white" }}>
            Amount owned: {parseFloat(amountOwned).toFixed(2)}
          </Text>
          <Text style={{ fontSize: 34, color: "white" }}>
            You bought at: ${item.bought_price}
          </Text>
          <Text style={{ fontSize: 34, color: "white",marginTop:25 }}>
            Current Price: ${current_price_usd}
          </Text>
         

          <Text style={{ fontSize: 35, color: "white" }}>
            Sell {quantity} for $
            {parseFloat(quantity * current_price_usd).toFixed(2)}
          </Text>
          <TextInput
            onChangeText={setQuantity}
            placeholder="Enter Quantity"
            style={{
              padding: 10,
              fontSize: 32,
              color: "white",
              backgroundColor: AppStyles.theme_1.DARK,
              height: 52,
              marginTop: 10,
              alignItems: "center",
            }}
          />

          <Button
            action={() => {
              if (quantity > 0) {
                Sell(item, quantity);
              }
              setModalVisible(false);
            }}
            title="Sell"
          />
        </View>
      </Modal>
      <Pressable
        onPress={() => {
          setModalVisible(true);
          console.log(amountOwned);
        }}
        style={{ padding: 10 }}
      >
        <Text style={{ color: AppStyles.theme_1.WHITE }}>Sell</Text>
        <AntDesign name="shoppingcart" size={35} color="white" />
      </Pressable>
    </>
  );
};

export default SellModal;
