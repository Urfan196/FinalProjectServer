class MessagesController < ApplicationController

    # def index
    #     messages = Message.all
    #     render json: messages
    # end

    # def show
    #     message = Message.find(params[:id])
    #     render json: message
    # end

    # def create
    #     message = Message.new(message_params)
    #     if message.save
    #         render json: message
    #     else
    #         render json: {error: "Something went wrong"}
    #     end
    # end

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
