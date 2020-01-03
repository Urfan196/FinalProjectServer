class ConvosController < ApplicationController

  skip_before_action :authorized

    def index
        convos = Convo.all
        render json: convos
    end

    def create
      convo = Convo.new(convo_params)
      if convo.save 
        serialized_data = ActiveModelSerializers::Adapter::Json.new(
          ConvoSerializer.new(convo)
        ).serializable_hash
        ActionCable.server.broadcast 'convos_channel', serialized_data
        head :ok
      end
    end

    # def destroy
    #     convo = Convo.find(params[:id])
    #     if convo.destroy
    #         render json: {message: "Successfully deleted conversation"}
    #     else
    #         render json: {error: "Something went wrong"}
    #     end
    # end

    private

    def convo_params
        params.require(:convo).permit(:title, :sender_id, :receiver_id)
    end


end
 