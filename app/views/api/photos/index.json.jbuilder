json.array! @photos do |photo|
  json.photoId photo.id
  json.user_id photo.user_id
  json.username photo.user.username
  json.profile_photo_url photo.user.photo_url
  json.photo_url photo.photo_url
  json.description photo.description
  json.upload_date photo.created_at
  json.likes photo.likes
  json.comments photo.comments do |comment|
    json.id comment.id
    json.user comment.user, :id, :name, :username
    json.photo comment.photo
    json.body comment.body
  end
end
