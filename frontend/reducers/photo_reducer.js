import { RECEIVE_PHOTOS } from '../actions/photo_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import merge from 'lodash/merge';
import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';

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
      let likeKey;
      Object.keys(newState).forEach( idx =>
        {
          newState[idx].likes.forEach( (el, i) => {
              if (el.id === action.like) {
                newState[idx].likes.splice(i, 1);
              }
            }
          )

        }
      )

      return newState;
    //newState
      // remove photo id from user.likes array
      // remove user object from photo.likes object
      //return newState

    case RECEIVE_COMMENT:
      debugger;
      Object.keys(newState).forEach( id => {
        if (newState[id].photoId === action.comment.photo.id) {
          newState[id].comments.push(action.comment)
        }
      })
      return newState;
    case REMOVE_COMMENT:
      Object.keys(newState).forEach((comment, idx) => {
        if (comment.id === action.comment.id) {
          delete newState[idx];
        }
      })
      return newState;
    default:
      return oldState;
  }
}

export default PhotoFeedReducer;
