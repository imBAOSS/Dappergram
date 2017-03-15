import React from 'react';
import { hashHistory, withRouter } from 'react-router';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', username: '', password: ''};
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  render() {

    return (
      <div>
        <div>
          <h1>Dappergram</h1>
          <h4>Sign up to see photos from your friends.</h4>
        </div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.update('name')}
            placeholder='Full Name'
            value={this.state.name}/>
          <br/>
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
          <input type="submit" value="Sign up"/>
        </form>
        {this.props.errors}
      </div>
    );
  }
}

export default withRouter(SignUpForm);
