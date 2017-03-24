import { RECEIVE_PHOTOS, RECEIVE_MORE_PHOTOS } from '../actions/photo_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import merge from 'lodash/merge';
import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';

const PhotoFeedReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState)
  let photoKey;
  switch (action.type) {
    case RECEIVE_PHOTOS:
      let photos = {};
      if (action.photos.length > 0) {
        action.photos.map((photo, idx) => {
          photos[idx] = photo
        });
      }
      return Object.assign(newState, photos);
    case RECEIVE_MORE_PHOTOS:
    console.log(`photo reducer`);
    console.log(`newState: ${newState}`);
    console.log(`action: ${action}`);
    console.log('-----');
      let combinedPhotos = Object.keys(newState).map(id => newState[id]);

      let photoArr = combinedPhotos.concat(action.photos);
      let newPhotos = {};
      photoArr.forEach((el, i) => newPhotos[i] = el);
      return newPhotos;
    case RECEIVE_LIKE:
      Object.keys(newState).forEach(key => {
        if (newState[key].photoId === action.like.photo_id){
          photoKey = key;
        }
      })
      newState[photoKey].likes.push(action.like)
      newState[photoKey].likesCount += 1;
      return newState;
    case REMOVE_LIKE:
      let likeKey
      Object.keys(newState).forEach( key => {
        newState[key].likes.forEach( (like, idx) => {
          if (like.id === action.like.id) {
            photoKey = key;
            likeKey = idx;
          }
        })
      })

      delete newState[photoKey].likes[likeKey];
      newState[photoKey].likesCount -= 1
      return newState;

    case RECEIVE_COMMENT:
      Object.keys(newState).forEach( id => {
        if (newState[id].photoId === action.comment.photo.id) {
          newState[id].comments.push(action.comment)
        }
      })
      return newState;
    case REMOVE_COMMENT:
      Object.keys(newState).forEach( i => {
        newState[i].comments.forEach( (comment, idx) => {
          if (comment.id === action.comment.id) {
            newState[i].comments.splice(idx, 1);
          }
        })
      })

      return newState;
    default:
      return oldState;
  }
}

export default PhotoFeedReducer;
