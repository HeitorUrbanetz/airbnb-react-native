import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import ScreenResults from '../screens/ScreenResults'

import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';



const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: '#f15454'
    }}>
      <Tab.Screen name={"Explore"} component={HomeScreen} options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Fontisto name='search' size={25} color={color} />
          )
      }}/>
      <Tab.Screen name={"Saved"} component={HomeScreen} options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <FontAwesome name='heart-o' size={25} color={color} />
          )
      }}/>
      <Tab.Screen name={"Airbnb"} component={ScreenResults} options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <FontAwesome5 name='airbnb' size={25} color={color} />
          )
      }}/>
      <Tab.Screen name={"Messages"} component={HomeScreen} options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Feather name='message-square' size={25} color={color} />
          )
      }}/>
      <Tab.Screen name={"profile"} component={HomeScreen} options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <EvilIcons name='user' size={25} color={color} />
          )
      }}/>
      
    </Tab.Navigator>
  )
}

export default HomeTabNavigator

const styles = StyleSheet.create({})