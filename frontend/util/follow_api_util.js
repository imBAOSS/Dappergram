export const createFollow = userId => ({
  method: 'POST',
  url: `api/users/${userId}/follows`,
  data: {follow: {followee_id: userId}}
});

export const deleteFollow = userId => ({
  method: 'DELETE',
  url: `api/follows/`,
  data: {follow: {followee_id: userId}}
});
