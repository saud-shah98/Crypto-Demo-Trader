import { Text, Platform,View } from 'react-native'
import React from 'react'
import DateTimePicker from "@react-native-community/datetimepicker";
import AppStyles from '../AppStyles';

export default function Date({dob,setDob}) {
  return (

      <>
      {!(Platform.OS === "web") ? (

        <>
          <Text style={{ color: AppStyles.theme_1.WHITE, fontSize: 15, marginTop: 15 }}>
            Date of Birth
          </Text>
          <View>

          
          <DateTimePicker
            mode="date"
            value={dob}
            onChange={(event, selectedDate) => setDob(selectedDate)}
            style={{
              marginTop: 5,
              width: '21%',
              right: 10,
            }}
          />
          </View>
          </>
      ) : (
        <></>
      )}
         </>
 
  )
}