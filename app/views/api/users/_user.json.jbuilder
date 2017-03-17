json.extract! user, :id, :username, :name, :description, :photos
json.photo_url user.profile_photo.url
