class MessagesController < ApplicationController

  skip_before_action :authorized

    def create
        message = Message.new(message_params)
        convo = Convo.find(message_params[:convo_id])
        if message.save
          serialized_data = ActiveModelSerializers::Adapter::Json.new(
            MessageSerializer.new(message)
          ).serializable_hash
          MessagesChannel.broadcast_to convo, serialized_data
          head :ok
        end
    end


    def message_params
        params.require(:message).permit(:content, :convo_id)
    end

end
