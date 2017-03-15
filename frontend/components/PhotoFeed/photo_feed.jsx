import React from 'react';
import { hashHistory } from 'react-router';

class PhotoFeed extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.logout();
    hashHistory.push("/login");
  }

  render() {

    return (
      <div>
        <button onClick={this.logout}>Log out</button>
      </div>
    );
  }
}

export default PhotoFeed;
