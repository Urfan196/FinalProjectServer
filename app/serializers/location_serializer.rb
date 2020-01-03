class LocationSerializer < ActiveModel::Serializer
  attributes :id, :address, :latitude, :longitude, :user_id
  belongs_to :user
end
