import { connect } from 'react-redux';
import PhotoDetail from './photo_detail';
import { fetchPhotos, fetchPhoto } from '../../actions/photo_actions';
import { createLike, deleteLike } from '../../actions/like_actions';
import { createComment, deleteComment } from '../../actions/comment_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    photo: state.photoFeed[ownProps.photoId],
    likesCount: state.photoFeed[ownProps.photoId].likes.length
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchPhoto: photo_id => dispatch(fetchPhoto(photo_id)),
    createLike: id => dispatch(createLike(id)),
    deleteLike: id => dispatch(deleteLike(id)),
    createComment: id => dispatch(createComment(id)),
    deleteComment: comment => dispatch(deleteComment(comment))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoDetail);
