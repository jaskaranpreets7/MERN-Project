import React from 'react';
import ReactDOM from 'react-dom';
import Store from './Store/index'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link, BrowserRouter } from "react-router-dom";

import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';

import App from './Container/App';
import registerServiceWorker from './registerServiceWorker';

// axios.defaults.baseURL = 'http://localhost:7777';



ReactDOM.render(<BrowserRouter><Provider store={Store}><App/></Provider></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
