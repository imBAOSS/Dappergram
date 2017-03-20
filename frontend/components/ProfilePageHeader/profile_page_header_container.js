import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { fetchPhotos } from '../../actions/photo_actions';
import { fetchUser } from '../../actions/user_actions';
import { logout } from '../../actions/session_actions';
import { createFollow, deleteFollow } from '../../actions/follow_actions';
import ProfilePageHeader from './profile_page_header';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    session: state.session
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchUser: id => dispatch(fetchUser(id)),
    fetchPhotos: id => dispatch(fetchPhotos(id)),
    logout: () => dispatch(logout()),
    createFollow: id => dispatch(createFollow(id)),
    deleteFollow: id => dispatch(deleteFollow(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProfilePageHeader));
