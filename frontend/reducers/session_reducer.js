import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (oldState = _nullUser, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, oldState, {currentUser: action.currentUser});
    case RECEIVE_ERRORS:
      return merge({}, oldState, {errors: action.errors});
    case CLEAR_ERRORS:
      return Object.assign({}, oldState, {errors: []});
    default:
      return oldState;
  }
};

export default SessionReducer;
