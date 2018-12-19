import { createStore , applyMiddleware} from 'redux';

import thunk from 'redux-thunk';
import {createlogger} from 'redux-logger'

import rootReducer from '../Reducers/index';

const initState = {}

const middleware = applyMiddleware(thunk , createlogger)

const Store = createStore ( rootReducer,initState);
// window.devToolsExtension ? window.devToolsExtension() : f => f

// Subscription
// Store.subscribe(() => {
//     console.log('[Subscription]', Store.getState());
// });

// Dispatching Action
// Store.dispatch({type: 'GET_PERSON'});


export default Store;

