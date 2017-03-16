import { connect } from 'react-redux';
import PhotoFeed from './photo_feed';
import { logout } from "../../actions/session_actions";
import { fetchPhotos, fetchPhoto } from '../../actions/photo_actions';


const mapStateToProps = (state, ownProps) => {

  return {
    session: state.session,
    photos: state.photos,
    photo: state.photo
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => dispatch(logout()),
    fetchPhotos: () => dispatch(fetchPhotos()),
    fetchPhoto: photo => dispatch(fetchPhoto(photo))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoFeed);
