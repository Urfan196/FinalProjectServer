class ConvoSerializer < ActiveModel::Serializer
  attributes :id, :sender_id, :receiver_id
  has_many :messages
end
