class Message < ApplicationRecord
    belongs_to :convo
    # belongs_to :sender, foreign_key: :sender_id, class_name: "User"

    validates_presence_of :content
end
