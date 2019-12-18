class ItemSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :available, :user_id
  belongs_to :user
end