import React from 'react';

class LogInForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {username: '', password: ''};
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({[field]: e.target.value});
  }

  handleSubmit(e) {
    debugger;
    e.preventDefault();
    this.props.login(this.state);
  }

  render() {

    return (
      <div>
        <div>
          <h1>Dappergram</h1>
          <button>Login as Guest</button>
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

export default LogInForm;
