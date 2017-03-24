# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Seed Users

User.destroy_all
Photo.destroy_all
Follow.destroy_all
Like.destroy_all
Comment.destroy_all

profile_list = File.readlines(File.join(Rails.root, 'db', 'profile_photo_names.txt')).first.split("\r")
profile_prefix = 'https://s3.amazonaws.com/dappergram-dev/users/profile_photos/'
profile_photos = profile_list.map { |file_name| profile_prefix + file_name}

User.create!(
  name: "Guest User",
  username: "guest",
  password: "guest_password",
  description: "I'm a guest!",
  photo_url: 'https://s3.amazonaws.com/dappergram-dev/users/profile_photos/guest_profile_pic.png'
)

(1..14).each do |i|
  name = Faker::Name.unique.name
  username = name.split(" ").join("-")

  User.create!(
    name: name,
    username: username,
    password: Faker::Internet.password(6, 12),
    description: Faker::HarryPotter.quote,
    photo_url: profile_photos[i]
  )
end

# Seed Photos

photo_list = File.readlines(File.join(Rails.root, 'db', 'photo_file_names.txt')).first.split("\r")
photo_prefix = 'https://s3.amazonaws.com/dappergram-dev/users/photos/'
photos = photo_list.map { |file_name| photo_prefix + file_name}

photos.each do |photo|
  Photo.create!(
    user_id: rand(1..14),
    photo_url: photo,
    description: Faker::ChuckNorris.fact
  )
end

# Seed Likes

user_ids = User.all.map{ |user| user.id }

photo_ids = Photo.all.map{ |photo| photo.id }

photo_ids.each do |photo_id|
  user_ids.sample(rand(1..14)).each do |user_id|
    Like.create!(user_id: user_id, photo_id: photo_id)
  end
end

# Seed Comments

sentence_prefex = [
  'Looking ',
  "Lookin' ",
  "That's ",
  "Yoo, that's ",
  "I think that's ",
  "Ay, that's "
]

adverbs = [
  "hella ",
  "hellaaaaa ",
  "really ",
  "reallyyy ",
  "absolutely ",
  "sooooo ",
  "so ",
  "freakin' ",
  "seriously "
]

adj = [
  "dapper",
  "daaaaaapper",
  "classy",
  "smooth",
  "awesome!",
  "fresh!",
  "fly!",
  "suave"
]


Photo.all.each do |photo|
  rand(1..7).times do
    users = user_ids.reject{ |user_id| user_id == photo.user_id }
    Comment.create!(
      user_id: users.sample,
      photo_id: photo.id,
      body: sentence_prefex.sample + adverbs.sample + adj.sample
    )
  end
end

# Seed Followers

user_ids.each do |user_id|
  random_users = user_ids.sample(9).uniq
  random_users.each do |user|
    if user_id != user
      Follow.create!(follower_id: user_id, followee_id: user)
    end
  end
end
