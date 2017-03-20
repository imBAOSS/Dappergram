import React from 'react';
import { Link, withRouter } from 'react-router';

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.toggleFollow = this.toggleFollow.bind(this);
  }

  componentWillMount() {
    this.props.fetchUser(this.props.params.id)
  }

  logout() {
    this.props.logout()
    .then( () => this.props.router.push('/login'));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.id !== nextProps.params.id) {
      this.props.fetchUser(nextProps.params.id);
    }
  }

  toggleFollow() {
    if (this.props.session.currentUser.followees.includes(this.props.user.id)) {
      this.props.deleteFollow(this.props.user.id);
    } else {
      this.props.createFollow(this.props.user.id);
    }
  }

  render () {

    let numPosts = this.props.user.photos ? this.props.user.photos.length : "";

    let numFollowers = this.props.user.followers ? this.props.user.followers.length : "";

    let numFollowees = this.props.user.followees ? this.props.user.followees.length : "";

    let photoFeed = [];
    let chunk = 3;
    if (this.props.user.photos) {
      let reverse = this.props.user.photos.reverse();
      for (let i = 0; i < reverse.length; i+=chunk) {
        let subChunk = reverse.slice(i, i+chunk);
        let row =
        <div key={i} className="profile-feed-row">
          {
            subChunk.map((photo, idx) =>
              <div key={idx} className="profile-feed-photo-cont">
                <img className="profile-feed-photo" key={idx} src={photo.photo_url}/>
              </div>
            )
          }
        </div>
        photoFeed.push(row);
      }
    }

    let followButton;

    if (this.props.session.currentUser) {
      if (this.props.session.currentUser.id !== this.props.user.id) {
        if (this.props.session.currentUser.followees.includes(this.props.user.id)) {
          followButton = (<button
            className="following-button"
            onClick={this.toggleFollow}>
            Following
          </button>)
        } else {
        followButton =
          (<button
            className="follow-button"
            onClick={this.toggleFollow}>
            Follow
          </button>)
        }
      }
    }

    let logoutButton;
    if (this.props.session.currentUser && this.props.user.id) {
      if (this.props.session.currentUser.id === this.props.user.id) {
        logoutButton =
        (<button
          className="logout-button"
          onClick={ this.logout }/>)
      }
    }

    let loadMoreButton;

    return (
      <div className='profile-page-cont'>
        <div className="profile-header-cont">
          <div className="profile-header">
            <div className="profile-picture-cont-cont">
              <div className="profile-picture-cont">
                <img
                  className="profile-picture"
                  src={this.props.user.photo_url}/>
              </div>
            </div>

            <div
               className="profile-user-info-header">
              <div className="profile-user-info">
                <div className="username">
                  <h1>{this.props.user.username}</h1>
                </div>
                <div className="follow-button-cont">
                  { followButton }
                </div>
                <div className="logout-button-cont">
                  { logoutButton }
                </div>
              </div>

              <div className="user-stats">
                <div className="num-posts">
                  <num>{numPosts}</num> posts
                </div>

                <div className="num-followers">
                  <num>{numFollowers}</num> followers
                </div>

                <div className='num-following'>
                  <num>{numFollowees}</num> following
                </div>
              </div>
              <div className="user-description">
                <div className='user-name'>{this.props.user.name}</div> {this.props.user.description}
              </div>
            </div>
          </div>
        </div>

        <div className="profile-feed">
          { photoFeed }
        </div>

        <div className='load-more-button'>
          { loadMoreButton }
        </div>
      </div>
    );
  }
}

export default withRouter(ProfilePage);
