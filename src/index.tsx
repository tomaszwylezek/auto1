import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/styles/main.scss';
import * as serviceWorker from './serviceWorker';
import { AppContainer } from 'App/App.container';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
