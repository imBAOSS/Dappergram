# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

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

# Seed Followers

Comment.create!(user_id: 1, photo_id: 99, body: "Test Comment")
