import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import { createLogger } from 'redux-logger';

const configureStore = () => {
  const middlewareList = [];
  if (process.env.NODE_ENV) {
    middlewareList.push(createLogger());
  }

  const store = createStore(
    rootReducer,
    process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middlewareList),
  );

  return store;
};

export default configureStore;
