import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// === For Testing === //
import * as SessionAPIUtil from './util/session_api_util';

window.signup = SessionAPIUtil.signup;
window.login = SessionAPIUtil.login;
window.logout = SessionAPIUtil.logout;
// =================== //


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  window.store = store;
  ReactDOM.render(<h1>Dappergram</h1>, root);
});
