export const createLike = id => (
  $.ajax({
    method: "POST",
    url: `api/photos/${id}/likes`,
    data: {like: {photo_id: id}}
  })
);

export const deleteLike = photo_id => (
  $.ajax({
    method: "DELETE",
    url: `api/likes/${photo_id}`
  })
);
