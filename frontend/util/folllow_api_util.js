export const createFollow = userId => ({
  method: 'POST',
  url: `api/users/${userId}/follows`,
  data: {follow: {followed_id: userId}}
});

export const deleteFollow = userId => ({
  method: 'DELETE',
  url: `api/follows/`,
  data: {follow: {followed_id: userId}}
});
