
import {applyMiddleware, createStore} from 'redux';

import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';

import CountrytReducer from '../redux/reducers'
import thunk from 'redux-thunk';

const middlewares = [thunk];

const store = createStore(
    CountrytReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
