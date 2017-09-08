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

  validates :first_name,
            presence: true#{ message: 'you need to give us a name!' }

  validates :last_name,
            presence: { message: 'you need to give us a last name!' }

  validates :email,
            presence: {message: 'please provide an email'}

end
