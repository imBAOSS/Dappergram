import { connect } from 'react-redux';
import PhotoFeed from './photo_feed';
import { logout } from "../../actions/session_actions";
import { fetchPhotos, fetchMorePhotos } from '../../actions/photo_actions';


const mapStateToProps = (state, ownProps) => {
  console.log(`mapStateToProps`);
  console.log(`state.photos: ${state.photoFeed}`);
  console.log('-----');
  return {
    session: state.session,
    photos: state.photoFeed
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => dispatch(logout()),
    fetchPhotos: () => dispatch(fetchPhotos()),
    fetchMorePhotos: created_at => dispatch(fetchMorePhotos(created_at))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoFeed);
