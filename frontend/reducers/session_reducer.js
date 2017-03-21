import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions';


const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (oldState = _nullUser, action) => {
  Object.freeze(oldState);

  let newState = merge({}, oldState)

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, oldState, {currentUser: action.currentUser});
    case RECEIVE_ERRORS:
      return merge({}, oldState, {errors: action.errors});
    case CLEAR_ERRORS:
      return Object.assign({}, oldState, {errors: []});
    case RECEIVE_LIKE:
      newState.currentUser.likes.push(action.like.photo_id)
      return newState
    case REMOVE_LIKE:
      let index = newState.currentUser.likes.indexOf(action.like.photo_id);
      newState.currentUser.likes.splice(index, 1);
      return newState;
    case RECEIVE_FOLLOW:
      if (newState.currentUser.id !== action.follow.followee_id) {
      newState.currentUser.followees.push(action.follow.followee_id)
      }
      return newState;
    case REMOVE_FOLLOW:
      let idx = newState.currentUser.followees.indexOf(action.userId);
      newState.currentUser.followees.splice(idx, 1)
      return newState;
    default:
      return oldState;
  }
};

export default SessionReducer;
