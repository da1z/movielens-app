import {
  SEARCH_MOVIES,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_FAILURE
} from '../actions/types/movies';

INITIAL_STATE = {
  isSearching: false,
  searchResult: [],
  errorMessage: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_MOVIES:
      return { ...state, isSearching: true, errorMessage: '' };
    case SEARCH_MOVIES_SUCCESS:
      return { ...state, isSearching: false, searchResult: action.payload };
    case SEARCH_MOVIES_FAILURE:
      console.log(action.payload);
      return { ...state, isSearching: false, errorMessage: action.payload };
    default:
      return state;
  }
};
