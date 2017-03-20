class RenameColumn < ActiveRecord::Migration[5.0]
  def change
    rename_column :follows, :following_id, :followee_id
  end
end
