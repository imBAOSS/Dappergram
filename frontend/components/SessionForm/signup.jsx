import React from 'react';

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
    this.props.signup(this.state);
  }

  render() {

    return (
      <div>
        <div>
          <h1>Dappergram</h1>
          <h4>Sign up to see photos from your friends.</h4>
        </div>
        <form>
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

export default SignUpForm;
