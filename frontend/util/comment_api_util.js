export const createComment = comment => (
  $.ajax({
    method: 'POST',
    url: `api/photos/${comment.photo_id}/comments`,
    data: {comment}
  })
);

export const deleteComment = comment => (
  $.ajax({
    method: 'DELETE',
    url: `api/comments/${comment.id}`,
    data: {id: comment.id}
  })
);
