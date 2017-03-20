import { connect } from 'react-redux';
import PhotoDetail from './photo_detail';
import { fetchPhotos, fetchPhoto } from '../../actions/photo_actions';
import { createLike, deleteLike } from '../../actions/like_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    photo: state.photoFeed[ownProps.photoId]
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchPhoto: photo => dispatch(fetchPhoto(photo)),
    createLike: id => dispatch(createLike(id)),
    deleteLike: id => dispatch(deleteLike(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoDetail);
