import React from 'react';
import { Link } from 'react-router';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this._deleteComment =this._deleteComment.bind(this);
  }

  _deleteComment() {
    this.props.deleteComment(this.props.comment)
  }

  render() {
    let deleteCommentButton;

    if (this.props.comment.user.id === this.props.currentUser.id) {
      deleteCommentButton = <button
        className='delete-comment'
        onClick={this._deleteComment}/>
    }

    return (
      <li key={this.props.comment.id} className='comment-li'>
        <Link
          to={`/profile/${this.props.comment.user.id}`}
          className='comment-username'>
          {this.props.comment.user.username}
        </Link>
        <div className='comment-body'>{this.props.comment.body}</div>
        {deleteCommentButton}
      </li>
      )
    }
}

export default Comment;
