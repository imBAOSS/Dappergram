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

  has_many :likes
  has_many :comments

  has_many :users_liked,
    through: :likes,
    source: :user

    def time_ago
      minutes = ((Time.new - self.created_at) /1.minute).round
      hours = ((Time.now - self.created_at) / 1.hour ).round
      if hours >= 168
        time = "#{(hours / 168).round}w"
      elsif hours >= 24
        time = "#{(hours / 24).round}d"
      elsif hours >= 1
        time = "#{hours}h"
      else
        time ="#{minutes}m"
      end
      time
    end
end
