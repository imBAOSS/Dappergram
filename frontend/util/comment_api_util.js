export const createComment = comment => (
  $.ajax({
    method: 'POST',
    url: `api/photos/${comment.photo_id}/comments`,
    data: {comment}
  })
);

export const deleteComment = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/comments/${id}`
  })
);
