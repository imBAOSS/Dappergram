import React from 'react';
import { Link } from 'react-router';

const Comments = props => {
  let comments =
      props.comments.map( (comment, idx) => (
        <li key={idx} className='comment-li'>
          <Link
            to={`/profile/${comment.user.id}`}
            className='comment-username'>
            {comment.user.username}
          </Link>
          <div className='comment-body'>{comment.body}</div>
        </li>
        )
      );

  return (<ul>{comments}</ul>);
};

export default Comments;
