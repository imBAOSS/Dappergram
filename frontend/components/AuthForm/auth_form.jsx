import React from 'react';
import { Link, withRouter } from 'react-router';

import SignUpForm from '../SessionForm/signup';
import LogInForm from '../SessionForm/login';
import Video from '../Video/video';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.redirectLink = this.redirectLink.bind(this);
    this.clearErrors = this.clearErrors.bind(this);
  }

  clearErrors() {
    this.props.clearErrors();
  }

  redirectLink() {
    if (this.props.formType === 'login') {
      return (
        <div className="redirect">
          Dont't have an account?
          <Link
            to='/signup'
            onClick={this.clearErrors}>
            Sign up</Link>
        </div>
      );
    } else {
      return (
        <div className="redirect">
          Have an account?
          <Link
            to='/login'
            onClick={this.clearErrors}>
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
        login={this.props.login}
        errors={this.props.errors}
        loggedIn={this.props.loggedIn}/>;

    return (
      <div className='auth-page'>
        <Video />
        <div className='form'>
          { form }
          { this.redirectLink() }
        </div>
      </div>
    );
  }
}

export default AuthForm;
