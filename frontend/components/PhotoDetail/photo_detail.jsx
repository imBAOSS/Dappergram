import React from 'react';
import { Link, withRouter } from 'react-router';

class PhotoDetail extends React.Component {
  constructor(props) {
    super(props);
    this.profilePage = this.profilePage.bind(this);
  }

  profilePage() {
    this.props.router.push(`/profile/${this.props.photo.user_id}`);
  }

  render() {
    let likeIcon = 'like-icon-empty'
    if (this.props.currentUser) {
      if (this.props.currentUser.likes.includes(this.props.photo.photoId)) {
        likeIcon = 'like-icon-filled'
      }
    }

    return (
      <div className='photo-detail'>
        <div className="user-info-header">
          <div className="user-profile-photo">
            <img
              src={`${this.props.photo.profile_photo_url}`}
              onClick={this.profilePage}/>
          </div>
          <div className="user-info">
            <Link
              className="username"
              onClick={this.profilePage}>
              {this.props.photo.username}</Link>
          </div>
          <div className="upload-time">
            <time>7h</time>
          </div>
        </div>

        <div className="photo">
          <img src={`${this.props.photo.photo_url}`}/>
        </div>
        <div className='photo-info'>
          <div className="num-likes">
            {this.props.photo.likes.length} likes
          </div>

          <div className='photo-caption'>
            <p>
              <Link
                className='user-photo-caption'>
                {this.props.photo.username}
              </Link>
              {this.props.photo.description}
            </p>
          </div>

          <div className='comments'>
            <p>
              <Link
                className='commenter-user'>
                Commenter
              </Link>
              Looking daaaaaaaapper
            </p>
          </div>

          <div className='interact'>
            <div className='like-icon-cont'>
              <div className={likeIcon}>
              </div>
            </div>
            <div className='add-comment-cont'>
              <form>
                <input
                  type='text'
                  className='add-comment'
                  placeholder='Add a comment...'/>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(PhotoDetail);
