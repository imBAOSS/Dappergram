import { connect } from 'react-redux';
import { logout } from "../../actions/session_actions";
import NavBar from './nav_bar';

const mapStateToProps = (state, ownProps) => {
  return {
    session
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
