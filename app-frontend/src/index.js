import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link, BrowserRouter } from "react-router-dom";

import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';

import Reducer from './store/Reducer';

import App from './Container/App';
import registerServiceWorker from './registerServiceWorker';

// axios.defaults.baseURL = 'http://localhost:7777';

const store = createStore(Reducer);

ReactDOM.render(<BrowserRouter><Provider store={store}><App/></Provider></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
