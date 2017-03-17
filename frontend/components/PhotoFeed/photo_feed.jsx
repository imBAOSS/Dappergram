import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import PhotoDetail from '../PhotoDetail/photo_detail.jsx';

class PhotoFeed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    if (!this.props.session.currentUser) {
      this.props.router.push("/login");
    }
  }

  componentWillMount() {
    this.props.fetchPhotos();
  }

  render() {
    let imageUrl;
    if (this.props.session.currentUser) {
      imageUrl = <img src={this.props.session.currentUser.photo_url}/>;
    }

    let feed = Object.keys(this.props.photos).map(id => (
        <li key={id}><PhotoDetail photo={this.props.photos[id]}/></li>
      )
    );

    return (

      <div className='feed'>
        <div className='nav-bar'>
          <div className='nav-elements'>
            <div className='left-nav-buttons'>
              <div className='home-icon-cont'>
                <Link to="/feed" className='home-icon'></Link>
              </div>

              <div className="dappergram">
                <h1>Dappergram</h1>
              </div>
            </div>

            <div className='profile-icon-cont'>
              <Link onClick={this.props.logout}
                className="profile-icon"></Link>
            </div>
          </div>
        </div>

        <div className='photo-feed'>
          <div>
            {feed}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(PhotoFeed);
