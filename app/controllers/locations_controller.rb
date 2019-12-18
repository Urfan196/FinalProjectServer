class LocationsController < ApplicationController

    skip_before_action :authorized, only: [:index]

    def index
        locations = Location.all
        render json: locations
    end

    def show
        location = Location.find(params[:id])
        render json: location
    end

    def create
        # user_id = current_user.id
        location = Location.new(location_params)
        # location.user_id = user_id
        if location.save
            render json: location
        else
            render json: {error: "Something went wrong"}
        end
    end

    def update
        location = Location.find(params[:id])
        if location.update(location_params)
            render json: location
        else
            render json: {error: "Something went wrong"}
        end
    end

    private

    def location_params
        params.require(:location).permit(:address, :latitude, :longitude, :user_id)
    end

end
