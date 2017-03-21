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
