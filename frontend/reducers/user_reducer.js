import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions';
import merge from 'lodash/merge';

const UserReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState)
  switch (action.type) {
    case RECEIVE_USER:
      return merge(newState, action.user);
    case RECEIVE_FOLLOW:
      newState.followers.push(currentUser.id);
      return newState;
    case REMOVE_FOLLOW:
      let idx = newState.followers.indexOf(currentUser.id);
      newState.followers.splice(idx, 1);
      return newState;
    default:
      return oldState;
  }
};

export default UserReducer;
