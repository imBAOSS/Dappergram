import React from 'react';
import { Link } from 'react-router';

import SignUpForm from '../SessionForm/signup';
import LogInForm from '../SessionForm/login';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.redirectLink = this.redirectLink.bind(this);
  }

  redirectLink() {
    if (this.props.formType === 'login') {
      return <p>Dont't have an account? <Link to='/signup'>Sign up</Link></p>;
    } else {
      return <p>Have an account? <Link to='/login'>Log in</Link></p>;
    }
  }

  render() {
    let form = this.props.formType === "login" ?
    <LogInForm login={this.props.login} errors={this.props.errors}/> :
      <SignUpForm signup={this.props.signup} errors={this.props.errors}/>;

    return (
      <div>
        { form }
        <div>
          { this.redirectLink() }
        </div>
      </div>
    );
  }
}

export default AuthForm;
