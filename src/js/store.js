import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { createLogger } from 'redux-logger';
import promise from 'redux-promise-middleware';
// Reducers
import appReducer from './AppReducer';
import itemReducer from './Item/ItemReducer';
import filterSearchReducer from './Filter/FilterSearchReducer';

const reducers = combineReducers({
  app: appReducer,
  itemDetails: itemReducer,
  filter: filterSearchReducer,
});

// const store = createStore(reducers, {}, applyMiddleware(createLogger(), promise()));
const store = createStore(reducers, {}, applyMiddleware(promise()));

export default store;
