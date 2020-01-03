class MessagesChannel < ApplicationCable::Channel
  def subscribed
    convo = Convo.find(params[:convo])
    stream_for convo
  end

  def unsubscribed
  end
end
