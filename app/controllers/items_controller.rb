class ItemsController < ApplicationController

    skip_before_action :authorized, only: [:index]

    def index
        @items = Item.all
        render :index
    end

    def show
        @item = Item.find(params[:id]) 
        render :show
    end

    def create
        item = Item.new(item_params)
        if item.save
            render json: {item: item, imageUrl: rails_blob_url(item.image)} 
        else
            render json: {error: "Something went wrong"}
        end
    end

    def update
        item = Item.find(params[:id])
        if item.update(item_params)
            render json: {item: item, imageUrl: rails_blob_url(item.image)} 
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
        params.require(:item).permit(:title, :description, :available, :category, :image, :user_id)
    end

end
