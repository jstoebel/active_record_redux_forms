# == Schema Information
#
# Table name: users
#
#  id         :integer          not null, primary key
#  first_name :string
#  last_name  :string
#  email      :string
#  admin      :boolean
#  bio        :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class User < ApplicationRecord

  validates :first_name,
            presence: true

  validates :last_name,
            presence: { message: 'you need to give us a last name!' }

  validates :email,
            presence: {message: 'please provide an email'}

  validates :bio,
            presence: true

end
