import { RECEIVE_PHOTOS } from '../actions/photo_actions';
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
    default:
      return oldState;
  }
}

export default PhotoFeedReducer;
