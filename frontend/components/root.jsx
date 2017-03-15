import React from 'react';
import { Provider } from 'react-redux';

// react router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

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

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <Route path="/signup" component={ AuthFormContainer } onEnter={ _redirectIfLoggedIn }/>
          <Route path="/login" component={ AuthFormContainer } onEnter={ _redirectIfLoggedIn }/>
          <Route path="/feed" component={ PhotoFeedContainer }/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
