import { connect } from 'react-redux';
import PhotoFeed from './photo_feed';
import { logout } from "../../actions/session_actions";
import { fetchPhotos } from '../../actions/photo_actions';
import { createLike, deleteLike } from '../../actions/like_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    session: state.session,
    photos: state.photoFeed
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => dispatch(logout()),
    fetchPhotos: () => dispatch(fetchPhotos()),
    createLike: id => dispatch(createLike(id)),
    deleteLike: id => dispatch(deleteLike(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoFeed);
