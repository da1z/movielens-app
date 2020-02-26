import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  RESTORE_USER_SUCCESS,
  LOGOUT
} from './types/auth';

import { AsyncStorage } from 'react-native';
import {
  login as apiLogin,
  getMe,
  logout as apiLogout
} from '../api/movielens';

export const restoreUser = () => {
  return async dispatch => {
    try {
      const user = await getMe();
      dispatch(restoreUserSuccess({ user }));
    } catch (error) {
      //restore failed dispatch restore failed
    }
  };
};

export const authenticate = (username, password) => {
  return async dispatch => {
    dispatch(login());
    try {
      await apiLogin(username, password);
      const user = await getMe();
      dispatch(loginSuccess(user));
    } catch (err) {
      dispatch(loginFailure(err.message));
    }
  };
};

export const logout = () => {
  return async dispatch => {
    await apiLogout();
    dispatch({
      type: LOGOUT
    });
  };
};

const restoreUserSuccess = ({ user }) => {
  return {
    type: RESTORE_USER_SUCCESS,
    payload: { user }
  };
};

const login = () => {
  return {
    type: LOGIN
  };
};

const loginSuccess = user => {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      user
    }
  };
};

const loginFailure = errorMessage => {
  return {
    type: LOGIN_FAILURE,
    payload: { errorMessage }
  };
};
