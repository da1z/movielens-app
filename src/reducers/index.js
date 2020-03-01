import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import MoviesReducer from './MoviesReducer';
import MovieDetailsReducer from './MovieDetailsReducer';
import SearchReducer from './SearchReducer';

export default combineReducers({
  auth: AuthReducer,
  movies: MoviesReducer,
  movieDetails: MovieDetailsReducer,
  search: SearchReducer
});
