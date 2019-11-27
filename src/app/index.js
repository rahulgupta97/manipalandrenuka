import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import registerServiceWorker from '../utils/registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
require('dotenv').config({path:__dirname+'/../../.env'});

ReactDOM.render(<BrowserRouter basename={process.env.REACT_APP_ROUTER_BASE}><App /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();