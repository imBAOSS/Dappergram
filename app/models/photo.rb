# == Schema Information
#
# Table name: photos
#
#  id                 :integer          not null, primary key
#  user_id            :integer          not null
#  photo_url          :string           not null
#  description        :text
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  photo_file_name    :string
#  photo_content_type :string
#  photo_file_size    :integer
#  photo_updated_at   :datetime
#

class Photo < ApplicationRecord
  validates :user, :photo_url, presence: true

  belongs_to :user

  has_attached_file :image, default_url: "husky.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
end
