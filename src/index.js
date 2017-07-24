import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
require('./app.css');

const title = 'Manual & Minimal Babel + Webpack Setup';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

module.hot.accept();