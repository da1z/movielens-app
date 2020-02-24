import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';

const MainNavigation = createStackNavigator();

export default () => {
  return (
    <MainNavigation.Navigator>
      <MainNavigation.Screen
        name="Home"
        component={HomeScreen}
      ></MainNavigation.Screen>
    </MainNavigation.Navigator>
  );
};
