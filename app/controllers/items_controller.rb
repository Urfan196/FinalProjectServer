class ItemsController < ApplicationController

    skip_before_action :authorized, only: [:index]

    def index
        items = Item.all
        render :index
        # render json: items
    end

    def show
        item = Item.find(params[:id])
        render json: item
    end

    def create
        user_id = current_user.id
        item = Item.new(item_params)
        item.user_id = user_id
        if item.save
            render json: item
        else
            render json: {error: "Something went wrong"}
        end
    end

    def update
        item = Item.find(params[:id])
        if item.update(item_params)
            render json: item
        else
            render json: {error: "Something went wrong"}
        end
    end

    def destroy
        item = Item.find(params[:id])
        if item.destroy
            render json: {message: "Successfully deleted item"} 
        else
            render json: {error: "Something went wrong"}
        end
    end

    private

    def item_params
        params.require(:item).permit(:title, :description, :available, :category)
    end

end
