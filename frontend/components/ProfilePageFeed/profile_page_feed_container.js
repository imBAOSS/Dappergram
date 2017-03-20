import { connect } from 'react-redux';
import { fetchPhotos } from '../../actions/photo_actions';
import ProfilePageFeed from './profile_page_feed';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    photos: state.user.photos
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchUser: id => dispatch(fetchUser(id)),
    fetchPhotos: () => dispatch(fetchPhotos()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePageFeed);
