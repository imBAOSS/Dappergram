class CreatePhotos < ActiveRecord::Migration[5.0]
  def change
    create_table :photos do |t|
      t.integer :user_id, null: false
      t.string :photo_url, null: false
      t.text :description
      t.timestamps
    end
    add_index :photos, :user_id
  end
end
