import { connect } from 'react-redux';
import PhotoFeed from './photo_feed';
import { logout } from "../../actions/session_actions";
import { fetchPhotos } from '../../actions/photo_actions';


const mapStateToProps = (state, ownProps) => {

  return {
    session: state.session,
    photos: state.photoFeed
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => dispatch(logout()),
    fetchPhotos: () => dispatch(fetchPhotos())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoFeed);
