import React from 'react';
import { withRouter, hashHistory } from 'react-router';

class PhotoFeed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    if (!this.props.session.currentUser) {
      this.props.router.push("/login");
    }
  }

  render() {
    let imageUrl;
    if (this.props.session.currentUser) {
      debugger;
      imageUrl = <img src={this.props.session.currentUser.photo_url}/>;
    }

    return (
      <div>
        {imageUrl}
        <button onClick={this.props.logout}>Log out</button>
      </div>
    );
  }
}

export default withRouter(PhotoFeed);
