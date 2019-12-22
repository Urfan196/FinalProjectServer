class Location < ApplicationRecord
    geocoded_by :address
    after_validation :geocode, if: :address_changed?
    belongs_to :user


    def self.get_coordinates(address)
        results = Geocoder.search(address)
        results.first.coordinates
    end
    
    def near_locations(distance = 10, coord)
        Location.near(coord, distance) 
    end
end
