import React from 'react';
import { Link } from 'react-router';
import * as CommentAPIUtil from '../../util/comment_api_util';

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this._deleteComment = this._deleteComment.bind(this);
  }

  _deleteComment(comment) {
    CommentAPIUtil.deleteComment(comment);
  };

  render(){

    let comments =
        this.props.comments.map( (comment, idx) => {
          let deleteCommentButton;
          if (comment.user.id === this.props.currentUser.id) {
            deleteCommentButton = <button
              className='delete-comment'
              onClick={this._deleteComment(comment)}/>
          }

          return (
            <li key={idx} className='comment-li'>
              <Link
                to={`/profile/${comment.user.id}`}
                className='comment-username'>
                {comment.user.username}
              </Link>
              <div className='comment-body'>{comment.body}</div>
              {deleteCommentButton}
            </li>
          )
        });

    return (
      <ul>
        {comments}
      </ul>
    )
  }
}

export default Comments;
