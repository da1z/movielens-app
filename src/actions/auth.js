import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  RESTORE_USER_SUCCESS,
  LOGOUT
} from './types/auth';

import { AsyncStorage } from 'react-native';
import { login as apiLogin, getMe } from '../api/movielens';
export const AUTH_COOKIE_KEY = 'ml_cookie_key';

export const restoreUser = () => {
  return async dispatch => {
    let cookie;
    try {
      cookie = await AsyncStorage.getItem(AUTH_COOKIE_KEY);
    } catch (error) {
      //error getting cookie from async storage TODO: better logging
    }
    if (cookie) {
      //validate cookie
      try {
        const user = await getMe(cookie);
        dispatch(restoreUserSuccess({ user, cookie }));
      } catch (error) {
        //cookie not valid, clear AsyncStorage
      }
    }
  };
};

export const authenticate = (username, password) => {
  return async dispatch => {
    dispatch(login());
    try {
      const cookie = await apiLogin(username, password);
      const user = await getMe(cookie);
      try {
        AsyncStorage.setItem(AUTH_COOKIE_KEY, cookie);
      } catch (error) {
        //todo loging cookie storing failed
      }
      dispatch(loginSuccess(cookie, user));
    } catch (err) {}
  };
};

export const logout = () => {
  AsyncStorage.removeItem(AUTH_COOKIE_KEY);
  return {
    type: LOGOUT
  };
};

const restoreUserSuccess = ({ user, cookie }) => {
  return {
    type: RESTORE_USER_SUCCESS,
    payload: { user, cookie }
  };
};

const login = () => {
  return {
    type: LOGIN
  };
};

const loginSuccess = (cookie, user) => {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      user,
      cookie
    }
  };
};

const loginFailure = errorMessage => {
  return {
    type: LOGIN_FAILURE,
    payload: { errorMessage }
  };
};
