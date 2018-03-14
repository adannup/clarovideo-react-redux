import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise-middleware';
// Reducers
import appReducer from './AppReducer';
import itemReducer from './Item/ItemReducer';

const reducers = combineReducers({
  app: appReducer,
  itemDetails: itemReducer,
});

const store = createStore(reducers, {}, applyMiddleware(createLogger(), promise()));
export default store;
