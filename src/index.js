import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import index from '../src/stylesheets/index.scss';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
