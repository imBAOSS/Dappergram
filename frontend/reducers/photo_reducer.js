import { RECEIVE_PHOTOS } from '../actions/photo_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import merge from 'lodash/merge';

const PhotoFeedReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);

  let photoKey;
  switch (action.type) {
    case RECEIVE_PHOTOS:
      let photos = {};
      if (action.photos.length > 0) {
        action.photos.map((photo, idx) => {
          photos[idx] = photo
        });
      }
      return merge({}, oldState, photos);
    case RECEIVE_LIKE:
      Object.keys(newState).forEach( idx =>
        {
          if (newState[idx].photoId === action.like.photo.id) {
            photoKey = idx;
          }
        }
      )

      newState[photoKey].likes.push(action.like);

      return newState;
    //newState
      // add photo id to user.likes array
      // add user object with id and username to photo.likes object
      // return newState

    case REMOVE_LIKE:
      Object.keys(newState).forEach( idx =>
        {
          if (newState[idx].photoId === action.like.photo_id) {
            photoKey = idx;
          }
        }
      )

      let likeKey;
      newState[photoKey].likes.forEach( (el, idx) =>
        {
          if (newState[photoKey].likes[idx].id === action.like.id) {
            likeKey = idx;
          }
        }
      )

      newState[photoKey].likes.splice(likeKey, 1);

      return newState;
    //newState
      // remove photo id from user.likes array
      // remove user object from photo.likes object
      //return newState

    default:
      return oldState;
  }
}

export default PhotoFeedReducer;
