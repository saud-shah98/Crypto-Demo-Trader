import React, { useState,useEffect } from "react"
import { View, Text,Modal,Alert,Pressable,StyleSheet, TextInput, Platform} from "react-native";
import AppStyles from "../AppStyles";
import Button from '../components/Button';

const BuyModal =({modalVisible,setModalVisible,item,Buy}) => {
  const [quantity,setQuantity] = useState(1);

  useEffect(()=>{


  },[quantity])


  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>

            <View style={{flex:1, justifyContent:'center',alignItems:'center',backgroundColor:AppStyles.theme_1.DARK2}}>
                
            <Text style={{color:AppStyles.theme_1.WHITE,fontSize:65}}>
                  {item.name}
                </Text>

                <Text style={{color:AppStyles.theme_1.WHITE,fontSize:52}}>
                  ${item.price_usd * quantity}
                </Text>
                <Text style={{color:AppStyles.theme_1.WHITE,fontSize:32}}>
                 Amount Desired
                </Text>

                <TextInput  onChangeText={(item) => setQuantity(item)} placeholder='Enter Quantity' style={{padding:10,fontSize:32,color:'white',backgroundColor:AppStyles.theme_1.DARK,height:52, alignItems:'center',}} />


                <Button action={()=>{
                  Buy(item,quantity)
                  setModalVisible(false)
                }} title='Buy'
                />
                  
                
            </View>


        </Modal>
        <Button title='Buy' action={()=> setModalVisible(true)} color={AppStyles.theme_1.ORANGE}/>
        

    </View>
  )
}

export default BuyModal;