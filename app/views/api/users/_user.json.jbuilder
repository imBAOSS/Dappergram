json.extract! user, :id, :username, :name, :description, :photos
json.photo_url user.photo_url
json.likes user.photos_liked.map { |photo| photo.id }
json.followers user.followers.map { |follower| follower.id }
json.followees user.followees.map { |followee| followee.id }
