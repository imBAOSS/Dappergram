json.extract! photo, :id, :description
json.username photo.user.username
json.profile_photo_url photo.user.photo_url
json.photo_url photo.photo.url
json.upload_date photo.created_at