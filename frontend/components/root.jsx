import React from 'react';
import { Provider } from 'react-redux';

// react router
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';

// react components
import App from './App';
import AuthFormContainer from './AuthForm/auth_form_container';
import PhotoFeedContainer from './PhotoFeed/photo_feed_container';

const Root = ({store}) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace("/feed");
    }
  };

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace("/login");
    }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRedirect to="/login"/>
          <Route path="/signup" component={ AuthFormContainer } onEnter={ _redirectIfLoggedIn }/>
          <Route path="/login" component={ AuthFormContainer } onEnter={ _redirectIfLoggedIn }/>
          <Route path="/feed" component={ PhotoFeedContainer } onEnter={ _ensureLoggedIn }/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
