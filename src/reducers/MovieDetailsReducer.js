import {
  LOAD_DETAILS,
  LOAD_DETAILS_SUCCESS,
  RATE_MOVIE
} from '../actions/types/movies';

INITIAL_STATE = {
  movie: null,
  movieUserData: null,
  isLoading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_DETAILS:
      return { ...INITIAL_STATE, isLoading: true };
    case LOAD_DETAILS_SUCCESS:
      return { ...state, ...action.payload, isLoading: false };
    case RATE_MOVIE:
      if (action.payload.movieId === state.movie.movieId)
        return {
          ...state,
          movieUserData: {
            ...state.movieUserData,
            rating: action.payload.rating
          }
        };
      return state;
    default:
      return state;
  }
};
