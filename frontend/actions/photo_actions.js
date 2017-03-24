import * as PhotoAPIUtil from '../util/photo_api_util';

export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
export const RECEIVE_MORE_PHOTOS = 'RECEIVE_MORE_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';

export const receivePhotos = photos => ({
  type: RECEIVE_PHOTOS,
  photos
});

export const receivePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo
});

export const receiveMorePhotos = photos => {
  return {
  type:RECEIVE_MORE_PHOTOS,
  photos
}};

export const fetchPhotos = () => dispatch => (
  PhotoAPIUtil.fetchPhotos().then(photos => dispatch(receivePhotos(photos)))
);

export const fetchPhoto = photo_id => dispatch => (
  PhotoAPIUtil.fetchPhoto(photo_id).then(photo => dispatch(receivePhoto(photo)))
);

export const fetchMorePhotos = id => dispatch => {
  console.log(id);
return (
  PhotoAPIUtil.fetchMorePhotos(id).then(photos => {
    return dispatch(receiveMorePhotos(photos));
  })
)};
