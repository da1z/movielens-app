import React, { useState, useEffect } from 'react';
import { Provider, connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from './src/screens/auth/SplashScreen';
import configureStore from './src/configureStore';
import LoginNavigation from './src/navigation/LoginNavigation';
import { restoreUser } from './src/actions/auth';
import MainNavigation from './src/navigation/MainNavigation';

const store = configureStore();

const mapStateToProp = state => {
  return {
    auth: state.auth
  };
};

const App = connect(mapStateToProp, { restoreUser })(props => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const bootstrapAsync = async () => {
      props.restoreUser().then(() => setIsLoading(false));
    };
    bootstrapAsync();
  }, []);

  if (isLoading) {
    return <SplashScreen></SplashScreen>;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {props.auth.user ? <MainNavigation /> : <LoginNavigation />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
});

export default () => {
  return (
    <Provider store={store}>
      <App></App>
    </Provider>
  );
};
