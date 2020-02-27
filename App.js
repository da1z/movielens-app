import React, { useState, useEffect } from 'react';
import { Provider, connect } from 'react-redux';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { ThemeProvider } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from './src/screens/auth/SplashScreen';
import configureStore from './src/configureStore';
import LoginNavigation from './src/navigation/LoginNavigation';
import { restoreUser } from './src/actions/auth';
import MainNavigation from './src/navigation/MainNavigation';
import { colors, rnTheme, elementsTheme } from './src/theme';

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
      <ThemeProvider theme={elementsTheme}>
        <NavigationContainer theme={rnTheme}>
          {props.auth.user ? <MainNavigation /> : <LoginNavigation />}
        </NavigationContainer>
      </ThemeProvider>
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
