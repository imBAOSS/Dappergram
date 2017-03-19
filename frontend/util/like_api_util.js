export const createLike = id => (
  $.ajax({
    method: "POST",
    url: `api/photos/${id}/likes`,
    data: {like: {photo_id: id}}
  })
);

export const deleteLike = id => (
  $.ajax({
    method: "DELETE",
    url: `api/likes/${id}`
  })
);
