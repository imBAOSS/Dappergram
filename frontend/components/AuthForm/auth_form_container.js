import { connect } from 'react-redux';
import AuthForm from './auth_form';
import { logout, login, signup } from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => {
  let formType = ownProps.location.pathname.slice(1);

  return {
    loggedIn: !!state.session.currentUser,
    currentUser: state.session.currentUser,
    errors: state.session.errors,
    formType
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => dispatch(logout()),
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthForm);
