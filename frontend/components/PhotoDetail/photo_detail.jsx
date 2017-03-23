import React from 'react';
import { Link, withRouter } from 'react-router';
import Comments from '../Comment/comments_index';
import Photo from './photo';
import classNames from 'classnames';

class PhotoDetail extends React.Component {
  constructor(props) {
    super(props);
    this.profilePage = this.profilePage.bind(this);
    this.toggleLike = this.toggleLike.bind(this);
    this.setLikeIcon = this.setLikeIcon.bind(this);
    this.updateComment = this.updateComment.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.LikeIcon;
    this.state = {
      user_id: this.props.currentUser.id,
      photo_id: this.props.photo.photoId,
      body: ""
    };
  }

  profilePage() {
    this.props.router.push(`/profile/${this.props.photo.user_id}`);
  }

  toggleLike() {
    if (this.props.currentUser.likes.includes(this.props.photo.photoId)) {
      this.props.deleteLike(this.props.photo.photoId);
    } else {
      this.props.createLike(this.props.photo.photoId);
    }
  }

  setLikeIcon() {
    if (this.props.currentUser.likes.includes(this.props.photo.photoId)) {
      this.likeIcon = 'like-icon-filled';
    } else {
      this.likeIcon = 'like-icon-empty';
    }
  }

  componentWillMount() {
    this.setLikeIcon();
  }

  updateComment() {
    return e => this.setState({body: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment(this.state)
    .then(() => this.setState({body: ""}));
  }

  render() {
    this.setLikeIcon();

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
            <time>{this.props.photo.time_ago}</time>
          </div>
        </div>

        <Photo url={this.props.photo.photo_url}/>

        <div className='photo-info'>
          <div className="num-likes">
            {this.props.photo.likesCount} likes
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

              <Comments
                comments={this.props.photo.comments}
                currentUser={this.props.currentUser}/>

          </div>

          <div className='interact'>
            <div className='like-icon-cont'>
              <div
                className={this.likeIcon}
                onClick={this.toggleLike}
                maxLength='255'>
              </div>
            </div>
            <div className='add-comment-cont'>
              <form
                className='comment-form'
                onSubmit={this.handleSubmit}>
                <input
                  type='text'
                  className='add-comment'
                  placeholder='Add a comment...'
                  value={this.state.body}
                  onChange={this.updateComment()}/>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(PhotoDetail);
