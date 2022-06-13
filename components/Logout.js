import { View, Text } from 'react-native'
import React from 'react'
import AppStyles from '../AppStyles'
import { AntDesign } from "@expo/vector-icons";


export default function Logout({logout}) {
  return (
    <View style={{ padding: 10, alignItems: "center"}}>
        <Text style={{ color: AppStyles.theme_1.WHITE, fontSize: 24 }}>
          Signout
        </Text>
        <AntDesign
          name="lock"
          size={52}
          color={AppStyles.theme_1.WHITE}
          onPress={() => logout()}
        />
      </View>
  )
}