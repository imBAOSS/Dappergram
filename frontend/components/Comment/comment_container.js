import { connect } from 'react-redux';
import Comment from './comment';
import { deleteComment } from '../../actions/comment_actions';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteComment: comment => dispatch(deleteComment(comment))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Comment);
