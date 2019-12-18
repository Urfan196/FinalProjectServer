class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.string :title
      t.string :description
      t.boolean :available
      t.integer :user_id
      t.string :category

      t.timestamps
    end
  end
end
