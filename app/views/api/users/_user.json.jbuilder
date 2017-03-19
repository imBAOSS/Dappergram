json.extract! user, :id, :username, :name, :description, :photos
json.photo_url user.photo_url
json.likes user.photos_liked
