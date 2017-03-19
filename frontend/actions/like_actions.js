import * as LikeAPIUtil from '../util/like_api_util';

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

export const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
});

export const removeLike = photo_id => ({
  type: REMOVE_LIKE,
  like: {photo_id}
});

export const createLike = photo_id => dispatch => {
  return LikeAPIUtil.createLike(photo_id)
  .then(like => dispatch(receiveLike(like)));
};

export const deleteLike = photo_id => dispatch => {
  return LikeAPIUtil.deleteLike(photo_id)
  .then(like => dispatch(removeLike(photo_id)));
};
