import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';

const MainNavigation = createBottomTabNavigator();

export default () => {
  return (
    <MainNavigation.Navigator>
      <MainNavigation.Screen
        name="Home"
        component={HomeScreen}
      ></MainNavigation.Screen>
      <MainNavigation.Screen
        name="Settings"
        component={SettingsScreen}
      ></MainNavigation.Screen>
    </MainNavigation.Navigator>
  );
};
