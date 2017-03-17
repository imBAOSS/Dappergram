import React from 'react';

class PhotoDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='photo-detail'>
        <div className="user-info-header">
          <div className="user-profile-photo">
            User Profile Photo
          </div>
          <div className="user-info">
            User Info
          </div>
          <div className="upload-time">
            Time
          </div>
        </div>

        <div className="photo">

        </div>

        <div className="num-likes">
          Over 9000 likes!
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
