import React from 'react';
// React Related Imports
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// Style Related Imports
import './index.css';
import './components/Menu.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Menu from './components/Menu';

ReactDOM.render(
  <React.StrictMode>
    <Menu />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
