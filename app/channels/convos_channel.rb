class ConvosChannel < ApplicationCable::Channel
  def subscribed
    stream_from "convos_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
