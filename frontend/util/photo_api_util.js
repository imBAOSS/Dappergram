export const fetchPhotos = id => (
  $.ajax({
    method: 'GET',
    url: `api/photos`,
    data: {id}
  })
);

export const fetchPhoto = id => (
  $.ajax({
    method: 'GET',
    url: `api/photos/${id}`
  })
);

export const fetchMorePhotos = created_at => (
  $.ajax({
    method: 'GET',
    url: 'api/infinite_photos',
    data: {created_at}
  })
);
