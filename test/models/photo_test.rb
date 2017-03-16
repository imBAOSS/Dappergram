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

require 'test_helper'

class PhotoTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
