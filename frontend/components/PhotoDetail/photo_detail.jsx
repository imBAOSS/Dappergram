import React from 'react';
import { Link, withRouter } from 'react-router';
import Comments from '../Comment/comment';

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

  // componentWillReceiveProps(newProps) {
  //   this.setLikeIcon();
  //   this.numLikes = newProps.photo.likes.length;
  // }

  updateComment() {
    return e => this.setState({body: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.props);
    this.props.createComment(this.state)
    .then(() => this.setState({body: ""}));
  }

  render() {
    this.setLikeIcon();
    let comments = this.props.photo.comments.map( (comment, idx) => (
      <li key={comment.id} className='comment-li'>
        <Link
          to={`/profile/${comment.user.id}`}
          className='comment-username'>
          {comment.user.username}
        </Link>
        <div className='comment-body'>{comment.body}</div>
      </li>
      )
    );

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

        <div className="photo">
          <img src={`${this.props.photo.photo_url}`}/>
        </div>
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

              <ul>
                { comments }
              </ul>

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
