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
      imageUrl = <img src={this.props.session.currentUser.photo_url}/>;
    }

    let feed;

    return (

      <div>
        <div className='nav-bar'>
          <div className='home-icon'>
            Home Icon
          </div>

          <div className='profile-icon'>
            <button onClick={this.props.logout}>Log out</button>
          </div>
        </div>

        <div className='photo-feed'>
          {feed}
          {imageUrl}
        </div>
      </div>
    );
  }
}

export default withRouter(PhotoFeed);
