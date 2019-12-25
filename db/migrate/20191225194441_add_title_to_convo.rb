class AddTitleToConvo < ActiveRecord::Migration[6.0]
  def change
    add_column :convos, :title, :string
  end
end
