class ConvosController < ApplicationController

  skip_before_action :authorized, only: [:create, :index]

    def index
        convos = Convo.all
        render json: convos
    end

    # def show
    #     convo = Convo.find(params[:id])
    #     render json: convo
    # end

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
 
    # def create
    #     user_id = current_user.id
    #     convo = Convo.new(convo_params)
    #     convo.sender_id = user_id
    #     if convo.save
    #         render json: convo
    #     else
    #         render json: {error: "Something went wrong"}
    #     end
    # end

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
        params.require(:convo).permit(:title, :sender_id,)
    end


end
 :receiver_id