class CreateConvos < ActiveRecord::Migration[6.0]
  def change
    create_table :convos do |t|
      t.integer :sender_id
      t.string :title

      t.timestamps
    end
  end
end
