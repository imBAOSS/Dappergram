import React from 'react';
import { Link } from 'react-router';

class PhotoDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='photo-detail'>
        <div className="user-info-header">
          <div className="user-profile-photo">
            <img src={`${this.props.photo.profile_photo_url}`}/>
          </div>
          <div className="user-info">
            <Link
              className="username"
              onClick={"/feed"}>
              {this.props.photo.username}</Link>
          </div>
          <div className="upload-time">
            <time>7h</time>
          </div>
        </div>

        <div className="photo">
          <img src={`${this.props.photo.photo_url}`}/>
        </div>

        <div className="num-likes">
          9001 likes!
        </div>

        <div className='photo-caption'>
          Photo caption goes here
        </div>

        <div className='comments'>
          Comments go here
        </div>

        <div className='interact'>
          <div className='like'>
            Like
          </div>
          <div className='add-comment'>
            Add Comment
          </div>
        </div>
      </div>
    );
  }
}

export default PhotoDetail;
