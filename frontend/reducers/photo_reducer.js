import { RECEIVE_PHOTOS } from '../actions/photo_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import merge from 'lodash/merge';

const PhotoFeedReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

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
      let newstate = merge({}, oldState);
        newState.photos.likes[action.like.id] = action.like.user;
        newState.user.photos.push(action.like.photo.id);

        return newState;
    //newState
      // add photo id to user.likes array
      // add user object with id and username to photo.likes object
      // return newState

    case REMOVE_LIKE:
      let newState = merge({}, oldState);
        delete newState.photos.likes[action.like.id];
        let index = newState.user.likes.indexOf(action.like.photo.id);
        newState.user.likes.splice(index, 1);

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
