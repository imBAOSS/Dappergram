import { connect } from 'react-redux';
import PhotoFeed from './photo_feed';
import { logout } from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => {

  return {
    session: state.session
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoFeed);
