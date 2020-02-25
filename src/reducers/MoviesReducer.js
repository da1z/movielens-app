import {
  LOAD_FRONT_RESULT,
  LOAD_FRONT_RESULT_SUCCESS,
  LOAD_FRONT_RESULT_FAILURE
} from '../actions/types/movies';

const INITIAL_STATE = {
  isFrontLoading: false,
  frontLoadingError: '',
  moviesData: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_FRONT_RESULT:
      return { ...state, isFrontLoading: true, frontLoadingError: '' };
    case LOAD_FRONT_RESULT_SUCCESS:
      return { ...state, isFrontLoading: false, moviesData: action.payload };
    case LOAD_FRONT_RESULT_FAILURE:
      return {
        ...state,
        isFrontLoading: false,
        frontLoadingError: action.payload
      };
    default:
      return state;
  }
};
