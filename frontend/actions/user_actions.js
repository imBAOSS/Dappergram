import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const CLEAR_USER = "CLEAR_USER";

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const fetchUser = id => dispatch => (
  UserAPIUtil.fetchUser(id)
  .then(user => dispatch(receiveUser(user)))
);

export const clearUser = () => ({
  type: CLEAR_USER
});
