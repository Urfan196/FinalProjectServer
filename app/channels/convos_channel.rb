class ConvosChannel < ApplicationCable::Channel
  def subscribed
    stream_from "convos_channel"
  end

  def unsubscribed
  end
end
