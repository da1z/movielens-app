import React, { useState, useEffect } from 'react';
import { Provider, connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { AsyncStorage } from 'react-native';
import SplashScreen from './src/screens/auth/SplashScreen';
import configureStore from './src/configureStore';
import LoginNavigation from './src/navigation/LoginNavigation';
import { getMe } from './src/api/movielens';
import { restoreUser } from './src/actions/auth';
import { AUTH_COOKIE_KEY } from './src/actions/auth';

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
      let cookie;
      try {
        cookie = await AsyncStorage.getItem(AUTH_COOKIE_KEY);
      } catch (error) {
        //error getting cookie from async storage TODO: better logging
      }
      console.log(cookie);
      if (cookie) {
        //validate cookie
        try {
          const user = await getMe(cookie);
          props.restoreUser({ user, cookie });
        } catch (error) {
          //cookie not valid
        }
      }
      setIsLoading(false);
    };
    bootstrapAsync();
  }, []);

  if (isLoading) {
    return <SplashScreen></SplashScreen>;
  }

  return (
    <NavigationContainer>
      {props.auth.user ? null : <LoginNavigation />}
    </NavigationContainer>
  );
});

export default () => {
  return (
    <Provider store={store}>
      <App></App>
    </Provider>
  );
};
