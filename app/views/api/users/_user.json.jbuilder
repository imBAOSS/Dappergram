json.extract! user, :id, :username, :name, :description, :photos
json.photo_url user.photo_url
json.likes user.photos_liked.map{ |photo| photo.id }
json.followers user.followers
json.followees user.followees
