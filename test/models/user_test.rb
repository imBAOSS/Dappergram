# == Schema Information
#
# Table name: users
#
#  id                         :integer          not null, primary key
#  username                   :string           not null
#  password_digest            :string           not null
#  session_token              :string           not null
#  photo_url                  :string
#  name                       :string
#  description                :string
#  created_at                 :datetime         not null
#  updated_at                 :datetime         not null
#  profile_photo_file_name    :string
#  profile_photo_content_type :string
#  profile_photo_file_size    :integer
#  profile_photo_updated_at   :datetime
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
