import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducers';

export default configureStore = preloadedState => {
  const middlewares = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers =[middlewareEnhancer]
  const composedEnhancers = compose(...enhancers)

  return createStore(rootReducer, preloadedState, composedEnhancers)
};
