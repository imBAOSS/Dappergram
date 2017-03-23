import React from 'react';
import { Link } from 'react-router';
import CommentContainer from './comment_container';

class CommentsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){

    let comments =
    this.props.comments.map( (comment, idx)  => (
      <CommentContainer
        key={idx}
        comment={comment}
        currentUser={this.props.currentUser}/>
    ))

    return (
      <ul>
        { comments }
      </ul>
    )
  }
}

export default CommentsIndex;
