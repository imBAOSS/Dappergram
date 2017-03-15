import React from 'react';
import { Link, withRouter } from 'react-router';

import SignUpForm from '../SessionForm/signup';
import LogInForm from '../SessionForm/login';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.redirectLink = this.redirectLink.bind(this);
  }

  redirectLink() {
    if (this.props.formType === 'login') {
      return (
        <div className="redirect">
          Dont't have an account?
          <Link
            to='/signup'>
            Sign up</Link>
        </div>
      );
    } else {
      return (
        <div className="redirect">
          Have an account?
          <Link
            to='/login'>
            Log in</Link>
        </div>
      );
    }
  }

  render() {
    let form = this.props.formType === "login" ?
    <LogInForm
      login={this.props.login}
      errors={this.props.errors}
      loggedIn={this.props.loggedIn}/> :
      <SignUpForm
        signup={this.props.signup}
        errors={this.props.errors}
        loggedIn={this.props.loggedIn}/>;

    return (
      <div className='auth-page'>
        <div className="splash-image"/>
        <div className='form'>
          { form }
          { this.redirectLink() }
        </div>
      </div>
    );
  }
}

export default AuthForm;
