import { View, Text,Pressable } from 'react-native'
import React from 'react'

export default function Profile({user,navigation}) {
  return (
    <View style={{flex:1, justifyContent:'center'}}>
      <Text>{user.uid}</Text>
      <Pressable style={{backgroundColor:'green'}}onPress={() => navigation.navigate('Home')}>
          <Text>Start your investing journey!</Text>
      </Pressable>
    </View>
  )
}