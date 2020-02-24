import {
  RESTORE_USER_SUCCESS,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../actions/types/auth';

const INITIAL_STATE = {
  user: null,
  cookie: null,

  isAuthenticating: false,

  isLoginError: false,
  loginErrorMessage: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RESTORE_USER_SUCCESS: {
      const { user, cookie } = action.payload;
      return {
        ...state,
        user,
        cookie
      };
    }
    case LOGIN:
      return { ...state, isAuthenticating: true, isLoginError: false };
    case LOGIN_SUCCESS: {
      const { user, cookie } = action.payload;
      return { ...state, isAuthenticating: false, user, cookie };
    }
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticating: false,
        isLoginError: true,
        loginErrorMessage: action.payload.errorMessage
      };
    default:
      return state;
  }
};
