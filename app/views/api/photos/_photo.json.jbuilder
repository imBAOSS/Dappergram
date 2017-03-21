json.extract! photo, :id, :description, :user_id
json.username photo.user.username
json.profile_photo_url photo.user.photo_url
json.photo_url photo.photo.url
json.time_ago photo.time_ago
json.likesCount photo.likes.count
json.likes photo.likes
json.comments photo.comments do |comment|
  json.id comment.id
  json.user comment.user
  json.photo comment.photo
end
