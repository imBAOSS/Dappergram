# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Seed Users

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

Like.create!(user_id: 1, photo_id: 99)
Like.create!(user_id: 2, photo_id: 99)
Like.create!(user_id: 3, photo_id: 99)
Like.create!(user_id: 4, photo_id: 99)
Like.create!(user_id: 5, photo_id: 99)
Like.create!(user_id: 6, photo_id: 99)
Like.create!(user_id: 7, photo_id: 99)

Like.create!(user_id: 1, photo_id: 98)
Like.create!(user_id: 2, photo_id: 98)
Like.create!(user_id: 3, photo_id: 98)
Like.create!(user_id: 4, photo_id: 98)
Like.create!(user_id: 5, photo_id: 98)
Like.create!(user_id: 6, photo_id: 98)
Like.create!(user_id: 7, photo_id: 98)

# Seed Comments

sentence_prefex = [
  'Looking ',
  "Lookin' ",
  "That's ",
  "Yoo, that's "
]

adverbs = [
  "hella ",
  "hellaaaaa ",
  "really ",
  "reallyyy "
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

user_ids = User.all.map{ |user| user.id }

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
  rand(1..9).times do
    users = user_ids.reject{ |user_id| }
  end
end
