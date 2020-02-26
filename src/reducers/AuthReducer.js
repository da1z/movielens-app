import {
  RESTORE_USER_SUCCESS,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from '../actions/types/auth';

const INITIAL_STATE = {
  user: null,

  isAuthenticating: false,

  isLoginError: false,
  loginErrorMessage: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RESTORE_USER_SUCCESS: {
      const { user } = action.payload;
      return {
        ...state,
        user
      };
    }
    case LOGIN:
      return { ...state, isAuthenticating: true, isLoginError: false };
    case LOGIN_SUCCESS: {
      const { user } = action.payload;
      return { ...state, isAuthenticating: false, user };
    }
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticating: false,
        isLoginError: true,
        loginErrorMessage: action.payload.errorMessage
      };
    case LOGOUT:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};
