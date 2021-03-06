import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// === For Testing === //
import * as SessionAPIUtil from './util/session_api_util';
import { logout, login, signup } from './actions/session_actions';
import * as PhotosAPIUtil from './util/photo_api_util';
import { fetchPhotos } from './actions/photo_actions';
import fetchUser from './actions/user_actions';

// =================== //


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preLoadedState = {session: {currentUser: window.currentUser, errors: []}};
    store = configureStore(preLoadedState);
  } else {
    store = configureStore();
  }
  
  ReactDOM.render(<Root store={store}/>, root);
});
