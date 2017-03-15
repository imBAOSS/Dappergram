import React from 'react';
import { Provider } from 'react-redux';

// react router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// react components
import App from './app';
import AuthFormContainer from './AuthForm/auth_form_container';

const Root = ({store}) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <Route path="/signup" component={ AuthFormContainer }/>
        <Route path="/login" component={ AuthFormContainer }/>
      </Route>
    </Router>
  </Provider>
);

export default Root;
