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
  KeyboardAvoidingView
} from "react-native";
import AppStyles from "../AppStyles";
import Button from "../components/Button";
import { AntDesign } from "@expo/vector-icons";


const SellModal = ({
  modalVisible,
  setModalVisible,
  current_price_usd,
  Sell,
  SellAll,
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
        <KeyboardAvoidingView
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: AppStyles.theme_1.DARK2,
          }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
           <AntDesign
            name="leftcircle"
            size={45}
            color="white"
            style={{ alignSelf: "'flex-start'" }}
            onPress={() => setModalVisible(false)}
          />
       

          
          <Text style={{ fontSize: 45, color: "white" }}>{item.coinName}</Text>
          <Text style={{ fontSize: 20, color: "white" }}>Amount owned: {amountOwned >= 1 ? parseFloat(amountOwned).toFixed(2): parseFloat(amountOwned).toFixed(6)}
          </Text>
          <Text style={{ fontSize: 20, color: "white" }}>
            You bought at: ${item.bought_price}
          </Text>
          <Text style={{ fontSize: 20, color: "white",}}>
            Current Price: ${current_price_usd}
          </Text>

         

          <Text style={{ fontSize: 20, color: "white",marginTop:20 }}>
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
            title={`Sell ${quantity}`}
          />
           <Button
            action={() => {
              SellAll(item)
              setModalVisible(false);
            }}
            title="Sell All"
            color='DARK'
          />
        </KeyboardAvoidingView>
      </Modal>
      <Pressable
        onPress={() => {
          if (!current_price_usd) return
          setModalVisible(true);
          console.log(amountOwned);
        }}
        style={{ padding: 10 }}
      >
        <Text style={{ color: AppStyles.theme_1.WHITE }}>Sell</Text>
        <AntDesign name="shoppingcart" size={20} color='green' />
      </Pressable>
    </>
  );
};

export default SellModal;
