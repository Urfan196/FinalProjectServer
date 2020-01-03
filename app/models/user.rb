class User < ApplicationRecord
    has_secure_password

    has_one :location, dependent: :destroy
    has_many :items, dependent: :destroy

    has_many :sender_convo, foreign_key: :receiver_id, class_name: "Convo"
    has_many :senders, through: :sender_convo, source: :sender
    has_many :receiver_convo, foreign_key: :sender_id, class_name: "Convo"
    has_many :receivers, through: :receiver_convo, source: :receiver
    
    has_many :messages, through: :convos

end
