class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :birthday, :email
  has_many :items
  has_one :location
end
 