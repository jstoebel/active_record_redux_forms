# == Schema Information
#
# Table name: users
#
#  id         :integer          not null, primary key
#  first_name :string
#  last_name  :string
#  email      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class User < ApplicationRecord

  validates_presence_of :first_name, :last_name

  validates :first_name,
            presence: true

  validates :last_name,
            presence: { message: 'you need to give us a last name!' }

  validates :email,
            presence: {message: 'please provide an email'}

end
