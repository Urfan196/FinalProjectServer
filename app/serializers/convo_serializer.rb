class ConvoSerializer < ActiveModel::Serializer
  attributes :id, :sender_id, :receiver_id, :title
  has_many :messages
end
  