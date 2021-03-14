class CreateProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :products do |t|
      t.string :name
      t.integer :price
      t.string :itemdetails
      t.integer :department_id

      t.timestamps
    end
  end
end
