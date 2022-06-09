import { View, Text } from 'react-native'
import React from 'react'

export default function ButtonBox({children,spacing}) {
  return (
      <View style={{ height: 50, width: '85%', marginTop: spacing>0 ? spacing: 0, alignItems:'center' }}>

    {children}
    </View>
  )
}