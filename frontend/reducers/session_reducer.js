import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (oldState = _nullUser, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, oldState, action.currentUser);
    case RECEIVE_ERRORS:
      return merge({}, oldState, action.errors);
    default:
      return oldState;
  }
};

export default SessionReducer;
