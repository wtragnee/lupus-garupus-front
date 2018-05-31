
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import Config from './helper/Config';

const config = new Config();
global.config = config;

ReactDOM.render(<App />, document.getElementById('root')); // eslint-disable-line no-undef
