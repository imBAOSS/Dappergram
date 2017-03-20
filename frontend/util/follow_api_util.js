export const createFollow = userId => (
  $.ajax({
    method: 'POST',
    url: `api/users/${userId}/follows`,
    data: {follow: {followee_id: userId}}
  })
);

export const deleteFollow = userId => (
  $.ajax({
    method: 'DELETE',
    url: `api/follows/${userId}`,
    data: {follow: {followee_id: userId}}
  })
);
