import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise-middleware';

const reducers = combineReducers({});

const store = createStore(reducers, {}, applyMiddleware(createLogger(), promise()));
export default store;
