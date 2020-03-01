import {
  LOAD_FRONT_RESULT,
  LOAD_FRONT_RESULT_SUCCESS,
  LOAD_FRONT_RESULT_FAILURE,
  LOAD_DETAILS,
  LOAD_DETAILS_SUCCESS,
  RATE_MOVIE,
  SEARCH_MOVIES,
  SEARCH_MOVIES_FAILURE,
  SEARCH_MOVIES_SUCCESS
} from './types/movies';

import {
  getFrontpage,
  getMovie,
  rate,
  unhide,
  explore
} from '../api/movielens';

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

export const searchMovie = (searchTerm, page = 1) => dispatch => {
  dispatch({ type: SEARCH_MOVIES });
  explore(null, { q: searchTerm, page })
    .then(r => dispatch({ type: SEARCH_MOVIES_SUCCESS, payload: r }))
    .catch(e => dispatch({ type: SEARCH_MOVIES_FAILURE, payload: e.message }));
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
