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

  has_many :users_liked,
    through: :likes,
    source: :user
    
  def days_since_uploaded
    now = DateTime.now
    seconds = (self.created_at - now).to_i

    if seconds < 60
      return "#{seconds}s"
    elsif seconds >= 60 && seconds < 3600
      return "#{seconds % 60}m"
    elsif seconds >= 3600 && seconds < 43200
      return "#{seconds % 3600}h"
    elsif seconds >= 43200
      return "#{seconds % 43200}d"
    else
      return "#{seconds % 43200}w"
    end
  end
end
