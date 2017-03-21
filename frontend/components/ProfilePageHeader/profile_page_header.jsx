import React from 'react';
import { Link, withRouter } from 'react-router';

class ProfilePageHeader extends React.Component{
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.toggleFollow = this.toggleFollow.bind(this);
  }

  logout() {
    this.props.logout()
    .then( () => this.props.router.push('/login'));
  }

  componentWillUpdate(nextProps) {
    if (this.props.params.id !== nextProps.params.id) {
      this.props.fetchUser(nextProps.params.id)
      .then(this.props.fetchPhotos(nextProps.params.id));
    }
  }

  toggleFollow() {
    if (this.props.session.currentUser.followees.includes(this.props.user.id)) {
      this.props.deleteFollow(this.props.user.id);
    } else {
      this.props.createFollow(this.props.user.id);
    }
  }

  render() {

    let numPosts = this.props.user.photos ? this.props.user.photos.length : "";

    let numFollowers = this.props.user.followers ? this.props.user.followers.length : "";

    let numFollowees = this.props.user.followees ? this.props.user.followees.length : "";

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

    return (
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
    )
  }
}

export default withRouter(ProfilePageHeader);
