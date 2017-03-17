import React from 'react';

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchUser(this.props.params.id);
  }

  render () {
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
                  {this.props.user.username}
                </div>
                <div className="follow-button">
                  Following
                </div>
              </div>

              <div className="user-stats">
                <div className="num-posts">
                  9001 posts
                </div>

                <div className="num-followers">
                  9001 followers
                </div>

                <div className='num-following'>
                  9001 following
                </div>
              </div>
              <div className="user-description">
                User's profile description
              </div>
            </div>
          </div>
        </div>

        <div className="profile-feed">
          <div>
            <div>
              <div className="image-div">Photo 1</div>
              <div className="image-div">Photo 2</div>
              <div className="image-div">Photo 3</div>
            </div>

            <div>
              <div className="image-div">Photo 4</div>
              <div className="image-div">Photo 5</div>
              <div className="image-div">Photo 6</div>
            </div>
          </div>
        </div>

        <div className='load-more-button'>
          Load More
        </div>
      </div>
    );
  }
}

export default ProfilePage;
