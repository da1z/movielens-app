import {
  LOAD_FRONT_RESULT,
  LOAD_FRONT_RESULT_SUCCESS,
  LOAD_FRONT_RESULT_FAILURE
} from './types/movies';
import { getFrontpage } from '../api/movielens';

export const loadFront = () => {
  console.log('load');
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

const loadFrontStart = () => ({ type: LOAD_FRONT_RESULT });

const loadFrontSuccess = moviesData => ({
  type: LOAD_FRONT_RESULT_SUCCESS,
  payload: moviesData
});

const loadFrontFailure = errorMessage => ({
  type: LOAD_FRONT_RESULT_FAILURE,
  payload: errorMessage
});
