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

export const fetchMorePhotos = created_at => {
  console.log('ajax request');
  console.log(`created_at: ${created_at}`);
  console.log('-----');
  return $.ajax({
    method: 'GET',
    url: 'api/infinite_photos',
    data: {created_at}
  })
};
