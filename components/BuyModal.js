import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Modal,
  Alert,
  TextInput,
  Platform,
  KeyboardAvoidingView,
  SafeAreaView
} from "react-native";
import AppStyles from "../AppStyles";
import Button from "../components/Button";
import { AntDesign } from "@expo/vector-icons";
import { logEvent } from "firebase/analytics";
import { analytics } from "../firebase";

const BuyModal = ({
  modalVisible,
  setModalVisible,
  item,
  Buy,
  balance,
  numCoinsOwned,
}) => {
  const [quantity, setQuantity] = useState(0);

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
        
        
      <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center',height:100,backgroundColor:AppStyles.theme_1.DARK}}>

     
        <AntDesign
            name="leftcircle"
            size={45}
            color="white"
            style={{ alignSelf: "'flex-start'" }}
            onPress={() => setModalVisible(false)}
          />
           <Text style={{ color: AppStyles.theme_1.WHITE, fontSize: 24 }}>
              Current Balance: ${balance}
            </Text>
          <Text style={{ color: AppStyles.theme_1.WHITE, fontSize: 20 }}>
            {item.name}
          </Text>

          <Text style={{ color: AppStyles.theme_1.WHITE, fontSize: 52 }}>
            ${parseFloat(item.price_usd * quantity).toFixed(2)}
          </Text>
          
          
          
        
          <TextInput
            onChangeText={(item) => setQuantity(item)}
            placeholder="Enter Quantity"
            keyboardType="number-pad"
            style={{
              padding: 10,
              fontSize: 32,
              color: "white",
              backgroundColor: AppStyles.theme_1.DARK,
              height: 52,
              alignItems: "center",
            }}
          />

          <Button
            action={() => {
              Buy(item, quantity);
              setModalVisible(false);
            }}
            title="Buy"
  
            
          />
          
          </SafeAreaView>
          
      </Modal>
  
      
      <AntDesign
        name="rightcircleo"
        size={29}
        color="white"
        onPress={() => {
          setModalVisible(!modalVisible)
          logEvent(analytics,"page_view",{'page_title':item.name})}}
        
      />
      
          </>
          
    
    
  );
};

export default BuyModal;
