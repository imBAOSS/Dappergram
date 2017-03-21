json.array! @photos do |photo|
  json.photoId photo.id
  json.user_id photo.user_id
  json.username photo.user.username
  json.profile_photo_url photo.user.photo_url
  json.photo_url photo.photo_url
  json.description photo.description
  json.time_ago photo.time_ago
  json.likesCount photo.likes.count
  json.likes photo.likes do |like|
    json.id like.id
    json.user_id like.user_id
    json.photo_id like.photo_id
  end
  json.comments photo.comments do |comment|
    json.id comment.id
    json.user comment.user, :id, :name, :username
    json.photo comment.photo
    json.body comment.body
  end
end
