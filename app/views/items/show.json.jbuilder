json.extract! @item, :id, :title, :description, :available, :user_id, :category
json.imageUrl rails_blob_url(@item.image)