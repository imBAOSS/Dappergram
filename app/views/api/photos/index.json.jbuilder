json.array! @photos do |photo|
  json.photoId photo.id
  json.username photo.user.username
  json.description photo.description
  json.upload_date photo.created_at
end
