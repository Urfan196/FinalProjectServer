class LocationsController < ApplicationController

    skip_before_action :authorized, only: [:index]

    def index
        locations = Location.near_locations(params[:distance], params[:coord])
        render json: locations
    end
 
    def show
        location = Location.find(params[:id])
        render json: location
    end

    def create
        location = Location.new(location_params)
        location.latitude = Location.get_coordinates(params[:address])[0]
        location.longitude = Location.get_coordinates(params[:address])[1]
        if location.save
            render json: location
        else
            render json: {error: "Something went wrong"}
        end
    end

    def update
        location = Location.find(params[:id])
        location.latitude = Location.get_coordinates(params[:address])[0]
        location.longitude = Location.get_coordinates(params[:address])[1]
        if location.update(location_params)
            render json: location
        else
            render json: {error: "Something went wrong"}
        end
    end

    private

    def location_params
        params.require(:location).permit(:address, :user_id, :distance, :coord)
    end

end
