class NearLocationsController < ApplicationController
   
  def create
      @near_locations = Location.near(params[:coords], params[:distance])
      @locations = @near_locations.map do |loc|
        distance = loc.distance_from(params[:coords])
        user = User.find(loc.user_id)
        {location: LocationSerializer.new(loc), distance: distance, items: user.items}
      end 
      @filtered_locations = @locations.select{|obj| obj[:distance] > 0 }
      render json: @filtered_locations
    end

    private
   
    def near_locations_params
      params.require(:location).permit(:distance, :coords)
    end
  end