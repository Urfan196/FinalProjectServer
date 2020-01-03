class MessageSerializer < ActiveModel::Serializer
  attributes :id, :content, :convo_id, :created_at
  belongs_to :convo
end
