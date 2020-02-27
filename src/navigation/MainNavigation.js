import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { Ionicons } from '@expo/vector-icons';
const MainNavigation = createBottomTabNavigator();

export default () => {
  return (
    <MainNavigation.Navigator tabBarOptions={{ showIcon: true }}>
      <MainNavigation.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="ios-home" size={size} color={color}></Ionicons>
          )
        }}
      ></MainNavigation.Screen>
      <MainNavigation.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="ios-settings" size={size} color={color}></Ionicons>
          )
        }}
      ></MainNavigation.Screen>
    </MainNavigation.Navigator>
  );
};
