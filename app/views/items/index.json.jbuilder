json.array! @items do |item|
        json.extract! item, :id, :title, :description, :available, :user_id, :category
    json.user do
        json.extract! item.user, :id, :first_name, :last_name, :birthday, :email
    end
    json.imageUrl rails_blob_url(item.image)
end 