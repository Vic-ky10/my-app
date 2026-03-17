import React from 'react'
import RegisterScreen from '../Screens/RegisterScreen'
import LoginScreen from "../Screens/LoginScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from "../Screens/DashboardScreen"

const Stack = createNativeStackNavigator()
const index = () => {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name='Login' component={LoginScreen}  />
        <Stack.Screen name='Register' component={RegisterScreen}  />
          <Stack.Screen name='Dashboard' component={DashboardScreen}  />
    </Stack.Navigator>
  )
}

export default index
