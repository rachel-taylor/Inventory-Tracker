# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# 5.times do 
#     Department.create(name: Faker::Commerce.department(max: 2, fixed_amount: true))
# end 

# 5.times do 
#     Product.create(name: Faker::Coffee.blend_name, itemdetails: Faker::TvShows::Simpsons.quote, price: Faker::Commerce.price)
# end 

departments = ['Housewares', 'Electronics', 'Lawn and Garden', 'Grocery']

departments.each do |d|
    Department.create(name: d)
end 

Product.all.each do |p|
    p.update(department: Department.all.sample(1)[0])
end 
