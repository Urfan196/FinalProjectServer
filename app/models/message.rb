class Message < ApplicationRecord
    belongs_to :convo

    validates_presence_of :content
end
