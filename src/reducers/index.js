import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import MoviesReducer from './MoviesReducer';

export default combineReducers({
  auth: AuthReducer,
  movies: MoviesReducer
});
