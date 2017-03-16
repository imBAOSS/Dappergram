json.array! @photos do |photo|
  json.photoId photo.id
  json.username photo.user.username
  json.profile_photo_url photo.user.photo_url
  json.photo_url photo.photo.url
  json.description photo.description
  json.upload_date photo.created_at
end
