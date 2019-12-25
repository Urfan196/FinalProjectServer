class MessagesChannel < ApplicationCable::Channel
  def subscribed
    convos = Convos.find(params[:convos])
    stream_for convos
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
