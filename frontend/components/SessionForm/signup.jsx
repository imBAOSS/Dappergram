import React from 'react';
import { hashHistory, withRouter } from 'react-router';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      username: '',
      password: '',
      errors: this.props.errors};
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestLogIn = this.guestLogIn.bind(this);
    this.listErrors = this.listErrors.bind(this);
  }

  update(field) {
    return e => this.setState({[field]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signup(user);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.router.push("/feed");
    }
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

  guestLogIn() {
    // const user = {username: 'guest', password: 'guest_password'};
    // this.props.login(user);
    this.props.router.push('/login');
  }

  render() {
    const listErrors = this.listErrors();

    return (
      <div className='signup-form'>
        <div className='auth-header'>
          <h1>DapperLife</h1>
          <h4>Sign up to share photos of the finer things in life.</h4>
        </div>
        <div>
          <button
            onClick={this.guestLogIn}
            className='button'>Login as Guest</button>
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
              onChange={this.update('email')}
              placeholder='Email'
              value={this.state.email}/>
          </div>
          <div className="input">
            <input
              type="text"
              onChange={this.update('name')}
              placeholder='Full Name'
              value={this.state.name}/>
          </div>
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
          <div className="button">
            <input
              type="submit"
              value="Sign up"
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

export default withRouter(SignUpForm);
