import * as FollowerAPIUtil from '../util/follow_api_util';

export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';

export const receiveFollow = follow => ({
  type: RECEIVE_FOLLOW,
  follow
});

export const removeFollow = follow => ({
  type: REMOVE_FOLLOW,
  follow
});

export const createFollow = userId => dispatch => {
  return FollowerAPIUtil.createFollow(userId)
  .then(follow => dispatch(receiveFollow(follow)));
};

export const deleteFollow = userId => dispatch => {
  return FollowerAPIUtil.deleteFollow(userId)
  .then(follow => dispatch(removeFollow(follow)));
};
