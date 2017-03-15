import React from 'react';
import { hashHistory, withRouter } from 'react-router';

class LogInForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {username: '', password: ''};
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestLogIn = this.guestLogIn.bind(this);
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
    const user = {username: 'guest', password: 'password'};
    this.props.login(user);
  }

  render() {

    return (
      <div>
        <div>
          <h1>Dappergram</h1>
          <button onClick={this.guestLogIn}>Login as Guest</button>
        </div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.update('username')}
            placeholder='Username'
            value={this.state.username}/>
            <br/>
          <input
            type="text"
            onChange={this.update('password')}
            placeholder='Password'
            value={this.state.password}/>
            <br/>
          <input type="submit" value="Log in"/>
        </form>
        {this.props.errors}
      </div>
    );
  }
}

export default withRouter(LogInForm);
