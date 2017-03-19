json.array! @photos do |photo|
  json.photoId photo.id
  json.user_id photo.user_id
  json.username photo.user.username
  json.profile_photo_url photo.user.photo_url
  json.photo_url photo.photo_url
  json.description photo.description
  json.upload_date photo.created_at
  json.likes photo.users_liked
end
