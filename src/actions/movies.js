import {
  LOAD_FRONT_RESULT,
  LOAD_FRONT_RESULT_SUCCESS,
  LOAD_FRONT_RESULT_FAILURE,
  LOAD_DETAILS,
  LOAD_DETAILS_SUCCESS,
  RATE_MOVIE
} from './types/movies';

import { getFrontpage, getMovie, rate, unhide } from '../api/movielens';

export const loadFront = () => {
  return async dispatch => {
    dispatch(loadFrontStart());
    try {
      const moviesData = await getFrontpage();
      dispatch(loadFrontSuccess(moviesData.listOfSearchResults));
    } catch (error) {
      console.log(error);
      dispatch(loadFrontFailure(error.message));
    }
  };
};

export const loadDetails = movieId => async dispatch => {
  dispatch({ type: LOAD_DETAILS });
  const {
    data: {
      movieDetails: { movie, movieUserData }
    }
  } = await getMovie(null, movieId);
  dispatch({ type: LOAD_DETAILS_SUCCESS, payload: { movie, movieUserData } });
};

export const rateMovie = (movieId, rating) => async dispatch => {
  dispatch({ type: RATE_MOVIE, payload: { movieId, rating } });
  const {
    data: {
      movieDetails: { movieUserData }
    }
  } = await getMovie(null, movieId);
  rate(null, {
    movieId,
    rating,
    prediction: movieUserData.prediction,
    previousRating: movieUserData.rating
  });
};

export const unrateMovie = movieId => dispatch => {
  unhide(null, movieId);
  dispatch({ type: RATE_MOVIE, payload: { movieId, rating: null } });
};

const loadFrontStart = () => ({ type: LOAD_FRONT_RESULT });

const loadFrontSuccess = moviesData => ({
  type: LOAD_FRONT_RESULT_SUCCESS,
  payload: moviesData
});

const loadFrontFailure = errorMessage => ({
  type: LOAD_FRONT_RESULT_FAILURE,
  payload: errorMessage
});
