import React from 'react';
import { hashHistory, withRouter } from 'react-router';

class LogInForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {username: '', password: '', loginGuest: false};
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestLogIn = this.guestLogIn.bind(this);
    this.listErrors = this.listErrors.bind(this);
    this.writeUsername = this.writeUsername.bind(this);
    this.writePassword = this.writePassword.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  update(field) {
    return e => this.setState({[field]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.router.push("/feed");
    }
  }

  guestLogIn() {
    const user = {username: 'guest', password: 'guest_password'};
    this.props.login(user);
  }

  componentWillReceiveProps() {
    if (!this.state.loginGuest) {
      this.setState({
        loginGuest: true
      })
    }
  }

  writeUsername(usernameIdx = 0, username = 'guest') {
    if (usernameIdx > username.length) {
      return this.writePassword();
    } else {
      setTimeout(() => {
        this.setState({
          username: username.slice(0, usernameIdx)
        });
        this.writeUsername(usernameIdx + 1, 'guest');
      }, 70);
    }
  }

  writePassword(passwordIdx = 0, password = 'guest_password') {
    if (passwordIdx > password.length) {
      this.setState({
        loginGuest: false
      })
      return this.props.login(this.state).then(() => this.props.router.push("/feed"));
    } else {
      setTimeout(() => {
        this.setState({
          password: password.slice(0, passwordIdx)
        });
        this.writePassword(passwordIdx + 1, 'guest_password');
      }, 70);
    }
  }

  demoLogin() {
    this.writeUsername();
  }

  listErrors() {
    if (this.props.errors.length > 0) {
      return (
        this.props.errors.map((err,idx) =>
          <li key={idx} className="error-details">{err}</li>
        )
      );
    }
  }

  render() {
    const listErrors = this.listErrors();

    return (
      <div className="login-form">
        <div className="auth-header">
          <h1>DapperLife</h1>
          <br/>
        </div>
        <div>
          <button
            onClick={this.demoLogin}
            className="button">Login as Guest</button>
        </div>
        <div className="or-line">
          <div className="line"></div>
          <div className='or'>OR</div>
          <div className="line"></div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="input">
            <input
              type="text"
              onChange={this.update('username')}
              placeholder='Username'
              value={this.state.username}/>
          </div>
          <div className="input">
            <input
              type="password"
              onChange={this.update('password')}
              placeholder='Password'
              value={this.state.password}/>
          </div>
          <div className='button'>
            <input
              type="submit"
              value="Log in"
              className="submit-button"/>
          </div>
        </form>
        <div className="errors">
          <ul>
            {listErrors}
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(LogInForm);
