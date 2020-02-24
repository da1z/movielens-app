import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SigninScreen from '../screens/auth/SigninScreen';
import SignupScreen from '../screens/auth/SignupScreen';

const LoginNavigation = createStackNavigator();

export default () => {
  return (
    <LoginNavigation.Navigator>
      <LoginNavigation.Screen
        name="Signin"
        component={SigninScreen}
      ></LoginNavigation.Screen>
      <LoginNavigation.Screen
        name="Signup"
        component={SignupScreen}
      ></LoginNavigation.Screen>
    </LoginNavigation.Navigator>
  );
};
