import React from 'react';
import { Link, withRouter } from 'react-router';
import ProfilePageFeedContainer from '../ProfilePageFeed/profile_page_feed_container';
import ProfilePageHeaderContainer from '../ProfilePageHeader/profile_page_header_container';

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchUser(this.props.router.params.id)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.id !== nextProps.params.id) {
      this.props.fetchUser(nextProps.params.id)
      .then(this.props.fetchPhotos(nextProps.params.id));
    }
  }

  render () {

    let loadMoreButton;
    return (
      <div className='profile-page-cont'>
        <div className="profile-header-cont">
          <ProfilePageHeaderContainer/>
        </div>

        <div className="profile-feed">
          <ProfilePageFeedContainer
            user={this.props.user}/>
        </div>

        <div className='load-more-button'>
          { loadMoreButton }
        </div>
      </div>
    );
  }
}

export default withRouter(ProfilePage);
