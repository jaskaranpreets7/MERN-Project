import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as BrowserRouter } from "react-router-dom";
import { createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './container/App';
import reducers from './reducers';

const store = createStore( reducers,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));


ReactDOM.render(<BrowserRouter><Provider store={store}><App/></Provider></BrowserRouter>, document.getElementById('root'));
