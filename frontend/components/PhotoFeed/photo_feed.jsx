import React from 'react';
import { withRouter, hashHistory } from 'react-router';
import PhotoDetail from '../PhotoDetail/photo_detail';

class PhotoFeed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    if (!this.props.session.currentUser) {
      this.props.router.push("/login");
    }
  }

  componentDidMount() {
    this.props.fetchPhotos();
  }

  render() {
    let imageUrl;
    if (this.props.session.currentUser) {
      imageUrl = <img src={this.props.session.currentUser.photo_url}/>;
    }

    let feed;
    // if (this.props.photos) {
    //   feed = this.props.photos.map(photo => (
    //     <li><PhotoDetail photo={photo}/></li>
    //   ));
    // }

    return (

      <div className='feed'>
        <div className='nav-bar'>
          <div className='home-icon'>
            Home Icon
          </div>

          <div className='profile-icon'>
            <button onClick={this.props.logout}>Log out</button>
          </div>
        </div>

        <div className='photo-feed'>
          <ul>
            {feed}
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(PhotoFeed);
