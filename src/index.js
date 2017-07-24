import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Manual & Minimal Babel + Webpack Setup';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();