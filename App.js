import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SigninScreen from './src/screens/auth/SigninScreen';
import SignupScreen from './src/screens/auth/SignupScreen';
import SplashScreen from './src/screens/auth/SplashScreen';
import configureStore from './src/configureStore';

const LoginNavigation = createStackNavigator();
const store = configureStore();
export default () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
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
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
