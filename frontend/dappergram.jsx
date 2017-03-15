import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// === For Testing === //
import * as SessionAPIUtil from './util/session_api_util';
import { logout, login, signup } from './actions/session_actions';

// =================== //


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preLoadedState = {session: {currentUser: window.currentUser}};
    store = configureStore(preLoadedState);
  } else {
    store = configureStore();
  }

  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.store = store;
  ReactDOM.render(<Root store={store}/>, root);
});
