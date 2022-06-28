import { View, Text } from 'react-native'
import React from 'react'
import AppStyles from '../AppStyles'
import { AntDesign } from "@expo/vector-icons";


export default function Logout({logout}) {
  return (<View style={{alignItems:'center',marginRight:10,}}>



       
        <AntDesign
          name="lock"
          size={40}
          color={AppStyles.theme_1.DARK}
          onPress={() => logout()}
          
        />
         <Text>Logout</Text>

</View>


  )
}