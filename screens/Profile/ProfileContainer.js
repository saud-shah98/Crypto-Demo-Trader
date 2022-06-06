import { View, Text } from 'react-native'
import React, {useContext} from 'react'
import Profile from './Profile';
import {AuthContext} from '../../navigation/AuthProvider';

export default function ProfileContainer({navigation}) {
    const { user, logout } = useContext(AuthContext);

  return (
   <Profile navigation={navigation} user={user} />
  )
}