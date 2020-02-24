import {
  RESTORE_USER,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_Failure,
  LOGIN_FAILURE
} from './types/auth';

import { AsyncStorage } from 'react-native';
import { login as apiLogin, getMe } from '../api/movielens';
export const AUTH_COOKIE_KEY = 'ml_cookie_key';

export const restoreUser = ({ user, cookie }) => {
  return {
    type: RESTORE_USER,
    payload: { user, cookie }
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
