import { RECEIVE_PHOTOS, RECEIVE_PHOTO } from '../actions/photo_actions';
import merge from 'lodash/merge';

const _emptyPhoto = Object.freeze({
  photo: {},
  photoFeed: {}
});

const PhotoReducer = (oldState = _emptyPhoto, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_PHOTOS:
      let photos = {};
      if (action.photos.length > 0) {
        action.photos.map((photo, idx) => {
          photos[idx] = photo
        });
      }
      return merge({}, oldState, {photoFeed: photos});
    case RECEIVE_PHOTO:
      return merge({}, oldState, {photo: action.photo});
    default:
      return oldState;
  }
}

export default PhotoReducer;
