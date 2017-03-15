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
  let store;
  if (window.currentUser) {
    const preLoadedState = {session: {currentUser: window.currentUser}};
    store = configureStore(preLoadedState);
  } else {
    store = configureStore();
  }

  window.store = store;
  ReactDOM.render(<Root store={store}/>, root);
});
